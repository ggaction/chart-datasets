// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 242,
      height: 267,
      margin: { left: 34, top: 35, right: 8, bottom: 32 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "oilNum",
      as: "oil",
      expression: { op: "toNumber", operand: { field: "Oil rents (% of GDP)" } }
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "oil", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "oil", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editXScale({ target: "linePlot", domain: [631152000000, 1577836800000] })
    .editYScale({ target: "linePlot", domain: [0, 16], zero: true })
    .editXScale({ target: "scatterPlot", domain: [631152000000, 1577836800000] })
    .editYScale({ target: "scatterPlot", domain: [0, 16], zero: true })
    .createTitle({
      text: "Russian oil rents",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({
      subtitle: "Oil rents as a % of GDP, Source: World Bank",
      offset: -12,
      alongOffset: -28.12
    })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif" }, subtitleStyle: { fontFamily: "sans-serif", fontStyle: "italic" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, flush: true }
      },
      title: { text: "Year", fontSize: 11, offset: 22 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Oil rents (% of GDP)", fontSize: 11, offset: 24 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" });
}