// DOCS: actual delivered documentation IDs: doc-74fc341a49e892f8, doc-5488e292a83e78ba, doc-99b0513458edff76

import { chart } from "ggaction";
import data from "./data.json";

const logTicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 642, height: 409, margin: { left: 58, top: 27, right: 134, bottom: 82 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .createComputedData({ id: "rowsY", as: "numericY", expression: { op: "toNumber", operand: { field: "FDP over pop" } } })
    .createComputedData({ id: "rowsRank", as: "rankNum", expression: { op: "toNumber", operand: { field: "rank" } } })
    .filterData({ id: "rows20", field: "rankNum", predicate: { op: "lte", value: 20 } })
    .createComputedData({ id: "rowsBase", as: "sourceBase", expression: { constant: 1 } })
    .createBarPlot({
      x: "Country of asylum",
      y: { lower: "sourceBase", upper: "numericY" },
      guides: false
    })
    .encodeColor({
      field: "Income group",
      layout: "overlay",
      scale: { domain: ["High income", "Upper middle income"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] }
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .editXScale({ domain: ["Argentina", "Belgium", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Ecuador", "Iceland", "Luxembourg", "Malta", "Mexico", "Panama", "Paraguay", "Peru", "Spain", "Suriname", "Trinidad and Tobago", "United States", "Uruguay"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ type: "log", domain: [1, 10000] })
    .createSummaryData({ id: "meanRow", aggregates: [{ op: "mean", field: "numericY", as: "meanY" }] })
    .createRuleMark({ id: "meanRule", stroke: "black", strokeWidth: 3 })
    .encodeY({ field: "meanY", target: "meanRule", fieldType: "quantitative" })
    .createComputedData({ id: "meanLabel", as: "label", expression: { constant: "" } })
    .createTextMark({ id: "meanText", fontSize: 11, align: "center" })
    .encodeX({ datum: "Argentina", fieldType: "nominal" })
    .editTextMark({ baseline: "middle", dx: -40, dy: -120 })
    .editTextMark({ fontWeight: "bold", fill: "black" })
    .encodeText({ field: "label", target: "meanText" })
    .encodeY({ field: "meanY", target: "meanText" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, rotation: { value: 30, unit: "degrees" } } },
      title: { text: "Country of asylum", fontSize: 11 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: logTicks,
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 7,
          labelMap: [
            { value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "" }, { value: 4, label: "" }, { value: 5, label: "" }, { value: 6, label: "" }, { value: 7, label: "" }, { value: 8, label: "" }, { value: 9, label: "" },
            { value: 10, label: "10" }, { value: 20, label: "20" }, { value: 30, label: "" }, { value: 40, label: "" }, { value: 50, label: "" }, { value: 60, label: "" }, { value: 70, label: "" }, { value: 80, label: "" }, { value: 90, label: "" },
            { value: 100, label: "100" }, { value: 200, label: "200" }, { value: 300, label: "" }, { value: 400, label: "" }, { value: 500, label: "" }, { value: 600, label: "" }, { value: 700, label: "" }, { value: 800, label: "" }, { value: 900, label: "" },
            { value: 1000, label: "1,000" }, { value: 2000, label: "2,000" }, { value: 3000, label: "" }, { value: 4000, label: "" }, { value: 5000, label: "" }, { value: 6000, label: "" }, { value: 7000, label: "" }, { value: 8000, label: "" }, { value: 9000, label: "" },
            { value: 10000, label: "10,000" }
          ]
        }
      },
      title: { text: "FDP over pop, Mean of FDP over pop", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createHorizontalGrid({ values: logTicks, color: "#ddd" })
    .createTitle({ text: "Venezuela", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Income group",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    });
}