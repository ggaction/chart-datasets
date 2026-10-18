// DOCS: doc-99b0513458edff76, doc-b7f1bdfb89789cd6, doc-c8a264fce4210022
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 478, height: 466, margin: { left: 72, top: 29, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1410-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "3,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "4,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "5,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "5,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "6,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
      { text: "Goal (USD)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 58.0625 },
      { text: "Pledged (USD)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 76.40625 },
      { text: "Successful", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 48.359375 },
      { text: "Failed", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.25 },
      { text: "Project State", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 67.25 },
      { text: "Goal vs Pledged in Technology", fontFamily: "sans-serif", fontSize: 15, fontWeight: 700, fontStyle: "normal", width: 221.4375 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "goalNumeric", as: "goalNumeric", expression: { op: "toNumber", operand: { field: "usd_goal_real" } } })
    .createComputedData({ id: "pledgeNumeric", as: "pledgeNumeric", expression: { op: "toNumber", operand: { field: "usd_pledged_real" } } })
    .filterData({ id: "vl1410Filtered", field: "goalNumeric", predicate: { op: "lt", value: 6500000 } })
    .createComputedData({ id: "pctOfGoal", as: "% of Goal", expression: { op: "multiply", left: { op: "divide", left: { field: "pledgeNumeric" }, right: { field: "goalNumeric" } }, right: { constant: 100 } } })
    .createComputedData({ id: "emphasisFlag", as: "emphasis", expression: { op: "if", condition: { op: "gt", left: { field: "pledgeNumeric" }, right: { constant: 4000000 } }, then: { constant: 1 }, else: { constant: 0 } } })
    .createScatterPlot({
      x: { field: "goalNumeric" },
      y: { field: "pledgeNumeric" },
      guides: false
    })
    .editXScale({ domain: [0, 6500000], nice: false })
    .editYScale({ domain: [0, 6500000], nice: false })
    .encodeColor({ field: "state", fieldType: "nominal", scale: { domain: ["Successful", "Failed"], range: ["rgb(255,128,14)", "rgb(0,107,164)"] } })
    .encodeShape({ field: "emphasis", fieldType: "nominal", scale: { domain: [0, 1], range: ["circle", "triangle-up"] } })
    .encodeSize({ field: "emphasis", fieldType: "nominal", scale: { domain: [0, 1], range: [30 * Math.PI / 4, 150 * Math.sqrt(3) / 4] } })
    .encodeOpacity({ field: "emphasis", scale: { domain: [0, 1], range: [0.6, 1] } })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 5500000, 6000000, 6500000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 500000, label: "" },
            { value: 1000000, label: "1,000,000" },
            { value: 1500000, label: "" },
            { value: 2000000, label: "2,000,000" },
            { value: 2500000, label: "" },
            { value: 3000000, label: "3,000,000" },
            { value: 3500000, label: "" },
            { value: 4000000, label: "4,000,000" },
            { value: 4500000, label: "" },
            { value: 5000000, label: "5,000,000" },
            { value: 5500000, label: "" },
            { value: 6000000, label: "6,000,000" },
            { value: 6500000, label: "" }
          ]
        }
      },
      title: { text: "Goal (USD)", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({
      color: "black"
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 5500000, 6000000, 6500000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, format: ",.0f" }
      },
      title: { text: "Pledged (USD)", fontSize: 11, fontWeight: 700, offset: 59.9091796875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTicks({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({
      color: "black"
    })
    .createTitle({ text: "Goal vs Pledged in Technology", titleStyle: { fontSize: 15, fontWeight: 700, color: "black" }, offset: -10.484375 })
    .editTitle({ align: "center" })
    .createLegend({ channels: ["color"], position: "top-right", title: "Project State" })
    .editLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5, stroke: "transparent", strokeWidth: 0, opacity: 1 }] }
    });
}