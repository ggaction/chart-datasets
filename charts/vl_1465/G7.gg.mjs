// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-b257fb08998617a5 doc-bedf05337affd6f4
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
            width: 363.3125
          },
          {
            text: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: 400,
            width: 288.140625
          },
          {
            text: "Traditional trade",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 66.578125
          },
          {
            text: "Telecommunications and utilities",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 132.609375
          },
          {
            text: "Technology, Culture and Entertainment",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 157.5048828125
          },
          {
            text: "Public administration services",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 120.546875
          },
          {
            text: "Pharmacies and drug stores",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 109.703125
          },
          {
            text: "Other Services",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 59.15625
          },
          {
            text: "Hypermarkets and Supermarkets",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 131.078125
          },
          {
            text: "Health care services",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 80.515625
          },
          {
            text: "Consumer Goods",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 69.734375
          },
          {
            text: "Catering services, restaurants and similar …",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 177.171875
          },
          {
            text: "0",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 5.0
          },
          {
            text: "10,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "20,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "30,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "40,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "50,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "60,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "70,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          },
          {
            text: "80,000,000",
            fontFamily: "Roboto",
            fontSize: 10,
            fontWeight: 400,
            width: 45.0
          }
        ]
      }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "ops",
      as: "amountNum",
      expression: { op: "toNumber", operand: { field: "amount" } }
    })
    .createBarPlot({
      x: { field: "sector", fieldType: "nominal" },
      y: { field: "amountNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: [
        "Traditional trade",
        "Telecommunications and utilities",
        "Technology, Culture and Entertainment",
        "Public administration services",
        "Pharmacies and drug stores",
        "Other Services",
        "Hypermarkets and Supermarkets",
        "Health care services",
        "Consumer Goods",
        "Catering services, restaurants and similar establishments"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 80000000], zero: true })
    .editBarMark({ fill: "#f2af29" })
    .encodeBarWidth({ pixels: 27 })
    .createTitle({
      text: "Top 10 sectors w/ payment operations in ATM and POS terminals",
      titleStyle: { fontFamily: "Roboto", fontSize: 13, fontWeight: 700 },
      alongOffset: -67
    })
    .editTitle({
      subtitle: "Lisbon (Municipality) | April 2020 | Source: SIBS Analytics",
      subtitleStyle: { fontFamily: "Roboto", fontSize: 12, color: "#44475a" },
      offset: -13
    })
    .editTitle({ gap: 3, titleStyle: { color: "#44475a" } })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" },
          labelMap: [
            {
              value: "Catering services, restaurants and similar establishments",
              label: "Catering services, restaurants and similar …"
            }
          ]
        }
      },
      title: {
        text: "sector",
        fontSize: 11,
        offset: 196
      }
    })
    .editXAxisLine({ color: "#44475a" })
    .editXAxisTicks({ color: "#44475a" })
    .editXAxisLabels({ color: "#44475a", fontFamily: "Roboto" })
    .editXAxisTitle({ color: "#44475a", fontFamily: "Roboto", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Number of operations",
        fontSize: 11,
        offset: 64
      }
    })
    .editYAxisLine({ color: "#44475a" })
    .editYAxisTicks({ color: "#44475a" })
    .editYAxisLabels({ format: ",", color: "#44475a", fontFamily: "Roboto" })
    .editYAxisTitle({ color: "#44475a", fontFamily: "Roboto", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}
