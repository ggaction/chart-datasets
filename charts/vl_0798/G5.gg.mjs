// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 374, margin: { left: 48, top: 52, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "rateNum", as: "rate", expression: { op: "toNumber", operand: { field: "Bank Rate" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "rate", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [159408000000, 1671062400000] })
    .editYScale({ domain: [0, 0.18] })
    .encodeStroke({ value: "#023549" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .editLineMark({ curve: "step" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [189302400000, 252460800000, 315532800000, 378691200000, 441763200000, 504921600000, 567993600000, 631152000000, 694224000000, 757382400000, 820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" }
      },
      title: { text: "Bank of England Bank Rate(%)", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createTitle({ text: "Bank of England Bank Rate (1975-2022)", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .editTitle({ alongOffset: -42, gap: 1, offset: -13 })
    .editTitle({ subtitle: "Source: Porperty Investment Project\n" });
}