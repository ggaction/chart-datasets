// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-e5ab8d04c2bbca16
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 265, height: 242, margin: { left: 39, top: 40, right: 26, bottom: 22 } })
    .createData({ id: "unemployment", values: data })
    .createComputedData({ id: "unempComputed", as: "unemp", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "unemp", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 12] })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 3 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 3 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Economically Inactive (%)", fontSize: 11, offset: 32 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: "700" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Unemployment rate",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ alongOffset: -33.123046875, titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "(aged 16 and over, seasonally adjusted): %, Source ONS", offset: -13, gap: 1 });;
}