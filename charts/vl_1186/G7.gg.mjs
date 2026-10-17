// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 280,
      height: 237,
      margin: { left: 53, top: 35, right: 27, bottom: 22 }
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
    .editLineMark({ stroke: "darkblue", strokeWidth: 2 })
    .editXScale({ domain: [441763200000, 1609459200000] })
    .editYScale({ domain: [0, 9000], zero: true })
    .createXAxis({
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: { fontFamily: "sans-serif", color: "black" }
      }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: {
        text: "Economically Inactive (%)",
        fontSize: 11,
        offset: 45
      }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: { fontFamily: "sans-serif", color: "black" }
      },
      title: { fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "LFS: Economically inactive",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({
      subtitle: "UK: Male: Aged 16 and over: Thousands: NSA, Source ONS",
      offset: -12,
      alongOffset: -47.02
    })
    .editTitle({
      titleStyle: { color: "black", fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { color: "black", fontStyle: "italic", fontFamily: "sans-serif" }
    });
}
