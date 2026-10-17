// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 249,
      height: 272,
      margin: { left: 28, top: 40, right: 21, bottom: 32 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "yearEpoch",
      as: "YearMs",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createComputedData({
      id: "gasNum",
      as: "GasRents",
      expression: { op: "toNumber", operand: { field: "Natural Gas rents (% of GDP)" } }
    })
    .createLinePlot({
      x: { field: "YearMs", fieldType: "temporal" },
      y: { field: "GasRents", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [631152000000, 1577836800000] })
    .editYScale({ target: "linePlot", domain: [0, 6] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "YearMs", fieldType: "temporal" },
      y: { field: "GasRents", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [631152000000, 1577836800000] })
    .editYScale({ target: "scatterPlot", domain: [0, 6] })
    .editPointMark({ fill: "#4c78a8", opacity: 1, stroke: false })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Year", fontSize: 11, offset: 25 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Natural Gas rents (% of GDP)", fontSize: 11, offset: 20 }
    })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createTitle({
      text: "Russian natural gas rents",
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Natural gas rents as a % of GDP, Source: World Bank",
      offset: -13,
      alongOffset: -22.56
    });
}
