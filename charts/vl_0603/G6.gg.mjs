import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-2bd5de4bd99e314a
export function buildChart() {
  return chart()
    .createCanvas({
      width: 345,
      height: 389,
      margin: { left: 39, top: 52, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "maleNum",
      as: "maleNum",
      expression: { op: "toNumber", operand: { field: "maleLE" } }
    })
    .createComputedData({
      id: "post65LE",
      as: "post65LE",
      expression: {
        op: "subtract",
        left: { field: "maleNum" },
        right: { constant: 65 }
      }
    })
    .createComputedData({
      id: "incomeNum",
      as: "income",
      expression: { op: "toNumber", operand: { field: "incomeDeprevation" } }
    })
    .createScatterPlot({
      x: { field: "income", fieldType: "quantitative" },
      y: { field: "post65LE", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 0.4] })
    .editYScale({ domain: [0, 18] })
    .encodePointRadius({ value: 5 })
    .editPointMark({ fill: "rgba(128,0,0,.8)", opacity: 0.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 9,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: {
        text: "Income deprivation rate, %",
        fontSize: 11,
        offset: 27
      }
    })
    .editXAxis({
      labels: { format: ".0%" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 10,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Post 65 life expectancy",
        fontSize: 11,
        offset: 28,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      labels: { format: ".0f" }
    })
    .editXAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createTitle({
      text: "The Glasgow Effect",
      alongOffset: -33.123046875,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      offset: -13,
      gap: 3,
      titleStyle: { color: "black", fontWeight: 700 }
    })
    .editTitle({
      subtitle: "Deprivation and Post-65 life expectancy; Source: GCPH",
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        color: "black"
      }
    });
}