# Chart datasets

[Open the comparison viewer](https://ggaction.github.io/chart-datasets/)

A minimal side-by-side viewer for 1,206 completed Vega-Lite → ggaction chart
translations. Vega-Lite appears on the left and ggaction on the right. Use the
slider, arrow buttons, keyboard arrows, Home or End. Link directly to a chart
with a hash such as [#vl_1180](https://ggaction.github.io/chart-datasets/#vl_1180).

## Contents

Each `charts/vl_####/` directory contains:

| File | Contents |
| --- | --- |
| `source.vl.json` | Original source specification, unchanged |
| `resolved-source.vl.json` | Frozen self-contained source specification |
| `data.json` | Frozen input rows, unchanged |
| `G1.gg.mjs` … `G8.gg.mjs` | Accepted high-to-low-level action programs |
| `vega-lite.svg`, `ggaction.svg` | Original and canonical G1 renderings |
| `metadata.json` | SHA-256 inventory, source URLs and translation notes |

Some confidence-interval sources use an approved seeded reference-rendering
environment for reproducibility. For these families, `source-reference-policy.json`
records the environment seed and hashes of the seven original unseeded reference
files, and `vega-lite-unseeded.svg` preserves the earlier SVG. The seed is not an
authored Vega-Lite property; the original specification and data remain unchanged.
Incremental synchronization verifies and preserves this provenance when those
families are imported.

The repository includes 8,732 raw accepted programs. Families have up to eight
stages; the historical baseline retains its original accepted stages, including
stages omitted by a later editorial curation. A chart is included only when
its family was marked completed. Held and incomplete families remain excluded. Translation continues sequentially
toward 1,500 completed families; this viewer contains only the verified cohort.

Stages express the same ggaction result through progressively smaller actions.
The viewer shows one canonical output per family, not eight duplicate images.
Charts preserve their SVG aspect ratios and use one shared display scale per
pair. Small screens scale the pair down without rewriting chart sizes.

## Run locally

Requires Node.js 20+ and Python 3.

```sh
npm run validate
npm run serve
```

Open `http://127.0.0.1:4317`. Serving avoids browser restrictions on local
`fetch`. No install is required for the pre-rendered viewer.

`npm run build` produces `_site/` with only HTML, CSS, JavaScript, a manifest
and the chart SVGs. GitHub Actions deploys that directory to GitHub Pages.
Large source specifications and raw data remain available in this repository.

## Runtime and verification

The synchronized runtime is ggaction **0.0.20**, pinned in `runtime-lock.json` and the lockfile.
The tagged artifact and npm archive match exactly. All **1,206 families / 8,732 programs**
match their frozen browser SVGs; see [the runtime report](reports/runtime-sync.json)
and [registry proof](reports/registry-proof.json). The official npm installation contains
the same 591 files as the verified artifact. The [0.0.20 release](https://github.com/ggaction/ggaction/releases/tag/v0.0.20)
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
and remove stale aggregate reports before starting. `npm test` exercises those failure cases
before the Pages build.

To preview an incremental import from the translation workspace:

```sh
python3 scripts/sync-dataset.py /path/to/translation-workspace
```

The preview stages completed, reviewed families and checks all existing file hashes.
Add `--apply` to add new families and refresh verified corrections. The importer
rejects changed original inputs, stale reviews, unequal stages and removal of an
existing family. Previous versions of refreshed families remain in the ignored
staging directory and Git history. Applied data stays marked pending until a full
runtime compatibility check succeeds; importing alone is not release verification.

Completed means the translations passed the recorded rendering, structure,
data and geometry policy. It does not claim pixel-perfect equivalence to the
source. Source-specific approximations and historical corrections remain in
per-chart metadata. The latest update adds 52 completed families and refreshes 30 previously reviewed
corrections while preserving every original source, frozen dataset and source SVG.
[Update evidence](reports/dataset-sync.json) and the
[previous release record](reports/previous-release-0.0.19.json) preserve that history.

See [DATA_SOURCES.md](DATA_SOURCES.md) for attribution and licensing.
