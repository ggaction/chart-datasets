// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const order = ["🛒", "🏢", "📦", "💊", "📞", "📌", "🛍", "💻", "🏥", "🍱"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 375, height: 378, margin: { left: 46, top: 41, right: 29, bottom: 37 } })
    .editCanvas({ background: "#fefefa" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "num", as: "amountN", expression: { op: "toNumber", operand: { field: "amount" } } })
    .createBarPlot({
      x: { field: "emoji" },
      y: { field: "amountN" },
      guides: false
    })
    .editXScale({ domain: order, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80000000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#f2af29" })
    .createTextMark({ id: "valueText", data: "num", fontSize: 11 })
    .editTextMark({ target: "valueText", fill: "#44475a" })
    .editTextMark({ target: "valueText", fontFamily: "Roboto", align: "center" })
    .editTextMark({ target: "valueText", baseline: "middle", dy: -5 })
    .encodeX({ target: "valueText", field: "emoji", fieldType: "ordinal" })
    .encodeY({ target: "valueText", field: "amountN" })
    .encodeText({ target: "valueText", field: "amount" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "actual-source-glyphs-1470", measurements: [ { text: "🛒", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🏢", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📦", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "💊", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📞", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "📌", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🛍", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "💻", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🏥", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "🍱", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.0 }, { text: "Sector", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 29.9375 }, { text: "0.0", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.5 }, { text: "10M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "20M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "30M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "40M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "50M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "60M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "70M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "80M", fontFamily: "Roboto", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 }, { text: "Amount (EUR)", fontFamily: "Roboto", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 71.8125 }, { text: "Top 10 sectors w/ payment operations in ATM and POS terminals", fontFamily: "Roboto", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 363.3125 }, { text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics", fontFamily: "Roboto", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 288.140625 } ] } })
    .createTitle({ text: "Top 10 sectors w/ payment operations in ATM and POS terminals", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "Roboto", color: "black" }, alongOffset: -40.8916015625 })
    .editTitle({ subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "Roboto", color: "black" }, gap: 2.8125, offset: -10.5 })
    .editTitle({ subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 5.5 } },
      title: { text: "Sector", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#44475a" })
    .editXAxisTicks({ color: "#44475a" })
    .editXAxisLabels({ color: "#44475a", fontFamily: "Roboto" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000],
        ticks: {},
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
    .editYAxisLabels({ color: "#44475a", fontFamily: "Roboto" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createGrid({ horizontal: {} })
    .editHorizontalGrid({ color: "#ddd" });
}