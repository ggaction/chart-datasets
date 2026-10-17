import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 344, height: 376, margin: { left: 49, top: 52, right: 5, bottom: 24 } })
    .createData({ values: data })
    .createComputedData({ id: "issueAlias", as: "issue", expression: { field: "issueYear" } })
    .createComputedData({
      id: "redemptionPrefix",
      as: "redemptionPrefix",
      expression: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { field: "redemptionDate" }, search: " 0", replacement: " " }, search: " 1", replacement: " " }, search: " 2", replacement: " " }, search: " 3", replacement: " " }, search: " 0", replacement: "" }, search: " 1", replacement: "" }, search: " 2", replacement: "" }, search: " 3", replacement: "" }, search: " 4", replacement: "" }, search: " 5", replacement: "" }, search: " 6", replacement: "" }, search: " 7", replacement: "" }, search: " 8", replacement: "" }, search: " 9", replacement: "" }
    })
    .createComputedData({
      id: "redemptionAlias",
      as: "redemption",
      expression: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { field: "redemptionPrefix" }, search: "-Jan-", replacement: "" }, search: "-Feb-", replacement: "" }, search: "-Mar-", replacement: "" }, search: "-Apr-", replacement: "" }, search: "-May-", replacement: "" }, search: "-Jun-", replacement: "" }, search: "-Jul-", replacement: "" }, search: "-Aug-", replacement: "" }, search: "-Sep-", replacement: "" }, search: "-Oct-", replacement: "" }, search: "-Nov-", replacement: "" }, search: "-Dec-", replacement: "" }, search: " ", replacement: "" }
    })
    .createComputedData({
      id: "duration",
      as: "duration",
      expression: { op: "subtract", left: { op: "toNumber", operand: { field: "redemption" } }, right: { op: "toNumber", operand: { field: "issue" } } }
    })
    .createComputedData({ id: "amount", as: "amountNum", expression: { op: "toNumber", operand: { field: "issueAmount" } } })
    .createSummaryData({ id: "totals", groupBy: ["duration"], aggregates: [{ op: "sum", field: "amountNum", as: "sum_issueAmount" }] })
    .createBarPlot({ x: { field: "duration", fieldType: "ordinal" }, y: { field: "sum_issueAmount" }, guides: false })
    .editBarMark({ fill: "red" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [3, 4, 5, 6, 8, 10, 11, 12, 15, 18, 20, 21, 23, 24, 25, 30, 31, 32, 33, 34, 35, 38, 40, 41, 44, 49, 50, 51, 52, 53, 55], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 350000] })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      title: false,
      line: { color: "#888" },
      ticksAndLabels: {
        values: [3, 4, 5, 6, 8, 10, 11, 12, 15, 18, 20, 21, 23, 24, 25, 30, 31, 32, 33, 34, 35, 38, 40, 41, 44, 49, 50, 51, 52, 53, 55],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" }, overlap: "allow" }
      }
    })
    .createYAxis({
      title: false,
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
      }
    })
    .createTitle({ text: "UK debt - by duration at issue", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -43.1474609375 })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13, gap: 1 })
    .editTitle({ subtitle: "£ millions. Source: DMO\n" });
}

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d