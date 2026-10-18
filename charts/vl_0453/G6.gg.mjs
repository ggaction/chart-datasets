// DOCS: doc-82e309a0b6ac0052 doc-fb817e9743ec78cd doc-1b461e89762eb091
import { chart } from "ggaction";
import data from "./data.json";

const xLabelMap = [
  { value: 0, label: "0%" }, { value: 1, label: "" }, { value: 2, label: "" }, { value: 3, label: "" },
  { value: 4, label: "2%" }, { value: 5, label: "" }, { value: 6, label: "" }, { value: 7, label: "" },
  { value: 8, label: "4%" }, { value: 9, label: "" }, { value: 10, label: "" }, { value: 11, label: "" },
  { value: 12, label: "6%" }, { value: 13, label: "" }, { value: 14, label: "" }, { value: 15, label: "" },
  { value: 16, label: "8%" }, { value: 17, label: "" }, { value: 18, label: "" }, { value: 19, label: "" },
  { value: 20, label: "10%" }, { value: 21, label: "" }, { value: 22, label: "" }, { value: 23, label: "" },
  { value: 24, label: "12%" }, { value: 25, label: "" }, { value: 26, label: "" }, { value: 27, label: "" },
  { value: 28, label: "14%" }, { value: 29, label: "" }, { value: 30, label: "" }, { value: 31, label: "" },
  { value: 32, label: "16%" }, { value: 33, label: "" }, { value: 34, label: "" }, { value: 35, label: "" },
  { value: 36, label: "18%" }, { value: 37, label: "" }, { value: 38, label: "" }, { value: 39, label: "" },
  { value: 40, label: "20%" }, { value: 41, label: "" }, { value: 42, label: "" }, { value: 43, label: "" },
  { value: 44, label: "22%" }, { value: 45, label: "" }, { value: 46, label: "" }, { value: 47, label: "" },
  { value: 48, label: "24%" }, { value: 49, label: "" }, { value: 50, label: "" }
];

const yLabelMap = [
  { value: 0, label: "0%" }, { value: 1, label: "" }, { value: 2, label: "1%" }, { value: 3, label: "" },
  { value: 4, label: "2%" }, { value: 5, label: "" }, { value: 6, label: "3%" }, { value: 7, label: "" },
  { value: 8, label: "4%" }, { value: 9, label: "" }, { value: 10, label: "5%" }, { value: 11, label: "" },
  { value: 12, label: "6%" }, { value: 13, label: "" }, { value: 14, label: "7%" }, { value: 15, label: "" },
  { value: 16, label: "8%" }, { value: 17, label: "" }, { value: 18, label: "9%" }, { value: 19, label: "" },
  { value: 20, label: "10%" }, { value: 21, label: "" }, { value: 22, label: "11%" }, { value: 23, label: "" },
  { value: 24, label: "12%" }, { value: 25, label: "" }, { value: 26, label: "13%" }, { value: 27, label: "" },
  { value: 28, label: "14%" }, { value: 29, label: "" }, { value: 30, label: "15%" }, { value: 31, label: "" },
  { value: 32, label: "16%" }, { value: 33, label: "" }, { value: 34, label: "17%" }, { value: 35, label: "" },
  { value: 36, label: "18%" }, { value: 37, label: "" }, { value: 38, label: "19%" }, { value: 39, label: "" },
  { value: 40, label: "20%" }, { value: 41, label: "" }, { value: 42, label: "21%" }, { value: 43, label: "" },
  { value: 44, label: "22%" }, { value: 45, label: "" }, { value: 46, label: "23%" }, { value: 47, label: "" },
  { value: 48, label: "24%" }, { value: 49, label: "" }, { value: 50, label: "25%" }
];

const tickValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

const countRamp = [
  "rgb(239, 249, 189)","rgb(232, 246, 186)","rgb(224, 243, 182)","rgb(216, 240, 180)","rgb(205, 235, 180)",
  "rgb(193, 231, 181)","rgb(180, 225, 182)","rgb(165, 220, 183)","rgb(150, 214, 185)","rgb(134, 208, 187)",
  "rgb(118, 202, 189)","rgb(102, 196, 190)","rgb(89, 189, 192)","rgb(76, 183, 193)","rgb(64, 176, 194)",
  "rgb(55, 168, 193)","rgb(46, 160, 192)","rgb(41, 150, 190)","rgb(37, 139, 187)","rgb(33, 129, 183)",
  "rgb(33, 117, 178)","rgb(33, 106, 173)","rgb(33, 95, 168)","rgb(34, 84, 163)","rgb(35, 74, 158)",
  "rgb(33, 65, 150)","rgb(31, 57, 142)","rgb(28, 49, 133)"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 354, height: 389, margin: { left: 48, top: 52, right: 6, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0453-original-source-font-widths",
        measurements: [
          { text: "Price flexbility - heat map", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 156.78125 },
          { text: "Share of prices rising and falling each month. Source: LRPD (2021)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 298.5 },
          { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "1%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "2%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "3%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "4%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "5%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "6%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "7%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "8%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "9%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "10%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "11%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.28125 },
          { text: "12%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "13%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "14%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "15%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "16%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "17%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "18%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "19%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "20%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "21%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "22%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "23%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "24%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "25%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "Rising prices", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 69.078125 },
          { text: "Falling prices", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 70.921875 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "nonEmptyShares", field: "up_sh", noneOf: [""] })
    .createComputedData({ id: "upNumber", as: "upNumber", expression: { op: "toNumber", operand: { field: "up_sh" } } })
    .createComputedData({ id: "downNumber", as: "downNumber", expression: { op: "toNumber", operand: { field: "down_sh" } } })
    .filterData({ id: "risingUnderQuarter", field: "upNumber", predicate: { op: "lt", value: 0.25 } })
    .filterData({ id: "fallingUnderQuarter", field: "downNumber", predicate: { op: "lt", value: 0.25 } })
    .createComputedData({
      id: "xIndex",
      as: "xIndex",
      expression: { op: "floor", operand: { op: "add", left: { op: "divide", left: { field: "upNumber" }, right: { constant: 0.005 } }, right: { constant: 1e-14 } } }
    })
    .createComputedData({
      id: "yIndex",
      as: "yIndex",
      expression: { op: "floor", operand: { op: "add", left: { op: "divide", left: { field: "downNumber" }, right: { constant: 0.005 } }, right: { constant: 1e-14 } } }
    })
    .createHeatmap({
      x: "xIndex",
      y: "yIndex",
      bin: { bins: 50, extent: { x: [0, 50], y: [0, 50] }, includeEmpty: false },
      guides: false
    })
    .editColorScale({ domain: [1, 28], range: countRamp })
    .editRectMark({ stroke: false })
    .createXAxis({
      ticksAndLabels: {
        values: tickValues,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, labelMap: xLabelMap }
      },
      title: { text: "Rising prices", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: tickValues,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, labelMap: yLabelMap }
      },
      title: { text: "Falling prices", fontSize: 11, offset: 35.4365234375, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createTitle({
      text: "Price flexbility - heat map",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -10.953125, alongOffset: -42.0146484375, gap: 3.34375 })
    .editTitle({ subtitle: "Share of prices rising and falling each month. Source: LRPD (2021)\n" });
}