// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 374, height: 373, margin: { left: 39, top: 51, right: 105, bottom: 37 } })
    .editCanvas({ background: "white" })
    .createData({ values: data })
    .createComputedData({ id: "typed", as: "totalN", expression: { op: "toNumber", operand: { field: "total" } } })
    .createComputedData({ id: "typed2", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createScatterPlot({ x: "totalN", y: "valueN", guides: false })
    .editPointMark({ opacity: 1, stroke: false })
    .encodePointRadius({ value: 5 })
    .encodeColor({ field: "continent", fieldType: "nominal", scale: { type: "ordinal", domain: ["Africa", "Asia", "Europe", "North America", "South America"], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"] } })
    .createRegressionData({ id: "reg", x: "totalN", y: "valueN" })
    .editRegressionData({ target: "reg", predict: { domain: [1, 4940880000000], steps: 2 } })
    .createLinePlot({ x: "totalN", y: "valueN", guides: false })
    .editLineMark({ stroke: "springgreen", strokeWidth: 2 })
    .createSummaryData({ id: "count1", source: "typed2", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "annot", as: "sourceDisplay", expression: { constant: "R²: 0.06" } })
    .createTextMark({ data: "annot", fill: "firebrick" })
    .encodeText({ field: "sourceDisplay" })
    .editTextMark({ align: "right", baseline: "middle", fontSize: 11 })
    .encodeX({ datum: 5000000000000 })
    .encodeY({ datum: 20.70175438596491 })
    .editXScale({ domain: [0, 5000000000000] })
    .editYScale({ domain: [0, 20] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2000000000000, 4000000000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Total GDP", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Inflation rate (%)", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({
      vertical: { values: [0, 2000000000000, 4000000000000], color: "#ddd" },
      horizontal: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        title: "Continent:",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({ text: "Size and Inflation Correlation", titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 139)" }, alongOffset: -33.123046875 })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Regression of country GDP size vs GDP growth rate. Source: TheWorldBank", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}