import { chart, hconcat } from "ggaction";
import data from "./data.json";

// doc-f1f94dec7d5389ca Composition Recipe: two child programs, hconcat with named slots.
// doc-6c2c08869091f6a0 createBarPlot: categorical/measure bars, guides disabled for explicit source guides.

export function buildChart() {
  const child0 = chart()
  // doc: createCanvas — source cell canvas, margins from unitHints; plot implied by width-minus-margins.
  .createCanvas({
    width: 383,
    height: 139,
    margin: { top: 26, right: 7, bottom: 38, left: 126 }
  })
  // doc: editCanvas — source view frame plot border.
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  // doc: createData — frozen shared source rows.
  .createData({ values: data })
  // doc: filterData — source filter pacbioRun equal "Lib-1_220629" via oneOf primary mode.
  .filterData({ id: "panel0Rows", field: "pacbioRun", oneOf: ["Lib-1_220629"] })
  // doc-6c2c08869091f6a0 createBarPlot — horizontal bars: x=count quantitative, y=category nominal, guides off for explicit source guides.
  .createBarPlot({
    x: { field: "count", fieldType: "quantitative" },
    y: "category",
    guides: false
  })
  // doc: encodeBarWidth — resolved Y bandwidth is 22.5; band:1 uses the already-resolved band width, not the full slot.
  .encodeBarWidth({ band: 1 })
  // doc: editXScale — preserve the exact source linear domain [0, 2800000]; range resolves from Canvas margins.
  .editXScale({ domain: [0, 2800000] })
  // doc: editYScale — source band scale paddingInner 0.1, paddingOuter 0.05.
  .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
  // doc: applyTextMetrics — frozen actual source axis glyph widths for this panel.
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "vl_1442-panel0-actual-source-axis-widths",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
        { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
        { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
        { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
      ]
    }
  })
  // doc: createVerticalGrid — source x-axis grid at all actual tick values, drawn behind marks.
  .createVerticalGrid({
    values: [0, 500000, 1000000, 1500000, 2000000, 2500000],
    lineWidth: 1
  })
  .editVerticalGrid({ color: "#ddd" })
  // doc: createAxes — source axes: line/ticks #888 width 1, tick length 5; labels black 10 regular; X labels offset 5.5, comma integer format, flush; Y labels offset 7; Y title null; bold "count" X title black 11.
  .editBarMark({ stroke: false })
  .createXAxis({
    line: { lineWidth: 1 },
    ticksAndLabels: {
      values: [0, 500000, 1000000, 1500000, 2000000, 2500000],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 5.5, flush: true }
    },
    title: { text: "count", fontSize: 11, offset: 27.484375 }
  })
  .createYAxis({
    line: { lineWidth: 1 },
    ticksAndLabels: {
      values: ["aligned PacBio_amplicon", "filtered PacBio_amplicon", "unmapped"],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 7 }
    },
    title: false
  })
  .editXAxisLine({ color: "#888", lineWidth: 1 })
  .editXAxisTicks({ color: "#888" })
  .editXAxisLabels({ color: "black", format: ",.0f" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .editYAxisLine({ color: "#888", lineWidth: 1 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black" })
  // doc: createTitle — source cell header "Lib-1_220629", 10px regular black, safe birth offset 0.
  .createTitle({
    text: "Lib-1_220629",
    offset: 0,
    titleStyle: { fontSize: 10 }
  })
  // doc: editTitle — measured native final alignment, offset and moved source title paint.
  .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });


  const child1 = chart()
  // doc: createCanvas — source cell canvas, margins from unitHints; plot implied by width-minus-margins.
  .createCanvas({
    width: 383,
    height: 139,
    margin: { top: 26, right: 7, bottom: 38, left: 126 }
  })
  // doc: editCanvas — source view frame plot border.
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
  // doc: createData — frozen shared source rows.
  .createData({ values: data })
  // doc: filterData — source filter pacbioRun equal "Lib-2_220629" via oneOf primary mode.
  .filterData({ id: "panel1Rows", field: "pacbioRun", oneOf: ["Lib-2_220629"] })
  // doc-6c2c08869091f6a0 createBarPlot — horizontal bars: x=count quantitative, y=category nominal, guides off for explicit source guides.
  .createBarPlot({
    x: { field: "count", fieldType: "quantitative" },
    y: "category",
    guides: false
  })
  // doc: encodeBarWidth — resolved Y bandwidth is 22.5; band:1 uses the already-resolved band width, not the full slot.
  .encodeBarWidth({ band: 1 })
  // doc: editXScale — preserve the exact source linear domain [0, 3500000]; range resolves from Canvas margins.
  .editXScale({ domain: [0, 3500000] })
  // doc: editYScale — source band scale paddingInner 0.1, paddingOuter 0.05.
  .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
  // doc: applyTextMetrics — frozen actual source axis glyph widths for this panel.
  .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "vl_1442-panel1-actual-source-axis-widths",
      measurements: [
        { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
        { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
        { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "3,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
        { text: "aligned PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 112.296875 },
        { text: "filtered PacBio_amplicon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.0625 },
        { text: "unmapped", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 }
      ]
    }
  })
  // doc: createVerticalGrid — source x-axis grid at all actual tick values, drawn behind marks.
  .createVerticalGrid({
    values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000],
    lineWidth: 1
  })
  .editVerticalGrid({ color: "#ddd" })
  // doc: createAxes — source axes with labelOverlap removal: 500,000 / 1,500,000 / 2,500,000 / 3,500,000 are effective-opacity-zero in the frozen source and map to empty paint while retaining raw ticks; line/ticks #888 width 1, tick length 5; X labels offset 5.5, comma integer format, flush; Y labels offset 7; Y title null; bold "count" X title black 11.
  .editBarMark({ stroke: false })
  .createXAxis({
    line: { lineWidth: 1 },
    ticksAndLabels: {
      values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000],
      ticks: { length: 5 },
      labels: {
        fontSize: 10,
        offset: 5.5,
        flush: true,
        labelMap: [
          { value: 500000, label: "" },
          { value: 1500000, label: "" },
          { value: 2500000, label: "" },
          { value: 3500000, label: "" }
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
      labels: { fontSize: 10, offset: 7 }
    },
    title: false
  })
  .editXAxisLine({ color: "#888", lineWidth: 1 })
  .editXAxisTicks({ color: "#888" })
  .editXAxisLabels({ color: "black", format: ",.0f" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .editYAxisLine({ color: "#888", lineWidth: 1 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black" })
  // doc: createTitle — source cell header "Lib-2_220629", 10px regular black, safe birth offset 0.
  .createTitle({
    text: "Lib-2_220629",
    offset: 0,
    titleStyle: { fontSize: 10 }
  })
  // doc: editTitle — measured native final alignment, offset and moved source title paint.
  .editTitle({ align: "center", offset: -9.609375, titleStyle: { fontWeight: 400, color: "black" } });


  // doc-f1f94dec7d5389ca Composition Recipe: hconcat of the two facet panels.
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 9,
    align: "start"
  });
}
