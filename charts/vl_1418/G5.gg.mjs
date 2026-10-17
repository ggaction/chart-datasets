// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451.65625,
      height: 410,
      margin: { top: 10, right: 5.989583333333371, bottom: 39, left: 44 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "value", fieldType: "ordinal" },
      y: "count",
      guides: false
    })
    .editXScale({
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 450] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" }, overlap: "allow" }
      },
      title: { text: "value", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 33 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({
      horizontal: { color: '#ddd', lineWidth: 1 },
      vertical: false
    });
}
