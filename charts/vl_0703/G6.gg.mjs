import { chart } from "ggaction";
import data from "./data.json";

// G1 complete equivalent program. Facet source: field "source", values ["sim","srv"], columns 2 rows 1.
// All guides/axes/grid/legend created before facet; parent title and layout edits after.
export function buildChart() {
  return chart()
    // DOCS: doc-6c2c08869091f6a0 createBarPlot card — verified standalone child canvas (width,height,margin only).
    .createCanvas({
      width: 389,
      height: 257.390625,
      margin: { top: 19.390625, right: 82, bottom: 38, left: 87 }
    })
    // Original source SVG Y-axis label text metrics, sans-serif fontSize 10 weight 400 normal.
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0703-source-Y-label-metrics",
        measurements: [
          { text: "10000+", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.65625 },
          { text: "5000 - 10000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.953125 },
          { text: "3000 - 5000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.390625 },
          { text: "1000 - 3000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.390625 },
          { text: "0 - 1000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.703125 }
        ]
      }
    })
    // Complete frozen ancestor dataset, every raw row retained.
    .createData({ values: data })
    // Fresh computed numeric alias: source pct is a raw string, toNumber required for quantitative x.
    .createComputedData({
      id: "pctNumber",
      expression: { op: "toNumber", operand: { field: "pct" } },
      as: "pct_number"
    })
    // DOCS: doc-fc11e9fb291905d1 createBarPlot — horizontal bars: categorical y, quantitative x, guides disabled.
    .createBarPlot({ x: "pct_number", y: "dist_group", guides: false })
    // Source bars fill the full band slot (bandwidth 36 within 40px slots).
    .encodeBarWidth({ band: 1 })
    // Native stacked-bar default paints a white 0.5 stroke; source rectangles have none.
    .editBarMark({ stroke: false })
    // Stacked nominal color binding; scale policy moved to the dedicated scale owner.
    .encodeColor({ field: "main_mode", layout: "stack" })
    // Literal source ordinal color domain/range as a whole scale-family boundary.
    .editColorScale({
      domain: ["bike", "car", "pt", "walk"],
      range: ["#0f5eca ", "#fc8712", "#37ab17", "#d00000"]
    })
    // Source x linear domain [0,1].
    .editXScale({ domain: [0, 1] })
    // One three-key band scale editor preserving the source category order and paddings (type inferred).
    .editYScale({
      domain: ["10000+", "5000 - 10000", "3000 - 5000", "1000 - 3000", "0 - 1000"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Source plot border paint, applied before facet.
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Decomposed guide aggregate: complete axes, then grid, then shared legend, before facet.
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Share", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: ["10000+", "5000 - 10000", "3000 - 5000", "1000 - 3000", "0 - 1000"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Distance classes", fontSize: 11, offset: 75.9404296875 }
    })
    // Whole-axis paint family: paired X/Y axis line, tick, label color and title weight/color move together.
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: ".1f" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createGrid({
      vertical: { values: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      horizontal: false
    })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .editLegendTitle({ title: "Main mode" })
    // DOCS: doc-da6e304c0dd40c0c facet — one facet call on the raw field, source header typography at birth.
    .facet({
      field: "source",
      values: ["sim", "srv"],
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
    })
    // Source global guide policy: outer axes, shared legend.
    .editFacetGuides({ axes: "outer", legend: "shared" })
    // Source composition spacing policy.
    .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
    // Parent heading (facet field heading) with source fonts.
    .createTitle({
      text: "Mode-choice by distance classes",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    })
    // Centered heading with measured source offset.
    .editTitle({ align: "center", offset: -2.421875 });
}