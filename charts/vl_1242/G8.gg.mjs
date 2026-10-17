import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
export function buildChart() {
  return chart()
    .createCanvas({
      width: 226,
      height: 229.390625,
      margin: { left: 40, right: 86, top: 19.390625, bottom: 10 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "tracker" },
      y: { field: "precision" },
      guides: false
    })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05, domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"] })
    .editYScale({ type: "linear", domain: [0, 80] })
    .encodeColor({
      field: "tracker",
      layout: "overlay"
    })
    .editColorScale({ domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "precision", fontSize: 11, offset: 27.544921875 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createHorizontalGrid({ values: [0, 20, 40, 60, 80] })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .facet({
      field: "stage",
      values: ["demosaic", "denoise", "transform", "gamut map", "tone map", "all off"],
      headers: { fontSize: 10, offset: 10.609375 }
    })
    .editFacetHeaders({ fontWeight: 400, color: "black" })
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
    .createTitle({
      text: "Enable a single stage",
      align: "center",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    })
    .editTitle({ offset: -2.421875 });
}