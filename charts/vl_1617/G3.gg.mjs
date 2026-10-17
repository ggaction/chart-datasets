import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8b8d7baf581eb3e7, doc-713dc20a242b174b, doc-a1e2dc6ee0e52212

export function buildChart() {
  return chart()
    .createCanvas({ width: 245, height: 242, margin: { left: 39, top: 5, right: 6, bottom: 37 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1617-source-fonts", measurements: [ { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "1974", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "1978", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "1982", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "Year (year)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 56.28125 }, { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "Miles per Gallon (1 stdev)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 133.265625 } ] } })
    .createData({ values: data })
    .filterData({ id: "valid", field: "Miles_per_Gallon", noneOf: [null] })
    .createComputedData({
      id: "dated",
      as: "yearUTC",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "%Y-%m-%d" },
    })
    .createErrorBand({
      data: "dated",
      x: { field: "yearUTC", fieldType: "temporal", scale: { domain: [0, 378691200000], nice: false } },
      y: { field: "Miles_per_Gallon", extent: "stdev", scale: { domain: [12, 42], nice: false } },
    })
    .editErrorBand({ curve: "monotone", opacity: 0.3, boundaries: false })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 5.5,
          alongOffset: 0.5,
          flush: true,
          format: "%Y",
          labelMap: [
            { value: 63072000000, label: "" },
            { value: 189302400000, label: "" },
            { value: 315532800000, label: "" },
          ],
        },
      },
      title: { text: "Year (year)", fontSize: 11, offset: 27.578125 },
    })
    .createYAxis({
      ticksAndLabels: {
        values: [15, 20, 25, 30, 35, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 },
      },
      title: {
        text: "Miles per Gallon (1 stdev)",
        fontSize: 11,
        offset: 26.544921875,
        rotation: -1.5707963267948966,
      },
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      horizontal: {
        values: [15, 20, 25, 30, 35, 40],
        color: "#ddd",
      },
      vertical: {
        values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000],
        color: "#ddd",
        lineWidth: 1,
      },
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } });
}