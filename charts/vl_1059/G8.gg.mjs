// DOCS: doc-011c8d71235fcfcb, doc-37b7144a817d6553
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 676,
      height: 547,
      margin: { left: 59, top: 10, right: 117, bottom: 37 }
    })
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
            search: "2015",
            replacement: "2012"
          },
          search: "2014",
          replacement: "2012"
        },
        search: "2013",
        replacement: "2012"
      }
    })
    .createTimeUnitData({ id: "byMonth", field: "monthInput", unit: "month" })
    .createSummaryData({
      id: "monthWeatherCounts",
      groupBy: ["monthInput_month", "weather"],
      aggregates: [{ op: "count", as: "count" }]
    })
    .createSortedData({
      id: "stackOrder",
      sortBy: [{ field: "weather", order: "descending" }]
    })
    .createStackData({
      category: "monthInput_month",
      group: "weather",
      value: "count"
    })
    .createBarPlot({
      guides: false,
      x: { field: "monthInput_month", fieldType: "nominal" },
      y: { lower: "count_start", upper: "count_end" }
    })
    .editXScale({
      domain: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 130] })
    .encodeColor({ field: "weather", layout: "overlay" })
    .editColorScale({
      domain: ["sun", "fog", "drizzle", "rain", "snow"],
      range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ cornerRadius: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: [1325376000000, 1328054400000, 1330560000000, 1333238400000, 1335830400000, 1338508800000, 1341100800000, 1343779200000, 1346457600000, 1349049600000, 1351728000000, 1354320000000],
        ticks: { length: 5 },
        labels: { labelMap: [{ value: 1325376000000, label: "Jan" }, { value: 1328054400000, label: "Feb" }, { value: 1330560000000, label: "Mar" }, { value: 1333238400000, label: "Apr" }, { value: 1335830400000, label: "May" }, { value: 1338508800000, label: "Jun" }, { value: 1341100800000, label: "Jul" }, { value: 1343779200000, label: "Aug" }, { value: 1346457600000, label: "Sep" }, { value: 1349049600000, label: "Oct" }, { value: 1351728000000, label: "Nov" }, { value: 1354320000000, label: "Dec" }], fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Month of the year", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000000" })
    .editXAxisTitle({ fontWeight: 700, color: "#000000" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Count", fontSize: 11, fontFamily: "sans-serif", offset: 26, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000000" })
    .editYAxisTitle({ fontWeight: 700, color: "#000000" })
    .createGrid({
      horizontal: {
        scale: "y",
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
      }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      title: "Weather type",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" }
    })
    .editLegendTitle({
      fontWeight: 700,
      color: "#000000"
    })
    .editLegendLabels({ color: "#000000" })
    .editLegend({
      border: { background: "#ffffff" }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    });
}