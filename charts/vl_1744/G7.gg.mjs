import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2b2e3149e57e859d, doc-d9ca5de321ee55a7

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 242, margin: { left: 39, top: 5, right: 5, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1744-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "Horsepower", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.578125 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Miles_per_Gallon", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 91.09375 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "yearOfManufacture", as: "YearOfManufacture", expression: { op: "datePart", part: "year", operand: { op: "parseTime", operand: { field: "Year" }, format: "%Y-%m-%d" } } })
    .filterData({ id: "year1970", field: "YearOfManufacture", oneOf: [1970] })
    .filterData({ id: "hpNotNull", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "mpgNotNull", field: "Miles_per_Gallon", noneOf: [null] })
    .createScatterPlot({ x: { field: "Horsepower" }, y: { field: "Miles_per_Gallon" }, guides: false })
    .editXScale({ domain: [0, 240], nice: false })
    .editYScale({ domain: [0, 28], nice: false })
    .editPointMark({ shape: "wedge", fill: "transparent", stroke: "#4c78a8" })
    .editPointMark({ strokeWidth: 2, opacity: 0.6 })
    .encodePointRadius({ value: Math.sqrt(15 * Math.sqrt(3) / (8 * Math.PI)) })
    .createGrid({ horizontal: { values: [0, 5, 10, 15, 20, 25] }, vertical: { values: [0, 50, 100, 150, 200] } })
    .editGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: { length: 5 }, labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true } }, title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 27.578125, alongOffset: 0.5 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: { values: [0, 5, 10, 15, 20, 25], ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } }, title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" });
}