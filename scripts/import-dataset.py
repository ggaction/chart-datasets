#!/usr/bin/env python3
"""Import verified families through the same lossless staging path as synchronization."""
import argparse
import importlib.util
import json
import pathlib

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('workspace', type=pathlib.Path)
args = parser.parse_args()
root = pathlib.Path(__file__).resolve().parents[1]
if (root / 'charts').exists() and any((root / 'charts').iterdir()):
    raise RuntimeError('Initial import refuses to overwrite existing chart files')
if (root / 'manifest.json').exists():
    raise RuntimeError('Initial import requires an empty manifest; use sync-dataset.py to update an existing dataset')
spec = importlib.util.spec_from_file_location('dataset_sync', root / 'scripts/sync-dataset.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
version = json.loads((root / 'package.json').read_text())['dependencies']['ggaction']
(root / 'manifest.json').write_text(json.dumps(dict(schemaVersion=1, chartCount=0, programCount=0,
    runtime=dict(package='ggaction', version=version, status='pending-current-runtime-validation'), charts=[]))+'\n')
try:
    print(json.dumps(module.sync(root, args.workspace.resolve(), apply=True)))
except Exception:
    # A rejected import must remain retryable with the same original inputs.
    (root / 'manifest.json').unlink()
    raise
