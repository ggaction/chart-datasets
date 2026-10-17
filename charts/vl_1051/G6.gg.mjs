// DOCS: doc-af5562e03efab97d, doc-fb3b01cca895bdad — bar chart scaffold and complete-axis/label options.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 416, height: 247, margin: { left: 59, top: 10, right: 117, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "canonicalMonthYear",
      as: "monthInput",
      expression: {
        op: "replaceLiteral",
        operand: {
          op: "replaceLiteral",
          operand: {
            op: "replaceLiteral",
            operand: { field: "date" },
            search: "2013-",
            replacement: "2012-"
          },
          search: "2014-",
          replacement: "2012-"
        },
        search: "2015-",
        replacement: "2012-"
      }
    })
    .createTimeUnitData({ id: "monthData", field: "monthInput", unit: "month" })
    .createSummaryData({ id: "monthCounts", groupBy: ["monthInput_month", "weather"], aggregates: [{ op: "count", as: "count" }] })
    .createSortedData({ id: "sortedCounts", sortBy: [{ field: "weather", order: "descending" }] })
    .createStackData({ category: "monthInput_month", group: "weather", value: "count", mode: "fill" })
    .createBarPlot({
      x: { field: "monthInput_month", fieldType: "ordinal" },
      y: { lower: "count_start", upper: "count_end" },
      guides: false
    })
    .editXScale({ domain: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 1] })
    .encodeColor({ field: "weather", layout: "overlay" })
    .editColorScale({ domain: ["sun", "fog", "drizzle", "rain", "snow"], range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ cornerRadius: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "#000000",
          labelMap: [
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
          ]
        }
      },
      title: { text: "Month of the year", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "#000000",
          labelMap: [
            { value: 0, label: "0" },
            { value: 0.2, label: "20" },
            { value: 0.4, label: "40" },
            { value: 0.6, label: "60" },
            { value: 0.8, label: "80" },
            { value: 1, label: "100" }
          ]
        }
      },
      title: { text: "Count", fontSize: 11, fontWeight: 700, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false }).createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Weather type",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        border: { background: "#ffffff" }
      }
    });
}