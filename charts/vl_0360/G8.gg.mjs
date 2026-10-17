// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createComputedData/createGuides/createTitle)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 348, height: 474, margin: { left: 38, top: 52, right: 10, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "billion",
      as: "totalBillion",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "totalCumulative" } }, right: { constant: 1000 } }
    })
    .createTitle({
      text: "UK debt - cumlative",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontStyle: "italic", fontSize: 10 }
    })
    .editTitle({ subtitle: "Outstanding bonds by date of issuance. £ billion", offset: -13, alongOffset: -32 })
    .createScatterPlot({
      x: { field: "issueYear", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "totalBillion", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [504921600000, 1640995200000] })
    .editYScale({ domain: [0, 2200] })
    .encodeStroke({ value: "red" })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLabels({ format: ",.0f" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" });
}