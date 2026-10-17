// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 774, height: 478, margin: { left: 39, top: 51, right: 105, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typedTotal", as: "totalN", expression: { op: "toNumber", operand: { field: "total" } } })
    .createComputedData({ id: "typedValue", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createScatterPlot({ x: "totalN", y: "valueN", guides: false })
    .editXScale({ domain: [0, 5000000000000] })
    .editYScale({ domain: [0, 20] })
    .encodeColor({ field: "continent", fieldType: "nominal", scale: { domain: ["Africa", "Asia", "Europe", "North America", "South America"], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"] } })
    .encodePointRadius({ value: 5 })
    .editPointMark({ target: "scatterPlot", stroke: false })
    .createRegressionData({ id: "regression", x: "totalN", y: "valueN" })
    .editRegressionData({ target: "regression", predict: { domain: [1, 4940880000000], steps: 2 } })
    .createLinePlot({ x: "totalN", y: "valueN", guides: false })
    .editLineMark({ target: "linePlot", stroke: "springgreen", strokeWidth: 2 })
    .createSummaryData({ id: "regStats", source: "typedValue", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "sourceDisplay", as: "R2", expression: { constant: "R²: 0.06" } })
    .createTextMark({ data: "sourceDisplay", fill: "firebrick", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 5000000000000 })
    .encodeY({ target: "text", datum: 20.51282051282051 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .createGrid({
      vertical: { values: [0, 200000000000, 400000000000, 600000000000, 800000000000, 1000000000000, 1200000000000, 1400000000000, 1600000000000, 1800000000000, 2000000000000, 2200000000000, 2400000000000, 2600000000000, 2800000000000, 3000000000000, 3200000000000, 3400000000000, 3600000000000, 3800000000000, 4000000000000, 4200000000000, 4400000000000, 4600000000000, 4800000000000, 5000000000000], color: "#ddd" },
      horizontal: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], color: "#ddd" }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 800000000000, 1600000000000, 2400000000000, 3200000000000, 4000000000000, 4800000000000],
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
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        title: "Continent:",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .createTitle({
      text: "Is there a correlation between the size of a countries economy and it's growth rate?",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 139)" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Regression of country GDP size vs GDP growth rate. Source: TheWorldBank",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" }
    });
}