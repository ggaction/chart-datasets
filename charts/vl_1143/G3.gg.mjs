// DOCS: doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 294, height: 370, margin: { left: 29, top: 40, right: 5, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({
      id: "billions",
      as: "billions",
      expression: { op: "toNumber", operand: { field: "Totals_billions" } }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "billions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [417778560000, 1664979840000] })
    .editYScale({ domain: [0, 110], zero: true })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#86d0bb" })
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
        values: [473508480000, 631152000000, 788966400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: {
          offset: 7,
          fontSize: 10,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: {},
        labels: {
          offset: 7,
          fontSize: 10
        }
      },
      title: false
    })
    .createTitle({
      text: "IMF Lending Outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ alongOffset: -23.7 })
    .editTitle({ subtitle: "Credit Outstanding to all members, SDRs (billions), Source IMF", offset: -13, gap: 1 });
}