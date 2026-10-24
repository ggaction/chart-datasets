import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2bd5de4bd99e314a, doc-76573a465e2b6a33, doc-c23596878853c401, doc-48c72317a1a99e17, doc-a7e245c04b6a2ed2, doc-19aafdf6d7c93097
export function buildChart() {
  return chart()
    .createCanvas({ width: 393, height: 412, margin: { left: 39, top: 40, right: 104, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0761-own-original-svg", measurements: [
      { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2017", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2019", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "−4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
      { text: "−2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
      { text: "Growth Rate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 65.40625 },
      { text: "Private Sector", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.8125 },
      { text: "Public Sector", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 58.921875 },
      { text: "Sector", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 34.25 },
      { text: "Public v Private Total Compensation Growth", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 273.53125 },
      { text: "Mean YoY growth of weekly earnings in UK between 2001-2022. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 347.353515625 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Growth Rate" } } })
    .createComputedData({ id: "timeTyped", as: "sourceTime", expression: { op: "parseTime", operand: { field: "Date" } } })
    .createComputedData({ id: "firstPivot", as: "Private Sector", expression: { op: "if", condition: { op: "eq", left: { field: "Sector" }, right: { constant: "Private Sector" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Public Sector", expression: { op: "if", condition: { op: "eq", left: { field: "Sector" }, right: { constant: "Public Sector" } }, then: { field: "sourceValue" }, else: { constant: 0 } } }).createLinePlot({ x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [1451606400000, 1664582400000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [-4, 12] } }, guides: false }).createAxes({ x: { ticksAndLabels: { values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true } }, title: false }, y: { ticksAndLabels: { values: [-4, -2, 0, 2, 4, 6, 8, 10, 12], ticks: { color: "#888", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: -4, label: "−4" }, { value: -2, label: "−2" }, { value: 0, label: "0" }, { value: 2, label: "2" }, { value: 4, label: "4" }, { value: 6, label: "6" }, { value: 8, label: "8" }, { value: 10, label: "10" }, { value: 12, label: "12" }] } }, title: { text: "Growth Rate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 26.8232421875, alongOffset: 0.5 } } }).editXAxisLine({ color: "#888" }).editYAxisLine({ color: "#888" })
    .encodeColor({ field: "Sector", scale: { domain: ["Private Sector", "Public Sector"], range: ["#4c78a8", "#f58518"] } })
    .editLineMark({ strokeWidth: 2, lineCap: "butt", lineJoin: "miter" })
    .filterData({ id: "hoverEmpty", field: "Date", noneOf: ["2016-01-01", "2016-02-01", "2016-03-01", "2016-04-01", "2016-05-01", "2016-06-01", "2016-07-01", "2016-08-01", "2016-09-01", "2016-10-01", "2016-11-01", "2016-12-01", "2017-01-01", "2017-02-01", "2017-03-01", "2017-04-01", "2017-05-01", "2017-06-01", "2017-07-01", "2017-08-01", "2017-09-01", "2017-10-01", "2017-11-01", "2017-12-01", "2018-01-01", "2018-02-01", "2018-03-01", "2018-04-01", "2018-05-01", "2018-06-01", "2018-07-01", "2018-08-01", "2018-09-01", "2018-10-01", "2018-11-01", "2018-12-01", "2019-01-01", "2019-02-01", "2019-03-01", "2019-04-01", "2019-05-01", "2019-06-01", "2019-07-01", "2019-08-01", "2019-09-01", "2019-10-01", "2019-11-01", "2019-12-01", "2020-01-01", "2020-02-01", "2020-03-01", "2020-04-01", "2020-05-01", "2020-06-01", "2020-07-01", "2020-08-01", "2020-09-01", "2020-10-01", "2020-11-01", "2020-12-01", "2021-01-01", "2021-02-01", "2021-03-01", "2021-04-01", "2021-05-01", "2021-06-01", "2021-07-01", "2021-08-01", "2021-09-01", "2021-10-01", "2021-11-01", "2021-12-01", "2022-01-01", "2022-02-01", "2022-03-01", "2022-04-01", "2022-05-01", "2022-06-01", "2022-07-01", "2022-08-01", "2022-09-01", "2022-10-01"] })
    .createScatterPlot({ x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [1451606400000, 1664582400000] } }, y: { field: "sourceValue", scale: { id: "y", domain: [-4, 12] } }, guides: false })
    .encodeStroke({ field: "Sector", scale: { domain: ["Private Sector", "Public Sector"], range: ["#4c78a8", "#f58518"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "pivotTimes", source: "typedData", aggregates: [{ op: "sum", field: "Private Sector", as: "Private Sector" }, { op: "sum", field: "Public Sector", as: "Public Sector" }] })
    .editSummaryData({ target: "pivotTimes", groupBy: ["sourceTime"] })
    .createRuleMark({ data: "pivotTimes", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [1451606400000, 1664582400000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { color: "#ddd", values: [-4, -2, 0, 2, 4, 6, 8, 10, 12], alongOffset: 0.5 }, vertical: { color: "#ddd", values: [1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000], alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black" }, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .editLegend({ titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } })
    .createTitle({ text: "Public v Private Total Compensation Growth", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Mean YoY growth of weekly earnings in UK between 2001-2022. Source: ONS", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", fontStyle: "italic" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -33.4013671875 });
}