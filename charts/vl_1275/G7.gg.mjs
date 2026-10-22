import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8aa16ed3796df7b3 facet minimal flow
// DOCS: doc-9b8ffb4e65fb646c editCompositionLayout and facet reference
// DOCS: doc-8270cd43de503558 shared facet owner legend
// DOCS: doc-f84a6354ad5070da facet source and shared guides ordering
export function buildChart() {
  return chart()
    // Stage1: verified standalone child canvas (width, height, margin only)
    .createCanvas({
      width: 359,
      height: 303.71875,
      margin: { left: 95, right: 64, top: 19.71875, bottom: 84 }
    })
    // Stage1: plot border before facet
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Stage1: source text metrics profile (vl_1275)
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1275-original-source-font-widths",
        measurements: [
          { text: "dataset", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 63.03125 },
          { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "20", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 40.046875 },
          { text: "y", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
          { text: "away", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 56.03125 },
          { text: "circle", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 56.015625 },
          { text: "dino", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 45.375 },
          { text: "dots", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 45.375 },
          { text: "x", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
          { text: "away", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.359375 },
          { text: "circle", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.34375 },
          { text: "dino", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "dots", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
          { text: "dataset", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 38.53125 }
        ]
      }
    })
    // Stage2: frozen source data, all 568 original rows/types/order
    .createData({ values: data })
    // Stage3: ordinary facade with guides:false; scales edited explicitly below
    .createScatterPlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 100], nice: false })
    // Stage3: public categorical encodings with explicit original facet order domains
    .encodeColor({ field: "dataset", scale: { palette: "dark2", domain: ["away", "circle", "dino", "dots"] } })
    .encodeStroke({ field: "dataset", scale: { palette: "dark2", domain: ["away", "circle", "dino", "dots"] } })
    .encodePointRadius({ value: 3.1622776601683795 })
    .editPointMark({ strokeWidth: 4, opacity: 0.7 })
    // Stage4: complete createAxes with all source fonts at birth
    .createAxes({
      x: {
        offset: 9,
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 24,
            offset: 4.5,
            alongOffset: 0.5,
            flush: true,
            labelMap: [{ value: 20, label: "" }, { value: 60, label: "" }, { value: 100, label: "" }]
          }
        },
        title: { text: "x", fontSize: 36, offset: 53.9375, alongOffset: 0.5 }
      },
      y: {
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 24, offset: 7.5, alongOffset: 1.21875 }
        },
        title: {
          text: "y",
          fontSize: 36,
          offset: 69.10546875,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    // Stage4b: whole-axis appearance edits
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({
      color: "#888"
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({
      color: "#888"
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7 }] }
    })
    .editLegend({ titleStyle: { fontWeight: 700, color: "black" }, labels: { color: "black" } })
    // Stage5: facet birth with field, values, shared guide policy
    .facet({ field: "dataset", values: ["away", "circle", "dino", "dots"], guides: { axes: "outer", legend: "shared" } })
    // Stage6: layout, then header editors per source order
    .editCompositionLayout({ spacing: "plot", gap: 26 })
    .editFacetHeaders({ fontSize: 24, offset: 17.28125 })
    .editFacetHeaders({ fontWeight: 400, color: "black" })
    // Stage7: parent field title
    .createTitle({
      text: "dataset",
      titleStyle: { fontSize: 18, fontWeight: 700, color: "black" },
      offset: -2.78125
    })
    .editTitle({ align: "center" });
}