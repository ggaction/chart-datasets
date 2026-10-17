// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 443, height: 202, margin: { left: 85, top: 5, right: 158, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "signed",
      as: "signed_percentage",
      expression: {
        op: "if",
        condition: {
          op: "or",
          operands: [
            { op: "eq", left: { field: "type" }, right: { constant: "Strongly disagree" } },
            { op: "eq", left: { field: "type" }, right: { constant: "Disagree" } }
          ]
        },
        then: { field: "percentage" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "type" }, right: { constant: "Neither agree nor disagree" } },
          then: { op: "divide", left: { field: "percentage" }, right: { constant: 2 } },
          else: { constant: 0 }
        }
      }
    })
    .createWindowData({
      id: "stacked",
      partitionBy: "question",
      operations: [
        { op: "cumulativeSum", field: "percentage", as: "v2" },
        { op: "lag", field: "v2", as: "v1", offset: 1, default: 0 },
        { op: "movingSum", field: "signed_percentage", as: "offset", frame: { preceding: 1000000, following: 1000000 }, missing: "skip" }
      ]
    })
    .createComputedData({
      id: "nx",
      as: "nx",
      expression: { op: "subtract", left: { field: "v1" }, right: { field: "offset" } }
    })
    .createComputedData({
      id: "nx2",
      as: "nx2",
      expression: { op: "subtract", left: { field: "v2" }, right: { field: "offset" } }
    })
    .createBarPlot({
      x: {
        lower: "nx",
        upper: "nx2",
        fieldType: "quantitative"
      },
      y: {
        field: "question",
        fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({ domain: [-40, 100], zero: false, nice: false })
    .editYScale({
      domain: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({
      field: "type",
      fieldType: "nominal"
    })
    .encodeBarWidth({ band: 1 })
    .editColorScale({
      domain: ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"],
      range: ["#c30d24", "#f3a583", "#cccccc", "#94c6da", "#1770ab"]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-40, -20, 0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Percentage", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        values: ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8"],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 5 }
      },
      title: { text: "Question", fontSize: 11, fontWeight: 700, offset: 68 }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } })
    .createLegend({
      title: "Response",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}