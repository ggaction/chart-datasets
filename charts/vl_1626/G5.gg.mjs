// DOCS: doc-3f56bb136a365dda (createErrorBand), doc-ca9962af13ce31fa (gapminder-error-band program), doc-2e423c7211daf88a (error-band tutorial)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 646,
      height: 247,
      margin: { left: 39, top: 10, right: 7, bottom: 37 }
    })
    .applyTextMetrics({
      profile: {
  schemaVersion: 1,
  id: "vl_1626-source-fonts",
  measurements: [
    { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1971", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1972", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1973", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1974", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1976", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1977", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1978", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1979", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1981", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "1982", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
    { text: "Year (year)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 56.28125 },
    { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
    { text: "Miles_per_Gallon", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 91.09375 }
  ]
}
    })
    .createData({ values: data })
    .filterData({ id: "valid", field: "Miles_per_Gallon", noneOf: [null] })
    .createComputedData({
      id: "dated",
      as: "yearUTC",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "%Y-%m-%d" }
    })
    .createErrorBand({
      data: "dated",
      x: { field: "yearUTC", fieldType: "temporal", scale: { domain: [0, 378691200000], nice: false } },
      y: { field: "Miles_per_Gallon", extent: "iqr", center: "median", scale: { domain: [12, 40], nice: false } }
    })
    .editErrorBand({
      curve: "monotone",
      opacity: 0.3,
      boundaries: { stroke: "#4c78a8", strokeWidth: 2, curve: "monotone" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 31536000000, 63072000000, 94694400000, 126230400000, 157766400000, 189302400000, 220924800000, 252460800000, 283996800000, 315532800000, 347155200000, 378691200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "Year (year)", fontSize: 11, offset: 27.578125 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [15, 20, 25, 30, 35, 40],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      vertical: {
        values: [0, 31536000000, 63072000000, 94694400000, 126230400000, 157766400000, 189302400000, 220924800000, 252460800000, 283996800000, 315532800000, 347155200000, 378691200000]
      },
      horizontal: { values: [15, 20, 25, 30, 35, 40] }
    })
    .editVerticalGrid({ color: "#ddd", lineWidth: 4 })
    .editHorizontalGrid({ color: "#ddd" })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1 }
    });
}