// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 259,
      margin: { top: 10, right: 7, bottom: 49, left: 44 }
    })
    .createData({ id: "stocks", values: data })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .createComputedData({ id: "googDateMs", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .filterData({ id: "goog2006", field: "dateMs", predicate: { op: "gte", value: 1136073600000 } })
    .createComputedData({
      id: "priced",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1136073600000, 1267401600000], nice: false })
    .editYScale({ domain: [0, 800] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: { color: "#ddd" },
      ticksAndLabels: {
        values: [
          1136073600000, 1143849600000, 1151712000000, 1159660800000,
          1167609600000, 1175385600000, 1183248000000, 1191196800000,
          1199145600000, 1207008000000, 1214870400000, 1222819200000,
          1230768000000, 1238544000000, 1246406400000, 1254355200000,
          1262304000000
        ],
        ticks: { color: "#ddd" },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          maxWidth: 30,
          lineHeight: 12,
          labelMap: [
            { value: 1136073600000, label: "01\n2006" },
            { value: 1143849600000, label: "" },
            { value: 1151712000000, label: "07\n2006" },
            { value: 1159660800000, label: "" },
            { value: 1167609600000, label: "01\n2007" },
            { value: 1175385600000, label: "" },
            { value: 1183248000000, label: "07\n2007" },
            { value: 1191196800000, label: "" },
            { value: 1199145600000, label: "01\n2008" },
            { value: 1207008000000, label: "" },
            { value: 1214870400000, label: "07\n2008" },
            { value: 1222819200000, label: "" },
            { value: 1230768000000, label: "01\n2009" },
            { value: 1238544000000, label: "" },
            { value: 1246406400000, label: "07\n2009" },
            { value: 1254355200000, label: "" },
            { value: 1262304000000, label: "01\n2010" }
          ]
        }
      },
      title: { text: "date", fontSize: 11, fontWeight: 700, offset: 42 }
    })
    .createYAxis({
      line: { color: "#ddd" },
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { color: "#ddd" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "price",
        fontSize: 11,
        fontWeight: 700,
        offset: 31,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: {
          values: [
            1136073600000, 1143849600000, 1151712000000, 1159660800000,
            1167609600000, 1175385600000, 1183248000000, 1191196800000,
            1199145600000, 1207008000000, 1214870400000, 1222819200000,
            1230768000000, 1238544000000, 1246406400000, 1254355200000,
            1262304000000
          ],
          color: "#ddd",
          lineWidth: 1
        }
    });
}