import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-7f2c254224fc4908, doc-d9e3b1b7add0d2c6

export function buildChart() {
  return chart()
    .createCanvas({ width: 255, height: 374, margin: { left: 24, top: 52, right: 31, bottom: 22 } })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["THA", "BWA", "SGP", "KOR", "CHN", "WLD"],
      as: { key: "country", value: "GDPpc" }
    })
    .createComputedData({
      id: "foldNum",
      as: "GDPpcNum",
      expression: { op: "toNumber", operand: { field: "GDPpc" } }
    })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "GDPpcNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-315619200000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 50] })
    .encodeGroup({ field: "country", fieldType: "nominal" })
    .encodeColor({
      field: "country",
      fieldType: "nominal"
    })
    .editColorScale({
      target: "linePlot",
      domain: ["BWA", "CHN", "KOR", "SGP", "THA", "WLD"],
      range: ["green", "orange", "red", "blue", "pink", "black"]
    })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ value: 0, label: "" }, { value: 631152000000, label: "" }, { value: 1262304000000, label: "" }] }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } }
    })
    .createGrid({ vertical: false, horizontal: { color: "rgba(221,221,221,0.3)" } })
    .createLegend({
      target: "linePlot",
      position: "top-left",
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .editLegendLabels({
      fontSize: 10
    })
    .editLegendBlock({
    target: "linePlot",
      channel: "color",
      labelMap: [
        { value: "BWA", label: "Botswana" },
        { value: "CHN", label: "China" },
        { value: "KOR", label: "S Korea" },
        { value: "SGP", label: "Singapore" },
        { value: "THA", label: "Thailand" },
        { value: "WLD", label: "World" }
      ]
    })
    .editLegend({ title: false })
    .createTitle({
      text: "What went so right?",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -18.1 })
    .editTitle({ subtitle: "GDP per capita, rebased 1960=1. Source: World Bank.\n" });
}