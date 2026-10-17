// DOCS: doc-6c2c08869091f6a0 createBarPlot — required x/y, color.layout, width band fraction
// DOCS: doc-fc11e9fb291905d1 createBarPlot — x/y position channels, width option

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 226,
      height: 229.390625,
      margin: { top: 19.390625, right: 86, bottom: 10, left: 40 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "tracker",
        fieldType: "nominal"
      },
      y: { field: "AUC", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "tracker",
      layout: "overlay"
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .editXScale({ domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ type: "linear", domain: [0, 60] })
    .editColorScale({
      type: "ordinal",
      domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "AUC", fontSize: 11, offset: 27.544921875 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createHorizontalGrid({ values: [0, 10, 20, 30, 40, 50, 60], lineWidth: 1 })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .facet({
      field: "stage",
      values: ["demos.+g.c.", "subs.+g.c."],
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
    })
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
    .createTitle({
      text: "demosaic v.s. subsample",
      align: "center",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    })
    .editTitle({ offset: -2.421875 });
}