// docs: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 637, height: 391, margin: { left: 53, top: 27, right: 134, bottom: 64 } })
    .editCanvas({ background: "#ff000000" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "ranked", as: "rankNum", expression: { op: "toNumber", operand: { field: "rank" } } })
    .filterData({ id: "selected", field: "rankNum", predicate: { op: "lte", value: 20 } })
    .createComputedData({ id: "bars", as: "numericY", expression: { op: "toNumber", operand: { field: "FDP over pop" } } })
    .createComputedData({ id: "barsBase", as: "sourceBase", expression: { constant: 10 } })
    .createBarPlot({ x: "Country of asylum", y: { lower: "sourceBase", upper: "numericY" }, guides: false })
    .encodeColor({ field: "Income group", layout: "overlay", scale: { domain: ["High income", "Low income", "Lower middle income", "Upper middle income"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editYScale({ type: "log", domain: [10, 1000] })
    .editXScale({ domain: ["Australia", "Austria", "Belgium", "Bulgaria", "Denmark", "Finland", "France", "Germany", "Greece", "Iceland", "Iran", "Luxembourg", "Nauru", "Netherlands", "Norway", "Pakistan", "Sweden", "Switzerland", "Tajikistan", "Turkey"], paddingInner: 0, paddingOuter: 0 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .encodeOpacity({ value: 1 })
    .createSummaryData({ id: "meanY", aggregates: [{ op: "mean", field: "numericY", as: "meanY" }] })
    .createComputedData({ id: "textData", as: "emptyText", expression: { constant: "" } })
    .createRuleMark({ data: "meanY", stroke: "black" })
    .encodeStrokeWidth({ value: 3 })
    .encodeY({ field: "meanY", fieldType: "quantitative" })
    .createTextMark({ data: "textData", dx: -40, dy: -90 })
    .encodeX({ datum: "Australia", fieldType: "nominal" })
    .editTextMark({ align: "center", baseline: "middle" })
    .editTextMark({ fontWeight: "bold" })
    .encodeText({ target: "text", field: "emptyText" })
    .encodeY({ target: "text", field: "meanY", fieldType: "quantitative" })
    .createGrid({ horizontal: { color: "#ddd", values: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] }, vertical: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: ["Australia", "Austria", "Belgium", "Bulgaria", "Denmark", "Finland", "France", "Germany", "Greece", "Iceland", "Iran", "Luxembourg", "Nauru", "Netherlands", "Norway", "Pakistan", "Sweden", "Switzerland", "Tajikistan", "Turkey"],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: 30, unit: "degrees" } }
      },
      title: { text: "Country of asylum", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, offset: 7, color: "black", format: ",.0f",
          labelMap: [
            { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" }, { value: 90, label: "" },
            { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" }
          ]
        }
      },
      title: { text: "FDP over pop, Mean of FDP over pop", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({ text: "Afghanistan", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
    })
    ;
}