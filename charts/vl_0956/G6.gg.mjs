// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 352, height: 389, margin: { left: 44, top: 52, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "priceNum", as: "priceNum", expression: { op: "toNumber", operand: { field: "Price" } } })
    .createWindowData({
      id: "rolled",
      operations: [{ op: "movingMean", field: "priceNum", as: "rolling_mean", frame: { preceding: 15, following: 15 } }]
    })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "priceNum" },
      guides: false
    })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "gray" })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "rolling_mean" },
      guides: false
    })
    .encodeStroke({ value: "red" })
    .encodeStrokeWidth({ value: 3 })
    .editXScale({ domain: [1114905600000, 1664582400000], nice: false })
    .editYScale({ domain: [0, 100], nice: false })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-carbon-glyphs",
        measurements: [
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "Futures price (€/tonne) with 30-day rolling mean", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 252.671875 },
          { text: "Carbon Emissions Futures", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 165.421875 },
          { text: "Carbon emissions futures price per tonne in euros", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 221.5966796875 },
          { text: "Source: https://www.investing.com", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 152.5244140625 }
        ]
      }
    })
    .createTitle({
      text: "Carbon Emissions Futures",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -10.953125, gap: 3.34375, alongOffset: -38.6845703125 })
    .editTitle({
      subtitle: "Carbon emissions futures price per tonne in euros\nSource: https://www.investing.com",
      titleStyle: { fontWeight: "700" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: "700" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Futures price (\u20AC/tonne) with 30-day rolling mean", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTitle({ fontWeight: "700" });
}