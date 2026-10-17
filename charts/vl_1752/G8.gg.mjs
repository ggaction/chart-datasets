// DOCS: doc-a330f2d4ad5472a6, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 247,
      height: 347,
      margin: { left: 41, top: 10, right: 6, bottom: 37 }
    })
    .createData({
      values: data
    })
    .createLinePlot({
      guides: false,
      x: { field: "Horsepower" },
      y: { field: "Horsepower" }
    })
    .editXScale({ domain: [1, 5] })
    .editYScale({ domain: [0, 5], zero: true })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 8 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, lineWidth: 1 },
        labels: { fontSize: 10, offset: 8 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisTitle({ color: "black", fontWeight: "bold" })
    .createGrid({
      horizontal: {color: '#ddd'}
    })
    .editLineMark({ strokeWidth: 0.5 })
    .createVerticalGrid({color:'#ddd'});
}