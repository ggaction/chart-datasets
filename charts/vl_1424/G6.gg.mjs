import { chart, hconcat } from "ggaction";
// DOCS: doc-6c2c08869091f6a0 createBarPlot facade; doc-fc11e9fb291905d1 createBarPlot usage
import data from "./data.json";

export function buildChart() {
  // ============================================================ child0
  const child0 = chart()
    // Source cell canvas 383x139, margins measured from the source SVG cell.
    // DOCS: doc-6c2c08869091f6a0 (prerequisites: canvas and dataset context)
    .createCanvas({
      width: 383,
      height: 139,
      margin: { top: 26, right: 7, bottom: 38, left: 126 }
    })
    // Source plot border belongs to editCanvas.
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    // Exact measured source glyph widths feed the overlap check so all six
    // visible x labels plus three y labels stay visible without overlap:allow.
    // DOCS: doc-a6a030a60e7ed085 (measured source text geometry)
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1424-panel0-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
        ]
      }
    })
    .createData({ values: data })
    // Source transform: filter pacbioRun equal "A_220708".
    // DOCS: doc-6c2c08869091f6a0 (data transform ownership)
    .filterData({ id: "panel0Rows", field: "pacbioRun", oneOf: ["A_220708"] })
    // Preserve the exact source x scale domain [0, 1100000] (endpoint differs
    // from the last visible tick 1,000,000); range resolves from Canvas margins.
    // Horizontal bars: quantitative measure on x, nominal category on y.
    // DOCS: doc-6c2c08869091f6a0; doc-fc11e9fb291905d1
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "category", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1100000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    // Resolved source band width is 22.5, so the band fraction is 1 (padding
    // lives on the scale, never applied twice).
    .encodeBarWidth({ band: 1 })
    // Source bar fill #4c78a8, no stroke.
    .editBarMark({ fill: "#4c78a8", stroke: false })
    // Source x-axis grid lines at the x tick values.
    // DOCS: doc-6c2c08869091f6a0 (createGrid wrapped by the facade; explicit vertical grid)
    .createVerticalGrid({
      values: [0, 200000, 400000, 600000, 800000, 1000000],
      lineWidth: 1
    })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000],
        ticks: { length: 5 },
        labels: { offset: 5.5, fontSize: 10, flush: true }
      },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ",.0f" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    // Source cell header, fontSize 10 weight 400 black, safe birth offset 0.
    .createTitle({
      text: "A_220708",
      offset: 0,
      titleStyle: { fontSize: 10, fontWeight: 400, color: "black" }
    })
    // Measured native final alignment and offset move to the existing editTitle.
    .editTitle({ align: "center", offset: -9.609375 });

  // ============================================================ child1
  const child1 = chart()
    .createCanvas({
      width: 383,
      height: 139,
      margin: { top: 26, right: 7, bottom: 38, left: 126 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1424-panel1-actual-source-axis-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
          { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
          { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "panel1Rows", field: "pacbioRun", oneOf: ["B_220708"] })
    // Preserve the exact source x scale domain [0, 1000000].
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "category", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1000000] })
    .editYScale({ domain: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .createVerticalGrid({
      values: [0, 200000, 400000, 600000, 800000, 1000000],
      lineWidth: 1
    })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000],
        ticks: { length: 5 },
        labels: {
          offset: 5.5,
          fontSize: 10,
          flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 200000, label: "" },
            { value: 400000, label: "400,000" },
            { value: 600000, label: "" },
            { value: 800000, label: "800,000" },
            { value: 1000000, label: "" }
          ]
        }
      },
      title: { text: "count", fontSize: 11, offset: 27.484375 }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ",.0f" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createTitle({
      text: "B_220708",
      offset: 0,
      titleStyle: { fontSize: 10, fontWeight: 400, color: "black" }
    })
    .editTitle({ align: "center", offset: -9.609375 });

  // ============================================================ composition
  // CONCAT SOURCE (opt-in): explicit children assembled horizontally.
  // DOCS: doc-6c2c08869091f6a0 (facade children share the same source family)
    return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 9,
    align: "start"
  });
}