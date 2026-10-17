// DOCS: doc-b11b4627b143730d, doc-1b524928ff518325
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { left: 44, top: 10, right: 59, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createCompleteData({
      id: "keyGrid",
      key: "a",
      groupBy: "c"
    })
    .editCompleteData({ target: "keyGrid", values: [0, 1, 2, 3, 4] })
    .createImputedData({
      id: "bFilled",
      fields: ["b"],
      groupBy: "c"
    })
    .editImputedData({ target: "bFilled", method: "constant", value: 100 })
    .createLinePlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 5], nice: true })
    .editYScale({ domain: [0, 100] })
    .encodeColor({ field: "c", fieldType: "nominal" })
    .editColorScale({ type: "ordinal", domain: [0, 1], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "a", fontSize: 11, fontFamily: "sans-serif", fontWeight: "bold" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "b", fontSize: 11, fontFamily: "sans-serif", fontWeight: "bold" }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      labels: { fontSize: 10, fontFamily: "sans-serif", offset: 4 },
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: "bold" }
    })
  .editYAxis({ title: { offset: 32.1064453125 } });
}