import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({
      width: 200,
      height: 201,
      margin: { left: 39, top: 29, right: 11, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
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
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 45], nice: false })
    .encodeStroke({ value: "rgb(8,123,102)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "%", fontSize: 11, offset: 27, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLabels({ format: "%Y", fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Unem. rate, not in FT educ, aged 16-17",
      titleStyle: { fontSize: 9, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { fontWeight: 400, color: "black" }
    })
    .editTitle({
      subtitle: "Seasonally Adjusted, Source: ONS",
      alongOffset: -33.1,
      offset: -14
    });
}