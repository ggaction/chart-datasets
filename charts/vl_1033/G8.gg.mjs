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
    .encodeStroke({ value: "#7aa1b8" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
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
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif", format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif", format: "," })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
