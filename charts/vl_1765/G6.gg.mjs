import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-ac96a86ed911eb7c, doc-1fd5b791df8e7087, doc-b3c2bf07eed1d72f

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({
      id: "parsedTs",
      as: "ts",
      expression: {
        op: "parseTime",
        format: "auto",
        operand: {
          op: "concat",
          operands: [
            { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { field: "date" }, search: "/", replacement: "-" }, search: "/", replacement: "-" }, search: " ", replacement: "T" },
            { constant: "Z" }
          ]
        }
      }
    })
    .createComputedData({ id: "tempNum", as: "temperatureNum", expression: { op: "toNumber", operand: { field: "temperature" } } })
    .createComputedData({
      id: "clockTs",
      as: "clockTimestamp",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: {
          op: "subtract",
          left: { field: "ts" },
          right: {
            op: "multiply",
            left: { op: "floor", operand: { op: "divide", left: { field: "ts" }, right: { constant: 86400000 } } },
            right: { constant: 86400000 }
          }
        }
      }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1765-original-source-font-widths",
        measurements: [
          { text: "01:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "02:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "03:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "04:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "05:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "06:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "07:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "08:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "09:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "10:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "11:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.203125 },
          { text: "12:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "13:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "14:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "15:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "16:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "17:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "18:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "19:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "20:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "21:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "22:00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.9375 },
          { text: "date (hours-minutes-seconds)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 157.6875 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Mean of temperature", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 108.203125 }
        ]
      }
    })
    .createLinePlot({
      x: { field: "clockTimestamp", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "temperatureNum", aggregate: "mean" },
      guides: false
    })
    .editXScale({ domain: [1325376001000, 1325458796000], nice: false })
    .editYScale({ domain: [35, 90], nice: false })
    .editLineMark({ strokeWidth: 0.2 })
    .createGrid({
      horizontal: {
        values: [40, 50, 60, 70, 80, 90],
        color: "#ddd",
        lineWidth: 1
      },
      vertical: {
        values: [1325379600000, 1325383200000, 1325386800000, 1325390400000, 1325394000000, 1325397600000, 1325401200000, 1325404800000, 1325408400000, 1325412000000, 1325415600000, 1325419200000, 1325422800000, 1325426400000, 1325430000000, 1325433600000, 1325437200000, 1325440800000, 1325444400000, 1325448000000, 1325451600000, 1325455200000],
        color: "#ddd",
        lineWidth: 1
      }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1325379600000, 1325383200000, 1325386800000, 1325390400000, 1325394000000, 1325397600000, 1325401200000, 1325404800000, 1325408400000, 1325412000000, 1325415600000, 1325419200000, 1325422800000, 1325426400000, 1325430000000, 1325433600000, 1325437200000, 1325440800000, 1325444400000, 1325448000000, 1325451600000, 1325455200000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 5.5,
          alongOffset: 0.5,
          flush: true,
          labelMap: [
            { value: 1325379600000, label: "01:00:00" },
            { value: 1325383200000, label: "" },
            { value: 1325386800000, label: "03:00:00" },
            { value: 1325390400000, label: "" },
            { value: 1325394000000, label: "05:00:00" },
            { value: 1325397600000, label: "" },
            { value: 1325401200000, label: "07:00:00" },
            { value: 1325404800000, label: "" },
            { value: 1325408400000, label: "09:00:00" },
            { value: 1325412000000, label: "" },
            { value: 1325415600000, label: "11:00:00" },
            { value: 1325419200000, label: "" },
            { value: 1325422800000, label: "13:00:00" },
            { value: 1325426400000, label: "" },
            { value: 1325430000000, label: "15:00:00" },
            { value: 1325433600000, label: "" },
            { value: 1325437200000, label: "17:00:00" },
            { value: 1325440800000, label: "" },
            { value: 1325444400000, label: "19:00:00" },
            { value: 1325448000000, label: "" },
            { value: 1325451600000, label: "21:00:00" },
            { value: 1325455200000, label: "" }
          ]
        }
      },
      title: { text: "date (hours-minutes-seconds)", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [40, 50, 60, 70, 80, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, color: "black" }
      },
      title: { text: "Mean of temperature", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    });
}