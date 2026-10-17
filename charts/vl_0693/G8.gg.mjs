// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-24d00033f9fc3095
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 985, height: 522, margin: { left: 44, top: 31, right: 141, bottom: 41 } })
    .createData({ id: "raw", values: data })
    .filterData({ id: "totalRows", field: "tourney_level", oneOf: ["Total"] })
    .createComputedData({ id: "named", as: "Player Name", expression: { field: "winner_name" } })
    .createComputedData({ id: "winsNum", as: "WinsNum", expression: { op: "toNumber", operand: { field: "Wins" } } })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "WinsNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Player Name", fieldType: "nominal" })
    .editColorScale({
      domain: ["Ivan Lendl", "Jimmy Connors", "Novak Djokovic", "Rafael Nadal", "Roger Federer"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"]
    })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [63072000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 16], nice: false })
    .createGrid({
      horizontal: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16] },
      vertical: { values: [63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000, 441763200000, 504921600000, 567993600000, 631152000000, 694224000000, 757382400000, 820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000, 441763200000, 504921600000, 567993600000, 631152000000, 694224000000, 757382400000, 820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, flush: true, labelMap: [{ "value": 126230400000, "label": "" }, { "value": 252460800000, "label": "" }, { "value": 378691200000, "label": "" }, { "value": 504921600000, "label": "" }, { "value": 631152000000, "label": "" }, { "value": 757382400000, "label": "" }, { "value": 883612800000, "label": "" }, { "value": 1009843200000, "label": "" }, { "value": 1136073600000, "label": "" }, { "value": 1262304000000, "label": "" }, { "value": 1388534400000, "label": "" }, { "value": 1514764800000, "label": "" }] }
      },
      title: { text: "Year", fontSize: 14, offset: 30.78125 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Wins", fontSize: 14, offset: 31.84765625 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createLegend({
      titleStyle: { fontSize: 14 },
      labels: { fontSize: 14 },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .editLegendTitle({ fontWeight: 700 })
    .createTitle({ text: "How many wins have the top 5 players of all time won over the years?", titleStyle: { fontSize: 16 }, offset: -4.2 })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } })
    .filterData({ id: "visibleText", field: "WinsNum", range: { min: 12 } })
    .createTextMark({ data: "visibleText", fontSize: 12, align: "left" })
    .editTextMark({ baseline: "middle", dx: -6, dy: -17 })
    .editTextMark({ fill: "black" })
    .encodeX({ field: "year", target: "text", fieldType: "temporal" })
    .encodeY({ field: "WinsNum", target: "text" })
    .encodeText({ field: "Wins", target: "text" });;
}