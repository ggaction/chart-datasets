import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0

export function buildChart() {
  return chart()
    .createCanvas({ width: 347, height: 385, margin: { left: 78, top: 40, right: 9, bottom: 45 } })
    .createData({ values: data })
    .filterData({ id: "worldDebtDefinedYears", field: "Years", noneOf: [""] })
    .createComputedData({ id: "debtGdpNum", as: "debtGdpNum", expression: { op: "toNumber", operand: { field: "Debt/GDP per capita" } } })
    .createTitle({ text: "Debt/GDP per capita staitsics-World ", alongOffset: -72, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "The following chart shows Debt/GDp per capita for the whole world", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400 } })
    .createBarPlot({
      x: { field: "Years", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "debtGdpNum" },
      guides: false
    })
    .editXScale({ type: "time", domain: [418409280000, 1632813120000], nice: false })
    .editYScale({ domain: [0, 16000000] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#245ace" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-labels",
        measurements: [
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "8,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 44.5 },
          { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.0625 },
          { text: "12,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.0625 },
          { text: "14,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.0625 },
          { text: "16,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.0625 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: {
          fontSize: 10, offset: 7,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: { text: "Years", fontSize: 11, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000],
        labels: {
          fontSize: 10, offset: 7
        }
      },
      title: { text: "Debt/GDP per capita", fontSize: 11, offset: 65 }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } }, title: { fontWeight: 700 } })
    .editYAxis({ ticksAndLabels: { labels: { format: ",.0f" } }, title: { fontWeight: 700 } });
}