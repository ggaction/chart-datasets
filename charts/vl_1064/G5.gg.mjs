import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Stage 1: standalone child canvas // DOCS: doc-02757eae12bfcda5
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 54, right: 65, top: 14.390625, bottom: 33 },
      plotBorder: {}
    })
    // Stage 2: complete frozen source data // DOCS: doc-8f7efd41b2186a84
    .createData({ values: data })
    // Stage 3: temporal bar facade with both source domains and y.stack zero // DOCS: doc-8f7efd41b2186a84
    .createBarPlot({
      x: { field: "year", fieldType: "temporal", scale: { domain: [1224124294736, 1489872505263] } },
      y: { field: "value", stack: "zero", scale: { domain: [0, 45000] } },
      guides: false
    })
    // Stage 4: source 5px bars
    .encodeBarWidth({ pixels: 5 })
    // Stage 5: bar mark paint // DOCS: doc-8f7efd41b2186a84
    .editBarMark({ stroke: false, cornerRadius: 1 })
    // Stage 6: categorical color scale
    .encodeColor({
      field: "category"
    })
    // Stage 6b: color scale domain and range moved out // DOCS: doc-8f7efd41b2186a84
    .editColorScale({
      domain: ["Col1", "Col2", "Col3", "Col4"],
      range: ["#1f77b4", "#EDAD08", "#73AF48", "#94346E"]
    })
    // Stage 7: complete guides with legend symbols at birth // DOCS: doc-9b8ffb4e65fb646c
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [1262304000000, 1325376000000, 1388534400000, 1451606400000],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, format: "%Y", offset: 5.5, alongOffset: 0.5 }
        },
        title: { text: "year", fontSize: 11, offset: 27.328125, alongOffset: 0.5 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, format: ",.0f", offset: 7.5, alongOffset: 0.890625 }
        },
        title: {
          text: "value", fontSize: 11,
          offset: 47.0078125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    // Move x-axis paint to editor
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisTitle({ color: "#000", fontWeight: 700 })
    // Move y-axis paint to editor
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ color: "#000", fontWeight: 700 })
    .createGrid({ vertical: { scale: "x", color: "#ddd" }, horizontal: { scale: "y", color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { width: 10, height: 10, strokeWidth: 0 }
    })
    // Stage 8: facet on category // DOCS: doc-02757eae12bfcda5
    .facet({
      field: "category",
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 8 },
      gap: 86
    })
    .editFacetScales({ color: "independent" })
    .editFacetGuides({ axes: "outer", legend: false })
    .editCompositionLayout({ spacing: "plot", gap: 86, padding: { left: 20, top: 5, right: 30, bottom: 5 } }) // DOCS: doc-9b8ffb4e65fb646c
    .editFacetHeaders({ offset: 10.609375 }) // DOCS: doc-02757eae12bfcda5
    .createTitle({
      text: "category",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      offset: -2.421875
    })
    .editTitle({ align: "center", alongOffset: 32 });
}