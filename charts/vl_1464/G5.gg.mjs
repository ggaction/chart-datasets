// DOCS: doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 377,
      height: 557,
      margin: { left: 72, top: 52, right: 5, bottom: 205 }
    })
    .editCanvas({ background: "#fefefa" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-metrics",
        measurements: [
          {
            text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
            fontFamily: "Roboto",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 363.3125
          },
          {
            text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: 400,
            fontStyle: "normal",
            width: 288.140625
          },
          {
            text: "0",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 5.0
          },
          {
            text: "10,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "20,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "30,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "40,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "50,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "60,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "70,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          },
          {
            text: "80,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 45.0
          }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "amountNumber",
      as: "amountNum",
      expression: { op: "toNumber", operand: { field: "amount" } }
    })
    .createSortedData({
      id: "sectorsSorted",
      source: "amountNumber",
      sortBy: [{ field: "sector", order: "descending" }]
    })
    .createBarPlot({
      x: "sector",
      y: "amountNum",
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: ["Traditional trade", "Telecommunications and utilities", "Technology, Culture and Entertainment", "Public administration services", "Pharmacies and drug stores", "Other Services", "Hypermarkets and Supermarkets", "Health care services", "Consumer Goods", "Catering services, restaurants and similar establishments"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .editYScale({ domain: [0, 80000000] })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      alongOffset: -67,
      titleStyle: { fontFamily: "Roboto", fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
      subtitleStyle: { fontFamily: "Roboto", fontSize: 12 },
      offset: -13
    })
    .editTitle({
      titleStyle: { color: "#44475a" },
      subtitleStyle: { fontWeight: 400, color: "#44475a" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 4 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [{ value: "Catering services, restaurants and similar establishments", label: "Catering services, restaurants and similar …" }],
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "sector",
        fontSize: 11,
        offset: 198
      }
    })
    .editXAxisLine({ color: "#44475a" })
    .editXAxisTicks({ color: "#44475a" })
    .editXAxisLabels({ fontFamily: "Roboto", color: "#44475a" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000, 50000000, 60000000, 70000000, 80000000],
        ticks: { length: 4 },
        labels: {
          fontSize: 10,
          fontFamily: "Roboto",
          offset: 7,
          format: ","
        }
      },
      title: {
        text: "Number of operations",
        fontSize: 11,
        offset: 61
      }
    })
    .editYAxisLine({ color: "#44475a" })
    .editYAxisTicks({ color: "#44475a" })
    .editYAxisLabels({ color: "#44475a" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "Roboto", color: "#44475a" })
    .createGrid({
      horizontal: {}
    })
    .editHorizontalGrid({ color: "#ddd" });
}