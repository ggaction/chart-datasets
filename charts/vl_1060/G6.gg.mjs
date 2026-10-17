// DOCS: doc-6c2c08869091f6a0, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 589,
      height: 545,
      margin: { left: 59, top: 10, right: 30, bottom: 35 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "a", fieldType: "ordinal" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ target: "barPlot", band: 1 })
    .editBarMark({ cornerRadius: 1, fill: "#4c78a8", opacity: 1 })
    .createLinePlot({
      x: { field: "a", fieldType: "ordinal" },
      y: { field: "c", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ target: "linePlot", value: 1 })
    .encodeOpacity({ target: "linePlot", value: 1 })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 100] })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "category", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxis({
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", fontWeight: 400 } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Count", fontSize: 11, offset: 28 }
    })
    .editYAxis({
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", fontWeight: 400 } },
      title: { fontWeight: 700 }
    })
    .editYAxisLine({ color: "#888" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false });
}
