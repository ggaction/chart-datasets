// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e, doc-ca3e770693a924c8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 239, height: 374, margin: { left: 26, top: 52, right: 13, bottom: 22 } })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["COD", "CAF", "HTI", "MDG", "NER", "WLD"],
      as: { key: "country", value: "GDPpc" }
    })
    .createComputedData({
      id: "foldNum",
      as: "GDPpcN",
      expression: { op: "toNumber", operand: { field: "GDPpc" } }
    })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "GDPpcN", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "country" })
    .encodeStrokeWidth({ value: 2 })
    .editColorScale({
      type: "ordinal",
      domain: ["CAF", "COD", "HTI", "MDG", "NER", "WLD"],
      range: ["green", "orange", "red", "blue", "pink", "black"]
    })
    .editYScale({ domain: [0, 3.5] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ".1f" } } })
    .createGrid({ vertical: false, horizontal: true })
    .editHorizontalGrid({ color: "rgba(221,221,221,0.3)" })
    .createLegend({
      title: false,
      position: "top-left",
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      labelMap: [
        { value: "CAF", label: "Central African Republic" },
        { value: "COD", label: "Congo Dem Rep" },
        { value: "HTI", label: "Haiti" },
        { value: "MDG", label: "Madagascar" },
        { value: "NER", label: "Niger" },
        { value: "WLD", label: "World" }
      ]
    })
    .createTitle({
      text: "What went so wrong?",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "GDP per capital. 1960=1, Source: WB.\n",
      offset: -13,
      gap: 1
    });
}