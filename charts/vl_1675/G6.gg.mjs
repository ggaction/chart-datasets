import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d
export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 254, margin: { left: 44, top: 5, right: 7, bottom: 49 } })
    .createData({ id: "stocks", values: data })
    .createComputedData({ id: "parsed", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" } } })
    .createComputedData({ id: "numbered", as: "priceNum", expression: { op: "toNumber", operand: { field: "price" } } })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .filterData({ id: "series", field: "dateMs", predicate: { op: "lte", value: 1167609600000 } })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "priceNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1091318400000, 1167609600000] })
    .editYScale({ domain: [0, 550] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({ horizontal: {}, vertical: { values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000] } })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000], ticks: {}, labels: { fontSize: 10, offset: 7, format: "%m\n%Y", flush: true, maxWidth: 30, lineHeight: 12 } },
      title: { text: "date", fontSize: 11, offset: 40 }
    })
    .editXAxis({ line: { color: "#ddd" }, ticksAndLabels: { ticks: { color: "#ddd" }, labels: { fontFamily: "sans-serif" } }, title: { fontFamily: "sans-serif", fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 5, ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "price", fontSize: 11, offset: 30 }
    })
    .editYAxis({ line: { color: "#ddd" }, ticksAndLabels: { ticks: { color: "#ddd" }, labels: { fontFamily: "sans-serif" } }, title: { fontFamily: "sans-serif", fontWeight: 700 } });
}
