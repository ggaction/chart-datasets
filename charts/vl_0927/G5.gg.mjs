// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-0a1e48878a814143
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 224,
      height: 272,
      margin: { left: 18, top: 40, right: 6, bottom: 32 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valuesNumeric",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#DAD7CD", strokeWidth: 1 })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 5] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y", fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .createTitle({
      text: "Total population aged 65+ ",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Unemployment rate, %, 1992-2022",
      gap: 1,
      offset: -13
    })
    .editTitle({ align: "left", alongOffset: -12.56, titleStyle: { fontWeight: 700 } });
}
