// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 271, height: 237, margin: { left: 31, top: 41, right: 65, bottom: 21 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-glyphs",
        measurements: [
          { text: "Share of primary energy from renewable sources", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 256.15625 },
          { text: "Share of primary energy consumption that came from renewable", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 228.30859375 },
          { text: "technologies, Source: Our World in Data", fontFamily: "sans-serif", fontSize: 8, fontWeight: 400, fontStyle: "italic", width: 143.19140625 }
        ]
      }
    })
    .createTitle({
      text: "Share of primary energy from renewable sources",
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      alongOffset: -25.123046875
    })
    .editTitle({ offset: -10.421875, gap: 2.328125, titleStyle: { fontWeight: 700, color: "#000" } })
    .editTitle({
      subtitle: "Share of primary energy consumption that came from renewable\ntechnologies, Source: Our World in Data",
      subtitleStyle: { fontSize: 8, fontWeight: 400, fontFamily: "sans-serif", fontStyle: "italic", color: "#000" }
    })
    .createData({ values: data })
    .createComputedData({
      as: "renewables",
      id: "renewablesNum",
      expression: { op: "toNumber", operand: { field: "Renewables (% equivalent primary energy)" } }
    })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "renewables", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-157766400000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 90] })
    .encodeColor({
      field: "renewables",
      fieldType: "quantitative",
    })
    .editColorScale({ domain: [0, 86.8745346069336], range: ["red", "orange", "#90ee90", "green"], interpolate: "hcl" })
    .encodePointRadius({ value: 1.2247448713915892 })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, flush: false }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Renewables (% equivalent primary energy)", fontSize: 8, offset: 19 }
    })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "%",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10, format: ".0f" },
        gradient: { thickness: 10, opacity: 0.7 }
      }
    });
}