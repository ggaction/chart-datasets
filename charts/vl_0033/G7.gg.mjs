// DOCS: doc-b10d8291c442e77a, doc-bb10df077fd24419, doc-600a915c61203a4d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 204, margin: { left: 84, top: 38, right: 5, bottom: 46 } })
    .createData({ id: "gapminder", values: data })
    .filterData({ id: "byCountry", field: "country", oneOf: ["Canada", "Egypt", "Germany", "India", "Nigeria", "United Kingdom"] })
    .filterData({ id: "sel", field: "year", oneOf: ["1952", "2017"] })
    .createComputedData({ id: "plot", as: "lifeExpNum", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createSummaryData({ id: "intervals", groupBy: "country", aggregates: [{ op: "min", field: "lifeExpNum", as: "lo" }, { op: "max", field: "lifeExpNum", as: "hi" }] })
    .createRuleMark({ id: "connectors", data: "intervals", stroke: "#212121" })
    .editRuleMark({ target: "connectors", strokeWidth: 1 })
    .encodeXRange({ target: "connectors", lower: "lo", upper: "hi" })
    .encodeY({ target: "connectors", field: "country", fieldType: "nominal" })
    .editXScale({ domain: [0, 90], nice: false })
    .editYScale({ domain: ["Canada", "Egypt", "Germany", "India", "Nigeria", "United Kingdom"] })
    .createXAxis({
      line: false,
      title: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90],
        labels: { offset: 2, flush: true, fontSize: 10 }
      }
    })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: false,
      title: false,
      ticksAndLabels: { ticks: { length: 0 }, labels: { offset: 7, fontSize: 10 } }
    })
    .editYAxisLabels({ color: "black" })
    .createScatterPlot({ data: "plot", x: { field: "lifeExpNum", fieldType: "quantitative" }, y: { field: "country", fieldType: "nominal" }, guides: false })
    .encodeColor({ field: "year", fieldType: "ordinal" })
    .editColorScale({ target: "scatterPlot", domain: ["1952", "2017"], range: ["#FAA757", "#60BCD3"] })
    .encodePointRadius({ value: 5, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1, stroke: false })
    .createLegend({
      position: "bottom",
      title: false,
      labels: { fontSize: 10 }
    })
    .editLegendSymbols({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .createTitle({
      text: "Change in life expectancy, 1952 - 2017",
      offset: -13,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, align: "center" });
}