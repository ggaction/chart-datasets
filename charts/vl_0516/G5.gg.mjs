// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 354,
      height: 377,
      margin: { left: 39, top: 40, right: 15, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "valueNum", expression: { op: "toNumber", operand: { field: "Rate" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeStroke({ value: "red" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "step" })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editPointMark({ fill: "red", stroke: false })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(150) / 2 })
    .createRuleMark({ opacity: 0, stroke: "black" })
    .encodeX({ target: "rule", field: "Date", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [159408000000, 1584576000000], nice: false })
    .editYScale({ domain: [0, 18], nice: false })
    .createVerticalGrid({
      values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000]
    })
    .createHorizontalGrid({
      values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
    })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Rate", fontSize: 11, offset: 26.544921875 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createTitle({
      text: "Bank Rate",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ alongOffset: -33.123046875, offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "Bank of England's main policy rate (%). Source: BoE" });
}