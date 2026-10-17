// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 360,
      height: 357,
      margin: { left: 49, top: 40, right: 11, bottom: 17 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: [-978307200000, 1625097600000],
      nice: false
    })
    .editYScale({ domain: [0, 160000] })
    .encodeStroke({ value: "blue" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "monotone" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          -946944000000, -631152000000, -315619200000, 0,
          315532800000, 631152000000, 946684800000,
          1262304000000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: {
          format: "%Y",
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 2,
          flush: true
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000],
        ticks: { length: 5, color: "#888" },
        labels: {
          format: ",.0f",
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 6.5
        }
      },
      title: false
    })
    .createTitle({
      text: "Nonfarm Payroll",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Employees, thousands, seasonanally adjusted (FRED: PAYEMS)",
      gap: 1,
      alongOffset: -43
    })
    .editTitle({ titleStyle: { fontWeight: 700 }, offset: -4 });
}
