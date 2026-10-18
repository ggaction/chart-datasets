import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 314, margin: { left: 44, top: 27, right: 6, bottom: 37 } })
    .editCanvas({ background: "rgba(255, 255, 255, 0)", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0802-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "250", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Height", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 34.234375 },
      { text: "Weight", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 36.46875 },
      { text: "Europe", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 44.796875 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "heightNum", as: "HeightNum", expression: { op: "toNumber", operand: { field: "Height" } } })
    .createComputedData({ id: "weightNum", as: "WeightNum", expression: { op: "toNumber", operand: { field: "Weight" } } })
    .createScatterPlot({
      x: { field: "HeightNum" },
      y: { field: "WeightNum" },
      guides: false
    })
    .editXScale({ domain: [0, 250] })
    .editYScale({ domain: [0, 250] })
    .editPointMark({ fill: "transparent", stroke: "#007DC2", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createXAxis({
      line: { color: "#007DC2" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5, color: "#007DC2" },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true, color: "#007DC2" }
      },
      title: { text: "Height", fontSize: 11, fontWeight: 700, color: "#007DC2", offset: 27.578125, alongOffset: 0.5 }
    })
    .createYAxis({
      line: { color: "#007DC2" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5, color: "#007DC2" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, color: "#007DC2" }
      },
      title: { text: "Weight", fontSize: 11, fontWeight: 700, color: "#007DC2", offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { values: [0, 50, 100, 150, 200, 250], color: "#b9d1de", lineWidth: 1 },
      vertical: { values: [0, 50, 100, 150, 200, 250], color: "#b9d1de", lineWidth: 1 }
    })
    .createTitle({ text: "Europe", titleStyle: { fontSize: 13, fontWeight: 700, color: "#007DC2" }, offset: -10.953125 })
    .editTitle({ align: "center" });
}