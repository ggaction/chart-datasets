import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0397-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "16", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "18", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "22", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "24", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "26", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Employees", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 58.09375 },
      { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.140625 },
      { text: "Jan 01, 2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.828125 },
      { text: "Jan 01, 2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.828125 },
      { text: "Jan 01, 2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.828125 },
      { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.265625 }
    ] } })
    .createCanvas({ width: 495, height: 347, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createFoldData({ id: "foldMetric", fields: ["rlp50"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "sizeN", as: "SizeN", expression: { op: "toNumber", operand: { field: "Size" } } })
    .createComputedData({ id: "valueN", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "yearMs", as: "YearMs", expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" } })
    .createScatterPlot({ x: "SizeN", y: "valueN", guides: false })
    .editXScale({ domain: [0, 26], nice: false })
    .editYScale({ domain: [0, 90], nice: false })
    .encodeStroke({ field: "YearMs", fieldType: "temporal", scale: { type: "sequential", domain: [946684800000, 1577836800000], range: ["rgb(120, 28, 109)", "rgb(237, 105, 37)"], interpolate: "hcl", whitePoint: "d50" } })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, format: ".0f" },
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
      },
      title: { text: "Employees", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, format: ".0f" },
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["stroke"],
        position: "bottom-right",
        direction: "horizontal",
        title: "Year",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black", format: "%b %d, %Y" },
        count: 2,
        gradient: { length: 100, opacity: 0.7 }
      }
    });
}