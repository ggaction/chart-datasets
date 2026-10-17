import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fb3b01cca895bdad, doc-b7f1bdfb89789cd6

export function buildChart() {
  return chart()
    .createCanvas({ width: 637, height: 399, margin: { left: 53, top: 27, right: 134, bottom: 72 } })
    .editCanvas({ background: "#ff000000" })
    .createData({ values: data })
    .createComputedData({ id: "rankNum", as: "rankNum", expression: { op: "toNumber", operand: { field: "rank" } } })
    .filterData({ id: "ranked", field: "rankNum", predicate: { op: "lte", value: 20 } })
    .createComputedData({ id: "numericY", as: "numericY", expression: { op: "toNumber", operand: { field: "FDP over pop" } } })
    .createComputedData({ id: "sourceBase", as: "sourceBase", expression: { constant: 0.1 } })
    .createBarPlot({ x: "Country of asylum", y: { lower: "sourceBase", upper: "numericY" }, guides: false })
    .encodeColor({ field: "Income group", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["High income", "Low income", "Lower middle income", "Upper middle income"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .editXScale({ paddingInner: 0, paddingOuter: 0, domain: ["Australia", "Bangladesh", "Czechia", "Finland", "France", "Germany", "Greece", "India", "Israel", "Malaysia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Norway", "Rep. of Korea", "Switzerland", "Thailand", "United Kingdom", "United States"] })
    .editYScale({ type: "log", domain: [0.1, 1000] })
    .createSummaryData({ id: "meanData", aggregates: [{ op: "mean", field: "numericY", as: "meanY" }] })
    .createRuleMark({ id: "ruleMean", stroke: "black", strokeWidth: 3 })
    .encodeY({ field: "meanY", target: "ruleMean", fieldType: "quantitative" })
    .createComputedData({ id: "meanText", as: "emptyText", expression: { constant: "" } })
    .createTextMark({ id: "textMean", data: "meanText" })
    .encodeX({ datum: "Australia", fieldType: "nominal" })
    .encodeText({ field: "emptyText", target: "textMean" })
    .encodeY({ field: "meanY", target: "textMean" })
    .createHorizontalGrid({ values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, rotation: { value: 30, unit: "degrees" } } },
      title: { text: "Country of asylum", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxis({ ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, labelMap: [
          { value: 0.1, label: "0.1" }, { value: 0.2, label: "0.2" },
          { value: 0.3, label: "" }, { value: 0.4, label: "" }, { value: 0.5, label: "" }, { value: 0.6, label: "" }, { value: 0.7, label: "" }, { value: 0.8, label: "" }, { value: 0.9, label: "" },
          { value: 1, label: "1" }, { value: 2, label: "2" },
          { value: 3, label: "" }, { value: 4, label: "" }, { value: 5, label: "" }, { value: 6, label: "" }, { value: 7, label: "" }, { value: 8, label: "" }, { value: 9, label: "" },
          { value: 10, label: "10" }, { value: 20, label: "20" },
          { value: 30, label: "" }, { value: 40, label: "" }, { value: 50, label: "" }, { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" }, { value: 90, label: "" },
          { value: 100, label: "100" }, { value: 200, label: "200" },
          { value: 300, label: "" }, { value: 400, label: "" }, { value: 500, label: "" }, { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" },
          { value: 1000, label: "1,000" }
        ] }
      },
      title: { text: "FDP over pop, Mean of FDP over pop", rotation: { value: -90, unit: "degrees" }, fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxis({ ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Income group",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    })
    .createTitle({ text: "Myanmar", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 });
}