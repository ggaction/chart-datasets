// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 375,
      height: 374,
      margin: { left: 39, top: 37, right: 16, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNumData",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1667260800000], nice: false })
    .editYScale({ domain: [0, 18] })
    .encodeStroke({ target: "linePlot", value: "#002199" })
.encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          631152000000, 788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Inflation",
        fontSize: 11,
        offset: 32,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createTitle({
      text: "CPI ANNUAL RATE 02 : ALCOHOLIC BEVERAGES AND TOBACCO 2015=100",
      titleStyle: { fontSize: 10 },
      alongOffset: -33.1
    })
    .editTitle({
      subtitle: "(\u00A3million, Source: ONS)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      offset: -13
    })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .editTitle({ gap: 1, titleStyle: { fontWeight: 700 } });
}