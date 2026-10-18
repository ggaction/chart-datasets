import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 619, height: 243, margin: { left: 20, top: 5, right: 199, bottom: 138 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1105-original-source-font-widths", measurements: [
      { text: "−0.030", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.028", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.026", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.024", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "−0.002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.875 },
      { text: "0.000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "value, min, max", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 81.9375 },
      { text: "groupaction", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.5625 },
      { text: "Felt unsafe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 49.484375 },
      { text: "Physically and verbally attacked", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 141.75 },
      { text: "action", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.40625 },
      { text: "Controlled", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
      { text: "Uncontrolled", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 56.15625 },
      { text: "Model", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.78125 }
    ] } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "groups", as: "groupaction", expression: { op: "concat", operands: [{ field: "action" }, { field: "group" }, { field: "model" }] } })
    .filterData({ id: "men", field: "gender", oneOf: ["Men"] })
    .createComputedData({ id: "values", as: "ValueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "lows", as: "MinN", expression: { op: "toNumber", operand: { field: "min" } } })
    .createComputedData({ id: "highs", as: "MaxN", expression: { op: "toNumber", operand: { field: "max" } } })
    .createScatterPlot({
      x: "ValueN",
      y: { field: "groupaction", fieldType: "nominal" },
      guides: false
    })
    .editYScale({ domain: ["Felt unsafeWhite majorityControlled", "Felt unsafeWhite majorityUncontrolled", "Physically and verbally attackedWhite majorityControlled", "Physically and verbally attackedWhite majorityUncontrolled"] })
    .encodeColor({ field: "action", fieldType: "nominal" })
    .editColorScale({ domain: ["Felt unsafe", "Physically and verbally attacked"], range: ["#1b9e77", "#d95f02"] })
    .encodeStroke({ field: "action", fieldType: "nominal" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Felt unsafe", "Physically and verbally attacked"], range: ["#1b9e77", "#d95f02"] })
    .encodeShape({ field: "model", fieldType: "nominal" })
    .editShapeScale({ domain: ["Controlled", "Uncontrolled"], range: ["circle", "square"] })
    .encodeSize({ field: "model", fieldType: "nominal" })
    .editSizeScale({ domain: ["Controlled", "Uncontrolled"], range: [50 * Math.PI / 4, 50] })
    .editPointMark({ opacity: 1, strokeWidth: 2 })
    .createRuleMark({ id: "intervals", strokeWidth: 1 })
    .encodeXRange({ lower: "MinN", upper: "MaxN" })
    .encodeY({ field: "groupaction", fieldType: "nominal" })
    .encodeStroke({ field: "action" })
    .createGrid({ horizontal: false, vertical: { values: [-0.03, -0.028, -0.026, -0.024, -0.022, -0.02, -0.018, -0.016, -0.014, -0.012, -0.01, -0.008, -0.006, -0.004, -0.002, 0], color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      ticksAndLabels: {
        values: [-0.03, -0.028, -0.026, -0.024, -0.022, -0.02, -0.018, -0.016, -0.014, -0.012, -0.01, -0.008, -0.006, -0.004, -0.002, 0],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, flush: true,
          labelMap: [
            { value: -0.03, label: "−0.030" }, { value: -0.028, label: "" }, { value: -0.026, label: "−0.026" }, { value: -0.024, label: "" },
            { value: -0.022, label: "−0.022" }, { value: -0.02, label: "" }, { value: -0.018, label: "−0.018" }, { value: -0.016, label: "" },
            { value: -0.014, label: "−0.014" }, { value: -0.012, label: "" }, { value: -0.01, label: "−0.010" }, { value: -0.008, label: "" },
            { value: -0.006, label: "−0.006" }, { value: -0.004, label: "" }, { value: -0.002, label: "−0.002" }, { value: 0, label: "" }
          ]
        }
      },
      title: { text: "value, min, max", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createYAxis({
      ticksAndLabels: false,
      title: { text: "groupaction", fontSize: 11, fontFamily: "sans-serif", offset: 8.421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createGuides({
      axes: false, grid: false,
      legend: { target: "scatterPlot", channels: ["stroke"], titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }, symbol: { layers: [{ type: "point", fill: "black", strokeWidth: 1.5 }] } }
    })
    .createGuides({
      axes: false, grid: false,
      legend: { target: "scatterPlot", channels: ["shape"], title: "Model", titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "grey" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "grey" }, symbol: { layers: [{ type: "point", fill: "grey", stroke: "#888", strokeWidth: 1.5 }] } }
    })
    .createGuides({
      axes: false, grid: false,
      legend: { target: "scatterPlot", channels: ["color"], titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }, symbol: { layers: [{ type: "point", stroke: "transparent", strokeWidth: 0 }] } }
    });
}