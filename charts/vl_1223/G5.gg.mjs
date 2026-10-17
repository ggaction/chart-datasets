// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 217,
      height: 212,
      margin: { left: 38, top: 35, right: 24, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "tobaccoNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 1300] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 500, 1000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLabels({ format: "," })
    .createTitle({
      text: "Exports to EU: Tobacco products",
      titleStyle: { fontSize: 13 },
      alongOffset: -32
    })
    .editTitle({
      offset: -9,
      gap: 1,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Data source: ONS (2022)",
      titleStyle: { color: "black", fontWeight: 700 }
    });;
}