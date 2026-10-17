// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 217,
      height: 242,
      margin: { left: 24, top: 40, right: 13, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "unemp",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 12] })
    .encodeStroke({ value: "seagreen" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } } })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Female unemployment rate %",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "(aged 16 and over, seasonally adjusted)",
      gap: 1,
      offset: -13
    })
    .editTitle({ alongOffset: -18.12, titleStyle: { fontWeight: "700" } });
}
