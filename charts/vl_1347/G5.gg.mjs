// DOCS: doc-e790db38fc2a278a, doc-964c0bc52c92a0d3, doc-bc26da5598d35bae, doc-2e6240c00cb297cc, doc-5b80d9e7442172a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 319,
      height: 327,
      margin: { left: 33, top: 10, right: 6, bottom: 37 }
    })
    .createData({ id: "data_0", values: data })
    .createComputedData({
      id: "num_dq",
      as: "dq_num",
      expression: { op: "toNumber", operand: { field: "democracy_edited" } }
    })
    .createComputedData({
      id: "num_ah",
      as: "ah_num",
      expression: { op: "toNumber", operand: { field: "Average_happiness" } }
    })
    .createScatterPlot({
      x: { field: "dq_num" },
      y: { field: "ah_num" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386 })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .encodeOpacity({ target: "scatterPlot", value: 0.5 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .filterData({
      id: "definedRegressionRows",
      field: "edit_l_dq",
      noneOf: [""]
    })
    .createComputedData({
      id: "num_edq",
      as: "edq_num",
      expression: { op: "toNumber", operand: { field: "edit_l_dq" } }
    })
    .createComputedData({
      id: "num_lah",
      as: "lah_num",
      expression: { op: "toNumber", operand: { field: "line_ah" } }
    })
    .createLinePlot({
      x: { field: "edq_num" },
      y: { field: "lah_num" },
      guides: false
    })
    .editXScale({ domain: [0, 4] })
    .editYScale({ domain: [0, 8] })
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Democratic Quality", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: { format: ".1f" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Average Happiness", fontSize: 11, fontFamily: "sans-serif", offset: 24 }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 } },
      title: { color: "black", fontWeight: 700 }
    })
    .createGrid({
      horizontal: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        color: "#ddd",
        lineWidth: 1
      },
      vertical: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
        color: "#ddd",
        lineWidth: 1
      }
    });
}