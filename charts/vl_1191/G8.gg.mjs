import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-17bdc7cea4dee9c6, doc-919ecfba273140a0, doc-1ca4e1016791b1a1, doc-83b12225aa013008

export function buildChart() {
  return chart()
    .createCanvas({ width: 254, height: 237, margin: { left: 44, top: 35, right: 10, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "lfsValueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createTitle({
      text: "LFS: ILO unemployed",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({ alongOffset: -39, titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black", fontStyle: "italic" } })
    .editTitle({ subtitle: "Aged 25-34: UK: Male: Thousands: SA, Source ONS", gap: 1, offset: -13 })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 550] })
    .encodeStroke({ target: "linePlot", value: "darkblue" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({ labels: { color: "black", format: "%Y" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Economically Inactive (%)", fontSize: 11, fontFamily: "sans-serif", offset: 33 }
    })
    .editYAxis({ ticksAndLabels: { labels: { color: "black" } }, title: { color: "black", fontWeight: 700 } })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}