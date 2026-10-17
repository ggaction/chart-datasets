// DOCS: doc-dfae58344d5a524e doc-071c93dff3a5ea2e doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 259, margin: { left: 44, top: 10, right: 7, bottom: 49 } })
    .createData({ values: data })
    .filterData({ id: "goog", field: "symbol", predicate: { op: "eq", value: "GOOG" } })
    .createComputedData({ id: "dated", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "priced", as: "priceNum", expression: { op: "toNumber", operand: { field: "price" } } })
    .filterData({ id: "yrange", field: "dateMs", range: { min: 1136073600000, max: 1199145600000, maxInclusive: false } })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1136073600000, 1196467200000], nice: false })
    .editYScale({ domain: [0, 800], zero: true })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
  .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, maxWidth: 30, lineHeight: 12, flush: true }
      },
      title: { text: "date", fontSize: 11, offset: 42 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, offset: 31 }
    })
    .editXAxisLine({ color: "#ddd" })
    .editXAxisTicks({ color: "#ddd" })
    .editXAxisLabels({ fontFamily: "sans-serif", format: "%m\n%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#ddd" })
    .editYAxisTicks({ color: "#ddd" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { count: 5 },
      vertical: { values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}