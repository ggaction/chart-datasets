// DOCS: doc-6c2c08869091f6a0, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 375, height: 389, margin: { left: 46, top: 52, right: 29, bottom: 37 } })
    .editCanvas({ background: "#fefefa" })
    .createData({ values: data })
    .createComputedData({ id: "amountNum", as: "amountNum", expression: { op: "toNumber", operand: { field: "amount" } } })
    .createComputedData({
      id: "amountLabel",
      as: "amountLabel",
      expression: {
        op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "72900000" } }, then: { constant: "73M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "32600000" } }, then: { constant: "33M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "11300000" } }, then: { constant: "11M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "11000000" } }, then: { constant: "11M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "10000000" } }, then: { constant: "10M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "9400000" } }, then: { constant: "9.4M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "8700000" } }, then: { constant: "8.7M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "7200000" } }, then: { constant: "7.2M" },
        else: { op: "if", condition: { op: "eq", left: { field: "amount" }, right: { constant: "7100000" } }, then: { constant: "7.1M" },
        else: { constant: "6.8M" } } } } } } } } } } })
    .createBarPlot({
      x: { field: "emoji", fieldType: "nominal" },
      y: { field: "amountNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["🛒", "🏢", "📦", "💊", "📞", "📌", "🛍", "💻", "🏥", "🍱"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80000000] })
    .editBarMark({ fill: "#f2af29" })
    .encodeBarWidth({ pixels: 27 })
    .createTextMark({ id: "barLabels", data: "amountLabel", fill: "#44475a" })
    .editTextMark({ target: "barLabels", dy: -5 })
    .editTextMark({ target: "barLabels", fontSize: 11, fontFamily: "Roboto" })
    .editTextMark({ target: "barLabels", align: "center", baseline: "middle" })
    .encodeX({ target: "barLabels", field: "emoji", fieldType: "nominal" })
    .encodeY({ target: "barLabels", field: "amountNum", fieldType: "quantitative" })
    .encodeText({ target: "barLabels", field: "amountLabel" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "actual-source-glyphs-1469", measurements: [{ text: "🛒", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🏢", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📦", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "💊", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📞", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📌", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🛍", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "💻", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🏥", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🍱", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "Sector", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 29.9375 }, { text: "0.0", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.5 }, { text: "10M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "20M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "30M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "40M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "50M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "60M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "70M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "80M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "Amount (EUR)", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 71.8125 }, { text: "Top 10 sectors w/ payment operations in ATM and POS terminals", fontFamily: "Roboto", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 363.3125 }, { text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", fontFamily: "Roboto", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 288.140625 }] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5 }
      },
      title: { text: "Sector", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#44475a" })
    .editXAxisTicks({ color: "#44475a" })
    .editXAxisLabels({ fontFamily: "Roboto", color: "#44475a" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 7,
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
    .editYAxisLine({ color: "#44475a" })
    .editYAxisTicks({ color: "#44475a" })
    .editYAxisLabels({ fontFamily: "Roboto", color: "#44475a" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "Roboto" },
      alongOffset: -40.8916015625
    })
    .editTitle({ subtitleStyle: { fontSize: 12, fontFamily: "Roboto", color: "#44475a" }, gap: 2.8125, offset: -10.5 })
    .editTitle({ subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", titleStyle: { color: "#44475a" } });
}