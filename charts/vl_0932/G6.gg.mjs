// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 230,
      height: 267,
      margin: { left: 24, top: 35, right: 6, bottom: 32 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "d_val",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 45], zero: true, nice: false })
    .encodeStroke({ value: "#496E4C" })
    .encodeStrokeWidth({ value: 1 })
    .createTitle({
      text: "Total population aged 16-17 ",
      titleStyle: { fontSize: 13 },
      alongOffset: -18.123046875
    })
    .editTitle({
      offset: -13,
      gap: 1,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Unemployment rate, %, 1992-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      labels: { format: "%Y" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticks: { color: "#888" }
    });
}