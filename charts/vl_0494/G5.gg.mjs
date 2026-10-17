// DOCS: doc-148b81d7fc52eff8, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 640, height: 423, margin: { left: 58, top: 53, right: 82, bottom: 70 } })
    .createData({ id: "census", values: data })
    .createComputedData({ id: "yearS", as: "yearS", expression: { constant: 2015 } })
    .filterData({ id: "year2015", field: "Year", predicate: { op: "eq", value: "2015" } })
    .createFoldData({ id: "folded", fields: ["New York", "California"], as: { key: "State", value: "Value" } })
    .createComputedData({ id: "valueNum", as: "ValueN", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({ x: "State", y: "ValueN", guides: false })
    .editXScale({ domain: ["California", "New York"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 40000] })
    .encodeBarWidth({ band: 1 })
    .encodeColor({ field: "State", layout: "overlay" })
    .editColorScale({ domain: ["California", "New York"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .createTitle({ text: "New York vs California", titleStyle: { fontSize: 12, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ align: "center", offset: -12, gap: 1 })
    .editTitle({ subtitle: "Population, 1900-2021\n" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "actual-source-glyphs-0494", measurements: [{ text: "California", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.25 }, { text: "New York", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.265625 }, { text: "State", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.90625 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "35,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 }, { text: "New York vs California", fontFamily: "sans-serif", fontSize: 12, fontWeight: 700, fontStyle: "normal", width: 128.953125 }, { text: "Population, 1900-2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 100.640625 }] } })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7, rotation: -Math.PI / 2 } },
      title: { text: "State", fontSize: 11, offset: 63 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Value", fontSize: 11, offset: 47 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700, color: "black" } })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ title: "State", symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }, labels: { fontSize: 10, color: "black" } })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, color: "black" });
}
