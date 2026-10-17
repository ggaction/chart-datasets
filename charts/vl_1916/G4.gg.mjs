import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 344, height: 377, margin: { left: 39, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-actual-font-metrics", measurements: [
      { text: "1800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1840", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1880", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1920", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1960", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.249984741210938 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.265625 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
      { text: "USD/GBP exhange rate", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 142.828125 },
      { text: "Calendar year average. Source: [tbc], OFX", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 190.7763671875 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "ValueNumber", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "ValueNumber" }, guides: false })
    .encodeStroke({ value: "darkblue", target: "linePlot" })
    .createScatterPlot({ x: { field: "Year", fieldType: "temporal" }, y: { field: "ValueNumber" }, guides: false })
    .encodeStrokeWidth({ value: 2, target: "linePlot" })
    .encodeStroke({ value: "#4c78a8", target: "scatterPlot" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .createRuleMark({ stroke: "black", opacity: 0.1 })
    .encodeX({ field: "Year", target: "rule", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [-5648659200000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 12], nice: false })
    .createTitle({ text: "USD/GBP exhange rate", alongOffset: -33.123046875, titleStyle: { fontSize: 13 } })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Calendar year average. Source: [tbc], OFX", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: [-5364662400000, -4102444800000, -2840140800000, -1577923200000, -315619200000, 946684800000], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" } }, title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 } })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black" } }, title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, rotation: { value: -90, unit: "degrees" } } });
}

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e