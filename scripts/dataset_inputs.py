"""Lossless frozen input and explicit authoring epoch checks for dataset export."""
import hashlib
import json
import pathlib
import re
import subprocess


def read(p):
    return json.loads(p.read_text(), parse_int=lambda text: -0.0 if text == '-0' else int(text))


def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()


def require(ok, message):
    if not ok:
        raise RuntimeError(message)


def ordered(value):
    # Match JSON's JavaScript number semantics, including exact IEEE signed zero.
    def typed(v):
        if v is None or isinstance(v, (str, bool)):
            return [type(v).__name__, v]
        if isinstance(v, (int, float)):
            return ['number', float(v).hex()]
        if isinstance(v, list):
            return ['array', [typed(x) for x in v]]
        require(isinstance(v, dict), 'Non-JSON raw value')
        return ['object', [[k, typed(x)] for k, x in v.items()]]
    return json.dumps(typed(value), ensure_ascii=False, separators=(',', ':'), allow_nan=False)


def pointer(value, path):
    for token in path.split('/')[1:]:
        token = token.replace('~1', '/').replace('~0', '~')
        value = value[int(token)] if isinstance(value, list) else value[token]
    return value


def contained(root, relative):
    p = pathlib.PurePosixPath(relative)
    require(not p.is_absolute() and '..' not in p.parts and '\\' not in relative,
            'Unsafe workspace evidence path')
    result = root / relative
    require(result.resolve().is_relative_to(root.resolve()), 'Workspace evidence escaped root')
    return result


def source_family(workspace, chart_id, base):
    registry_file = workspace / 'experiments/glm-thousand-chart-adaptive/requalified-source-families-v2.json'
    if not registry_file.exists():
        return base / chart_id, None
    registry = read(registry_file)
    require(registry['schemaVersion'] == 2, 'Unknown authoring epoch registry')
    parent = registry['parent']
    require(digest(contained(workspace, parent['path'])) == parent['sha256'], 'Epoch registry parent changed')
    epoch = registry['sources'].get(chart_id)
    if epoch is None:
        return base / chart_id, None
    require(epoch['successful'] is True and epoch['sourceOriginalAndRawUnchanged'] is True
            and epoch['exportAt1413MustResolveThisExplicitEpoch'] is True, 'Unapproved authoring epoch')
    selected = contained(workspace, epoch['family'])
    historical = contained(workspace, epoch['historicalFamily'])
    require(selected.name == historical.name == chart_id
            and selected.parent == contained(workspace, epoch['artifactRoot'])
            and historical == base / chart_id and selected != historical, 'Epoch family ID mismatch')
    require(digest(selected / 'contract.json') == epoch['currentContractSha256']
            and digest(historical / 'contract.json') == epoch['historicalContractSha256'], 'Epoch contract changed')
    require(digest(contained(workspace, epoch['completionSummary'])) == epoch['completionSummarySha256'],
            'Epoch completion summary changed')
    for name in ['source.vl.json', 'resolved-source.vl.json', 'data.json']:
        require((selected / name).read_bytes() == (historical / name).read_bytes(),
                f'{chart_id}: original input changed across authoring epochs: {name}')
    require(read(selected / 'completion.json')['status'] == 'completed', 'Epoch is not complete')
    return selected, dict(schemaVersion=1, selection='explicit-reviewed-authoring-epoch',
                         runtimeCommit=epoch['runtimeCommit'],
                         currentContractSha256=epoch['currentContractSha256'],
                         historicalContractSha256=epoch['historicalContractSha256'],
                         completionSummarySha256=epoch['completionSummarySha256'],
                         registrySha256=digest(registry_file), originalInputsUnchanged=True)


def raw_inputs(family, source, resolved):
    resolution_file = family / 'data-resolution.json'
    resolution = read(resolution_file) if resolution_file.exists() else {}
    if resolution.get('kind') in ('named-independent-layer-owners-v1', 'root-named-independent-layer-owners-v1'):
        return named_layer_inputs(family, source, resolved, resolution)
    descriptors = resolution.get('dataDescriptors')
    files = {'data.json': family / 'data.json'}
    if descriptors is None:
        require(not list(family.glob('data-lookup-*.json')), 'Raw reference files lack source descriptors')
        return files, None
    require(resolution.get('schemaVersion') == 2 and resolution.get('kind') == 'lookup-multi-input-v1',
            'Unknown multi-resource resolution')
    require(resolution['sourceSha256'] == digest(family / 'source.vl.json')
            and resolution['resolvedSourceSha256'] == digest(resolved)
            and resolution['dataSha256'] == digest(family / 'data.json'), 'Stale multi-resource resolution')
    require(isinstance(descriptors, list) and len(descriptors) >= 2, 'Incomplete raw descriptors')
    spec, resolved_spec = source, read(resolved)
    expected = {'/data'} | {f'/transform/{i}/from/data' for i, transform in enumerate(spec.get('transform', []))
                            if isinstance(transform, dict) and 'lookup' in transform and 'data' in transform.get('from', {})}
    seen, names, public, total = set(), set(), [], 0
    for descriptor in descriptors:
        name, ptr = descriptor['file'], descriptor['pointer']
        require(re.fullmatch(r'data(?:-lookup-\d+)?\.json', name) and '/' not in name,
                'Unsafe raw file name')
        require(ptr in expected and ptr not in seen and name not in names, 'Unknown or duplicate raw descriptor')
        require((ptr == '/data') == (name == 'data.json'), 'Primary source descriptor swapped')
        seen.add(ptr)
        names.add(name)
        file = family / name
        require(file.is_file() and not file.is_symlink(), 'Missing or linked raw input: ' + name)
        require(digest(file) == descriptor['dataSha256'], 'Raw descriptor hash mismatch: ' + name)
        rows = read(file)
        require(isinstance(rows, list) and len(rows) == descriptor['rowCount'], 'Raw descriptor row count mismatch')
        require(ordered(pointer(resolved_spec, ptr)['values']) == ordered(rows),
                'Resolved source table mismatch: ' + name)
        original = pointer(spec, ptr)
        resource = descriptor.get('resource')
        if resource is not None:
            require(descriptor['kind'] == 'cached-url' and original.get('url') == resource['requestedUrl'],
                    'Source resource identity mismatch')
            require(re.fullmatch(r'[a-f0-9]{64}', resource['sha256']) is not None, 'Invalid resource body hash')
        elif 'values' in original:
            require(ordered(original['values']) == ordered(rows), 'Original inline table changed')
        elif 'name' in original:
            require(ordered(spec['datasets'][original['name']]) == ordered(rows), 'Original named table changed')
        else:
            raise RuntimeError('Raw source descriptor lacks original input authority')
        public.append(dict(pointer=ptr, file=name, sha256=digest(file), bytes=file.stat().st_size,
                           rowCount=len(rows), kind=descriptor['kind'], format=descriptor.get('format'),
                           **({'resource': {k: resource[k] for k in ('requestedUrl', 'resolvedUrl', 'sha256')}}
                              if resource else {})))
        files[name] = file
        total += len(rows)
    require(seen == expected and total == resolution['totalRows'], 'Incomplete original source descriptor set')
    require({p.name for p in family.glob('data-lookup-*.json')} == names - {'data.json'},
            'Unmanifested raw reference file')
    return files, dict(schemaVersion=1, sourceSha256=digest(family / 'source.vl.json'),
                       resolvedSourceSha256=digest(resolved), resolutionSha256=digest(resolution_file),
                       primary='data.json', descriptors=public)


def audit_stages(script_directory, stages, raw_files, strict_bindings=True):
    request = dict(rawFiles=sorted(raw_files), stages=stages, strictBindings=strict_bindings)
    result = subprocess.run(['node', str(script_directory / 'audit-module-inputs.mjs')],
                            input=json.dumps(request), capture_output=True, text=True, check=False)
    require(result.returncode == 0, 'Module input binding rejected: ' + result.stderr.strip())
    audits = json.loads(result.stdout)['stages']
    require(len(audits) == len(stages), 'Missing module input audit')
    for stage, audit in zip(stages, audits):
        require(stage['level'] == audit['level'] and digest(pathlib.Path(stage['path'])) == audit['codeSha256'],
                'Stale module input binding')
    return audits


def validate_public_raw_inputs(directory, metadata):
    """Check a distributed multi-table record without trusting local workspace paths."""
    file = directory / 'raw-inputs.json'
    reference_files = {name for name in metadata['files'] if is_raw_file(name) and name != 'data.json'}
    if not file.exists():
        require(not reference_files, 'Distributed reference tables lack a raw-input manifest')
        return
    require('raw-inputs.json' in metadata['files'], 'Uninventoried raw-input manifest')
    record = read(file)
    require(record['schemaVersion'] == 1 and record['primary'] == 'data.json'
            and record['sourceSha256'] == digest(directory / 'source.vl.json')
            and record['resolvedSourceSha256'] == digest(directory / 'resolved-source.vl.json'),
            'Distributed raw-input source binding changed')
    source, resolved = read(directory / 'source.vl.json'), read(directory / 'resolved-source.vl.json')
    seen, pointers = set(), set()
    for row in record['descriptors']:
        name = row['file']
        require(is_raw_file(name) and name not in seen,
                'Unsafe or duplicate distributed raw input')
        require(row['pointer'] not in pointers, 'Duplicate distributed source descriptor')
        pointers.add(row['pointer'])
        seen.add(name)
        require(not (directory / name).is_symlink() and name in metadata['files'] and row['sha256'] == digest(directory / name)
                and row['bytes'] == (directory / name).stat().st_size, 'Distributed raw input changed')
        rows = read(directory / name)
        require(isinstance(rows, list) and len(rows) == row['rowCount']
                and ordered(pointer(resolved, row['pointer'])['values']) == ordered(rows),
                'Distributed resolved source table changed')
        original = pointer(source, row['pointer'])
        if row.get('resource'):
            require(original.get('url') == row['resource']['requestedUrl'], 'Distributed source URL changed')
        elif 'values' in original:
            require(ordered(original['values']) == ordered(rows), 'Distributed inline source table changed')
        elif 'name' in original:
            require(ordered(source['datasets'][original['name']]) == ordered(rows), 'Distributed named source table changed')
        else:
            raise RuntimeError('Unbound distributed source table')
    expected = ({f'/layer/{i}/data' for i in range(len(source['layer']))}
                if record.get('kind') == 'named-layer-raw-inputs-v1' else
                {'/data'} | {f'/transform/{i}/from/data' for i, transform in enumerate(source.get('transform', []))
                            if isinstance(transform, dict) and 'lookup' in transform and 'data' in transform.get('from', {})})
    require(pointers == expected and seen == reference_files | {'data.json'}, 'Incomplete distributed raw descriptor set')
    stages = [dict(level=row['level'], path=str(directory / row['code'])) for row in metadata['stages']]
    actual = audit_stages(pathlib.Path(__file__).resolve().parent, stages, seen)
    require(len(actual) == len(record['stages']), 'Missing distributed stage input binding')
    for audit, retained in zip(actual, record['stages']):
        require(retained.get('actualNativeRawDatasetBindingsExact') is True
                and audit == {k: v for k, v in retained.items() if k != 'actualNativeRawDatasetBindingsExact'},
                'Distributed module/raw-table binding changed')


def is_raw_file(name):
    return bool(re.fullmatch(r'(?:data(?:-lookup-\d+)?|[a-z][a-z0-9-]*-data)\.json', name))


def named_layer_inputs(family, source, resolved, resolution):
    """Qualify exact original named layer owners; never infer their native dataset IDs."""
    contract = read(family / 'contract.json')
    profile = read(family / 'source-layer-profile.json')
    require(profile['sourceSha256'] == contract['sourceSha256'] == digest(family / 'source.vl.json'),
            'Named-layer source authority changed')
    require(ordered(profile) == ordered(contract['sourceLayerProfile']), 'Named-layer profile changed')
    require(ordered(resolution) == ordered(contract['dataResolution']), 'Named-layer resolution changed')
    owners = resolution['owners']
    require(isinstance(source.get('layer'), list) and len(owners) == len(source['layer'])
            and len(owners) >= 2, 'Incomplete named-layer owners')
    source_datasets = source.get('datasets', {})
    resolved_source = read(resolved)
    candidates = {p.name: p for p in family.iterdir() if is_raw_file(p.name)}
    require('data.json' in candidates, 'Missing primary named-layer table')
    decoded = {name: read(file) for name, file in candidates.items()}
    descriptors, used = [], set()
    for index, owner in enumerate(owners):
        ptr = f'/layer/{index}/data'
        original = pointer(source, ptr)
        require(owner['pointer'] == ptr and owner['sourceLayerIndex'] == index
                and original == {'name': owner['name']}
                and owner['datasetPointer'] == '/datasets/' + owner['name'], 'Named source layer owner changed')
        rows = source_datasets[owner['name']]
        require(isinstance(rows, list) and len(rows) == owner['rowCount']
                and ordered(pointer(resolved_source, ptr)['values']) == ordered(rows),
                'Named-layer resolved raw rows changed')
        matches = [name for name, values in decoded.items() if ordered(values) == ordered(rows)]
        require(len(matches) == 1, 'Named-layer raw file ownership is missing or ambiguous')
        name = matches[0]
        require(name not in used, 'Named-layer files cannot silently merge source owners')
        used.add(name)
        descriptors.append(dict(pointer=ptr, file=name, sha256=digest(candidates[name]),
                                bytes=candidates[name].stat().st_size, rowCount=len(rows),
                                kind='named-inline', originalDatasetName=owner['name']))
    require(used == set(candidates), 'Unmanifested named-layer raw file')
    if source.get('data') is not None:
        require(source['data'] == pointer(source, '/layer/0/data'), 'Unexpected named-layer root alias')
    require(descriptors[0]['file'] == 'data.json' and sum(d['rowCount'] for d in descriptors) == resolution['totalRawRows'],
            'Named-layer primary or total raw rows changed')
    return candidates, dict(schemaVersion=1, kind='named-layer-raw-inputs-v1', primary='data.json',
                            sourceSha256=digest(family / 'source.vl.json'), resolvedSourceSha256=digest(resolved),
                            resolutionSha256=digest(family / 'data-resolution.json'),
                            profileSha256=digest(family / 'source-layer-profile.json'),
                            **({'rootSourceAlias': '/layer/0/data'} if source.get('data') is not None else {}),
                            descriptors=descriptors)
