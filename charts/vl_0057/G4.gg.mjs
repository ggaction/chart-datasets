// DOCS: doc-0a1e48878a814143 doc-fb3b01cca895bdad doc-b30469a9489ccd34 doc-28f4ef7a7aa5765c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 367, height: 372, margin: { left: 48, top: 38, right: 19, bottom: 34 } })
    .createData({ values: data })
    .createComputedData({ id: "amountNum", as: "amount_n", expression: { op: "toNumber", operand: { field: "amount" } } })
    .createBarPlot({ x: "emoji", y: "amount_n", guides: false })
    .editBarMark({ fill: "#f2af29" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["🛒", "🏢", "📦", "💊", "📞", "📌", "🛍", "💻", "🏥", "🍱"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 80000000] })
    .createGrid({ horizontal: { values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000] }, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .applyTextMetrics({ profile: {"schemaVersion":1,"id":"actual-source-glyphs-0057","measurements":[{"text":"🛒","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"🏢","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"📦","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"💊","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"📞","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"📌","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"🛍","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"💻","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"🏥","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"🍱","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":15.0},{"text":"Sector","fontFamily":"Roboto","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":29.9375},{"text":"$0.0","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":17.5},{"text":"$10M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$20M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$30M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$40M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$50M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$60M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$70M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"$80M","fontFamily":"Roboto","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":23.90625},{"text":"Amount","fontFamily":"Roboto","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":38.515625},{"text":"Top 10 sectors w/ payment operations in ATM and POS terminals","fontFamily":"Roboto","fontSize":13,"fontWeight":700,"fontStyle":"normal","width":363.3125},{"text":"Lisbon (Municipality) | April 2020 | Source: SIBS Analytics","fontFamily":"Roboto","fontSize":12,"fontWeight":400,"fontStyle":"normal","width":288.140625}]} })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      alongOffset: -45.8916015625,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "Roboto", color: "black" }
    })
    .editTitle({ subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "Roboto", color: "black" }, gap: 2.8125, offset: -13.5 })
    .editTitle({ subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 4.5, fontFamily: "Roboto" }
      },
      title: { text: "Sector", fontSize: 11, offset: 26, fontFamily: "Roboto" }
    })
    .editXAxis({ line: { color: "#44475a" }, ticksAndLabels: { labels: { color: "#44475a" } }, title: { fontWeight: 700, color: "#44475a" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          fontFamily: "Roboto",
          labelMap: [
            { value: 0, label: "$0.0" },
            { value: 10000000, label: "$10M" },
            { value: 20000000, label: "$20M" },
            { value: 30000000, label: "$30M" },
            { value: 40000000, label: "$40M" },
            { value: 50000000, label: "$50M" },
            { value: 60000000, label: "$60M" },
            { value: 70000000, label: "$70M" },
            { value: 80000000, label: "$80M" }
          ]
        }
      },
      title: { text: "Amount", fontSize: 11, offset: 40, rotation: { value: -90, unit: "degrees" }, fontFamily: "Roboto" }
    })
    .editYAxis({ line: { color: "#44475a" }, ticksAndLabels: { ticks: { color: "#44475a" }, labels: { color: "#44475a" } }, title: { fontWeight: 700, color: "#44475a" } });
}
