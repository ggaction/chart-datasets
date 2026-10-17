# Chart datasets

[Open the comparison viewer](https://ggaction.github.io/chart-datasets/)

A minimal side-by-side viewer for 1,154 completed Vega-Lite → ggaction chart
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

The repository includes 8,335 raw accepted programs. Families have up to eight
stages; the historical baseline retains its original accepted stages, including
stages omitted by a later editorial curation. A chart is included only when
its family was marked completed. The 15 unfinished admitted families are excluded.
The translation queue remains paused.

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

The synchronized runtime is pinned in `runtime-lock.json` and the lockfile.
Install with `npm ci`, then render a family with:

```sh
npm run render -- vl_1180
```

This executes the distributed source modules against the pinned ggaction
package and checks same-family output equality. Existing SVGs remain the frozen
translation evidence. A full release synchronization report records compatibility
and output differences separately.

Completed means the translations passed the recorded rendering, structure,
data and geometry policy. It does not claim pixel-perfect equivalence to the
source. Source-specific approximations and historical corrections remain in
per-chart metadata. No new model translations were generated for this viewer.

See [DATA_SOURCES.md](DATA_SOURCES.md) for attribution and licensing.
