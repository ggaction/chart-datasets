# Chart datasets

[Open the comparison viewer](https://ggaction.github.io/chart-datasets/)

A minimal side-by-side viewer for 1,336 completed Vega-Lite → ggaction chart
translations. Vega-Lite appears on the left and ggaction on the right. Use the
slider, arrow buttons, keyboard arrows, Home or End. Link directly to a chart
with a hash such as [#vl_1180](https://ggaction.github.io/chart-datasets/#vl_1180).

## Contents

Each `charts/vl_####/` directory contains:

| File | Contents |
| --- | --- |
| `source.vl.json` | Original source specification, unchanged |
| `resolved-source.vl.json` | Frozen self-contained source specification |
| `data.json` | Frozen primary input rows, unchanged |
| `data-lookup-*.json`, `*-data.json` | Additional original lookup or named-layer tables, when present |
| `raw-inputs.json` | Original descriptor ownership, file hashes and code-to-dataset bindings for multi-table sources |
| `source-epoch.json` | Explicit reviewed authoring epoch, when a source was requalified |
| `G1.gg.mjs` … `G8.gg.mjs` | Accepted high-to-low-level action programs |
| `vega-lite.svg`, `ggaction.svg` | Original and canonical G1 renderings |
| `metadata.json` | SHA-256 inventory, source URLs and translation notes |

When several layers explicitly reference the same named original table, raw-input schema version2 records each source pointer and an `aliasOf` link to its first owner. The original rows are stored once; `distinctRawRows` and `sourceOwnerRows` distinguish physical tables from repeated layer references. Equal-valued tables with different original names are never merged.

Some confidence-interval sources use an approved seeded reference-rendering
environment for reproducibility. For these families, `source-reference-policy.json`
records the environment seed and hashes of the seven original unseeded reference
files, and `vega-lite-unseeded.svg` preserves the earlier SVG. The seed is not an
authored Vega-Lite property; the original specification and data remain unchanged.
Incremental synchronization verifies and preserves this provenance when those
families are imported.

The repository includes 9,766 raw accepted programs. Families have up to eight
stages; the historical baseline retains its original accepted stages, including
stages omitted by a later editorial curation. A chart is included only when
its family was marked completed. Held and incomplete families remain excluded. New chart translation has stopped at the human-approved 1,336-family cutoff.
This release adds 123 families while preserving every previously published original input.

Stages express the same ggaction result through progressively smaller actions.
The viewer shows one canonical output per family, not eight duplicate images.
Charts preserve their SVG aspect ratios and use one shared display scale per
pair. Small screens scale the pair down without rewriting chart sizes.

## Run locally

Requires Node.js 20+ and Python 3.

```sh
npm ci
npm run validate
npm run serve
```

Open `http://127.0.0.1:4317`. Serving avoids browser restrictions on local
`fetch`. Serving the pre-rendered viewer requires no install. Input validation for multi-table families also uses the pinned Acorn parser from `npm ci`.

`npm run build` produces `_site/` with only HTML, CSS, JavaScript, a manifest
and the chart SVGs. GitHub Actions deploys that directory to GitHub Pages.
Large source specifications and raw data remain available in this repository.

## Runtime and verification

The synchronized runtime is ggaction **0.0.21**, pinned in `runtime-lock.json` and the lockfile.
The tagged artifact and npm archive match exactly. All **1,213 families / 8,788 programs**
match their frozen browser SVGs; see [the runtime report](reports/runtime-sync.json)
and [registry proof](reports/registry-proof.json). The official npm installation contains
the same 591 files as the verified artifact. The [0.0.21 release](https://github.com/ggaction/ggaction/releases/tag/v0.0.21)
and [published documentation](https://ggaction.github.io/ggaction/) are synchronized;
[documentation provenance](reports/documentation-release.json) records their contract identity.
Install dependencies and the pinned Chromium build, then render a family with:

```sh
npm ci
npx playwright install chromium
npm run render -- vl_1180
```

This executes the distributed source modules against the pinned ggaction
package in Chromium (UTC, en-US) and checks same-family output equality.
`--all` checks every accepted family; `--node` selects the diagnostic Node
backend, whose number formatting can differ from the frozen browser output.
Existing SVGs remain the frozen
translation evidence. A full release synchronization report records compatibility
and output differences separately.

For a release check, download the `ggaction-vVERSION` artifact from the tagged
release workflow and run:

```sh
node scripts/verify-runtime.mjs /path/to/candidate.json
```

The script verifies the tarball digests, installs that exact artifact in an
isolated local directory, executes every accepted program and writes
`reports/runtime-sync.json` only when all families match the frozen outputs.

For an unpublished candidate, pass an ignored output path so the published
runtime report remains unchanged:

```sh
node scripts/verify-runtime.mjs /path/to/candidate.json .validation/candidate-runtime.json
```

Renderer validation rejects a failed child, stale chunk, missing or duplicate
family, and mismatched result order. Runtime sweeps construct one chart at a time
and remove stale aggregate reports before starting. A valid fresh chunk reporting explicit rendering differences is retained while later chunks run; the full run still fails. Crashes, signals and malformed or contradictory chunks fail closed. `npm test` exercises those failure cases
before the Pages build.

To preview an incremental import from the translation workspace:

```sh
python3 scripts/sync-dataset.py /path/to/translation-workspace
```

The preview stages completed, reviewed families and checks all existing file hashes.
It preserves every independently frozen source table, including an unimported
reference snapshot that happens to equal another table. Original module bytes and
import paths stay unchanged. For multi-table sources, an Acorn syntax-tree audit
binds each `createData` call to its imported file and literal dataset ID (or the
public default `data`); the recorded native dataset must contain the exact typed
rows in the same key and row order, including signed zero. File names never
supply dataset IDs. The generated `raw-inputs.json` contains no local host paths.

Explicit requalification records select a source's current completed authoring
epoch while preserving its historical contract. Contract and summary hashes and
unchanged original inputs are checked before exporting an epoch. Historical
single-table modules retain their recorded validation policy; the new strict
multi-table binding rule is not retroactively used to rewrite their code.
Unknown, missing, swapped, path-escaping or modified raw inputs fail before apply.
Add `--apply` to add new families and refresh verified corrections. The importer
rejects changed original inputs, stale reviews, unequal stages and removal of an
existing family. Previous versions of refreshed families remain in the ignored
staging directory and Git history. Applied data stays marked pending until a full
runtime compatibility check succeeds; importing alone is not release verification.
The [next-batch exporter preflight](reports/batch200-lossless-export-preflight.json)
records the complete preview and focused browser replay; its local candidates are
separate from the published cohort above.

Completed means the translations passed the recorded rendering, structure,
data and geometry policy. It does not claim pixel-perfect equivalence to the
source. Source-specific approximations and historical corrections remain in
per-chart metadata. The latest update adds seven completed families while preserving every original
source, frozen dataset and previously distributed SVG. It also preserves the
original unseeded SVGs for five sources with approved reference environments.
[Update evidence](reports/dataset-sync.json) and the
[previous release records](reports/previous-release-0.0.20.json) preserve that history.

See [DATA_SOURCES.md](DATA_SOURCES.md) for attribution and licensing.

Explicit URL and inline owners in layered sources use `explicit-source-owner-raw-inputs-v1` (schema 2). Each descriptor binds its original source pointer, frozen rows, file hash, and original descriptor hash. Identical original descriptors may explicitly alias one frozen file; unrelated owners cannot. Empty original root tables are retained even when only local tables are used by marks. When a reviewed resolved analysis root aliases the first layer, `resolvedContextAliasOf` records that exact link while the separate original empty table remains empty. Export and public validation reject missing owners, changed rows, ambiguous file matches, and invalid aliases. Accepted module bytes and historical authoring runtimes remain unchanged.
