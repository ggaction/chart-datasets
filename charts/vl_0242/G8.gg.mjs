// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-a929fd81abd909f8, doc-0cbb124f0c04d6d9, doc-e5ab8d04c2bbca16
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 281, height: 307, margin: { left: 24, top: 35, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "numberedRows", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [34214400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 95], nice: false })
    .encodeStroke({ value: "darkturquoise" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: "%Y", color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({ text: "Male employment rate (%)", alongOffset: -18, titleStyle: { fontSize: 13 } })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, color: "black" }, offset: -13 })
    .editTitle({ subtitle: "Aged 16-64, seasonally adjusted, data: ONS", gap: 1 });
}
