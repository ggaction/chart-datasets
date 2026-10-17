// DOCS: doc-e790db38fc2a278a, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 410, height: 69, margin: { left: 5, top: 10, right: 5, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({
      id: "colorGroup",
      as: "colorGroup",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "value" }, right: { constant: 40 } },
        then: { constant: "blue" },
        else: {
          op: "if",
          condition: { op: "lt", left: { field: "value" }, right: { constant: 50 } },
          then: { constant: "red" },
          else: {
            op: "if",
            condition: { op: "lt", left: { field: "value" }, right: { constant: 60 } },
            then: { constant: "yellow" },
            else: { constant: "black" }
          }
        }
      }
    })
    .createComputedData({ id: "yCenter", as: "yCenter", expression: { constant: 0.5 } })
    .createScatterPlot({
      x: { field: "value", fieldType: "ordinal" },
      y: { field: "yCenter", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "colorGroup", fieldType: "nominal" })
    .editXScale({ domain: [10, 20, 30, 40, 50, 60] })
    .editYScale({ domain: [0, 1], nice: false, zero: false })
    .editColorScale({ domain: ["blue", "red", "yellow", "black"], range: ["blue", "red", "yellow", "black"] })
    .encodePointRadius({ value: 14.142135623730951 })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .createXAxis({
      ticksAndLabels: {
        values: [10, 20, 30, 40, 50, 60],
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -Math.PI / 2, unit: "radians" } }
      },
      title: { text: "value", fontSize: 11 }
    })
    .editXAxisTitle({ fontWeight: 700 });
}