import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-b6e95d5d607008d6
  return chart()
    .createCanvas({ width: 585, height: 407, margin: { left: 20, top: 5, right: 165, bottom: 152 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1106-original-source-font-widths", measurements: [
      { text: "−0.40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "−0.05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.3125 },
      { text: "0.00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
      { text: "value, min, max", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 81.9375 },
      { text: "groupaction", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.5625 },
      { text: "Black groups", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.8125 },
      { text: "Indian", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.25 },
      { text: "Pakistani & Bangladeshi", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 107.859375 },
      { text: "South East Asian", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 76.171875 },
      { text: "White majority", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.359375 },
      { text: "White other", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.140625 },
      { text: "group", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 },
      { text: "Controlled", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.59375 },
      { text: "Uncontrolled", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 56.15625 },
      { text: "Model", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.78125 },
      { text: "Ethnic group", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 67.828125 }
    ] } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "groupaction", as: "groupaction", expression: { op: "concat", operands: [{ field: "action" }, { field: "group" }, { field: "model" }] } })
    .filterData({ id: "women", field: "gender", oneOf: ["Women"] })
    .createComputedData({ id: "values", as: "values", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "lows", as: "lows", expression: { op: "toNumber", operand: { field: "min" } } })
    .createComputedData({ id: "highs", as: "highs", expression: { op: "toNumber", operand: { field: "max" } } })    .createScatterPlot({ x: "values", y: { field: "groupaction", fieldType: "nominal" }, guides: false })
    .editXScale({ domain: [-0.4, 0.15] })
    .editYScale({ domain: ["Black groupsControlled", "Black groupsUncontrolled", "IndianControlled", "IndianUncontrolled", "Pakistani & BangladeshiControlled", "Pakistani & BangladeshiUncontrolled", "South East AsianControlled", "South East AsianUncontrolled", "White majorityControlled", "White majorityUncontrolled", "White otherControlled", "White otherUncontrolled"] })
    .encodeColor({ field: "group", scale: { domain: ["Black groups", "Indian", "Pakistani & Bangladeshi", "South East Asian", "White majority", "White other"], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] } })
    .encodeStroke({ field: "group", scale: { domain: ["Black groups", "Indian", "Pakistani & Bangladeshi", "South East Asian", "White majority", "White other"], range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02"] } })
    .encodeShape({ field: "model", scale: { domain: ["Controlled", "Uncontrolled"], range: ["circle", "square"] } })
    .encodeSize({ field: "model", fieldType: "nominal", scale: { domain: ["Controlled", "Uncontrolled"], range: [50 * Math.PI / 4, 50] } })
    .editPointMark({ opacity: 1, strokeWidth: 2 })
    .createRuleMark({ id: "intervals", strokeWidth: 1 })
    .encodeXRange({ lower: "lows", upper: "highs" })
    .encodeY({ field: "groupaction", fieldType: "nominal" })
    .encodeStroke({ field: "group" })
    .createGrid({ horizontal: false, vertical: { values: [-0.4, -0.35, -0.3, -0.25, -0.2, -0.15, -0.1, -0.05, 0, 0.05, 0.1, 0.15], color: "#ddd", lineWidth: 1 } })
    .createAxes({ x: { line: { color: "#888", lineWidth: 1 }, ticksAndLabels: { values: [-0.4, -0.35, -0.3, -0.25, -0.2, -0.15, -0.1, -0.05, 0, 0.05, 0.1, 0.15], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", labelMap: [
        { value: -0.4, label: "−0.40" }, { value: -0.35, label: "" },
        { value: -0.3, label: "−0.30" }, { value: -0.25, label: "" },
        { value: -0.2, label: "−0.20" }, { value: -0.15, label: "" },
        { value: -0.1, label: "−0.10" }, { value: -0.05, label: "" },
        { value: 0, label: "0.00" }, { value: 0.05, label: "" },
        { value: 0.1, label: "0.10" }, { value: 0.15, label: "" }
      ], offset: 5.5, alongOffset: 0.5, flush: true } }, title: { text: "value, min, max", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 } },
      y: { line: { color: "#888", lineWidth: 1 }, ticksAndLabels: false, title: { text: "groupaction", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 8.421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } } } })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", channels: ["stroke"], titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }, symbol: { layers: [{ type: "point", fill: "black", strokeWidth: 1.5 }] } } })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", channels: ["shape"], title: "Model", titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "grey" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "grey" }, symbol: { layers: [{ type: "point", fill: "grey", stroke: "#888", strokeWidth: 1.5 }] } } })
    .createGuides({ axes: false, grid: false, legend: { target: "scatterPlot", channels: ["color"], title: "Ethnic group", titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }, symbol: { layers: [{ type: "point", stroke: "transparent", strokeWidth: 0 }] } } });
}