// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 200,
      height: 206,
      margin: { left: 39, top: 34, right: 11, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 20] })
    .encodeStroke({ value: "rgb(8,123,102)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 4,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 4,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "%", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
    })
    .createTitle({
      text: "Part-time workers: % could not find FT job",
      titleStyle: { fontSize: 9, fontWeight: 700, fontFamily: "sans-serif" },
      alongOffset: -33.12
    })
    .editTitle({ gap: 2, offset: -3 })
    .editTitle({ subtitle: "Seasonally Adjusted, Source: ONS", subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif" } });
}
