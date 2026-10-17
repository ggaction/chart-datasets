// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 477,
      height: 247,
      margin: { left: 44, top: 10, right: 83, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "prices",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1267401600000] })
    .editYScale({ domain: [0, 800], zero: true })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 1, opacity: 0.6 })
    .encodeStrokeDash({
      field: "symbol",
      fieldType: "nominal"
    })
    .editStrokeDashScale({
      target: "linePlot",
      domain: ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"],
      range: [[1, 0], [4, 2], [2, 1], [1, 1], [1, 2, 4, 2]]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          946684800000, 978307200000, 1009843200000, 1041379200000,
          1072915200000, 1104537600000, 1136073600000, 1167609600000,
          1199145600000, 1230768000000, 1262304000000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: { text: "date", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, fontWeight: 700, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { count: 5, color: "#ddd" }, vertical: { values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000], color: "#ddd" } })
    .createLegend({
      channels: ["strokeDash"],
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "line", lineWidth: 1 }] }
    });;
}