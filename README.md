# Chart datasets

[Open the comparison viewer](https://ggaction.github.io/chart-datasets/)

**1,387 completed Vega-Lite → ggaction chart families**, containing **10,174 accepted programs**.
The minimal gallery supports chart-type, composition and explicit-design filters,
number/title/field search, structural-complexity and G1-action sorting, and Vega-Lite,
ggaction or paired previews. Cards load in batches of60 with lazy-loaded images.
Opening a card shows Vega-Lite on the left and ggaction on the right.
Use the slider, arrow buttons, keyboard arrows, Home or End within the filtered results.
A direct link such as
[#vl_1180](https://ggaction.github.io/chart-datasets/#vl_1180) opens one chart.

The collapsed code panel displays the unchanged source and each accepted G1…Gn
program, action/option counts and changes from the preceding stage. Stages keep the
same canonical image. Filters, sort, preview, chart, stage and code/diff state are
encoded in the URL; browser Back returns to the gallery with its scroll position.
Code files are fetched on demand and checked against their recorded SHA256.

Structural score = declared mark units + static encoding channels +2×declared
transforms +3×composition nodes. Tooltip and other interactive channels are excluded.
This transparent heuristic describes specification structure, not visual difficulty;
it is separate from G1 action count and accepted-stage count. Primary rows measure
the original primary data.json array only, before transforms; additional tables are
not included. Missing measurements sort last. Features reflect explicit declarations,
not expanded Vega-Lite defaults. All catalog metadata is generated deterministically
from the published source/metadata files, without model calls or chart re-rendering.

## Files

Each `charts/vl_####/` directory contains:

| File | Contents |
| --- | --- |
| `source.vl.json` | Unchanged original Vega-Lite specification |
| `resolved-source.vl.json` | Frozen source with local data references resolved |
| `data.json` | Unchanged original primary rows |
| `data-lookup-*.json`, `*-data.json` | Additional original input tables, where present |
| `raw-inputs.json` | Source ownership, file hashes and program bindings for multiple tables |
| `source-epoch.json` | Explicit reviewed authoring epoch, where applicable |
| `G1.gg.mjs` … `G8.gg.mjs` | Accepted programs from high-level construction to finer edits |
| `vega-lite.svg`, `ggaction.svg` | Frozen source and canonical G1 outputs |
| `metadata.json` | File hashes, source URLs, program information and translation notes |

Stages express the same ggaction output through progressively smaller, meaningful actions.
A family can stop before eight stages when further decomposition is not useful.
The historical baseline retains its original accepted stages. The viewer displays
one canonical ggaction output per family. Each pair shares a display scale and
preserves the SVG aspect ratios; small screens scale the pair without changing chart sizes.

This release adds **51 families and 408 programs** to version 1.1.0. The previous
1,336 families were imported without refreshing their files. Held or incomplete
families, including `vl_0206`, are excluded. Translation stops at the approved 1,387-family cutoff.

## Reproduce locally

Requires Node.js 20+ and Python 3.

```sh
npm ci
npm run validate
npm run build
npm run serve
```

Open `http://127.0.0.1:4317`. The pre-rendered viewer can be served without
installing dependencies after building. `npm run build` creates `_site/`, containing
the viewer, manifest, generated catalog, frozen SVGs and original source/accepted
program files. Additional raw input tables remain in this repository.
`npm run test:viewer` checks the built site with Chromium; it accepts an optional
published URL. The test checks controls, source/code identity, shared image scaling,
mobile layout, deep links and stale-deployment/corrupt-code handling without VLM inspection.

To execute accepted programs against the pinned browser runtime:

```sh
npx playwright install chromium
npm run render -- vl_1180
```

`npm run render -- --all` checks every family. The browser uses UTC and en-US.
`RENDER_WORKERS=2` or `RENDER_WORKERS=3` enables bounded parallel chunks; larger
counts are rejected. `--node` is a diagnostic backend whose number formatting can
differ from the canonical browser output.

## Runtime synchronization

The exact dependency is **ggaction 0.0.24**. Its tag, archive SHA-256 and npm
integrity are recorded in [runtime-lock.json](runtime-lock.json). The official
installation is checked against all **624 package files**, not only its version string.

All **1,387 families / 10,174 programs** pass the official release replay:
**1,385** families retain identical SVG bytes; **0237** and **1417** retain exactly
the same decoded pixels at DPR1,2,4 under a fresh 0.0.24 certificate. An interrupted
disk scan preserved 1,375 completed results; only the remaining 12 families were
rendered in recovery. No completed family was rerendered.

- [ggaction 0.0.24 release](https://github.com/ggaction/ggaction/releases/tag/v0.0.24)
- [Registry and installation proof](reports/registry-proof.json)
- [Full current-runtime report](reports/runtime-sync.json)
- [Strict SVG byte comparison](reports/runtime-sync-byte-comparison.json)
- [Documentation provenance](reports/documentation-release.json)
- [Published ggaction documentation](https://ggaction.github.io/ggaction/)

For every new ggaction release, publish the library first, pin this repository to
that exact npm version, verify the official archive and installation, replay every
accepted program, and then release the dataset and deploy its viewer. Library,
package, documentation and viewer identities must agree before synchronization is complete.

The default SVG check requires identical bytes. Any explicit raster qualification
is bound to the current archive, all family file hashes, the fresh replay and both
SVG hashes. It requires **zero differing RGBA channels at DPR1,2,4** and equal
output across every stage. Old certificates cannot qualify a new release.
Rendering failures cannot be waived. The strict byte result remains available.
No images are manually inspected and no general pixel tolerance is added.

```sh
node scripts/verify-runtime.mjs /path/to/candidate.json
```

For an unpublished candidate, use a separate ignored report path. If current
SVG differences need qualification, provide a freshly verified certificate as
the third argument. Replays reject failed workers, stale chunks, missing or
duplicate families and contradictory results.

## Lossless incremental import

```sh
python3 scripts/sync-dataset.py /path/to/translation-workspace
# Review the staged files, then apply:
python3 scripts/sync-dataset.py /path/to/translation-workspace --apply
```

Import verifies existing hashes, completion, reviews, original inputs and equal
stage outputs. It rejects changed original rows, missing owners, stale reviews,
unequal stages and removal of published families. Import alone does not qualify
a runtime release. An unchanged V2 authoring epoch inherited by V3 retains its
published provenance bytes and original registry hash; a new V3 epoch uses its own registry.

Original input ownership is independent of table values. Equal-valued tables
with different owners remain separate. Complete `contract.rawImports` mappings
must match the source, resolved specification, original descriptor or cached URL,
file hashes, and typed row/key order. Exact repeated descriptors can record an
explicit alias; unrelated tables cannot be merged. Original empty root tables
are retained. `distinctRawRows` and `sourceOwnerRows` distinguish stored tables
from repeated references.

An Acorn syntax-tree audit binds imported JSON files to actual `createData`
calls and dataset IDs. File names do not determine dataset IDs. Native datasets
must contain the original typed rows in order, including signed zero. Qualified
flat two-owner `hconcat` sources additionally preserve child program scopes and
`nativeChildId`/`sourcePointer` bindings. See [scope checks](docs/concat-input-owners.md).
Original module bytes and import paths stay unchanged.

Some confidence-interval families use an approved seeded reference-rendering
environment. Their `source-reference-policy.json` records the environment and
original reference hashes; `vega-lite-unseeded.svg` preserves the earlier output.
The seed is not added to the authored specification. Original source and rows
remain unchanged.

Completed means the recorded data, rendering, structure and geometry policy
passed. It does not imply exact pixels against Vega-Lite. Source-specific
approximations and historical corrections remain in per-chart metadata.
See [DATA_SOURCES.md](DATA_SOURCES.md) for attribution and licensing.

## Library integration

[PR270](https://github.com/ggaction/ggaction/pull/270) merged the 0.0.24 fixes and
documentation. Released issues 265,266,267,268,269,272 and273 are closed.
Unimplemented issues[258](https://github.com/ggaction/ggaction/issues/258),
[271](https://github.com/ggaction/ggaction/issues/271) and
[274](https://github.com/ggaction/ggaction/issues/274) remain open with explicit gaps.
The library has no open PRs and only `main` remains as a remote branch.
Historical [version 1.1.0 release evidence](reports/release-1.1.0.json), runtime
inventories and earlier raster certificates are retained; previous file versions
are recoverable from Git tags.
