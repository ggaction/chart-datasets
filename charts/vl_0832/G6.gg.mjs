// DOCS: doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 242, margin: { top: 40, right: 7, bottom: 22, left: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "dateNum", as: "dateNum", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateNum", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1422748800000, 1661990400000] })
    .editYScale({ domain: [-4, 8] })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "CPI %", fontSize: 11, offset: 27.4 }
    })
    
    .editXAxisLabels({ format: "%Y" })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "CPI: Fresh Veg (2015=100)",
      offset: -13,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ alongOffset: -33.4, gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "Base Year: 2015 (excludes potatoes), Source: ONS" });
}