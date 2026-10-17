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
      x: { field: "yearNum", fieldType: "quantitative", scale: { domain: [0, 30] } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 11] } },
      guides: false
    })
    .encodeColor({ field: "asset", scale: { type: "ordinal", domain: ["asset1", "wages"], range: ["blue", "rgb(128,0,0)"] } })
    .editLineMark({ strokeWidth: 1 })
.createScatterPlot({ x: { field: "yearNum", fieldType: "quantitative", scale: { domain: [0, 30] } }, y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 11] } }, guides: false })
.encodeColor({ field: "asset", scale: { type: "ordinal", domain: ["asset1", "wages"], range: ["blue", "rgb(128,0,0)"] } })
.editPointMark({ opacity: 1, stroke: false })
.encodePointRadius({ value: 2.7386127875258306 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
      },
      title: false
    })
    .createTitle({
      text: "Assets and wages",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontStyle: "italic", fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Correlation", offset: -13, alongOffset: -18.12 });
}