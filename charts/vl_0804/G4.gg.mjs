import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2b2e3149e57e859d doc-8c1e8e710e83918a doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 314, margin: { left: 44, top: 27, right: 6, bottom: 37 } })
    .createData({ values: data })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0804-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "250", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Height", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 34.234375 },
      { text: "Weight", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 36.46875 },
      { text: "America", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 51.3125 }
    ] } })
    .createComputedData({ id: "heightNum", as: "HeightNum", expression: { op: "toNumber", operand: { field: "Height" } } })
    .createComputedData({ id: "weightNum", as: "WeightNum", expression: { op: "toNumber", operand: { field: "Weight" } } })
    .createScatterPlot({
      x: { field: "HeightNum", fieldType: "quantitative" },
      y: { field: "WeightNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 250] })
    .editYScale({ domain: [0, 250] })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "transparent", stroke: "#E7314C", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .createXAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }, values: [0, 50, 100, 150, 200, 250] },
      title: { text: "Height", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxis({
      line: { color: "#E7314C", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#E7314C" }, labels: { color: "#E7314C" } },
      title: { color: "#E7314C" }
    })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }, values: [0, 50, 100, 150, 200, 250] },
      title: { text: "Weight", fontSize: 11, fontWeight: 700, offset: 32.1064453125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#E7314C", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#E7314C" }, labels: { color: "#E7314C" } },
      title: { color: "#E7314C" }
    })
    .createGrid({
      horizontal: { color: "#debcc1", lineWidth: 1, values: [0, 50, 100, 150, 200, 250] },
      vertical: { color: "#debcc1", lineWidth: 1, values: [0, 50, 100, 150, 200, 250] }
    })
    .createTitle({ text: "America", titleStyle: { fontSize: 13, fontWeight: 700, color: "#E7314C" }, offset: -10.953125 })
    .editTitle({ align: "center" })
    .editCanvas({ background: "rgba(255, 255, 255, 0)", plotBorder: { color: "#ddd", lineWidth: 1 } });
}