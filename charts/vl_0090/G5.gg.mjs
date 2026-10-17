// DOCS: doc-76573a465e2b6a33, doc-2e6240c00cb297cc, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 245,
      margin: { left: 39, top: 8, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "alphaNum", as: "alphaNum", expression: { op: "toNumber", operand: { field: "alpha" } } })
    .createComputedData({ id: "betaNum", as: "betaNum", expression: { op: "toNumber", operand: { field: "beta" } } })
    .createScatterPlot({
      x: { field: "alphaNum" },
      y: { field: "betaNum" },
      guides: false
    })
    .editXScale({ domain: [0, 5.5] })
    .editYScale({ zero: false, domain: [10, 34] })
    .encodeStroke({ field: "exit_code", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: ["1", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editPointMark({ fill: "none", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createHorizontalGrid({ color: "#ddd", values: [10, 15, 20, 25, 30] })
    .createVerticalGrid({ color: "#ddd", values: [0, 1, 2, 3, 4, 5] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "alpha", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [10, 15, 20, 25, 30],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "beta",
        fontSize: 11,
        fontWeight: 700,
        offset: 28,
        rotation: { value: -90, unit: "degrees" }
      }
    });
}
