// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-eacb474f181ce5c3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 648, height: 391, margin: { left: 64, top: 27, right: 134, bottom: 64 } })
    .editCanvas({ background: "#ff000000" })
    .createData({ values: data })
    .createComputedData({ id: "rankNum", as: "rankNum", expression: { op: "toNumber", operand: { field: "rank" } } })
    .filterData({ id: "selected", field: "rankNum", predicate: { op: "lte", value: 20 } })
    .createComputedData({ id: "sourceBase", as: "sourceBase", expression: { constant: 1 } })
    .createComputedData({ id: "numeric", as: "numericY", expression: { op: "toNumber", operand: { field: "FDP over pop" } } })
    .createBarPlot({ x: "Country of asylum", y: { lower: "sourceBase", upper: "numericY" }, guides: false })
    .editXScale({ domain: ["Armenia", "Austria", "Belgium", "Bulgaria", "Cyprus", "Denmark", "Egypt", "Germany", "Greece", "Iraq", "Jordan", "Lebanon", "Libya", "Luxembourg", "Malta", "Netherlands", "Norway", "Sweden", "Switzerland", "Turkey"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ type: "log", domain: [1, 100000] })
    .encodeColor({ field: "Income group", layout: "overlay" })
    .editColorScale({ domain: ["High income", "Lower middle income", "Upper middle income"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createSummaryData({ id: "summary", aggregates: [{ op: "mean", field: "numericY", as: "meanY" }] })
    .createComputedData({ id: "label", as: "label", expression: { constant: "" } })
    .createRuleMark({ data: "summary", stroke: "black", strokeWidth: 3 })
    .encodeY({ field: "meanY", fieldType: "quantitative" })
    .createTextMark({ data: "label", dx: -40, dy: -100 })
    .encodeX({ datum: "Armenia", fieldType: "nominal" })
    .editTextMark({ fontSize: 11, fontWeight: 700 })
    .editTextMark({ align: "center", baseline: "middle" })
    .encodeText({ field: "label" })
    .encodeY({ field: "meanY", fieldType: "quantitative" })
    .createGrid({ horizontal: { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000] }, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, rotation: { value: 30, unit: "degrees" } } },
      title: { text: "Country of asylum", fontSize: 11 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000], ticks: { length: 5 }, labels: { offset: 7, fontSize: 10, format: ",.0f", labelMap: [{ value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "" }, { value: 4, label: "" }, { value: 5, label: "" }, { value: 6, label: "" }, { value: 7, label: "" }, { value: 8, label: "" }, { value: 9, label: "" }, { value: 10, label: "10" }, { value: 20, label: "20" }, { value: 30, label: "" }, { value: 40, label: "" }, { value: 50, label: "" }, { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" }, { value: 90, label: "" }, { value: 100, label: "100" }, { value: 200, label: "200" }, { value: 300, label: "" }, { value: 400, label: "" }, { value: 500, label: "" }, { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" }, { value: 1000, label: "1,000" }, { value: 2000, label: "2,000" }, { value: 3000, label: "" }, { value: 4000, label: "" }, { value: 5000, label: "" }, { value: 6000, label: "" }, { value: 7000, label: "" }, { value: 8000, label: "" }, { value: 9000, label: "" }, { value: 10000, label: "10,000" }, { value: 20000, label: "20,000" }, { value: 30000, label: "" }, { value: 40000, label: "" }, { value: 50000, label: "" }, { value: 60000, label: "" }, { value: 70000, label: "" }, { value: 80000, label: "" }, { value: 90000, label: "" }, { value: 100000, label: "100,000" }] } },
      title: { text: "FDP over pop, Mean of FDP over pop", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: { target: "barPlot", title: "Income group", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 }, symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } }
    })
    .createTitle({ text: "Syrian Arab Republic", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 });
}