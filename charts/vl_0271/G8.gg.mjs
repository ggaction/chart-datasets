// DOCS: doc-fb3b01cca895bdad, doc-1b524928ff518325
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 642, height: 417, margin: { left: 58, top: 27, right: 134, bottom: 90 } })
    .editCanvas({ background: "#ff000000" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "ranked", as: "rankNum", expression: { op: "toNumber", operand: { field: "rank" } } })
    .filterData({ id: "sel", field: "rankNum", predicate: { op: "lte", value: 20 } })
    .createComputedData({ id: "typed", as: "numericY", expression: { op: "toNumber", operand: { field: "FDP over pop" } } })
    .createComputedData({ id: "bars", as: "sourceBase", expression: { constant: 0.1 } })
    .createBarPlot({ x: "Country of asylum", y: { lower: "sourceBase", upper: "numericY" }, guides: false })
    .encodeColor({ field: "Income group", layout: "overlay" })
    .editColorScale({ domain: ["High income", "Low income", "Lower middle income", "Upper middle income"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createSummaryData({ id: "meanData", aggregates: [{ op: "mean", field: "numericY", as: "meanY" }] })
    .createRuleMark({ data: "meanData", stroke: "black", strokeWidth: 3 })
    .encodeY({ field: "meanY", fieldType: "quantitative" })
    .createComputedData({ id: "labelData", as: "text", expression: { constant: "" } })
    .createTextMark({ data: "labelData" })
    .encodeX({ datum: "Central African Rep.", fieldType: "nominal" })
    .editTextMark({ dx: -40, dy: -105 })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: 700, fontSize: 11 })
    .encodeText({ field: "text" })
    .encodeY({ field: "meanY", target: "text" })
    .editYScale({ type: "log", domain: [0.1, 10000], nice: false })
    .editXScale({
      domain: ["Central African Rep.", "Dem. Rep. of the Congo", "Egypt", "Ethiopia", "France", "Germany", "Greece", "Iceland", "Israel", "Kenya", "Lebanon", "Libya", "Malta", "Morocco", "Norway", "Sweden", "Switzerland", "Syria", "Uganda", "United Kingdom"],
      paddingInner: 0, paddingOuter: 0
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, rotation: { value: 30, unit: "degrees" } } },
      title: { text: "Country of asylum", fontSize: 11 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 7,
          labelMap: [
            { value: 0.1, label: "0.1" }, { value: 0.2, label: "0.2" },
            { value: 0.3, label: "" }, { value: 0.4, label: "" }, { value: 0.5, label: "" }, { value: 0.6, label: "" }, { value: 0.7, label: "" }, { value: 0.8, label: "" }, { value: 0.9, label: "" },
            { value: 1, label: "1" }, { value: 2, label: "2" },
            { value: 3, label: "" }, { value: 4, label: "" }, { value: 5, label: "" }, { value: 6, label: "" }, { value: 7, label: "" }, { value: 8, label: "" }, { value: 9, label: "" },
            { value: 10, label: "10" }, { value: 20, label: "20" },
            { value: 30, label: "" }, { value: 40, label: "" }, { value: 50, label: "" }, { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" }, { value: 90, label: "" },
            { value: 100, label: "100" }, { value: 200, label: "200" },
            { value: 300, label: "" }, { value: 400, label: "" }, { value: 500, label: "" }, { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" },
            { value: 1000, label: "1,000" }, { value: 2000, label: "2,000" },
            { value: 3000, label: "" }, { value: 4000, label: "" }, { value: 5000, label: "" }, { value: 6000, label: "" }, { value: 7000, label: "" }, { value: 8000, label: "" }, { value: 9000, label: "" },
            { value: 10000, label: "10,000" }
          ]
        }
      },
      title: { text: "FDP over pop, Mean of FDP over pop", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({ text: "South Sudan", titleStyle: { fontSize: 13 }, offset: -10.953125 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .createLegend({ title: "Income group", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } });
}