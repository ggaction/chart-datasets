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
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 8 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: "bold", color: "black", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 8 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: "bold", color: "black", offset: 28 }
    })
    .createGrid({
      horizontal: {color: '#ddd'}
    })
    .editLineMark({ strokeWidth: 0.5 })
    .createVerticalGrid({color:'#ddd'});
}