#!/usr/bin/env python3
"""Stage completed, reviewed families without dropping or silently changing inputs."""
import argparse
import datetime
import hashlib
import json
import pathlib
import re
import shutil
import tempfile
import xml.etree.ElementTree as ET


def read(path):
    return json.loads(path.read_text())


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def dimensions(path):
    svg = ET.parse(path).getroot()
    if 'width' in svg.attrib and 'height' in svg.attrib:
        return [float(re.sub(r'px$', '', svg.attrib[key])) for key in ('width', 'height')]
    return [float(value) for value in svg.attrib['viewBox'].split()][2:]


def urls(value):
    found = []
    if isinstance(value, dict):
        data = value.get('data')
        if isinstance(data, dict) and isinstance(data.get('url'), str):
            found.append(data['url'])
        for child in value.values():
            found.extend(urls(child))
    elif isinstance(value, list):
        for child in value:
            found.extend(urls(child))
    return sorted(set(found))


def reference_policy(source_dir, staging, chart_id, files):
    """Preserve an explicitly approved reference environment and original history."""
    adoption_file = source_dir / 'source-reference-seed1-adoption.json'
    if not adoption_file.exists():
        return None
    adoption = read(adoption_file)
    policy = adoption['approvedReferenceRandomPolicy']
    require(adoption['sourceSha256'] == digest(files['source.vl.json'])
            and adoption['dataSha256'] == digest(files['data.json']),
            f'{chart_id}: reference policy source/data mismatch')
    require(adoption['allOriginalAuthoredSourceAndDataBytesUnchanged'] is True
            and policy['sourceSpecAndRawRowsUnchanged'] is True
            and policy['reviewer'] == 'codex' and policy['seed'] == 1
            and policy['sourceSha256'] == adoption['sourceSha256']
            and isinstance(policy['expectedDraws'], int) and policy['expectedDraws'] > 0
            and re.fullmatch(r'[a-f0-9]{64}', policy['approvalRecordSha256']),
            f'{chart_id}: missing reviewed reference environment')
    archived = adoption['archivedOriginalReference']
    reference_names = {'chart.svg', 'chart.png', 'compiled.vega.json', 'initial-state.json',
                       'reference-evidence.json', 'render.json', 'source.vl.json'}
    require(len(archived) == 7 and len({row['path'] for row in archived}) == 7,
            f'{chart_id}: incomplete unseeded reference history')
    require({pathlib.PurePosixPath(row['path']).name for row in archived} == reference_names,
            f'{chart_id}: missing original reference file')
    require(len(adoption['newReference']) == 7
            and {pathlib.PurePosixPath(row['path']).name for row in adoption['newReference']} == reference_names,
            f'{chart_id}: incomplete adopted reference history')
    history = []
    for row in archived:
        relative = pathlib.PurePosixPath(row['path'])
        require(len(relative.parts) == 2 and relative.parts[0] == 'reference-before-approved-seed1'
                and relative.name not in ('.', '..'), f'{chart_id}: unsafe reference history path')
        require(digest(source_dir / row['path']) == row['sha256'],
                f'{chart_id}: original unseeded reference changed')
        history.append(dict(name=relative.name, sha256=row['sha256']))
    for row in adoption['newReference']:
        relative = pathlib.PurePosixPath(row['path'])
        require(len(relative.parts) == 2 and relative.parts[0] == 'reference',
                f'{chart_id}: unsafe adopted reference path')
        require(digest(source_dir / row['path']) == row['sha256'],
                f'{chart_id}: adopted reference changed')
    require(any(row['path'] == 'reference/chart.svg' for row in adoption['newReference']),
            f'{chart_id}: adopted reference SVG proof missing')
    record = dict(schemaVersion=1, policy=policy['policy'],
                  settingOrigin='approved-reference-rendering-environment',
                  originalSourceAuthoredSeed=False, seed=policy['seed'],
                  expectedDraws=policy['expectedDraws'],
                  sourceSha256=adoption['sourceSha256'], dataSha256=adoption['dataSha256'],
                  originalSourceAndDataUnchanged=True,
                  adoptionRecordSha256=digest(adoption_file),
                  approvalRecordSha256=policy['approvalRecordSha256'],
                  historicalUnseededReference=history,
                  historicalUnseededSvg='vega-lite-unseeded.svg')
    record_file = staging / (chart_id + '-reference-policy.json')
    save(record_file, record)
    files['source-reference-policy.json'] = record_file
    files['vega-lite-unseeded.svg'] = source_dir / 'reference-before-approved-seed1/chart.svg'
    return dict(metadata='source-reference-policy.json', environmentSeed=1,
                originalSourceAuthoredSeed=False, historicalUnseededSvg='vega-lite-unseeded.svg')


def sync(root, workspace, apply=False):
    manifest_path = root / 'manifest.json'
    manifest = read(manifest_path)
    version = read(root / 'package.json')['dependencies']['ggaction']
    require(re.fullmatch(r'\d+\.\d+\.\d+', version), 'An exact released dependency is required')
    config = read(workspace / 'experiments/glm-thousand-chart-adaptive/config.json')
    base = workspace / 'artifacts/v12-glm-thousand-chart-adaptive'
    existing = {chart['id']: chart for chart in manifest['charts']}
    require(len(existing) == manifest['chartCount'], 'Existing manifest has duplicate or missing families')
    # Verify the distributed input before preparing any replacement.
    for chart_id in existing:
        require(re.fullmatch(r'vl_\d{4}', chart_id), 'Invalid existing source id')
        destination = root / 'charts' / chart_id
        metadata = read(destination / 'metadata.json')
        require(metadata['id'] == chart_id, 'Existing metadata source mismatch')
        for name, proof in metadata['files'].items():
            require(pathlib.Path(name).name == name, 'Existing file path escapes its family')
            file = destination / name
            require(digest(file) == proof['sha256'] and file.stat().st_size == proof['bytes'],
                    f'Existing distributed file changed: {chart_id}/{name}')
    validation = root / '.validation'
    validation.mkdir(exist_ok=True)
    staging = pathlib.Path(tempfile.mkdtemp(prefix='dataset-sync-', dir=validation))
    charts, added, refreshed = [], [], []
    programs = 0
    for chart_id in sorted(set(config['sourceIds'])):
        require(re.fullmatch(r'vl_\d{4}', chart_id), 'Invalid source id')
        source_dir = base / chart_id
        completion_file = source_dir / 'completion.json'
        if not completion_file.exists() or read(completion_file).get('status') != 'completed':
            continue
        completion, accepted = read(completion_file), read(source_dir / 'accepted.json')
        levels = sorted(accepted, key=lambda level: int(level[1:]))
        require(levels == ['G' + str(index + 1) for index in range(len(levels))]
                and 1 <= len(levels) <= 8, f'{chart_id}: incomplete stage sequence')
        require(completion['stageCount'] == len(levels), f'{chart_id}: stage count mismatch')
        spec = read(source_dir / 'source.vl.json')
        files = {name: source_dir / name for name in ('source.vl.json', 'data.json')}
        resolved = source_dir / 'resolved-source.vl.json'
        if not resolved.exists():
            require(not urls(spec), f'{chart_id}: unresolved source resources')
            resolved = source_dir / 'source.vl.json'
        files['resolved-source.vl.json'] = resolved
        stages, runtimes, unrecorded_runtimes = [], set(), []
        for level in levels:
            item = accepted[level]
            require(re.fullmatch(r'attempt-\d+', item['attempt']), f'{chart_id}: invalid attempt path')
            attempt = source_dir / level / item['attempt']
            code = attempt / 'candidate.gg.mjs'
            code_hash = digest(code)
            require(code_hash == item['codeSha256'], f'{chart_id}/{level}: accepted code hash mismatch')
            require(digest(attempt / 'data.json') == digest(source_dir / 'data.json'),
                    f'{chart_id}/{level}: different stage data')
            verification, review = read(attempt / 'verification.json'), read(attempt / 'code-review.json')
            require(verification['status'] == 'pass' and all(check['pass'] for check in verification['checks']),
                    f'{chart_id}/{level}: source verification did not pass')
            require(verification['codeSha256'] == code_hash and review['codeSha256'] == code_hash,
                    f'{chart_id}/{level}: stale verification or review')
            require(review['reviewer'] == 'codex' and review['status'] == 'reviewed',
                    f'{chart_id}/{level}: code review not approved')
            require(verification['sourceSha256'] == digest(source_dir / 'source.vl.json'),
                    f'{chart_id}/{level}: stale source verification')
            require(digest(attempt / 'render/chart.svg') == item['svgSha256'] == verification['svgSha256'],
                    f'{chart_id}/{level}: stale rendered SVG')
            require(item['svgSha256'] == accepted['G1']['svgSha256'], f'{chart_id}: unequal family stages')
            imports = re.findall(r'(?:from\s*|import\s*)["\']([^"\']+)["\']', code.read_text())
            require(sorted(imports) == ['./data.json', 'ggaction'], f'{chart_id}/{level}: unexpected dependency')
            name = level + '.gg.mjs'
            files[name] = code
            stages.append(dict(level=level, code=name, sha256=code_hash,
                               actions=item.get('actions'), topOptions=item.get('topOptions')))
            recorded_runtime = verification.get('runtimeCommit')
            if recorded_runtime is not None:
                require(re.fullmatch(r'[a-f0-9]{40}', recorded_runtime), f'{chart_id}/{level}: invalid runtime commit')
                runtimes.add(recorded_runtime)
            else:
                unrecorded_runtimes.append(level)
        require(completion['lastCodeSha256'] == accepted[levels[-1]]['codeSha256'],
                f'{chart_id}: stale completion')
        files['vega-lite.svg'] = source_dir / 'reference/chart.svg'
        files['ggaction.svg'] = source_dir / 'G1' / accepted['G1']['attempt'] / 'render/chart.svg'
        policy = reference_policy(source_dir, staging, chart_id, files)
        destination = root / 'charts' / chart_id
        incoming_proofs = {name: dict(sha256=digest(file), bytes=file.stat().st_size) for name, file in files.items()}
        old = read(destination / 'metadata.json') if chart_id in existing else None
        if old:
            for name in ('source.vl.json', 'resolved-source.vl.json', 'data.json', 'vega-lite.svg'):
                require(old['files'][name] == incoming_proofs[name],
                        f'{chart_id}: original input changed: {name}; review separately')
            if old.get('referencePolicy'):
                require(policy == old['referencePolicy'], f'{chart_id}: reference policy was dropped or changed')
                for name in ('source-reference-policy.json', 'vega-lite-unseeded.svg'):
                    require(old['files'][name] == incoming_proofs[name],
                            f'{chart_id}: original reference provenance changed: {name}')
        changed = old is None or old['files'] != incoming_proofs or old['stages'] != stages
        if changed:
            prepared = staging / chart_id
            prepared.mkdir()
            for name, file in files.items():
                shutil.copyfile(file, prepared / name)
            notes = {key: re.sub(r'/Users/[^\s"\']+', '[local path]', completion[key])
                     for key in ('reason', 'explanation', 'correction') if isinstance(completion.get(key), str)}
            metadata = dict(id=chart_id, status='completed', stages=stages, sourceUrls=urls(spec),
                            notes=notes, historicalRuntimeCommits=sorted(runtimes),
                            historicalVerificationRuntimeUnrecordedStages=unrecorded_runtimes, files=incoming_proofs)
            if policy:
                metadata['referencePolicy'] = policy
            save(prepared / 'metadata.json', metadata)
            (refreshed if old else added).append(chart_id)
        programs += len(stages)
        chart_entry = dict(existing.get(chart_id, {}))
        incoming_entry = dict(id=chart_id, vegaLite=f'charts/{chart_id}/vega-lite.svg',
                              ggaction=f'charts/{chart_id}/ggaction.svg',
                              dimensions=dict(vegaLite=dimensions(files['vega-lite.svg']),
                                              ggaction=dimensions(files['ggaction.svg'])),
                              stageCount=len(stages))
        for key, value in incoming_entry.items():
            if key not in chart_entry or chart_entry[key] != value:
                chart_entry[key] = value
        charts.append(chart_entry)
    require(existing.keys() <= {chart['id'] for chart in charts}, 'Refusing to drop a distributed family')
    runtime = dict(manifest['runtime'])
    runtime.update(version=version, status='pending-current-runtime-validation')
    updated = dict(manifest, chartCount=len(charts), programCount=programs, runtime=runtime, charts=charts)
    report = dict(status='staged', apply=apply, charts=len(charts), programs=programs,
                  added=added, refreshed=refreshed, originalInputsPreserved=True,
                  currentRuntimeValidationPending=True, staging=str(staging.relative_to(root)),
                  previousManifestSha256=digest(manifest_path), createdAt=datetime.datetime.now(datetime.timezone.utc).isoformat())
    save(staging / 'manifest.json', updated)
    save(staging / 'sync-report.json', report)
    if apply:
        for chart_id in added + refreshed:
            destination = root / 'charts' / chart_id
            if destination.exists():
                shutil.copytree(destination, staging / (chart_id + '-before'))
                shutil.rmtree(destination)
            shutil.copytree(staging / chart_id, destination)
        shutil.copyfile(staging / 'manifest.json', manifest_path)
        report['status'] = 'applied-pending-runtime-validation'
        save(root / 'reports/dataset-sync.json', report)
    return report


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('workspace', type=pathlib.Path)
    parser.add_argument('--apply', action='store_true')
    arguments = parser.parse_args()
    print(json.dumps(sync(pathlib.Path(__file__).resolve().parents[1], arguments.workspace.resolve(), arguments.apply)))
