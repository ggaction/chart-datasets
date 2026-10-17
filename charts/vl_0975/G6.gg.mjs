import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 272, margin: { left: 36, top: 40, right: 8, bottom: 32 } })
    .createData({ id: "rents", values: data })
    .createComputedData({ id: "rentsN", as: "RatioN", expression: { op: "toNumber", operand: { field: "Ratio" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "RatioN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1577836800000] })
    .editYScale({ domain: [2, 4], zero: false, nice: false })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "RatioN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1577836800000] })
    .editYScale({ domain: [2, 4], zero: false, nice: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 1, flush: true }
      },
      title: { text: "Year", fontSize: 11, offset: 22 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [2, 2.5, 3, 3.5, 4],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 1 }
      },
      title: { text: "Ratio (oil:gas)", fontSize: 11, offset: 24, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisLabels({ format: ".1f" })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Ratio of rents",
      titleStyle: { fontSize: 13 },
      alongOffset: -31
    })
    .editTitle({
      titleStyle: { fontWeight: 700 }
    })
    .editTitle({ subtitle: "Rent % of GDP ratio (oil:gas) , Source: World Bank", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 });
}
