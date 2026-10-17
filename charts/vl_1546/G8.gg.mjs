// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 331, height: 349, margin: { left: 24, top: 27, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "dateNum", as: "dateNum", expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateNum", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-694310400000, 1661990400000] })
    .editYScale({ domain: [0, 16] })
    .encodeStroke({ value: "seagreen" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({
      ticksAndLabels: {
        labels: { format: "%Y" }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "Simple Vega Chart",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      align: "center",
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({
      color: "#ddd"
    })
    .editVerticalGrid({
      color: "#ddd"
    });
}