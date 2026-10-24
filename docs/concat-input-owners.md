# Two independent inputs in a horizontal composition

This policy is opt-in. Existing single-input, shared-input and layered records
retain their existing metadata and validation behavior.

A qualified source uses `explicit-source-owner-raw-inputs-v1` schema2 with
`nativeScopePolicy: "flat-two-owner-hconcat-v1"`. Its two descriptors retain
`/hconcat/0/data` and `/hconcat/1/data`, the original descriptor hash, independent
JSON filenames and exact typed ordered rows. Different original names remain
independent even if every value is equal. No parent data alias is introduced.

The exporter derives ownership from the accepted JavaScript AST: two immutable
child declarations, their `createData` imports and dataset IDs, and the actual
ids/child variables passed to `hconcat.programs`. Each recorded binding adds
`nativeChildId` and `sourcePointer`. It checks both independently scoped native
datasets in the current composition capture; the source verification must bind
that capture's SHA256. A merged parent dataset, missing/swapped child, changed
raw type/key/row order, stale capture or incompatible module fails before apply.

The distributed validator repeats the AST mapping and compares all retained
stage bindings. It also validates original named source references, resolved
values, independent raw hashes and code hashes. It does not infer ownership from
filenames or merge equal tables. Runtime rendering remains a separate release
gate; an export pass is not a release or pixel-equivalence claim.

## Recovery

Recover each family directory from Git or its verified research backup without
regenerating the original source, raw files or accepted module. Keep every file
listed in `metadata.json`, including both JSON inputs and `raw-inputs.json`.
`source.vl.json` retains original names and tables; `resolved-source.vl.json`
contains the corresponding two independently materialized data references.
Validate metadata/file hashes and `validate_public_raw_inputs` before rendering.
Rebuild disposable site output only after the complete family validates.
