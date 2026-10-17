// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 375,
      height: 389,
      margin: { left: 46, top: 52, right: 29, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createComputedData({
      id: "plot",
      as: "amountNum",
      expression: { op: "toNumber", operand: { field: "amount" } }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-text-metrics",
        measurements: [
          { text: "Top 10 sectors w/ payment operations in ATM and POS terminals", fontFamily: "Roboto", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 363.3125 },
          { text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", fontFamily: "Roboto", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 288.140625 }
        ]
      }
    })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      titleStyle: { fontSize: 13, fontFamily: "Roboto", fontWeight: 700 },
      offset: -13,
      alongOffset: -40.8916015625
    })
    .editTitle({
      titleStyle: { color: "#44475a" },
      subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
      subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "Roboto", color: "#44475a" }
    })
    .editCanvas({ background: "#fefefa" })
    .createBarPlot({
      x: { field: "emoji", fieldType: "nominal" },
      y: { field: "amountNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: ["🍱", "🏢", "🏥", "💊", "💻", "📌", "📞", "📦", "🛍", "🛒"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 80000000], zero: true, nice: false })
    .editBarMark({ fill: "#f2af29" })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: { color: "#44475a" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#44475a" },
        labels: { fontSize: 10, fontFamily: "Roboto", color: "#44475a", offset: 7 }
      },
      title: { text: "Sector", fontSize: 11, fontWeight: 700, fontFamily: "Roboto", color: "#44475a", offset: 30 }
    })
    .createYAxis({
      line: { color: "#44475a" },
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5, color: "#44475a" },
        labels: { fontSize: 10, fontFamily: "Roboto", color: "#44475a", offset: 7, labelMap: [ { value: 0, label: "0.0" }, { value: 10000000, label: "10M" }, { value: 20000000, label: "20M" }, { value: 30000000, label: "30M" }, { value: 40000000, label: "40M" }, { value: 50000000, label: "50M" }, { value: 60000000, label: "60M" }, { value: 70000000, label: "70M" }, { value: 80000000, label: "80M" } ] }
      },
      title: { text: "Amount (EUR)", fontSize: 11, fontWeight: 700, fontFamily: "Roboto", color: "#44475a", offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { count: 8, color: "#ddd", lineWidth: 1 } });
}