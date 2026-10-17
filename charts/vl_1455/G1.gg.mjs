// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 10051,
      height: 447,
      margin: { left: 44, top: 10, right: 7, bottom: 37 }
    })
    .createData({ id: "me", values: data })
    .filterData({ id: "meSe", field: "symbol", oneOf: ["SE"] })
    .createComputedData({
      id: "meSeDate",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "meSePlot",
      as: "valueNum",
      expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } }
    })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [1577836800000, 1606865400000], nice: false })
    .editYScale({ domain: [0, 800] })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { count: 250, ticks: { length: 5, color: "#888" }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", color: "black" } },
        title: { text: "date", fontSize: 11, fontWeight: 700, color: "black", offset: 27 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { count: 10, ticks: { length: 5, color: "#888" }, labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif", color: "black" } },
        title: { text: "value", fontSize: 11, fontWeight: 700, color: "black", offset: 32.6845703125, rotation: { value: -90, unit: "degrees" } }
      }
    });
}