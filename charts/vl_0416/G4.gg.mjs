// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 339, height: 369, margin: { left: 33, top: 47, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["Entry rate", "Exit Rate"], as: { key: "metric", value: "value" } })
    .filterData({ id: "filtered", field: "year", predicate: { op: "gt", value: "1997" } })
    .createComputedData({ id: "xnum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "ynum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: "yearNum", y: "valueNum", guides: false })
    .encodeColor({ field: "metric" })
    .editColorScale({ range: ["blue", "orange"] })
    .editXScale({ domain: [1998, 2020] })
    .editYScale({ domain: [0, 0.13] })
    .encodeStrokeWidth({ value: 1 })
    .createPointMark({ id: "sourcePoints", stroke: "none", strokeWidth: 0 })
    .encodeX({ field: "yearNum", scale: { id: "x" } })
    .encodeY({ field: "valueNum", scale: { id: "y" } })
    .encodeColor({ field: "metric", scale: { id: "color" } })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1 })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        values: [1998, 2002, 2006, 2010, 2014, 2018],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } } })
    .createYAxis({
      title: false,
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ".0%" } } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "bottom-left",
        title: false,
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5.75, stroke: "none", strokeWidth: 0 }] }
      }
    })
    .createTitle({
      text: "Entry and exit rates",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -12
    })
    .editTitle({ gap: 3 })
    .editTitle({ subtitle: "Firm entry and exit as % of active firms. Source: BSD\n", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, alongOffset: -27.0146484375 });
}