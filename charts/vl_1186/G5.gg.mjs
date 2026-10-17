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
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: ",.0f" }
      },
      title: {
        text: "Economically Inactive (%)",
        fontSize: 11,
        fontFamily: "sans-serif",
        fontWeight: 700,
        color: "black",
        offset: 45
      }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "LFS: Economically inactive",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "UK: Male: Aged 16 and over: Thousands: NSA, Source ONS",
      offset: -12,
      alongOffset: -47.02
    });
}
