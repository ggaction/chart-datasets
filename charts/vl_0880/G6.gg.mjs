// DOCS: doc-f1f94dec7d5389ca Composition Recipe — hconcat of two independently scoped child bar panels.
// DOCS: doc-6c2c08869091f6a0 createBarPlot — aggregate create-only facade; width/color/mark refined separately.
// DOCS: doc-fc11e9fb291905d1 createBarPlot — vertical categorical bars, band x, quantitative summed y.

import { chart, hconcat } from "ggaction";
import data from "./data.json";

// Child resources are scoped per program; each child rebuilds its own canvas,
// data pipeline, scales, mark paint, guides, and title from the frozen source.

export function buildChart() {
const child0 = chart()
  // Canvas 492x714 with measured margins: plot resolves to 400x500.
  .createCanvas({ width: 492, height: 714, margin: { top: 39, right: 18, bottom: 175, left: 74 } })
  .createData({ values: data })
  .applyTextMetrics({ profile: {"schemaVersion":1,"id":"actual-source-0880-fonts","measurements":[{"text":"Africa","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.5615234375},{"text":"Asia","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":19.453125},{"text":"Europe","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":32.24609375},{"text":"Latin America and the Caribbean","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":146.201171875},{"text":"Northern America","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":78.359375},{"text":"Oceania","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":37.24609375},{"text":"Continent","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":51.32080078125},{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5615234375},{"text":"1,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"2,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"3,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"4,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"5,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"6,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"7,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"8,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"9,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":44.4873046875},{"text":"10,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"11,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":49.3115234375},{"text":"12,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"13,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"14,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"15,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"16,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":50.048828125},{"text":"Sum of Total Cases/1 Million Population","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":208.205078125},{"text":"Sum of Total Cases In Each Continent","fontFamily":"sans-serif","fontSize":24,"fontWeight":700,"fontStyle":"italic","width":431.61328125}]}})
  .createComputedData({ id: "typed", as: "sourceValue", expression: { op: "toNumber", operand: { field: "TotalCasesPer1MPop" } } })
  .createSummaryData({ id: "summary", groupBy: ["Continent"], aggregates: [{ op: "sum", field: "sourceValue", as: "sourceY" }] })
  .createBarPlot({ x: "Continent", y: "sourceY", guides: false })
  // Source band scale: paddingInner 0.1, paddingOuter 0.05, range 0..400.
.editXScale({ domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"], paddingInner: 0.1, paddingOuter: 0.05 })
  // Source linear y domain is exactly [0, 16000000].
  .editYScale({ domain: [0, 16000000] })
  .encodeColor({ field: "Continent", layout: "overlay" })
  .editColorScale({
    target: "barPlot",
    domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"],
    range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
  })
  .encodeBarWidth({ pixels: 60 })
  .editBarMark({ stroke: "black", strokeWidth: 1 })
.createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { rotation: -1.5707963267948966, offset: 7.5, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "Continent", fontSize: 11, fontFamily: "sans-serif", offset: 163.779296875 }
    })
  .createYAxis({
      line: false,
      ticksAndLabels: {
        values: [0, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000, 13000000, 14000000, 15000000, 16000000],
        ticks: { length: 0 },
        labels: { offset: 1.5, alongOffset: 0.890625, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "Sum of Total Cases/1 Million Population", fontSize: 11, fontFamily: "sans-serif", rotation: -1.5707963267948966, offset: 60.470703125 }
    })
  .editXAxisLine({ color: "#888" })
  .editXAxisTicks({ color: "#888" })
  .editXAxisLabels({ color: "black" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black", format: ",.0f" })
  .editYAxisTitle({ color: "black", fontWeight: 700 })
  .createTitle({ text: "Sum of Total Cases In Each Continent", align: "center", offset: -9.375 })
  .editTitle({ titleStyle: { fontFamily: "sans-serif", fontSize: 24, fontWeight: 700, fontStyle: "italic", color: "black" }, alongOffset: 0.5 });

const child1 = chart()
  // Canvas 501x714 with measured margins: plot resolves to 400x500.
  .createCanvas({ width: 501, height: 714, margin: { top: 39, right: 27, bottom: 175, left: 74 } })
  .createData({ values: data })
  .applyTextMetrics({ profile: {"schemaVersion":1,"id":"actual-source-0880-fonts","measurements":[{"text":"Africa","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.5615234375},{"text":"Asia","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":19.453125},{"text":"Europe","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":32.24609375},{"text":"Latin America and the Caribbean","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":146.201171875},{"text":"Northern America","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":78.359375},{"text":"Oceania","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":37.24609375},{"text":"Continent","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":51.32080078125},{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5615234375},{"text":"10,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"20,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"30,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"40,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"50,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"60,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"70,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"80,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"90,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":30.5859375},{"text":"100,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":36.1474609375},{"text":"110,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":35.41015625},{"text":"120,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":36.1474609375},{"text":"Sum of Total Deaths/1 Million Population","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":212.4697265625},{"text":"Sum of Total Deaths In Each Continent","fontFamily":"sans-serif","fontSize":24,"fontWeight":700,"fontStyle":"italic","width":440.91796875}]}})
  .createComputedData({ id: "typed", as: "sourceValue", expression: { op: "toNumber", operand: { field: "TotalDeathsPer1MPop" } } })
  .createSummaryData({ id: "summary", groupBy: ["Continent"], aggregates: [{ op: "sum", field: "sourceValue", as: "sourceY" }] })
  .createBarPlot({ x: "Continent", y: "sourceY", guides: false })
  // Source band scale: paddingInner 0.1, paddingOuter 0.05, range 0..400.
.editXScale({ domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"], paddingInner: 0.1, paddingOuter: 0.05 })
  // Source linear y domain is exactly [0, 120000].
  .editYScale({ domain: [0, 120000] })
  .encodeColor({ field: "Continent", layout: "overlay" })
  .editColorScale({
    target: "barPlot",
    domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"],
    range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
  })
  .encodeBarWidth({ pixels: 60 })
  .editBarMark({ stroke: "black", strokeWidth: 1 })
.createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"],
        ticks: { length: 5, lineWidth: 1 },
        labels: { rotation: -1.5707963267948966, offset: 7.5, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "Continent", fontSize: 11, fontFamily: "sans-serif", offset: 163.779296875 }
    })
  .createYAxis({
      line: false,
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000],
        ticks: { length: 0 },
        labels: { offset: 1.5, alongOffset: 0.890625, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "Sum of Total Deaths/1 Million Population", fontSize: 11, fontFamily: "sans-serif", rotation: -1.5707963267948966, offset: 46.5693359375 }
    })
  .editXAxisLine({ color: "#888" })
  .editXAxisTicks({ color: "#888" })
  .editXAxisLabels({ color: "black" })
  .editXAxisTitle({ color: "black", fontWeight: 700 })
  .editYAxisTicks({ color: "#888" })
  .editYAxisLabels({ color: "black", format: ",.0f" })
  .editYAxisTitle({ color: "black", fontWeight: 700 })
  .createTitle({ text: "Sum of Total Deaths In Each Continent", align: "center", offset: -9.375 })
  .editTitle({ titleStyle: { fontFamily: "sans-serif", fontSize: 24, fontWeight: 700, fontStyle: "italic", color: "black" }, alongOffset: 0.5 });

// Parent composition: hconcat, gap 0, align start (default), panels at x 0 and 492.
return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0
  });
}