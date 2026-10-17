// DOCS: doc-01031803e6bbaa3b, doc-757a48d67979e8c2, doc-847cb1497a53c317
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 414,
      height: 144,
      margin: { left: 41, top: 5, right: 73, bottom: 39 }
    })
    .createData({ id: "stocks0", values: data })
    .filterData({ id: "noGoog", field: "symbol", noneOf: ["GOOG"] })
    .createComputedData({
      id: "stocksNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createComputedData({
      id: "stocksDateMs",
      as: "dateMs",
      expression: {
        op: "parseTime",
        operand: { field: "date" },
        format: "auto"
      }
    })
    .createSummaryData({
      id: "cellsSummary",
      groupBy: ["dateMs", "symbol"],
      aggregates: [{ op: "sum", field: "priceNum", as: "cellPrice" }]
    })
    .createHeatmap({
      x: { field: "dateMs", fieldType: "ordinal" },
      y: { field: "symbol", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ paddingInner: 0, paddingOuter: 0 })
    .editYScale({
      domain: ["AAPL", "AMZN", "IBM", "MSFT"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({
      field: "cellPrice",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [5.97, 223.02],
      palette: "yellowgreenblue",
      interpolate: "hcl"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          946684800000, 978307200000, 1009843200000, 1041379200000,
          1072915200000, 1104537600000, 1136073600000, 1167609600000,
          1199145600000, 1230768000000, 1262304000000
        ],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 946684800000, label: "2000" },
            { value: 978307200000, label: "2001" },
            { value: 1009843200000, label: "2002" },
            { value: 1041379200000, label: "2003" },
            { value: 1072915200000, label: "2004" },
            { value: 1104537600000, label: "2005" },
            { value: 1136073600000, label: "2006" },
            { value: 1167609600000, label: "2007" },
            { value: 1199145600000, label: "2008" },
            { value: 1230768000000, label: "2009" },
            { value: 1262304000000, label: "2010" }
          ]
        }
      },
      title: {
        text: "Time",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({
      fontFamily: "sans-serif",
      color: "black"
    })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createYAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxisLabels({
      fontFamily: "sans-serif",
      color: "black"
    })
    .createGuides({
      axes: false,
      legend: {
        title: "Price",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, format: ".0f" },
        count: 2,
        gradient: { length: 100 }
      }
    })
  .editRectMark({ stroke: false });
}
