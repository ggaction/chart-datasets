// DOCS: doc-24d00033f9fc3095, doc-ef5a28c0c3f3c920, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 964, height: 404, margin: { left: 53, top: 40, right: 111, bottom: 64 } })
    .editCanvas({ background: "#FcFdFd" })
    .createData({ values: data })
    .filterData({ id: "filter0", field: "country", oneOf: ["United Kingdom", "France", "Germany", "India", "America (total)"] })
    .filterData({ id: "filter1", field: "indicator", oneOf: ["cases"] })
    .createComputedData({
      id: "proofY",
      as: "proofY",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "rate_14_day" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "rate_14_day" } }
      }
    })
    .createLinePlot({
      x: { field: "year_week", fieldType: "ordinal" },
      y: { field: "proofY", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "country" })
    .editLineMark({ curve: "monotone", strokeWidth: 2 })
    .editXScale({
      type: "point",
      padding: 0.5,
      domain: ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10", "2020-11", "2020-12", "2020-13", "2020-14", "2020-15", "2020-16", "2020-17", "2020-18", "2020-19", "2020-20", "2020-21", "2020-22", "2020-23", "2020-24", "2020-25", "2020-26", "2020-27", "2020-28", "2020-29", "2020-30", "2020-31", "2020-32", "2020-33", "2020-34", "2020-35", "2020-36", "2020-37", "2020-38", "2020-39", "2020-40", "2020-41", "2020-42", "2020-43", "2020-44", "2020-45", "2020-46", "2020-47", "2020-48", "2020-49", "2020-50", "2020-51", "2020-52", "2020-53", "2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06", "2021-07", "2021-08", "2021-09", "2021-10", "2021-11", "2021-12", "2021-13", "2021-14", "2021-15"]
    })
    .editYScale({ domain: [0, 1100] })
    .editColorScale({
      palette: "set2",
      domain: ["America (total)", "France", "Germany", "India", "United Kingdom"]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Date", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cases", fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ format: ",.0f", color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createLegend({
      title: false,
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .createTitle({
      text: "Covid-19 cases, selected countries",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    })
    .editTitle({
      alongOffset: -47.0244140625,
      gap: 3.34375,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Weekly cases rate, per 100k population. Source: ECDC"
    });;
}