import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({
      width: 437,
      height: 196,
      margin: { left: 148, top: 74, right: 89, bottom: 82 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "estLo",
      as: "estLo",
      expression: {
        op: "subtract",
        left: { field: "Estimate" },
        right: { op: "divide", left: { field: "Confidence" }, right: { constant: 2 } }
      }
    })
    .createComputedData({
      id: "estHi",
      as: "estHi",
      expression: {
        op: "add",
        left: { field: "Estimate" },
        right: { op: "divide", left: { field: "Confidence" }, right: { constant: 2 } }
      }
    })
    .createScatterPlot({
      x: { field: "Estimate", fieldType: "quantitative" },
      y: { field: "Parameter", fieldType: "nominal" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", field: "Key", fieldType: "nominal" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createRuleMark({ id: "rule", data: "estHi", strokeWidth: 1 })
    .encodeXRange({ target: "rule", lower: "estLo", upper: "estHi" })
    .encodeY({ target: "rule", field: "Parameter", fieldType: "nominal" })
    .encodeStroke({ target: "rule", field: "Key", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: [""], range: ["#4c78a8"] })
    .editXScale({ domain: [-0.2, 1.8] })
    .editYScale({
      domain: ["differential spend", "intercept"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5],
        ticks: { length: 5 },
        labels: {
          flush: true,
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "Estimate (with 95% confidence error bars)",
        fontSize: 11,
        offset: 27.578125
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000", format: ".1f" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "Parameter",
        rotation: { value: -90, unit: "degrees" },
        fontSize: 11,
        offset: 91.986328125
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: false,
      vertical: { values: [0, 0.5, 1, 1.5] }
    })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      target: "scatterPlot",
      channels: ["stroke"]
    })
    .editLegendSymbols({
      target: "scatterPlot",
      symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5 }] }
    })
    .editLegend({
      title: "Key",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendTitle({ target: "scatterPlot", fontWeight: 700 })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", labelMap: [{ value: "", label: "" }] })
    .createTitle({
      text: "Parameters",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: 32.093505859375
    })
    .editTitle({ align: "center" });
}

