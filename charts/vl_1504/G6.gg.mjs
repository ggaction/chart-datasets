import { chart } from "ggaction";
import data from "./data.json";

// G1 — complete equivalent facet program (source: doc-2dc8568cdadd5a99 facets, doc-cbebf93910cdde5e examples)
// Source: Vega bar facet over repo, shared outer axes + shared right legend, measured geometry/fonts preserved (doc-6c2c08869091f6a0).

export function buildChart() {
  return chart()
    // Outer 666x428 canvas; child plot 120x300 (doc-6c2c08869091f6a0); frame paint #ddd/1 set before marks.
    .createCanvas({
      width: 240,
      height: 383.859375,
      margin: { left: 46, right: 74, top: 19.859375, bottom: 64 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Complete frozen ancestor rows, all 8 raw rows retained (doc-02757eae12bfcda5).
    .createData({ values: data })
    // Highest scaffold facade: x/y only, guides disabled; color added separately (doc-6c2c08869091f6a0).
    .createBarPlot({
      guides: false,
      x: { field: "kind" },
      y: { field: "count" }
    })
    .editXScale({ domain: ["closed", "created"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ type: "linear", domain: [0, 20] })
    // Ordinal color field kind, overlay layout, full ten-color source range (doc-6c2c08869091f6a0).
    .encodeColor({ field: "kind", layout: "overlay" })
    .editColorScale({
      type: "ordinal",
      domain: ["closed", "created"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    // Source barBand 1 => full bandwidth (doc-6c2c08869091f6a0 width units).
    .encodeBarWidth({ band: 1 })
    // Source bar mark has no stroke.
    .editBarMark({ stroke: false })
    // Source axis policies: x labels 15 rotated 270, no x title; y title "count" 15/700, labels 12; #888 line/ticks (referenceAxisSpecs).
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["closed", "created"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 15, offset: 7, rotation: { value: 270, unit: "degrees" } }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "count", fontSize: 15, offset: 31.83203125 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    // Source has horizontal grid on the same 11 values, #ddd/1 (referenceGridLines).
    .createHorizontalGrid({
      values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    })
    // Source grid paint moved to the whole grid owner (one grid family across all panels).
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    // Shared categorical legend: eager titleStyle/labels/symbol keys; title kind inferred, no redundant fourth key (doc-2dc8568cdadd5a99).
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    // One transparent opt-in facet; ordered source values, headers 12/400 black at offset 11.140625 (doc-da6e304c0dd40c0c).
    .facet({
      field: "repo",
      values: ["numpy", "numpy-tutorials", "numpy.org", "numpydoc"],
      headers: { fontSize: 12, fontWeight: 400, color: "black", offset: 11.140625 }
    })
    // Source guide ownership — outer axes, shared legend (doc-2dc8568cdadd5a99).
    .editFacetGuides({ axes: "outer", legend: "shared" })
    // Source composition layout — plot spacing, gap 22, align start (sourceFacet afterBirthLayout).
    .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
    // Parent field-caption title created only after facet and layout (sourceGlobalTexts role-title).
    .createTitle({
      text: "Issue activity, last 10 days for numpy",
      titleStyle: { fontSize: 15, fontWeight: 700, color: "black" },
      align: "center"
    })
    // Measured source heading offset (reviewedSourceSpecificAuthoringHints afterBirthOffset).
    .editTitle({ offset: -2.484375 });
}