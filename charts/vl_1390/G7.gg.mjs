import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-3b660fabf78cdd08, doc-33fa1aba30cffb4f

export function buildChart() {
  return chart()
    .createCanvas({ width: 706, height: 239, margin: { left: 100, top: 22, right: 6, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1390-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "70,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "90,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "110,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.421875 },
      { text: "120,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "130,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "140,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "160,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "Residents", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 52.578125 },
      { text: "Christian", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "No Religion", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.703125 },
      { text: "Not Stated", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.265625 },
      { text: "Muslim", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.671875 },
      { text: "Jewish", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.578125 },
      { text: "Hindu", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 26.140625 },
      { text: "Sikh", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
      { text: "Buddhist", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.921875 },
      { text: "Other Religion", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.921875 },
      { text: "religion", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 39.734375 },
      { text: "143639", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 36.71875 },
      { text: "768", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
      { text: "2271", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 24.484375 },
      { text: "2413", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 24.484375 },
      { text: "12994", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "1652", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 24.484375 },
      { text: "566", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 18.359375 },
      { text: "47968", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "14307", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "A fifth of Trafford's residents have no religion", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 280.71875 }
    ] } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createBarPlot({ x: { field: "count", fieldType: "quantitative" }, y: { field: "religion", fieldType: "nominal" }, guides: false })
    .editXScale({ domain: [0, 160000], nice: false })
    .editYScale({ domain: ["Christian", "No Religion", "Not Stated", "Muslim", "Jewish", "Hindu", "Sikh", "Buddhist", "Other Religion"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "#4c78a8", opacity: 0.8, stroke: false })
    .encodeBarWidth({ pixels: 18 })
    .createMarkLabels({ field: "count", fontSize: 11, align: "left" })
    .editTextMark({ dx: 3, opacity: 0.8, fill: "black" })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 10000, label: "" },
            { value: 20000, label: "20,000" },
            { value: 30000, label: "" },
            { value: 40000, label: "40,000" },
            { value: 50000, label: "" },
            { value: 60000, label: "60,000" },
            { value: 70000, label: "" },
            { value: 80000, label: "80,000" },
            { value: 90000, label: "" },
            { value: 100000, label: "100,000" },
            { value: 110000, label: "" },
            { value: 120000, label: "120,000" },
            { value: 130000, label: "" },
            { value: 140000, label: "140,000" },
            { value: 150000, label: "" },
            { value: 160000, label: "160,000" }
          ] }
      },
      title: { text: "Residents", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicks({
      color: "#888"
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({
      color: "black"
    })
    .createYAxis({
      ticksAndLabels: {
        values: ["Christian", "No Religion", "Not Stated", "Muslim", "Jewish", "Hindu", "Sikh", "Buddhist", "Other Religion"],
        ticks: { length: 5 },
        labels: { fontSize: 10, align: "left", offset: 79.5, alongOffset: 0.390625 }
      },
      title: { text: "religion", fontSize: 11, fontWeight: 700, offset: 88.421875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTicks({
      color: "#888"
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({
      color: "black"
    })
    .createGrid({ horizontal: false, vertical: { values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000], color: "#ddd", lineWidth: 1 } })    .createTitle({ text: "A fifth of Trafford's residents have no religion", titleStyle: { fontSize: 13 }, offset: -10.953125 })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, color: "black" } });
}