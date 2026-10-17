// DOCS: doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693, doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 206,
      height: 206,
      margin: { top: 34, right: 17, bottom: 22, left: 39 }
    })
    .createData({ id: "lms", values: data })
    .createComputedData({
      id: "lmsV",
      as: "v",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "v",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [31536000000, 1609459200000] })
    .editYScale({ domain: [0, 12] })    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 946684800000, 1262304000000, 1577836800000,
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif", color: "black" } }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "%", fontSize: 11, offset: 24 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif", color: "black" } },
      title: { fontFamily: "sans-serif", fontWeight: 700, color: "black" }
    })
    .createTitle({
      text: "Female unemployment rate, aged 16 and over",
      alongOffset: -33.123046875,
      titleStyle: { fontSize: 9, fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Seasonally Adjusted, Source: ONS",
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      offset: -12
    })
    .editTitle({
      gap: 3,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editLineMark({ stroke: "rgb(8,123,102", strokeWidth: 2 });
}