// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot basic)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 375,
      height: 389,
      margin: { left: 46, top: 52, right: 29, bottom: 37 }
    })
    .editCanvas({ background: "#fefefa" })
    .createData({ values: data })
    .createComputedData({
      id: "amounts",
      as: "amount_num",
      expression: { op: "toNumber", operand: { field: "amount" } }
    })
    .createBarPlot({
      x: { field: "emoji", fieldType: "ordinal" },
      y: { field: "amount_num", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#f2af29" })
    .editXScale({
      domain: ["\u{1F6D2}", "\u{1F3E2}", "\u{1F4E6}", "\u{1F48A}", "\u{1F4DE}", "\u{1F4CC}", "\u{1F6CD}", "\u{1F4BB}", "\u{1F3E5}", "\u{1F371}"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 80000000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "Roboto", offset: 7 }
      },
      title: {
        text: "Sector",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "Roboto",
        offset: 31
      }
    })
    .editXAxis({
      line: { color: "#44475a" },
      ticksAndLabels: {
        ticks: { color: "#44475a" },
        labels: { color: "#44475a" }
      },
      title: { color: "#44475a" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "Roboto",
          offset: 7,
          format: "auto",
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
      title: {
        text: "Amount (EUR)",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "Roboto",
        offset: 34,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      line: { color: "#44475a" },
      ticksAndLabels: {
        ticks: { color: "#44475a" },
        labels: { color: "#44475a" }
      },
      title: { color: "#44475a" }
    })
    .createGrid({ horizontal: { color: "#ddd" } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-fonts",
        measurements: [
          {
            text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 700,
            width: 363.3125
          },
          {
            text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: 400,
            width: 288.140625
          }
        ]
      }
    })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      titleStyle: { fontSize: 13, fontFamily: "Roboto", fontWeight: 700 },
      alongOffset: -40.8916015625
    })
    .editTitle({
      subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
      subtitleStyle: { fontSize: 12, fontFamily: "Roboto", color: "#44475a" },
      offset: -11
    })
    .editTitle({
      gap: 2,
      titleStyle: { color: "#44475a" }
    });
}