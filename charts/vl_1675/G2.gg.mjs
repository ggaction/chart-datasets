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
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000], color: "#ddd", lineWidth: 1 } })
    .createAxes({
      x: {
        line: { color: "#ddd" },
        ticksAndLabels: { values: [1096588800000, 1104537600000, 1112313600000, 1120176000000, 1128124800000, 1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000], ticks: { color: "#ddd" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%m\n%Y", flush: true, maxWidth: 30, lineHeight: 12 } },
        title: { text: "date", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 40 }
      },
      y: {
        line: { color: "#ddd" },
        ticksAndLabels: { count: 5, ticks: { color: "#ddd" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
        title: { text: "price", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 30 }
      }
    });
}
