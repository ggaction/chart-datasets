import { chart } from "ggaction";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7f2c254224fc4908
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 482, height: 342, margin: { left: 41, top: 5, right: 141, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "betaNum", as: "beta_num", expression: { op: "toNumber", operand: { field: "beta" } } })
    .createComputedData({ id: "alphaNum", as: "alpha_num", expression: { op: "toNumber", operand: { field: "alpha" } } })
    .createComputedData({ id: "cutoffNum", as: "cutoff_num", expression: { op: "toNumber", operand: { field: "cutoff" } } })
    .createScatterPlot({ x: "beta_num", y: "alpha_num", guides: false })
    .encodeX({ field: "beta_num", fieldType: "quantitative", scale: { domain: [21, 34], zero: false } })
    .encodeY({ field: "alpha_num", fieldType: "quantitative", scale: { domain: [0, 2.6], zero: false } })
    .encodeColor({ field: "cutoff_num", fieldType: "quantitative" })
    .editColorScale({ domain: [0.025, 0.975], interpolate: "rgb", palette: { name: "blueorange", extent: [1, 0], count: 11 } })
    .encodeShape({ field: "exit_code", fieldType: "nominal" })
    .encodePointRadius({ value: 3.873 })
    .encodeStroke({ value: "black" })
    .editPointMark({ opacity: 0.7, strokeWidth: 0.5 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
        title: { text: "Beta", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
        title: { text: "Alpha", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({ channels: ["color"], gradient: { length: 200 }, titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", title: "MCC cutoff\nthreshold" })
    .editLegend({ target: "scatterPlot", count: 5 })
    .editLegendBlock({ target: "scatterPlot", channel: "color", text: { fontSize: 10, fontFamily: "sans-serif" } })
    .createLegend({ channels: ["shape"], titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" } })
    .editLegendBlock({ target: "scatterPlot", channel: "shape", title: "Optimisation\nexit code" })
    .editLegendBlock({ target: "scatterPlot", channel: "shape", text: { fontSize: 10, fontFamily: "sans-serif" } })
    .editLegendBlock({ target: "scatterPlot", channel: "shape", symbol: { size: 5, fill: "black", stroke: "black", opacity: 0.7 } });
}