import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-74fc341a49e892f8, doc-0a1e48878a814143, doc-c5bc90785877509b

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 261,
      margin: { left: 44, top: 10, right: 7, bottom: 51 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1702-original-source-text-and-span-widths",
        measurements: [
          { text: "Jan2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.375 },
          { text: "Apr", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.5625 },
          { text: "Jul", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.796875 },
          { text: "Oct", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 15.5625 },
          { text: "Jan2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.375 },
          { text: "date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 22.625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.296875 },
          { text: "Jan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.125 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "DateMs",
      as: "DateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "PriceN",
      as: "PriceN",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .filterData({ id: "filterSymbol", field: "symbol", oneOf: ["GOOG"] })
    .filterData({
      id: "filterYear",
      field: "DateMs",
      range: { min: 1136073600000, max: 1199145600000, maxInclusive: false }
    })
    .createLinePlot({
      x: {
        field: "DateMs",
        fieldType: "temporal",
        scale: { type: "time", domain: [1136073600000, 1196467200000], nice: false }
      },
      y: {
        field: "PriceN",
        scale: { domain: [0, 800], nice: false }
      },
      guides: false
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#ddd", lineWidth: 1 },
        ticksAndLabels: {
          values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000],
          ticks: {
            length: 30,
            color: "#ddd",
            strokeDashMap: [
              { value: 1136073600000, strokeDash: [] },
              { value: 1143849600000, strokeDash: [2, 2] },
              { value: 1151712000000, strokeDash: [2, 2] },
              { value: 1159660800000, strokeDash: [2, 2] },
              { value: 1167609600000, strokeDash: [] },
              { value: 1175385600000, strokeDash: [2, 2] },
              { value: 1183248000000, strokeDash: [2, 2] },
              { value: 1191196800000, strokeDash: [2, 2] }
            ],
            alongOffset: 0.5
          },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 4.5,
            alongOffset: 4.5,
            align: "left",
            labelMap: [
              { value: 1136073600000, label: "Jan 2006" },
              { value: 1143849600000, label: "Apr" },
              { value: 1151712000000, label: "Jul" },
              { value: 1159660800000, label: "Oct" },
              { value: 1167609600000, label: "Jan 2007" },
              { value: 1175385600000, label: "Apr" },
              { value: 1183248000000, label: "Jul" },
              { value: 1191196800000, label: "Oct" }
            ],
            maxWidth: 22.25,
            wrap: "word",
            lineHeight: 12
          }
        },
        title: {
          text: "date",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 41.578125,
          alongOffset: 0.5
        }
      },
      y: {
        line: { color: "#ddd", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 200, 400, 600, 800],
          ticks: { length: 5, color: "#ddd" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 6.5,
            alongOffset: 0.890625
          }
        },
        title: {
          text: "price",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 32.1064453125,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({
      horizontal: { values: [0, 200, 400, 600, 800], color: "#ddd", lineWidth: 1 },
      vertical: {
        values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000],
        color: "#ddd",
        lineWidth: 1,
        strokeDashMap: [
          { value: 1136073600000, strokeDash: [] },
          { value: 1143849600000, strokeDash: [2, 2] },
          { value: 1151712000000, strokeDash: [2, 2] },
          { value: 1159660800000, strokeDash: [2, 2] },
          { value: 1167609600000, strokeDash: [] },
          { value: 1175385600000, strokeDash: [2, 2] },
          { value: 1183248000000, strokeDash: [2, 2] },
          { value: 1191196800000, strokeDash: [2, 2] }
        ]
      }
    });
}