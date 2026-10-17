// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 272, margin: { left: 29, top: 35, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({
      x: { field: "ValueNum", aggregate: "sum" },
      y: "Country",
      guides: false
    })
    .encodeColor({ field: "Medal Type", layout: "stack" })
    .editColorScale({ domain: ["Gold", "Silver", "Bronze"], range: ["#D4AF37", "#C0C0C0", "#9F7A34"] })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 110] })
    .editYScale({
      domain: ["USA", "CHN", "RUS", "GBR", "GER", "JPN", "AUS", "FRA", "KOR", "ITA"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-labels",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "110", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 15.953125 }
        ]
      }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Medals", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "London 2012 Medal Table",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ gap: 1, offset: -9, alongOffset: -23.67 })
    .editTitle({ subtitle: "Composition of medals for the top 10 countries. Source: ESPN" })
    .createLegend({ position: "bottom-right", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } });
}