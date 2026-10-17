import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-7f2c254224fc4908, doc-a7bc9c7281841264
export function buildChart() {
  return chart()
    .createCanvas({ width: 237, height: 242, margin: { left: 39, top: 40, right: 18, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "employmentRate", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 80] })
    .encodeStroke({ value: "seagreen" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Employment rate (%)", fontSize: 11, offset: 28 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Employment rate (%) 1971-2021 ",
      alongOffset: -33,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({
      subtitle: "(aged 16 to 64, seasonally adjusted), Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      offset: -13
    });
}