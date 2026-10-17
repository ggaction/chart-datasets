// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 377, height: 412, margin: { left: 57, top: 62, right: 20, bottom: 50 } })
    .createData({ values: data })
    .createComputedData({ id: "giiData", as: "gii", expression: { op: "toNumber", operand: { field: "Gender Inequality Index" } } })
    .createComputedData({ id: "pctData", as: "pctDiff", expression: { op: "toNumber", operand: { field: "Percentage Difference" } } })
    .createScatterPlot({
      x: { field: "gii", fieldType: "quantitative" },
      y: { field: "pctDiff", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 0.8], nice: false, zero: false })
    .editYScale({ domain: [-60, 70], nice: false, zero: false })
    .editPointMark({ fill: "#5b92e5", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "\u27F5 \u27F6\nMore Equal Less Equal", fontSize: 11, fontFamily: "sans-serif", offset: 33.5 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-60, -40, -20, 0, 20, 40, 60],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Better Women's Team Better Men's Team\n\u27F5 \u27F6", fontSize: 11, fontFamily: "sans-serif", offset: 40, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: ".1f" }
      }
    })
    .editYAxis({
      ticksAndLabels: {
        ticks: { color: "#888" }
      }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createTitle({
      text: "Difference between Men's and Women's Team Performance\nvs Gender Equality",
      alongOffset: -51.962890625,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "UN Gender Inequality Index (x), Percentage Difference between\nMen's and Women's FIFA Ranking Points (y). 2021 data",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ gap: 1, titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black" } });
}