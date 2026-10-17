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
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ value: 5, target: "linePlot" })
    .encodeOpacity({ value: 0.08, target: "linePlot" })
    .editXScale({ domain: [-6, 6] })
    .editYScale({ domain: [-5, 7] })
    .createLineMark({ id: "waveyLine", data: "data" })
    .encodeX({ target: "waveyLine", field: "x_in" })
    .encodeY({ target: "waveyLine", field: "wavey" })
    .encodeStroke({ target: "waveyLine", value: "blue" })
    .encodeStrokeWidth({ value: 2, target: "waveyLine" })
    .encodeOpacity({ value: 0.07, target: "waveyLine" })
    .createLineMark({ id: "yLine", data: "data", curve: "monotone" })
    .encodeX({ target: "yLine", field: "x_in" })
    .encodeY({ target: "yLine", field: "y" })
    .encodeStroke({ target: "yLine", value: "red" })
    .encodeStrokeWidth({ target: "yLine", value: 0.9 })
    .createPointMark({ id: "yPoints", data: "data", shape: "circle" })
    .editPointMark({ target: "yPoints", fill: "red" })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "yPoints" })
    .encodeX({ target: "yPoints", field: "x_in" })
    .encodeY({ target: "yPoints", field: "y" })
    .createLineMark({ id: "arcyLine", data: "data" })
    .encodeX({ target: "arcyLine", field: "x_in" })
    .encodeY({ target: "arcyLine", field: "arcy" })
    .encodeStroke({ target: "arcyLine", value: "green" })
    .encodeStrokeWidth({ value: 6, target: "arcyLine" })
    .encodeOpacity({ value: 0.08, target: "arcyLine" })
    .createGrid({ horizontal: { values: [-4, -2, 0, 2, 4, 6], lineWidth: 1 }, vertical: { values: [-6, -4, -2, 0, 2, 4, 6], lineWidth: 1 } })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [-6, -4, -2, 0, 2, 4, 6],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5 }
      },
      title: { text: "x_in", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "trend, wavey, y, arcy", fontSize: 11, offset: 26.8232421875, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", labelMap: [
          { value: -6, label: "−6" }, { value: -4, label: "−4" }, { value: -2, label: "−2" },
          { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }
        ] }
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", labelMap: [
          { value: -4, label: "−4" }, { value: -2, label: "−2" },
          { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }
        ] }
    })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e