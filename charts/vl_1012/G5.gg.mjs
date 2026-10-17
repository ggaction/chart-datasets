import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-dfae58344d5a524e
export function buildChart() {
  return chart()
    .createCanvas({ width: 309, height: 385, margin: { left: 44, top: 40, right: 5, bottom: 45 } })
    .createData({ values: data })
    .createComputedData({
      id: "billionsNum",
      as: "BillionsN",
      expression: { op: "toNumber", operand: { field: "Billions" } }
    })
    .createTitle({
      text: "Total IMF Credit Outstading ",
      alongOffset: -38.68,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      subtitle: "Total (billions) outstanding credit of all members. Source: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      offset: -7
    })
    .createBarPlot({
      x: {
        field: "Years",
        fieldType: "temporal",
        temporalUnit: "year",
      },
      y: { field: "BillionsN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "time", domain: [417778560000, 1664979840000], nice: false })
    .editYScale({ domain: [0, 110] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#3662f1" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-year-labels",
        measurements: [
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "Years", fontSize: 11, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Credit Outstading (Billions)", fontSize: 11, offset: 26 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}