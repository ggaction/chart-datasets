import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a

export function buildChart() {
  return chart()
    .createCanvas({ width: 437, height: 196, margin: { left: 148, top: 74, right: 89, bottom: 82 } })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "data_estLo",
      as: "estLo",
      expression: { op: "subtract", left: { field: "Estimate" }, right: { op: "divide", left: { field: "Confidence" }, right: { constant: 2 } } }
    })
    .createComputedData({
      id: "data_estHi",
      as: "estHi",
      expression: { op: "add", left: { field: "Estimate" }, right: { op: "divide", left: { field: "Confidence" }, right: { constant: 2 } } }
    })
    .createScatterPlot({
      x: { field: "Estimate", fieldType: "quantitative" },
      y: { field: "Parameter", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [-0.5, 4] })
    .editYScale({ target: "scatterPlot", domain: ["differential spend", "intercept"] })
    .encodeStroke({ field: "Key", target: "scatterPlot", fieldType: "nominal" })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editStrokeScale({ target: "scatterPlot", domain: [""], range: ["#4c78a8"] })
    .createRuleMark({ id: "layer_1_marks", data: "data_estHi" })
    .encodeXRange({ target: "layer_1_marks", lower: "estLo", upper: "estHi" })
    .encodeY({ field: "Parameter", target: "layer_1_marks", fieldType: "nominal" })
    .encodeStroke({ field: "Key", target: "layer_1_marks", fieldType: "nominal" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4],
          ticks: { color: "#888", length: 5 },
          labels: {
            format: ".0f",
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black",
            offset: 7,
            flush: true
          }
        },
        title: {
          text: "Estimate (with 95% confidence error bars)",
          fontSize: 11,
          fontWeight: 700,
          offset: 27.578125
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888", length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black",
            offset: 7
          }
        },
        title: {
          text: "Parameter",
          fontSize: 11,
          fontWeight: 700,
          offset: 91.986328125
        }
      }
    })
    .createGrid({ horizontal: false, vertical: { values: [0, 1, 2, 3, 4], color: "#ddd" } })
    .createLegend({
      target: "scatterPlot",
      channels: ["stroke"],
      symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5 }] }
    })
    .editLegend({ title: "Key", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: "bold" } })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", labelMap: [{ value: "", label: "" }] })
    .createTitle({ text: "Parameters", titleStyle: { fontSize: 13, fontWeight: "bold" }, offset: 32.093505859375 })
    .editTitle({ align: "center" });
}