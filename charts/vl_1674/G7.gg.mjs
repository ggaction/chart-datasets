// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 259,
      margin: { left: 44, top: 10, right: 7, bottom: 49 }
    })
    .createData({ id: "stocks", values: data })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .createComputedData({
      id: "googDateMs",
      as: "dateMs",
      expression: {
        op: "parseTime",
        operand: { field: "date" },
        format: "auto"
      }
    })
    .createComputedData({
      id: "googPrices",
      as: "price_num",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .filterData({
      id: "goog2006",
      field: "dateMs",
      predicate: { op: "gte", value: 1136073600000 }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "price_num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1136073600000, 1267401600000], nice: false })
    .editYScale({ domain: [0, 800] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000, 1199145600000, 1207008000000, 1214870400000, 1222819200000, 1230768000000, 1238544000000, 1246406400000, 1254355200000, 1262304000000],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
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
            ],
            maxWidth: 30,
            lineHeight: 12
          }
        },
        title: { text: "date", fontSize: 11, offset: 42 }
      })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          count: 5,
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 6
          }
        },
        title: { text: "price", fontSize: 11, offset: 30 }
      })
    .createHorizontalGrid({ count: 5 })
    .createVerticalGrid({ values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000, 1199145600000, 1207008000000, 1214870400000, 1222819200000, 1230768000000, 1238544000000, 1246406400000, 1254355200000, 1262304000000] })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
        .editXAxis({ line: { color: "#ddd" }, ticksAndLabels: { ticks: { color: "#ddd" }, labels: { fontFamily: "sans-serif" } }, title: { fontWeight: "bold" } })
        .editYAxis({ line: { color: "#ddd" }, ticksAndLabels: { ticks: { color: "#ddd" }, labels: { fontFamily: "sans-serif" } }, title: { fontWeight: "bold" } });
}