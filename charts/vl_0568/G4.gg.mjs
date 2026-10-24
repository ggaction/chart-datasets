import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-4a5b09f3c45080d2, doc-5a9a28857a8808b8, doc-a7e245c04b6a2ed2, doc-6e8723b1d6f8afb6, doc-0cbb124f0c04d6d9, doc-5d1932fc53b5becc, doc-a7ee7e6d3d74e6bc
export function buildChart() {
  return chart()
    .createCanvas({ width: 583, height: 385, margin: { left: 48, top: 48, right: 85, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0568-original-svg-text", measurements: [{ text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "undefined", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.9375 }] } })
    .createData({ values: data })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "typedCategory", as: "sourceDisplayCategory", expression: { constant: "undefined" } })
    .createLinePlot({
      x: { field: "variable", fieldType: "temporal", scale: { domain: [0, 1609459200000] } },
      y: { field: "sourceValue", scale: { domain: [0, 0.65] } },
      guides: false
    }).createXAxis({line: {color: "#888"}, ticksAndLabels: {values: [0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1}}, title: {text: "variable", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}).createYAxis({line: {color: "#888"}, ticksAndLabels: {values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".0%", offset: 6.5, alongOffset: 0.890625}}, title: {text: "value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 35.4365234375, alongOffset: 0.5}})
    .createGrid({
      horizontal: { color: "rgba(221,221,221,0.2)", values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6] },
      vertical: { color: "rgba(221,221,221,0.2)", values: [0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000] }
    })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({ field: "sourceDisplayCategory", scale: { domain: ["undefined"], range: ["#880000"] } })
    .createScatterPlot({
      x: { field: "variable", fieldType: "temporal", scale: { domain: [0, 1609459200000] } },
      y: { field: "sourceValue", scale: { domain: [0, 0.65] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ field: "sourceDisplayCategory", scale: { domain: ["undefined"], range: ["#880000"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createRuleMark({ data: "typedCategory", strokeWidth: 1, opacity: 0.5 })
    .encodeX({ field: "variable", fieldType: "temporal", scale: { domain: [0, 1609459200000] } })
    .editRuleMark({ stroke: "black" })
    .createLegend({ target: "scatterPlot", title: "Type", labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" } })
    .editLegend({ labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" }, symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7, fill: "transparent" }] } })
    .createTitle({ text: "Global openness: Trade as a % of GDP", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Source: World Bank\n", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -42.0146484375 });
}