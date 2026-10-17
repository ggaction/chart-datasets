// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 431,
      height: 364,
      margin: { left: 44, top: 27, right: 87, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "rawStep",
      as: "stepN",
      expression: { op: "toNumber", operand: { field: "step" } }
    })
    .createComputedData({
      id: "rawNum",
      as: "lossN",
      expression: { op: "toNumber", operand: { field: "loss" } }
    })
    .createLinePlot({
      x: { field: "stepN", fieldType: "quantitative" },
      y: { field: "lossN", fieldType: "quantitative" },
      guides: false
    })
    .createRegressionData({ id: "fit", x: "stepN", y: "lossN" })
    .editRegressionData({ target: "fit", groupBy: "rev", method: "loess" })
    .editRegressionData({ target: "fit", span: 0.3, robustIterations: 2 })
    .bindMarkData({ target: "linePlot", data: "fit" })
    .createWindowData({
      id: "endpointWindow",
      source: "rawNum",
      sortBy: [{ field: "stepN", order: "descending" }],
      operations: [{ op: "rowNumber", as: "rn" }]
    })
    .filterData({
      id: "maxRow",
      field: "rn",
      predicate: { op: "eq", value: 1 }
    })
    .encodeColor({ field: "rev", fieldType: "nominal" })
    .editLineMark({ strokeWidth: 2 })
    .createLineMark({ id: "rawLine", data: "rawNum", strokeWidth: 2 })
    .editLineMark({ target: "rawLine", opacity: 0.2 })
    .encodeX({ target: "rawLine", field: "stepN", fieldType: "quantitative" })
    .encodeY({ target: "rawLine", field: "lossN", fieldType: "quantitative" })
    .encodeGroup({ target: "rawLine", field: "rev" })
    .encodeColor({ target: "rawLine", field: "rev", fieldType: "nominal" })
    .createPointMark({ id: "maxPoint", data: "maxRow" })
    .encodeX({ target: "maxPoint", field: "stepN", fieldType: "quantitative" })
    .encodeY({ target: "maxPoint", field: "lossN", fieldType: "quantitative" })
    .encodeColor({ target: "maxPoint", field: "rev", fieldType: "nominal" })
    .editPointMark({ target: "maxPoint", stroke: false, opacity: 1 })
    .encodePointRadius({ target: "maxPoint", value: Math.sqrt(10) / 2 })
    .editXScale({ domain: [0, 11000], nice: false })
    .editYScale({ domain: [310, 390], nice: false })
    .editColorScale({
      target: "linePlot",
      domain: ["workspace"],
      range: ["#4c78a8"]
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 8,
        ticks: { color: "#888", length: 5 },
        labels: { offset: 7, format: ",.0f", fontSize: 10, fontFamily: "sans-serif", flush: true }
      },
      title: {
        text: "step",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 27.578125
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 8,
        ticks: { color: "#888", length: 5 },
        labels: { offset: 7, format: ".0f", fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "loss",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        rotation: { value: -90, unit: "degrees" },
        offset: 32.6845703125
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      target: "maxPoint",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editLegend({
      title: "rev",
      symbol: {
        layers: [
          {
            type: "point",
            shape: "circle",
            size: 5,
            fill: "#4c78a8",
            stroke: "#4c78a8",
            strokeWidth: 1.5
          }
        ]
      }
    })
    .editLegendBlock({
      target: "maxPoint",
      channel: "color",
      symbol: { opacity: 0.2 }
    })
    .createTitle({
      text: "val/loss",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center" });
}