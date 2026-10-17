// DOCS: doc-1ef852966df13aa6 (createAreaPlot/createGuides/createTitle flow)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 498, height: 374, margin: { left: 38, top: 52, right: 10, bottom: 22 } })
    .createData({ id: "debt", values: data })
    .createFoldData({ id: "folded", fields: ["hh", "nfc", "gov"], as: { key: "var", value: "val" } })
    .createComputedData({ id: "foldN", as: "valN", expression: { op: "toNumber", operand: { field: "val" } } })
    .createSortedData({ id: "sortedVar", sortBy: [{ field: "var", order: "descending" }] })
    .createAreaPlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valN" },
      guides: false
    })
    .editXScale({ domain: [-631152000000, 1609459200000] })
    .editYScale({ domain: [0, 4] })
    .encodeGroup({ field: "var" })
    .encodeColor({ field: "var", layout: "stack" })
    .editColorScale({
      target: "areaPlot",
      domain: ["gov", "hh", "nfc"],
      range: ["rgb(87, 16, 109)", "rgb(187, 55, 85)", "rgb(250, 141, 11)"]
    })
    .editAreaMark({ opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [-631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: ".0%" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "lightgray", lineWidth: 0.5 }, vertical: false })
    .createLegend({ position: "top-left", columns: 3, title: false })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif", color: "black" })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .editLegendBlock({ target: "areaPlot", channel: "color", labelMap: [{ value: "gov", label: "Governments" }, { value: "hh", label: "Households" }, { value: "nfc", label: "Companies" }] })
    .createTitle({
      text: "Has debt finally stopped rising?",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Total debt outstanding, by sector. Source: IMF\n", offset: -13, alongOffset: -32.58 })
    .editTitle({ gap: 1 });
}
