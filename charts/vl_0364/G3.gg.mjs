// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1 — createBarPlot temporal x / quantitative y, summary aggregation, complete axes
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 344,
      height: 374,
      margin: { left: 49, top: 52, right: 5, bottom: 22 }
    })
    .createData({ id: "gilts", values: data })
    .createTimeUnitData({
      id: "giltYears",
      field: "redemptionDate",
      unit: "year"
    })
    .createComputedData({
      id: "issueAmountNum",
      as: "issueAmount_num",
      expression: { op: "toNumber", operand: { field: "issueAmount" } }
    })
    .createSummaryData({
      id: "giltSummary",
      groupBy: ["redemptionDate_year"],
      aggregates: [{ field: "issueAmount_num", op: "sum", as: "sum_issueAmount" }]
    })
    .createBarPlot({
      x: { field: "redemptionDate_year", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "sum_issueAmount" },
      guides: false
    })
    .editBarMark({ fill: "red" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [1612254857142, 3279194742857], range: [49, 339], nice: false })
    .editYScale({ domain: [0, 160000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1735689600000, 1893456000000, 2051222400000, 2208988800000,
          2366755200000, 2524521600000, 2682288000000, 2840054400000,
          2997820800000, 3155587200000
        ],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({ labels: { format: "%Y" } })
    .editYAxis({ labels: { format: ",.0f" } })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createTitle({
      text: "UK debt - by redemption date",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "\u00A3 millions. Source: DMO", gap: 1 })
    .editTitle({ offset: -13, alongOffset: -43.15 });
}