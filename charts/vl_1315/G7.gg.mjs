import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8270cd43de503558 (facets.md — shared facet legend and outer axes)
// DOCS: doc-8aa16ed3796df7b3 (facet.md — facet flow with editFacetHeaders/editCompositionLayout)
// DOCS: doc-8c1e8e710e83918a (charts-data.md — createScatterPlot contract)
// DOCS: doc-2b2e3149e57e859d (action-cards.json — createScatterPlot lifecycle)

export function buildChart() {
  return chart()
    .createCanvas({ width: 386, height: 303.71875, margin: { left: 95, right: 91, top: 19.71875, bottom: 84 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1315-original-source-font-widths", measurements: [
      { text: "dataset", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 63.03125 },
      { text: "0", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 13.359375 },
      { text: "20", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
      { text: "40", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
      { text: "60", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
      { text: "80", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 26.703125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 40.046875 },
      { text: "y", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
      { text: "away", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 56.03125 },
      { text: "bullseye", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 88.0625 },
      { text: "circle", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 56.015625 },
      { text: "dino", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 45.375 },
      { text: "dots", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 45.375 },
      { text: "h_lines", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 76.0625 },
      { text: "high_lines", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 108.09375 },
      { text: "slant_down", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 121.421875 },
      { text: "slant_up", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 90.75 },
      { text: "star", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 40.015625 },
      { text: "v_lines", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 74.71875 },
      { text: "wide_lines", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 112.078125 },
      { text: "x_shape", fontFamily: "sans-serif", fontSize: 24, fontWeight: 400, fontStyle: "normal", width: 90.75 },
      { text: "x", fontFamily: "sans-serif", fontSize: 36, fontWeight: 700, fontStyle: "normal", width: 20.03125 },
      { text: "away", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.359375 },
      { text: "bullseye", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.703125 },
      { text: "circle", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.34375 },
      { text: "dino", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
      { text: "dots", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.90625 },
      { text: "h_lines", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.703125 },
      { text: "high_lines", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.046875 },
      { text: "slant_down", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.59375 },
      { text: "slant_up", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "star", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.671875 },
      { text: "v_lines", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.140625 },
      { text: "wide_lines", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.703125 },
      { text: "x_shape", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "dataset", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 38.53125 }
    ] } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x" },
      y: { field: "y" },
      guides: false
    })
    .editXScale({ domain: [0, 100], nice: false })
    .editYScale({ domain: [0, 100], nice: false })
    .encodeColor({ field: "dataset", scale: { palette: "dark2", domain: ["away", "bullseye", "circle", "dino", "dots", "h_lines", "high_lines", "slant_down", "slant_up", "star", "v_lines", "wide_lines", "x_shape"] } })
    .encodeStroke({ field: "dataset", scale: { palette: "dark2", domain: ["away", "bullseye", "circle", "dino", "dots", "h_lines", "high_lines", "slant_down", "slant_up", "star", "v_lines", "wide_lines", "x_shape"] } })
    .encodePointRadius({ value: 3.1622776601683795 })
    .editPointMark({ strokeWidth: 4, opacity: 0.7 })
    .createAxes({
      x: {
        offset: 9,
        ticksAndLabels: { values: [0, 20, 40, 60, 80, 100], ticks: { length: 5, alongOffset: 0.5 }, labels: { fontSize: 24, offset: 4.5, alongOffset: 0.5, flush: true, labelMap: [{ value: 20, label: "" }, { value: 60, label: "" }, { value: 100, label: "" }] } },
        title: { text: "x", fontSize: 36, offset: 53.9375, alongOffset: 0.5 }
      },
      y: {
        ticksAndLabels: { values: [0, 20, 40, 60, 80, 100], ticks: { length: 5, alongOffset: 0.5 }, labels: { fontSize: 24, offset: 7.5, alongOffset: 1.21875 } },
        title: { text: "y", fontSize: 36, offset: 69.10546875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({ titleStyle: { fontSize: 11 }, labels: { fontSize: 10 }, symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7 }] } })
    .editLegend({ titleStyle: { fontWeight: 700, color: "black" }, labels: { color: "black" } })
    .facet({ field: "dataset", values: ["away", "bullseye", "circle", "dino", "dots", "h_lines", "high_lines", "slant_down", "slant_up", "star", "v_lines", "wide_lines", "x_shape"], guides: { axes: "outer", legend: "shared" } })
    .editCompositionLayout({ spacing: "plot", gap: 26 })
    .editFacetHeaders({ fontSize: 24, offset: 17.28125 })
    .editFacetHeaders({ fontWeight: 400, color: "black" })
    .createTitle({ text: "dataset", titleStyle: { fontSize: 18, fontWeight: 700, color: "black" }, offset: -2.78125 })
    .editTitle({ align: "center" });
}