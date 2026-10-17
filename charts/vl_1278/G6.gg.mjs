import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({ width: 315, height: 247, margin: { left: 33, top: 10, right: 82, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1278", measurements: [
      { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "1.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "2.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "Petal.Width", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 59.796875 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "Petal.Length", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 66.015625 },
      { text: "setosa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 29.46875 },
      { text: "versicolor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.796875 },
      { text: "virginica", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.6875 },
      { text: "Species", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 41.59375 }
    ] } })
    .createScatterPlot({
      x: { field: "Petal.Width" },
      y: { field: "Petal.Length" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 2.6] })
    .editYScale({ target: "scatterPlot", domain: [0, 7] })
    .encodeStroke({ field: "Species" })
    .editStrokeScale({ target: "scatterPlot", domain: ["setosa", "versicolor", "virginica"], range: ["rgba(76,120,168,0.7)", "rgba(245,133,24,0.7)", "rgba(228,87,86,0.7)"] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5],
        ticks: { length: 5, color: "#888", alongOffset: 0.5 },
        labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true, format: ".1f" }
      },
      title: { text: "Petal.Width", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7],
        ticks: { length: 5, color: "#888", alongOffset: 0.890625 },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "Petal.Length", fontSize: 11, fontWeight: 700, color: "black", offset: 20.9833984375, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { values: [0, 1, 2, 3, 4, 5, 6, 7], color: "#ddd", lineWidth: 1 },
      vertical: { values: [0, 0.5, 1, 1.5, 2, 2.5], color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      symbol: { layers: [{ type: "point", shape: "circle", size: 2.7386127875258306, fill: "transparent", strokeWidth: 2 }] },
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    });
}