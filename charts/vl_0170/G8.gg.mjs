// DOCS: doc-8c1e8e710e83918a (createScatterPlot), doc-2b2e3149e57e859d (createScatterPlot card),
// DOCS: doc-8270cd43de503558 (facets / shared facet legend)
import { chart } from "ggaction";
import data from "./data.json";

// Stage 1: standalone child canvas + measured source font profile + frozen data.
// DOCS: doc-2b2e3149e57e859d (canvas and dataset context prerequisites)
export function buildChart() {
  return chart()
    // Standalone child canvas: width/height/margin only.
    .createCanvas({
      width: 311,
      height: 273.390625,
      margin: { top: 19.390625, right: 63, bottom: 54, left: 48 },
    })
    // Source plot border paint: 1px #ddd frame.
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Exact measured source glyph widths (unique tuples only).
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0170-original-source-font-widths",
        measurements: [
          { text: "player", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.421875 },
          { text: "0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "mean(is_hit)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 64.796875 },
          { text: "David Justice", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 59.46875 },
          { text: "Derek Jeter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.6875 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1996", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 22.640625 },
        ],
      },
    })
    // Complete frozen ancestor dataset, every raw row retained.
    .createData({ values: data })
    // Ordinary semantic facade with fields and deferred guides; scales moved below.
    // DOCS: doc-8c1e8e710e83918a
    .createScatterPlot({
      x: { field: "datamations_x" },
      y: { field: "datamations_y" },
      guides: false,
    })
    // Exact positional x scale moved out of the facade.
    .editXScale({ domain: [0.5, 2.5], nice: false })
    // Exact positional y scale moved out of the facade.
    .editYScale({ domain: [0.125, 0.333333333333333], nice: false })
    // Nominal year color with exact source ordinal domain.
    .encodeColor({ field: "year", scale: { domain: ["1995", "1996"], palette: "tableau10" } })
    // Source circle size: source size 30 (diameter squared) -> GG circle area.
    // DOCS: doc-2b2e3149e57e859d (encodePointRadius wrapped by scatter facade)
    .encodePointRadius({ value: 2.7386127875258306 })
    // Source point paint: nondefault opacity 0.7, stroke none.
    .editPointMark({ opacity: 0.7, stroke: false })
    // Complete x axis at creation with all source fonts/geometry before facet.
    .createXAxis({
      ticksAndLabels: {
        values: [1, 2],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: {
          fontSize: 10,
          rotation: { value: -90, unit: "degrees" },
          offset: 11.5,
          alongOffset: 0.890625,
        },
      },
      title: { text: "year", fontSize: 11, offset: 43.82421875, alongOffset: 0.5 },
    })
    // Focused x axis refinements: line paint, then grouped tick/label paint + label map, then title paint.
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({
      color: "black",
      labelMap: [{ value: 1, label: "1995" }, { value: 2, label: "1996" }],
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    // Complete y axis at creation with all source fonts/geometry before facet.
    .createYAxis({
      ticksAndLabels: {
        values: [0.15, 0.2, 0.25, 0.3],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontSize: 10, offset: 7.5, alongOffset: 0.890625 },
      },
      title: { text: "mean(is_hit)", fontSize: 11, offset: 35.884765625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } },
    })
    // Focused y axis refinements: line paint, then grouped tick/label paint + label format, then title paint.
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".2f" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    // Complete grid at creation with source paint before facet.
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    // Complete legend at creation with source fonts and point symbol recipe before facet.
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "point", size: 5, stroke: "none", strokeWidth: 1.5, opacity: 0.7 }] },
    })
    // Single facet: source panel partition and order preserved.
    .facet({
      field: "player",
      values: ["David Justice", "Derek Jeter"],
      headers: { fontSize: 10, offset: 13.609375 },
    })
    // Facet header paint moved out of the facet constructor.
    .editFacetHeaders({ fontWeight: 400, color: "black" })
    // Outer axes and shared parent-owned legend.
    .editFacetGuides({ axes: "outer", legend: "shared" })
    // Composition layout: plot spacing, 22px gap, start alignment.
    .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
    // Global parent heading: original facet field title.
    .createTitle({ text: "player", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, offset: -2.421875 })
    // Source centered heading alignment.
    .editTitle({ align: "center" });
}