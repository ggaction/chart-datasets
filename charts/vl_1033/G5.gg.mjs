// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 195,
      height: 207,
      margin: { left: 38, top: 35, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "srsNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1577836800000] })
    .editYScale({ domain: [0, 1300] })
    .editLineMark({ stroke: "#7aa1b8", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Market Value",
      titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700 },
      alongOffset: -32
    })
    .editTitle({
      subtitle: "Source: ONS",
      subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontStyle: "italic" },
      offset: -13
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 500, 1000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "," }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
