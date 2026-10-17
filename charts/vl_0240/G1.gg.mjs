// DOCS: doc-b11b4627b143730d (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 281, height: 312, margin: { left: 24, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "xdate",
      as: "xdate",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createLinePlot({
      x: { field: "xdate", fieldType: "temporal", temporalUnit: "timestamp",
        scale: { domain: [702086400000, 1656633600000], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 14] } },
      guides: false
    })
    .editLineMark({ stroke: "turquoise", strokeWidth: 2, opacity: 1 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    })
    .createTitle({
      text: "Male Unemployment Rate",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -18.123046875 })
    .editTitle({ subtitle: "Aged 16-64 and economically active, data: ONS" });
}