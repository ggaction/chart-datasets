// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 332, height: 374, margin: { left: 24, top: 52, right: 8, bottom: 22 } })
    .createData({ id: "src", values: data })
    .createComputedData({ id: "yearNumeric", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    
    .createFoldData({ id: "folded", fields: ["wages", "asset1"], as: { key: "asset", value: "value" } })
  .filterData({ id: "foldNonempty", field: "value", noneOf: [""] })
    .createComputedData({ id: "plot", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .filterData({ id: "pos", field: "valueNum", predicate: { op: "gt", value: 0 } })
    .createLinePlot({
      x: { field: "yearNum", fieldType: "quantitative" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [0, 30] })
    .editYScale({ target: "linePlot", domain: [0, 11] })
    .encodeColor({ field: "asset" })
    .editColorScale({ target: "linePlot", domain: ["asset1", "wages"], range: ["blue", "rgb(128,0,0)"] })
    .encodeStrokeWidth({ target: "linePlot", value: 1 })
.createScatterPlot({ x: { field: "yearNum", fieldType: "quantitative" }, y: { field: "valueNum", fieldType: "quantitative" }, guides: false })
.encodeColor({ field: "asset" })
.editXScale({ target: "scatterPlot", domain: [0, 30] })
.editYScale({ target: "scatterPlot", domain: [0, 11] })
.editColorScale({ target: "scatterPlot", domain: ["asset1", "wages"], range: ["blue", "rgb(128,0,0)"] })
.editPointMark({ stroke: false })
  .encodeOpacity({ target: "scatterPlot", value: 1 })
.encodePointRadius({ value: 2.7386127875258306 })
    .createGrid({ horizontal: true, vertical: true })
.editHorizontalGrid({ color: "#ddd" })
.editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif", color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif", color: "black" })
    .createTitle({
      text: "Assets and wages",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Correlation", offset: -13, alongOffset: -18.12 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { fontStyle: "italic", color: "black" } });
}