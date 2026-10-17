// DOCS: doc-2e6240c00cb297cc, doc-e790db38fc2a278a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 247, margin: { left: 39, top: 10, right: 97, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "accelZScore", as: "accelerationZScore", expression: { op: "divide", left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } }, right: { constant: 2.8 } } })
    .filterData({ id: "filterHpValid", field: "Horsepower", predicate: { op: "gte", value: 0 } })
    .filterData({ id: "filterMpgValid", field: "Miles_per_Gallon", predicate: { op: "gte", value: 0 } })
    .createScatterPlot({
      x: "Horsepower",
      y: "Miles_per_Gallon",
      guides: false
    })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodePointRadius({ value: 3.872983346207417 })
    .editPointMark({ opacity: 1, stroke: false })
    .editColorScale({ palette: { name: "plasma", extent: [0.5, 1] }, domain: [8, 24.8] })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 }, count: 5 },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 }, count: 5 },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editYAxisTitle({ fontWeight: "bold" })
    .createHorizontalGrid({ count: 5 })
    .createVerticalGrid({ count: 5 })
    .editGrid({ horizontal: { color: '#ddd', lineWidth: 1 }, vertical: { color: '#ddd', lineWidth: 1 } })
    .createLegend({
      position: "right",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ target: "scatterPlot", fontFamily: "sans-serif", fontWeight: "bold" })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      title: "Acceleration"
    });
}