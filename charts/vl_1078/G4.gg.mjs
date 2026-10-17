// DOCS: doc-b11b4627b143730d (createLinePlot), doc-8a4f6f06e0d37d5e (line chart program shape), doc-ba092ec842bafcc1 (CompleteAxisOptions)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 348,
      height: 367,
      margin: { left: 41, top: 37, right: 7, bottom: 30 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "Date",
        fieldType: "temporal"
      },
      y: {
        field: "UK Rental Price Growth",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1451606400000, 1635724800000] })
    .editYScale({ domain: [0, 2.6] })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 2 })
    .createTitle({
      text: "UK Annual Private Rental Price Growth",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontStyle: "italic", fontSize: 10 }
    })
    .editTitle({
      subtitle: "Index of Private Housing Rental Prices over 12 months, Source:ONS",
      align: "left",
      offset: -12
    })
    .createXAxis({
      line: { color: "#334155" },
      ticksAndLabels: {
        values: [
          1451606400000,
          1483228800000,
          1514764800000,
          1546300800000,
          1577836800000,
          1609459200000
        ],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 2,
          format: "%Y",
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#334155" },
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5],
        labels: { fontSize: 10, offset: 7, format: ".1f" }
      },
      title: { fontSize: 11, offset: 28 }
    })
    .editYAxisTitle({ text: "Rental Price Growth (%)", fontWeight: 700 });
}