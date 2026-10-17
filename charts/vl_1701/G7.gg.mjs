import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({ width: 449, height: 347, margin: { left: 39, top: 10, right: 10, bottom: 37 } })
    .createData({ id: "weather", values: data })
    .createComputedData({ id: "temp_num", as: "temp_max_num", expression: { op: "toNumber", operand: { field: "temp_max" } } })
    .createComputedData({ id: "date_ms", as: "date_ms", expression: { op: "parseTime", operand: { field: "date" } } })
    .createWindowData({ id: "with_mean", operations: [{ op: "movingMean", field: "temp_max_num", as: "rolling_mean", frame: { preceding: 15, following: 15 } }] })
    .createScatterPlot({ x: { field: "date_ms", fieldType: "temporal" }, y: { field: "temp_max_num" }, guides: false })
    .editPointMark({ target: "scatterPlot", fill: "transparent" })
    .encodeStroke({ value: "#4c78a8", target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    .encodeOpacity({ value: 0.3, target: "scatterPlot" })
    .encodePointRadius({ value: 2.7386, target: "scatterPlot" })
    .createLinePlot({ x: { field: "date_ms", fieldType: "temporal" }, y: { field: "rolling_mean" }, guides: false })
    .encodeStroke({ value: "red", target: "linePlot" })
    .encodeStrokeWidth({ value: 3, target: "linePlot" })
    .editXScale({ domain: [1325376000000, 1451520000000] })
    .editYScale({ domain: [-5, 40] })
    .createGrid({ horizontal: {}, vertical: { zIndex: 1, values: [1325376000000, 1333238400000, 1341100800000, 1349049600000, 1356998400000, 1364774400000, 1372636800000, 1380585600000, 1388534400000, 1396310400000, 1404172800000, 1412121600000, 1420070400000, 1427846400000, 1435708800000, 1443657600000] } })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "rgba(255,165,0,0.8)" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1325376000000, 1341100800000, 1356998400000, 1372636800000, 1388534400000, 1404172800000, 1420070400000, 1435708800000],
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1325376000000, label: "2012" },
            { value: 1341100800000, label: "July" },
            { value: 1356998400000, label: "2013" },
            { value: 1372636800000, label: "July" },
            { value: 1388534400000, label: "2014" },
            { value: 1404172800000, label: "July" },
            { value: 1420070400000, label: "2015" },
            { value: 1435708800000, label: "July" }
          ]
        },
        ticks: { length: 5 }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-5, 0, 5, 10, 15, 20, 25, 30, 35, 40],
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [{ value: -5, label: "\u22125" }]
        },
        ticks: { length: 5 }
      },
      title: { text: "Max Temperature", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxis({ ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { fontWeight: 700 } })
    .editYAxis({ ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } }, title: { fontWeight: 700 } });
}