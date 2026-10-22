// DOCS: doc-8aa16ed3796df7b3 (docs/recipes/facet.md — minimal facet flow: createCanvas, createData, createScatterPlot, facet with shared legend)
// DOCS: doc-8270cd43de503558 (docs/api/composition/facets.md — shared parent legend via facet guides.legend object)
// DOCS: doc-2b2e3149e57e859d (knowledge/action-cards.json — createScatterPlot wraps point mark, encoders, guides)
// DOCS: doc-8c1e8e710e83918a (docs/reference/actions/charts-data.md — editFacetGuides axes/legend ownership policies)

import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8aa16ed3796df7b3 — facade program flow, child canvas is the standalone input
export function buildChart() {
  return chart()
    // Stage 1: standalone child canvas (344 x 295.71875, source margins), plot border #ddd
    .createCanvas({
      width: 344,
      height: 295.71875,
      margin: { top: 19.71875, right: 63, bottom: 76, left: 81 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Stage 2: frozen complete data, all 44 raw rows and keys retained
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1311-original-source-font-widths",
        measurements: [
          { text: "dataset", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 63.03125 },
          { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "2", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "4", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "6", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "8", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "10", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "y", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
          { text: "I", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 6.671875 },
          { text: "II", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.34375 },
          { text: "III", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "IV", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 22.6875 },
          { text: "5", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
          { text: "15", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
          { text: "x", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
          { text: "I", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 2.78125 },
          { text: "II", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "III", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 8.34375 },
          { text: "IV", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 9.453125 },
          { text: "dataset", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 38.53125 }
        ]
      }
    })
    .createData({ values: data })
    // Stage 3: ordinary semantic facade with guides suppressed here; scales refined immediately after
    .createScatterPlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editXScale({ domain: [0, 20], nice: false })
    .editYScale({ domain: [0, 13], nice: false })
    .encodeColor({ field: "dataset", scale: { palette: "dark2" } })
    .encodeStroke({ field: "dataset", scale: { palette: "dark2" } })
    .encodePointRadius({ value: 4.743416490252569 })
    .editPointMark({ strokeWidth: 4, opacity: 0.7 })
    // Stage 4: complete source axes, then grid, then legend — source fonts/geometry at birth
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontSize: 24, offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "x", fontSize: 36, offset: 54.9375, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontSize: 24, offset: 7.5, alongOffset: 1.21875 }
      },
      title: {
        text: "y",
        fontSize: 36,
        offset: 55.7578125,
        alongOffset: 0.5,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7 }] }
    })
    // Stage 5: the one source-proven necessary four-key facet birth (column grid, outer axes, shared legend)
    .facet({
      field: "dataset",
      spacing: "plot",
      guides: { axes: "outer", legend: "shared" },
      headers: { fontSize: 24, fontWeight: 400, color: "black", offset: 15.28125 }
    })
    // Stage 6: composition layout family across all four panels
    .editCompositionLayout({ gap: 22 })
    // Stage 7: parent field title with source fonts, then alignment
    .createTitle({ text: "dataset", titleStyle: { fontSize: 18, fontWeight: 700, color: "black" }, offset: -2.78125 })
    .editTitle({ align: "center" });
}