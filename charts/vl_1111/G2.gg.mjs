import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 745, height: 642, margin: { left: 39, top: 5, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-all15-guide-glyphs", measurements: [
      { text: "−6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
      { text: "−4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
      { text: "−2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "x_in", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 22.015625 },
      { text: "trend, wavey, y, arcy", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 106 }
    ] } })
    .createData({ values: data })
    .createLinePlot({ x: "x_in", y: "trend", guides: false })
    .editLineMark({ target: "linePlot", strokeWidth: 5, stroke: "black" })
    .editLineMark({ target: "linePlot", opacity: 0.08 })
    .editXScale({ domain: [-6, 6] })
    .editYScale({ domain: [-5, 7] })
    .createLineMark({ id: "waveyLine", data: "data" })
    .encodeX({ target: "waveyLine", field: "x_in" })
    .encodeY({ target: "waveyLine", field: "wavey" })
    .editLineMark({ target: "waveyLine", strokeWidth: 2 })
    .editLineMark({ target: "waveyLine", stroke: "blue", opacity: 0.07 })
    .createLineMark({ id: "yLine", data: "data", curve: "monotone" })
    .encodeX({ target: "yLine", field: "x_in" })
    .encodeY({ target: "yLine", field: "y" })
    .editLineMark({ target: "yLine", strokeWidth: 0.9, stroke: "red" })
    .createPointMark({ id: "yPoints", data: "data", shape: "circle" })
    .editPointMark({ target: "yPoints", fill: "red" })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "yPoints" })
    .encodeX({ target: "yPoints", field: "x_in" })
    .encodeY({ target: "yPoints", field: "y" })
    .createLineMark({ id: "arcyLine", data: "data" })
    .encodeX({ target: "arcyLine", field: "x_in" })
    .encodeY({ target: "arcyLine", field: "arcy" })
    .editLineMark({ target: "arcyLine", strokeWidth: 6, stroke: "green" })
    .editLineMark({ target: "arcyLine", opacity: 0.08 })
    .createGrid({ horizontal: { values: [-4, -2, 0, 2, 4, 6], color: "#ddd", lineWidth: 1 }, vertical: { values: [-6, -4, -2, 0, 2, 4, 6], color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [-6, -4, -2, 0, 2, 4, 6],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, labelMap: [
          { value: -6, label: "−6" }, { value: -4, label: "−4" }, { value: -2, label: "−2" },
          { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }
        ] }
      },
      title: { text: "x_in", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [
          { value: -4, label: "−4" }, { value: -2, label: "−2" },
          { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }
        ] }
      },
      title: { text: "trend, wavey, y, arcy", fontSize: 11, fontWeight: 700, color: "black", offset: 26.8232421875, rotation: { value: -90, unit: "degrees" } }
    });
}

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e