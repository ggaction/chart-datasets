import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-dfae58344d5a524e doc-2a31551f1566fc6b

export function buildChart() {
  return chart()
    .createCanvas({
      width: 267,
      height: 259,
      margin: { left: 58, top: 22, right: 9, bottom: 37 }
    })
    .createData({ id: "unemployment", values: data })
    .createTimeUnitData({
      id: "monthly",
      field: "date",
      unit: "month"
    })
    .createSummaryData({
      id: "summed",
      groupBy: "date_month",
      aggregates: [{ field: "count", op: "sum", as: "sum_count" }]
    })
    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "sum_count" },
      guides: false
    })
    .editAreaMark({ target: "areaPlot", fill: "#4c78a8", opacity: 1 })
    .createAreaMark({
      id: "layer1",
      fill: "goldenrod",
      opacity: 1
    })
    .encodeX({ field: "date_month", fieldType: "temporal", temporalUnit: "timestamp" })
    .encodeY({ target: "layer1", field: "sum_count", fieldType: "quantitative" })
    .encodeY2({ target: "layer1", datum: 0 })
    .editXScale({ domain: [946684800000, 1264982400000], nice: false })
    .editYScale({ domain: [0, 16000] })
    .createGrid({
      vertical: {
        values: [
          946684800000, 1009843200000, 1072915200000,
          1136073600000, 1199145600000, 1262304000000
        ]
      },
      horizontal: { values: [0, 5000, 10000, 15000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          946684800000, 1009843200000, 1072915200000,
          1136073600000, 1199145600000, 1262304000000
        ],
        ticks: { length: 5 },
        labels: {
          offset: 7,
          fontSize: 10,
          fontFamily: "sans-serif",
          flush: true,
          labelMap: [
            { value: 1009843200000, label: "" },
            { value: 1136073600000, label: "" },
            { value: 1262304000000, label: "" }
          ]
        }
      },
      title: { text: "Date", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000],
        ticks: { length: 5 },
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: {
        text: "Unemployment Count",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 46.5859375,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxisLabels({
      format: "%b %Y"
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: "700" })
    .editYAxisLabels({ format: ",.0f" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: "700" })
    .createTitle({
      text: "Unemployment Across Industries",
      offset: -13,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: "700" } });
}