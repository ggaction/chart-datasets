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
        fieldType: "temporal",
        scale: { domain: [1136073600000, 1196467200000], nice: false }
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative",
        scale: { domain: [0, 800], zero: true }
      },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#ddd" },
        ticksAndLabels: {
          values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000],
          ticks: { color: "#ddd", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%m\n%Y", maxWidth: 30, lineHeight: 12, flush: true }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, offset: 42 }
      },
      y: {
        line: { color: "#ddd" },
        ticksAndLabels: {
          count: 5,
          ticks: { color: "#ddd", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "price", fontSize: 11, fontWeight: 700, offset: 31 }
      }
    })
    .createGrid({
      horizontal: { count: 5, color: "#ddd", lineWidth: 1 },
      vertical: { values: [1136073600000, 1143849600000, 1151712000000, 1159660800000, 1167609600000, 1175385600000, 1183248000000, 1191196800000], color: "#ddd", lineWidth: 1 }
    });
}