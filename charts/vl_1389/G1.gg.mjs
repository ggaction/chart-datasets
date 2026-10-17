import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-c2eafbbd16fe3c71
export function buildChart() {
  return chart()
    .createCanvas({ width: 246, height: 242, margin: { left: 39, top: 5, right: 7, bottom: 37 } })
    .createData({ id: "sales-raw", values: data })
    .createComputedData({
      id: "sales-typed",
      as: "SalesN",
      expression: { op: "toNumber", operand: { field: "Sales" } }
    })
    .createTimeUnitData({
      id: "time-quarter",
      field: "Time",
      unit: "quarter"
    })
    .createSummaryData({
      id: "sales-quarterly",
      groupBy: "Time_quarter",
      aggregates: [{ op: "mean", field: "SalesN", as: "mean_Sales" }]
    })
    .createLinePlot({
      x: { field: "Time_quarter", fieldType: "temporal" },
      y: { field: "mean_Sales", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [1262304000000, 1325376000000], nice: false })
    .editYScale({ domain: [0, 90] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1262304000000, 1293840000000, 1325376000000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            flush: true,
            labelMap: [
              { value: 1262304000000, label: "2010 Q1" },
              { value: 1293840000000, label: "2011 Q1" },
              { value: 1325376000000, label: "2012 Q1" }
            ]
          }
        },
        title: { text: "Time (year-quarter)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Mean of Sales", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } });
}