// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 375, height: 389, margin: { left: 46, top: 52, right: 29, bottom: 37 } })
    .editCanvas({ background: "#fefefa" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typed", as: "amountNum", expression: { op: "toNumber", operand: { field: "amount" } } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-glyphs-1468",
        measurements: [
          { text: "\ud83d\uded2", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83c\udfe2", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udce6", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udc8a", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udcde", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udccc", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udecd", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83d\udcbb", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83c\udfe5", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "\ud83c\udf71", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 },
          { text: "Sector", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 29.9375 },
          { text: "0.0", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.5 },
          { text: "10M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "20M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "30M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "40M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "50M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "60M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "70M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "80M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "Amount (EUR)", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 71.8125 },
          { text: "Top 10 sectors w/ payment operations in ATM and POS terminals", fontFamily: "Roboto", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 363.3125 },
          { text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", fontFamily: "Roboto", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 288.140625 }
        ]
      }
    })    .createBarPlot({
      x: { field: "emoji", fieldType: "ordinal" },
      y: { field: "amountNum" },
      guides: false
    })
    .editXScale({ domain: ["🛒", "🏢", "📦", "💊", "📞", "📌", "🛍", "💻", "🏥", "🍱"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80000000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#f2af29" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 5.5 }
      },
      title: { text: "Sector", fontSize: 11, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
                labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0.0" },
            { value: 10000000, label: "10M" },
            { value: 20000000, label: "20M" },
            { value: 30000000, label: "30M" },
            { value: 40000000, label: "40M" },
            { value: 50000000, label: "50M" },
            { value: 60000000, label: "60M" },
            { value: 70000000, label: "70M" },
            { value: 80000000, label: "80M" }
          ]
        }
      },
      title: { text: "Amount (EUR)", fontSize: 11, offset: 35, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#44475a" })
    .editXAxisTicks({ color: "#44475a" })
    .editXAxisLabels({ color: "#44475a", fontFamily: "Roboto" })
    .editXAxisTitle({ color: "#44475a", fontFamily: "Roboto", fontWeight: 700 })
    .editYAxisLine({ color: "#44475a" })
    .editYAxisTicks({ color: "#44475a" })
    .editYAxisLabels({
      color: "#44475a",
      fontFamily: "Roboto"
    })
    .editYAxisTitle({ color: "#44475a", fontFamily: "Roboto", fontWeight: 700 })    .createGrid({ horizontal: {}, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      titleStyle: { fontSize: 13, fontFamily: "Roboto", fontWeight: 700 },
      alongOffset: -40.8916015625
    })
    .editTitle({
      subtitleStyle: { fontSize: 12, fontFamily: "Roboto", color: "#44475a" },
      gap: 2.8125,
      offset: -10.5
    })
    .editTitle({ subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", titleStyle: { color: "#44475a" } })    .createComputedData({
      id: "amountDisplay",
      as: "amountDisplay",
      expression: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "72900000" } }, then: { constant: "73M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "32600000" } }, then: { constant: "33M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "11300000" } }, then: { constant: "11M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "11000000" } }, then: { constant: "11M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "10000000" } }, then: { constant: "10M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "9400000" } }, then: { constant: "9.4M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "8700000" } }, then: { constant: "8.7M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "7200000" } }, then: { constant: "7.2M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "7100000" } }, then: { constant: "7.1M" }, else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "6800000" } }, then: { constant: "6.8M" }, else: { field: "amount" } } } } } } } } } } }
    })
    .createTextMark({ id: "barLabels", fill: "#44475a", fontSize: 11 })
    .encodeText({ target: "barLabels", field: "amountDisplay" })
    .encodeX({ target: "barLabels", field: "emoji", fieldType: "ordinal" })
    .encodeY({ target: "barLabels", field: "amountNum" })
    .editTextMark({ target: "barLabels", fontFamily: "Roboto", align: "center" })
    .editTextMark({ target: "barLabels", baseline: "middle", dy: -5 });
}