// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 370, height: 396, margin: { left: 60, top: 59, right: 10, bottom: 37 } })
    .createData({ id: "source_0", values: data })
    .createComputedData({ id: "gdpNum", as: "gdp", expression: { op: "toNumber", operand: { field: "GDP per capita, PPP (constant 2017 international $)" } } })
    .createComputedData({ id: "energyNum", as: "energy", expression: { op: "toNumber", operand: { field: "Primary energy consumption per capita (kWh/person)" } } })
    .createComputedData({ id: "annotationRows", as: "sourceDisplay", expression: { constant: "R2: 0.77" } })
    .createScatterPlot({ x: "gdp", y: "energy", guides: false })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(120) / 2 })
    .editPointMark({ fill: "#4c78a8", stroke: false, opacity: 1 })
    .createRegressionData({ id: "regfit", x: "gdp", y: "energy" })
    .editRegressionData({ target: "regfit", predict: { domain: [4000, 26000], steps: 2 } })
    .createComputedData({ id: "r2line", as: "R2", expression: { constant: "R²: NaN" } })
    .createLinePlot({ x: "gdp", y: "energy", guides: false })
    .encodeStroke({ target: "linePlot", value: "firebrick" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createTextMark({ data: "annotationRows", fontSize: 20, fill: "firebrick" })
    .editTextMark({ align: "right", baseline: "middle" })
    .encodeText({ field: "sourceDisplay" })
    .encodeX({ datum: 15000 })
    .encodeY({ datum: 20000 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .editXScale({ domain: [0, 30000] })
    .editYScale({ domain: [0, 40000] })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 5000, 10000, 15000, 20000, 25000, 30000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "GDP per capita (PPP 2017, USD)", fontSize: 12 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Energy Consumption per capita (kWh)", fontSize: 12 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })    .createTitle({ text: "Relationship between GDP per Capita and\nEnergy Consumption per Capita", titleStyle: { fontSize: 15 }, align: "center" })
    .editTitle({ offset: -13, gap: 1, titleStyle: { fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .editTitle({ subtitle: "Source: World Bank, Our World in Data", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}