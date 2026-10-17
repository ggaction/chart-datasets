import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({ width: 715, height: 489, margin: { left: 58, top: 52, right: 157, bottom: 37 } })
    .createData({ id: "countries", values: data })
    .createComputedData({ id: "gdpTyped", as: "gdp", expression: { op: "toNumber", operand: { field: "GDP per capita, PPP (constant 2017 international $)" } } })
    .createComputedData({ id: "energyTyped", as: "energy", expression: { op: "toNumber", operand: { field: "Primary energy consumption per capita (kWh/person)" } } })
    .createScatterPlot({ x: "gdp", y: "energy", guides: false })
    .encodeColor({ field: "Region", fieldType: "ordinal" })
    .editColorScale({ domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Carribean", "Middle East & North Africa", "South Asia", "Sub-Saharan Africa"], range: ["#4c78a8", "orange", "#e45756", "teal", "green", "#b279a2", "#ff9da6"] })
    .encodePointRadius({ value: Math.sqrt(50) / 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ stroke: false })
    .createRegressionData({ id: "regressionFit", x: "gdp", y: "energy" })
    .editRegressionData({ target: "regressionFit", predict: { domain: [4000, 24000], steps: 2 } })
    .createLinePlot({ x: "gdp", y: "energy", guides: false })
    .encodeStroke({ target: "linePlot", value: "#d62728" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({ id: "fitCount", source: "energyTyped", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "r2Label", as: "sourceDisplay", expression: { constant: "R²: 0.76" } })
    .createTextMark({ data: "r2Label", fontSize: 15, fill: "black" })
    .encodeText({ field: "sourceDisplay" })
    .encodeX({ datum: 30000 })
    .encodeY({ datum: 41000 })
    .editTextMark({ align: "right", baseline: "middle" })
    .editXScale({ domain: [0, 30000] })
    .editYScale({ domain: [0, 40000] })
    .createGrid({
      horizontal: { values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000] },
      vertical: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 4000, 8000, 12000, 16000, 20000, 24000, 28000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontWeight: 400, offset: 7 }
      },
      title: { text: "GDP per capita, PPP (constant 2017 international $)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontWeight: 400, offset: 7 }
      },
      title: { text: "Primary energy consumption per capita (kWh/person)", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: false,
        position: "right",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10, fontWeight: 400, color: "black" }
      }
    })
    .createTitle({
      text: "Relationship between GDP per Capita and Energy Consumption per Capita",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" },
      alongOffset: -52.5859375
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Source: World Bank", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}