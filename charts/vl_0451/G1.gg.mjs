import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cc2a8c2d8050af3b, doc-8a4f6f06e0d37d5e, doc-55b83d5194033052

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 300, height: 300 },
      margin: { left: 29, top: 40, right: 6, bottom: 22 },
      plotBorder: { color: "#ddd", lineWidth: 1 },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0451-complete-visible-font-metrics",
        measurements: [
          { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
        ],
      },
    })
    .createData({ values: data })
    .createComputedData({
      id: "upTyped",
      as: "upNumber",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "up_sh" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "up_sh" } },
      },
    })
    .createComputedData({
      id: "bothTyped",
      as: "downNumber",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "down_sh" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "down_sh" } },
      },
    })
    .filterData({ id: "risingUnderQuarter", field: "upNumber", predicate: { op: "lt", value: 0.25 } })
    .filterData({ id: "bothValid", field: "downNumber", predicate: { op: "lt", value: 0.25 } })
    .createBinData({ id: "upBins", field: "upNumber", step: 0.005 })
    .createComputedData({
      id: "upPoints",
      as: "upCenter",
      expression: { op: "divide", left: { op: "add", left: { field: "upNumber_start" }, right: { field: "upNumber_end" } }, right: { constant: 2 } },
    })
    .createLinePlot({
      x: { field: "upCenter", scale: { domain: [0, 0.25], nice: false } },
      y: { field: "count", scale: { domain: [0, 240], nice: false } },
      guides: false,
    })
    .editLineMark({ stroke: "orange", strokeWidth: 2, opacity: 0.4 })
    .createBinData({ id: "downBins", field: "downNumber", source: "bothValid" })
    .editBinData({ target: "downBins", step: 0.005 })
    .createComputedData({
      id: "downPoints",
      as: "downCenter",
      expression: { op: "divide", left: { op: "add", left: { field: "downNumber_start" }, right: { field: "downNumber_end" } }, right: { constant: 2 } },
    })
    .createLineMark({ id: "falling" })
    .encodeX({ field: "downCenter" })
    .encodeY({ field: "count" })
    .editLineMark({ stroke: "blue", strokeWidth: 2, opacity: 0.4 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12, 0.125, 0.13, 0.135, 0.14, 0.145, 0.15, 0.155, 0.16, 0.165, 0.17, 0.175, 0.18, 0.185, 0.19, 0.195, 0.2, 0.205, 0.21, 0.215, 0.22, 0.225, 0.23, 0.235, 0.24, 0.245, 0.25],
            ticks: { color: "#888", length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "black",
              offset: 5.5,
              alongOffset: 0.5,
              flush: true,
              labelMap: [
                { value: 0, label: "0%" }, { value: 0.005, label: "" }, { value: 0.01, label: "" }, { value: 0.015, label: "" },
                { value: 0.02, label: "2%" }, { value: 0.025, label: "" }, { value: 0.03, label: "" }, { value: 0.035, label: "" },
                { value: 0.04, label: "4%" }, { value: 0.045, label: "" }, { value: 0.05, label: "" }, { value: 0.055, label: "" },
                { value: 0.06, label: "6%" }, { value: 0.065, label: "" }, { value: 0.07, label: "" }, { value: 0.075, label: "" },
                { value: 0.08, label: "8%" }, { value: 0.085, label: "" }, { value: 0.09, label: "" }, { value: 0.095, label: "" },
                { value: 0.1, label: "10%" }, { value: 0.105, label: "" }, { value: 0.11, label: "" }, { value: 0.115, label: "" },
                { value: 0.12, label: "12%" }, { value: 0.125, label: "" }, { value: 0.13, label: "" }, { value: 0.135, label: "" },
                { value: 0.14, label: "14%" }, { value: 0.145, label: "" }, { value: 0.15, label: "" }, { value: 0.155, label: "" },
                { value: 0.16, label: "16%" }, { value: 0.165, label: "" }, { value: 0.17, label: "" }, { value: 0.175, label: "" },
                { value: 0.18, label: "18%" }, { value: 0.185, label: "" }, { value: 0.19, label: "" }, { value: 0.195, label: "" },
                { value: 0.2, label: "20%" }, { value: 0.205, label: "" }, { value: 0.21, label: "" }, { value: 0.215, label: "" },
                { value: 0.22, label: "22%" }, { value: 0.225, label: "" }, { value: 0.23, label: "" }, { value: 0.235, label: "" },
                { value: 0.24, label: "24%" }, { value: 0.245, label: "" }, { value: 0.25, label: "" },
              ],
            },
          },
          title: false,
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
            ticks: { color: "#888", length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 },
          },
          title: false,
        },
      },
      grid: { horizontal: { color: "#ddd" } },
    })
    .createTitle({
      text: "Price flexbility: rising and falling",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
    })
    .editTitle({ align: "left", offset: -7.390625, alongOffset: -23.6845703125 })
    .editTitle({ subtitle: "Share of prices changing each month. Source: LRPD (2021)", gap: 3.34375 });
}