// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 545, height: 1072, margin: { left: 204, top: 35, right: 141, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "wgiYears", field: "year", oneOf: ["2017", "2021"] })
    .createComputedData({ id: "cafNum", as: "CAF_num", expression: { op: "toNumber", operand: { field: "CAF" } } })
    .createComputedData({ id: "glyphSized", as: "nativeArea", expression: { op: "if", condition: { op: "eq", left: { field: "Increase/Decrease?" }, right: { constant: "Decrease" } }, then: { constant: Math.PI * 50 / 4 }, else: { op: "if", condition: { op: "eq", left: { field: "Increase/Decrease?" }, right: { constant: "Increase" } }, then: { constant: 50 }, else: { constant: 50 * Math.sqrt(3) / 4 } } } })
    .createSummaryData({ id: "pairedIntervals", groupBy: ["Country"], aggregates: [{ op: "min", field: "CAF_num", as: "pairLo" }, { op: "max", field: "CAF_num", as: "pairHi" }] })
    .createRuleMark({ id: "sourceConnectors", stroke: "#4c78a8", strokeWidth: 2 })
    .encodeX({ field: "pairLo", fieldType: "quantitative", scale: { domain: [0, 70], nice: false } })
    .encodeX2({ field: "pairHi", fieldType: "quantitative" })
    .encodeY({ field: "Country", fieldType: "nominal" })
    .createScatterPlot({
      data: "glyphSized",
      x: { field: "CAF_num", fieldType: "quantitative" },
      y: { field: "Country", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "year" })
    .editColorScale({ target: "scatterPlot", domain: ["2017", "2021"], range: ["rgb(120, 28, 109)", "rgb(237, 105, 37)"] })
    .encodeShape({ field: "Increase/Decrease?", fieldType: "nominal" })
    .editShapeScale({ target: "scatterPlot", domain: ["Decrease", "Increase", "Neither"], range: ["circle", "square", "triangle-up"] })
    .encodeSize({ field: "nativeArea", fieldType: "quantitative" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 50], range: [0, 50] })
    .editPointMark({ target: "scatterPlot", stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: { count: 7, ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "WGI Score", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: false,
      ticksAndLabels: { ticks: {}, labels: { fontSize: 8, offset: 7 } },
      title: { text: "Country", fontSize: 11, offset: 193, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ vertical: true })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        title: "Year",
        position: "right",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, stroke: "transparent", strokeWidth: 0 }] },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["shape"],
        title: "Increase or Decrease?",
        position: "right",
        symbol: { layers: [{ type: "point", size: 3.8217124199711, fill: "black", stroke: "transparent", strokeWidth: 0 }] },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({
      text: "Change in WGI Overall Score between 2017 and 2021",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .editTitle({ offset: -13, alongOffset: -199 })
    .editTitle({ subtitle: "Source: CAF", gap: 1 });
}