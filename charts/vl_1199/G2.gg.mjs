// DOCS: doc-7f2c254224fc4908, doc-7184b02978bdf5d1, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 574, height: 483, margin: { left: 68, top: 42, right: 6, bottom: 41 } })
    .createTitle({ text: "Relationship between GDP per Capita and Energy Consumption per Capita", titleStyle: { fontSize: 15, fontWeight: 700, color: "rgb(63, 67, 75)" }, alongOffset: -62.1474609375 })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Source: World Bank", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(63, 67, 75)" } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "gdp_num", as: "gdp_num", expression: { op: "toNumber", operand: { field: "GDP per capita, PPP (constant 2017 international $)" } } })
    .createComputedData({ id: "energy_num", as: "energy_num", expression: { op: "toNumber", operand: { field: "Primary energy consumption per capita (kWh/person)" } } })
    .createComputedData({ id: "r2text", as: "R2", expression: { constant: "R²: NaN" } })
    .createScatterPlot({ x: { field: "gdp_num", fieldType: "quantitative" }, y: { field: "energy_num", fieldType: "quantitative" }, guides: false })
    .encodePointRadius({ value: 5.477225575051661 })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .createRegressionData({ id: "regression", x: "gdp_num", y: "energy_num" })
    .editRegressionData({ target: "regression", predict: { domain: [10071.37989, 98283.30891], steps: 2 } })
    .createLinePlot({ x: { field: "gdp_num", fieldType: "quantitative" }, y: { field: "energy_num", fieldType: "quantitative" }, guides: false })
    .editLineMark({ target: "linePlot", stroke: "#d62728" })
    .createTextMark({ data: "r2text", fill: "black", fontSize: 15 })
    .editTextMark({ align: "right", baseline: "middle" })
    .encodeX({ target: "text", datum: 60000 })
    .encodeY({ target: "text", datum: 110000 })
    .encodeText({ field: "R2" })
    .editXScale({ domain: [0, 120000] })
    .editYScale({ domain: [0, 220000] })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { values: [0, 20000, 40000, 60000, 80000, 100000, 120000], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "#3f434b", flush: true, format: ",.0f" } },
        title: { text: "GDP per capita (PPP 2017, USD)", fontSize: 15, fontWeight: 700, color: "#3f434b", offset: 31.5 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "#3f434b", format: ",.0f" } },
        title: { text: "Energy Consumption per capita (kWh)", fontSize: 15, fontWeight: 700, color: "#3f434b" }
      }
    });
}