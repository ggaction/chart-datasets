import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
export function buildChart() {
  return chart()
    .createCanvas({ width: 252, height: 311, margin: { left: 44, top: 74, right: 8, bottom: 37 } })
    .createData({ id: "carbon", values: data })
    .createComputedData({ id: "carbonNum", as: "Price_num", expression: { op: "toNumber", operand: { field: "Price" } } })
    .createWindowData({
      id: "carbonWindow",
      operations: [{ op: "movingMean", field: "Price_num", as: "rolling_mean", frame: { preceding: 15, following: 15 } }]
    })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "Price_num", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "gray", opacity: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "rolling_mean", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "red", strokeWidth: 3 })
    .editXScale({ domain: [1114905600000, 1664582400000], nice: false })
    .editYScale({ domain: [0, 100] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-carbon-glyphs", measurements: [{ text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "Futures price (€/tonne) with 30-day rolling mean", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 252.671875 }, { text: "Carbon Emissions Futures", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 165.421875 }, { text: "Carbon emissions futures price per tonne in euros", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 221.5966796875 }, { text: "Source: https://www.investing.com", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 152.5244140625 }] } })
    .createTitle({
      text: "Carbon Emissions Futures",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      offset: -10.283935546875,
      gap: 3.34375,
      alongOffset: -38.6845703125
    })
    .editTitle({
      subtitle: "Carbon emissions futures price per tonne in euros\nSource: https://www.investing.com"
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Futures price (€/tonne) with 30-day rolling mean", fontSize: 11, fontWeight: 700, offset: 32.1064453125, rotation: { value: -90, unit: "degrees" } }
    });
}
