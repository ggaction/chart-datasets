// DOCS: doc-b11b4627b143730d (createLinePlot), doc-8a4f6f06e0d37d5e (line chart authoring)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 275, height: 312, margin: { left: 18, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueN", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "dateMs", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 9] })
    .editLineMark({ stroke: "darkturquoise", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Female Unemployment Rate (%)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black", fontStyle: "normal" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black", fontStyle: "italic" }
    })
    .editTitle({ subtitle: "Aged 16-64 and economically active, data: ONS", offset: -13, alongOffset: -12.6 })
    .editTitle({ gap: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
