// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 254,
      margin: { left: 44, top: 5, right: 7, bottom: 49 }
    })
    .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "source1673MonthlyLabels",
      measurements: [
        { text: "01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "03", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "04", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "06", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "07", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "08", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "09", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "11", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
        { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
        { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }
      ]
    }
  })
  .createData({ id: "stocks", values: data })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .createComputedData({
      id: "dateMs",
      as: "dateMs",
      expression: {
        op: "parseTime",
        operand: { field: "date" },
        format: "auto"
      }
    })
    .filterData({
      id: "range2006",
      field: "dateMs",
      predicate: { op: "gte", value: 1136073600000 },
    })
    .filterData({
      id: "range2007",
      field: "dateMs",
      predicate: { op: "lte", value: 1167609600000 }
    })
    .createComputedData({
      id: "priced",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        scale: { type: "time", domain: [1136073600000, 1167609600000], nice: false }
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative",
        scale: { domain: [0, 550], zero: true }
      },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#ddd" },
        ticksAndLabels: {
          values: [
            1136073600000, 1138752000000, 1141171200000, 1143849600000,
            1146441600000, 1149120000000, 1151712000000, 1154390400000,
            1157068800000, 1159660800000, 1162339200000, 1164931200000,
            1167609600000
          ],
          ticks: { color: "#ddd" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            fontWeight: 400,
            offset: 7,
            format: "%m %Y",
            flush: true,
            maxWidth: 28,
            wrap: "word",
            lineHeight: 12,
            labelMap: [
              { value: 1136073600000, label: "01\n2006" },
              { value: 1138752000000, label: "02\n2006" },
              { value: 1141171200000, label: "03\n2006" },
              { value: 1143849600000, label: "04\n2006" },
              { value: 1146441600000, label: "05\n2006" },
              { value: 1149120000000, label: "06\n2006" },
              { value: 1151712000000, label: "07\n2006" },
              { value: 1154390400000, label: "08\n2006" },
              { value: 1157068800000, label: "09\n2006" },
              { value: 1159660800000, label: "10\n2006" },
              { value: 1162339200000, label: "11\n2006" },
              { value: 1164931200000, label: "12\n2006" },
              { value: 1167609600000, label: "01\n2007" }
            ]
          }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 40 }
      },
      y: {
        line: { color: "#ddd" },
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500],
          ticks: { color: "#ddd" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            fontWeight: 400,
            offset: 7
          }
        },
        title: { text: "price", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}