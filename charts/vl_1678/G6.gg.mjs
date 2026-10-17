// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 259,
      margin: { left: 44, top: 10, right: 7, bottom: 49 }
    })
    .createData({ values: data })
    .filterData({ id: "goog", field: "symbol", predicate: { op: "eq", value: "GOOG" } })
    .createComputedData({ id: "dateMsCompute", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } }).filterData({ id: "googThrough2007", field: "dateMs", predicate: { op: "lte", value: 1199145599999 } })
    .createComputedData({ id: "googPrices", as: "priceNum", expression: { op: "toNumber", operand: { field: "price" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "priceNum" },
      guides: false
    })
    .editXScale({ domain: [1091318400000, 1196467200000], nice: false })
    .editYScale({ domain: [0, 800] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000],
        labels: { fontSize: 10, offset: 7, format: "%m\n%Y", flush: true, maxWidth: 30, lineHeight: 12 }
      },
      title: { text: "date", fontSize: 11, offset: 40 }
    })
    .createYAxis({
      ticksAndLabels: {
        count: 5,
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, offset: 33 }
    })
    .editXAxisLine({ color: "#ddd" })
    .editYAxisLine({ color: "#ddd" })
    .editXAxisTicksAndLabels({ ticks: { color: "#ddd" } })
    .editYAxisTicksAndLabels({ ticks: { color: "#ddd" } })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ vertical: { values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000] }, horizontal: true })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}