// DOCS: doc-2bd5de4bd99e314a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 341, height: 447, margin: { left: 53, top: 10, right: 88, bottom: 37 } })
    .createData({ id: "trellis", values: data })
    .createComputedData({ id: "x_mm_num", as: "x_mm_num", expression: { op: "toNumber", operand: { field: "ingressi_terapia_intensiva_mm" } } })
    .createComputedData({ id: "y_mm_num", as: "y_mm_num", expression: { op: "toNumber", operand: { field: "terapia_intensiva_mm" } } })
    .createScatterPlot({
      x: { field: "x_mm_num", fieldType: "quantitative" },
      y: { field: "y_mm_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-50, 300], zero: false })
    .editYScale({ domain: [-500, 4000], zero: false })
    .encodeStroke({ field: "mese" })
    .editStrokeScale({ target: "scatterPlot", domain: ["1", "10", "11", "12", "2", "3", "4", "5", "6", "7", "8", "9"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac", "#4c78a8", "#f58518"] })
    .encodePointRadius({ value: Math.sqrt(150) / 2 })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-glyphs", measurements: [
      { text: "−50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "250", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "−500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
      { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }
    ] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-50, 0, 50, 100, 150, 200, 250, 300],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ value: -50, label: "−50" }] }
      },
      title: { text: "Ingressi giornalieri in TI", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-500, 0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 7,
          labelMap: [
            { value: -500, label: "−500" },
            { value: 1000, label: "1,000" },
            { value: 1500, label: "1,500" },
            { value: 2000, label: "2,000" },
            { value: 2500, label: "2,500" },
            { value: 3000, label: "3,000" },
            { value: 3500, label: "3,500" },
            { value: 4000, label: "4,000" }
          ]
        }
      },
      title: { text: "Totale ricoveri in TI", fontSize: 11, fontWeight: 700, offset: 43 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      title: "Mesi",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      labelMap: [
        { value: "1", label: "January" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" }
      ]
    })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } });
}