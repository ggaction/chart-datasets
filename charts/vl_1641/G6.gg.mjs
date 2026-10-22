import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-9be42ac1ab803c31 — standalone child canvas geometry before facet
    .createCanvas({ plot: { width: 40, height: 200 }, margin: { left: 40, top: 57, right: 76, bottom: 64 }, plotBorder: { underlay: true } })
    // DOCS: doc-9be42ac1ab803c31 — plot area and border underlay at child birth
    
    // SOURCE1641 — measured original country font metric for guide overlap checks
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1641-original-font-widths",
        measurements: [
          { text: "country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.34375 },
        ],
      },
    })
    // SOURCE1641 — retain both original raw rows untouched
    .createData({ values: data })
    // SOURCE1641 — public fold deriving 4 rows with key/value aliases
    .createFoldData({ id: "folded", fields: ["gold", "silver"], as: { key: "k", value: "v" } })
    // DOCS: doc-06d1dfbd494a77d9 — complete BarPlot facade with explicit x/y scales and guides at birth
    .createBarPlot({
      x: { field: "country" },
      y: { field: "v" },
      guides: false,
    })
    // SOURCE1641 — band scale refinement moved to public editor
    .editXScale({ domain: ["Canada", "USA"], paddingInner: 0.1, paddingOuter: 0.05 })
    // SOURCE1641 — quantitative y domain refinement moved to public editor
    .editYScale({ domain: [0, 26] })
    // SOURCE1641 — nominal country color with overlay layout and explicit domain
    .encodeColor({ field: "country", layout: "overlay" })
    // SOURCE1641 — color scale domain moved to public root editor
    .editColorScale({ domain: ["Canada", "USA"] })
    // SOURCE1641 — band-relative bar width
    .encodeBarWidth({ band: 1 })
    // SOURCE1641 — source bars carry no stroke
    .editBarMark({ stroke: false })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: ["Canada", "USA"],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, rotation: { value: -90, unit: "degrees" }, offset: 7, alongOffset: 0.390625 },
        },
        title: { text: "country", fontSize: 11, offset: 52.107421875, alongOffset: 0.5 },
        offset: 1.5,
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, alongOffset: 0.890625 },
        },
        title: { text: "v", fontSize: 11, offset: 27.044921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } },
        offset: 0.5,
      },
    })
    // SOURCE1641 — x axis paint moved to public editor
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" },
      },
      title: { color: "black", fontWeight: 700 },
    })
    // SOURCE1641 — y axis paint moved to public editor
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" },
      },
      title: { color: "black", fontWeight: 700 },
    })
    // SOURCE1641 — grid split from guides, exact source directions
    .createGrid({ vertical: false, horizontal: { color: "#ddd" } })
    // SOURCE1641 — explicit shared categorical legend with measured fonts and swatch recipe
    .createLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, strokeWidth: 0, opacity: 1 }] },
    })
    // SOURCE1641 — legend title padding completion
    .editLegend({ titlePadding: 3 })
    // DOCS: doc-9be42ac1ab803c31 — facet the complete child by k over folded data with headers
    .facet({
      field: "k",
      data: "folded",
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 },
    })
    // DOCS: doc-06d1dfbd494a77d9 — outer axes and shared legend across panels
    .editFacetGuides({ axes: "outer", legend: "shared" })
    // DOCS: doc-06d1dfbd494a77d9 — plot spacing, gap 22, and shared top lane
    .editCompositionLayout({ spacing: "plot", gap: 22, topLane: "shared" })
    // DOCS: doc-9be42ac1ab803c31 — parent centered title with source style
    .createTitle({ text: "k", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } })
    // SOURCE1641 — measured centered title placement
    .editTitle({ align: "center", offset: -2.421875 });
}