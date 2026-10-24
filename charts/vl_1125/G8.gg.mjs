import { chart } from "ggaction";
import data from "./data.json";
import referenceData from "./reference-data.json";
import verticalReferenceData from "./vertical-reference-data.json";

// DOCS: doc-cffb363a4b862ced, doc-fb01dc309afec904, doc-86982c682b9aec9c, doc-a7d421980af3b87a, doc-56f96416ff5f983e, doc-0408a7975bd52e06
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 1226, height: 318 }, margin: { left: 47, top: 40, right: 7, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source1125-original-fonts-svg-flushed-widths", measurements: [
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
      { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
      { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
      { text: "Frequency", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 55.62841796875 },
      { text: "FTSE 100 vs S&P 500 Daily Change", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 218.20703125 },
      { text: "Source: Investing.com, Past 10 years", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 165.634765625 },
      { text: "−5.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "−4.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.7412109375 },
      { text: "−3.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.7412109375 },
      { text: "−2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.7412109375 },
      { text: "−1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.7412109375 },
      { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
      { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
      { text: "2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
      { text: "3.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
      { text: "4.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
      { text: "5.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
      { text: "S&P 500 Daily Change, %", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 132.66064453125 },
      { text: "FTSE100 Daily Change, %", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 135.09912109375 }
    ] } })
    .createData({ values: data })
    .filterData({ id: "belowX", field: "SP_500_Change", predicate: { op: "lt", value: 5 } })
    .filterData({ id: "belowY", field: "FTSE100_Change", predicate: { op: "lt", value: 5 } })
    .filterData({ id: "aboveX", field: "SP_500_Change", predicate: { op: "gt", value: -5 } })
    .filterData({ id: "filtered", field: "FTSE100_Change", predicate: { op: "gt", value: -5 } })
    .createHeatmap({
      x: { field: "SP_500_Change", scale: { domain: [-5, 5], range: [47.5, 1273.5] } },
      y: { field: "FTSE100_Change", scale: { domain: [-5, 5], range: [358.5, 40.5] } },
      bin: { bins: { x: 50, y: 48 }, extent: { x: [-5, 5], y: [-4.8, 4.8] }, includeEmpty: false, assignment: "step" }
    })
    .editRectMark({ stroke: false })
    .editColorScale({ domain: [1, 60], range: { palette: { name: "yellowgreenblue", count: 11 } }, interpolate: "rgb" }).editXAxisTicksAndLabels({
      values: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 5.5, flush: true, flushThreshold: 1, labelMap: [
        { value: -5, label: "−5.0" }, { value: -4, label: "−4.0" }, { value: -3, label: "−3.0" }, { value: -2, label: "−2.0" }, { value: -1, label: "−1.0" }
      ] }
    }).editYAxisTicksAndLabels({
      values: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
      ticks: { length: 5 },
      labels: { fontSize: 10, offset: 6.5, alongOffset: 0.390625, labelMap: [
        { value: -5, label: "−5.0" }, { value: -4, label: "−4.0" }, { value: -3, label: "−3.0" }, { value: -2, label: "−2.0" }, { value: -1, label: "−1.0" }
      ] }
    }).editXAxisTicks({ color: "#888" }).editYAxisTicks({ color: "#888" }).editXAxisLabels({ color: "black", format: ".1f" }).editYAxisLabels({ color: "black", format: ".1f" }).editXAxis({
      title: { text: "S&P 500 Daily Change, %", fontSize: 11, fontWeight: 700, offset: 27.578125 }
    }).editYAxis({
      title: { text: "FTSE100 Daily Change, %", fontSize: 11, fontWeight: 700, offset: 35.1630859375 }
    }).editXAxisLine({ color: "#888" }).editYAxisLine({ color: "#888" }).editXAxisTitle({ color: "black" }).editYAxisTitle({ color: "black" })
    .editLegend({ position: "top-left", direction: "horizontal", gradient: { length: 100, thickness: 16 } })
    .editLegendTitle({ title: "Frequency", fontSize: 11, fontWeight: 700 })
    .editLegendTitle({ color: "black", align: "left" })
    .editLegendLabels({ fontSize: 10, color: "black" })
    .editLegend({ values: [20, 40, 60] })
    .createData({ id: "reference", values: referenceData })
    .createReferenceLine({ space: "plot", y: 0.5, strokeWidth: 2 })
    .encodeX({ datum: 1, scale: { id: "referenceLine-x", domain: [0, 1] } })
    .encodeX2({ datum: 0, fieldType: "quantitative" })
    .editRuleMark({ stroke: "black", strokeDash: [8, 5], opacity: 0.4 })
    .createData({ id: "verticalReference", values: verticalReferenceData })
    .createReferenceLine({ id: "vertical", space: "plot", x: 0.5 })
    .editRuleMark({ stroke: "black", strokeWidth: 2, strokeDash: [8, 5] })
    .encodeOpacity({ value: 0.4 })
    .createTitle({ text: "FTSE 100 vs S&P 500 Daily Change", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -7.390625 })
    .editTitle({ subtitle: "Source: Investing.com, Past 10 years", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ alongOffset: -41.7412109375 })
    .editCanvas({ margin: { left: 47, top: 40, right: 7, bottom: 37 } });
}