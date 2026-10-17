// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 214,
      height: 242,
      margin: { top: 40, right: 10, bottom: 22, left: 24 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [788918400000, 1609459200000] })
    .editYScale({ domain: [0, 10], zero: true })
    .encodeStroke({
      value: "seagreen"
    })
    .encodeStrokeWidth({
      value: 2
    })
    .encodeOpacity({
      value: 1
    })
    .createXAxis({
      ticksAndLabels: {
        values: [
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "LFS: ILO redundancy rate: UK ",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      subtitle: "(per 1,000 employees)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({ alongOffset: -18.12 });
}