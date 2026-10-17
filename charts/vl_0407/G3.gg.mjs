// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 386, margin: { left: 29, top: 64, right: 6, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["RLP hypotetical", "RLP"], as: { key: "metric", value: "value" } })
    .createComputedData({
      id: "clean",
      as: "metricClean",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "metric" }, right: { constant: "RLP hypotetical" } },
        then: { constant: "RLP - Trend" },
        else: { constant: "RLP - Actual" }
      }
    })
    .filterData({ id: "filtered", field: "year", predicate: { op: "gt", value: "1997" } })
    .createComputedData({ id: "xnum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "ynum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "yearNum" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeGroup({ field: "metricClean" })
    .encodeColor({ field: "metricClean" })
    .editColorScale({ domain: ["RLP - Actual", "RLP - Trend"], range: ["blue", "orange"] })
    .editXScale({ domain: [1998, 2020], nice: false })
    .editYScale({ domain: [50, 130], nice: false })
    .encodeStrokeWidth({ value: 1 })
    .createPointMark({ id: "sourcePoints", stroke: "none", strokeWidth: 0 })
    .encodeX({ field: "yearNum", scale: { id: "x" } })
    .encodeY({ field: "valueNum", scale: { id: "y" } })
    .encodeColor({ field: "metricClean", scale: { id: "color" } })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1998, 2002, 2006, 2010, 2014, 2018],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [50, 60, 70, 80, 90, 100, 110, 120, 130],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "top-left",
        title: false,
        symbol: { layers: [{ type: "point", shape: "circle", size: 5.75, stroke: "none", strokeWidth: 0 }] },
        labels: { fontSize: 10, color: "black" }
      }
    })
    .createTitle({
      text: "Productivity - actual and trend",
      alongOffset: -23.6845703125,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({ offset: -12, gap: 3 })
    .editTitle({
      subtitle: "Revenue labour productivity (£k per employee). Source: BSD\nTrend line is based on applying pre-2009 avg annual growth rate\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}