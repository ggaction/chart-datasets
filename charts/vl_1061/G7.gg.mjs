// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2bd5de4bd99e314a, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

const months = [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000];
const ticks = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const xLabels = [
  { value: 0, label: "0" },
  { value: 0.1, label: "10" },
  { value: 0.2, label: "20" },
  { value: 0.3, label: "30" },
  { value: 0.4, label: "40" },
  { value: 0.5, label: "50" },
  { value: 0.6, label: "60" },
  { value: 0.7, label: "70" },
  { value: 0.8, label: "80" },
  { value: 0.9, label: "90" },
  { value: 1, label: "100" }
];


export function buildChart() {
  return chart()
    .createCanvas({ width: 678, height: 542, margin: { left: 61, top: 37, right: 117, bottom: 5 } })
    .createData({ values: data })
    .createComputedData({ id: "canonicalMonthYear", as: "monthInput", expression: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { op: "replaceLiteral", operand: { field: "date" }, search: "2015-", replacement: "2012-" }, search: "2014-", replacement: "2012-" }, search: "2013-", replacement: "2012-" } })
    .createTimeUnitData({ id: "monthBucket", field: "monthInput", unit: "month" })
    .createSummaryData({ id: "counts", groupBy: ["monthInput_month", "weather"], aggregates: [{ op: "count", as: "count" }] })
    .createSortedData({ id: "sortedCounts", sortBy: [{ field: "weather", order: "ascending" }] })
    .createStackData({ category: "monthInput_month", group: "weather", value: "count", mode: "fill" })
    .createBarPlot({
      x: { lower: "count_start", upper: "count_end" },
      y: { field: "monthInput_month", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ target: "barPlot", domain: [0, 1] })
    .editYScale({ domain: months, paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "weather", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["sun", "fog", "drizzle", "rain", "snow"], range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ cornerRadius: 1 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-1061-axis-widths", measurements: [ { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }, { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "Jan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.125 }, { text: "Feb", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.234375 }, { text: "Mar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.234375 }, { text: "Apr", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 15.5625 }, { text: "May", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 }, { text: "Jun", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.125 }, { text: "Jul", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 12.796875 }, { text: "Aug", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 }, { text: "Sep", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 }, { text: "Oct", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 15.5625 }, { text: "Nov", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 }, { text: "Dec", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 } ] } })
    .createXAxis({
      position: "top",
      ticksAndLabels: { values: ticks, ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "Count", fontSize: 11, offset: 25.421875 }
    })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ labelMap: xLabels, color: "black" })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, labelMap: [
        { value: 1325376000000, label: "Jan" },
        { value: 1328054400000, label: "Feb" },
        { value: 1330560000000, label: "Mar" },
        { value: 1333238400000, label: "Apr" },
        { value: 1335830400000, label: "May" },
        { value: 1338508800000, label: "Jun" },
        { value: 1341100800000, label: "Jul" },
        { value: 1343779200000, label: "Aug" },
        { value: 1346457600000, label: "Sep" },
        { value: 1349049600000, label: "Oct" },
        { value: 1351728000000, label: "Nov" },
        { value: 1354320000000, label: "Dec" }
      ] } },
      title: { text: "Month of the year", fontSize: 11, offset: 34.3134765625, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: "bold" })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .createLegend({
      title: "Weather type",
      titleStyle: { fontSize: 11, fontWeight: "bold" },
      labels: { fontSize: 10 }
    })
    .editLegend({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }, border: { background: "#ffffff" } });
}