// DOCS: doc-6c2c08869091f6a0 createBarPlot facade (create-only aggregate, width band fraction)
// DOCS: doc-da6e304c0dd40c0c facets.md build a row and column facet grid (editFacetHeaders)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return (
    chart()
      .createCanvas({
        width: 226,
        height: 229.390625,
        margin: { left: 40, right: 86, top: 19.390625, bottom: 10 }
      })
      .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
      .createData({ values: data })
      .createBarPlot({
        x: {
          field: "tracker",
          fieldType: "nominal"
        },
        y: {
          field: "AUC",
          fieldType: "quantitative"
        },
        guides: false
      })
      .editXScale({
        domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"],
        paddingInner: 0.1,
        paddingOuter: 0.05
      })
      .editYScale({ domain: [0, 65] })
      .encodeColor({
        field: "tracker",
        layout: "overlay"
      })
      .editColorScale({
        type: "ordinal",
        domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      })
      .encodeBarWidth({ band: 1 })
      .editBarMark({ stroke: false })
      
      .createYAxis({
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: {
          text: "AUC",
          fontSize: 11,
          offset: 27.544921875
        }
      })
      .editYAxisLine({ color: "#888" })
      .editYAxisTicksAndLabels({
        ticks: { color: "#888" },
        labels: { color: "black" }
      })
      .editYAxisTitle({ fontWeight: 700, color: "black" })
      .createHorizontalGrid({
        values: [0, 10, 20, 30, 40, 50, 60],
        color: "#ddd",
        lineWidth: 1
      })
      .createLegend({
        titleStyle: { fontSize: 11 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
      })
      .editLegendTitle({ fontWeight: 700, color: "black" })
      .editLegendLabels({ color: "black" })
      .facet({
        field: "stage",
        values: ["original", "demosaic", "denoise", "transform", "gamut map", "tone map"],
        headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
      })
      .editFacetGuides({ axes: "outer", legend: "shared" })
      .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
      .createTitle({
        text: "Disable a single stage",
        align: "center",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
      })
      .editTitle({ offset: -2.421875 })
  );
}