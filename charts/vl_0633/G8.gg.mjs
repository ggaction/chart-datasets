// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e, doc-2bd5de4bd99e314a, doc-dfae58344d5a524e, doc-2a31551f1566fc6b, doc-a743281cbd97a819, doc-0cbb124f0c04d6d9, doc-964c0bc52c92a0d3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 485,
      height: 397,
      margin: { left: 29, top: 60, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["Congo", "US", "Greece"],
      as: { key: "country", value: "GDP" }
    })
    .createComputedData({
      id: "typed",
      as: "GDPn",
      expression: {
      op: "if",
      condition: { op: "eq", left: { field: "GDP" }, right: { constant: "" } },
      then: { constant: 0 },
      else: { op: "toNumber", operand: { field: "GDP" } }
    }
    })
    .filterData({ id: "gt0", field: "GDPn", predicate: { op: "gt", value: 0 } })
    .filterData({ id: "lt130", field: "GDPn", predicate: { op: "lt", value: 130 } })
    .createComputedData({ id: "yearNum", as: "YearNum", expression: { op: "toNumber", operand: { field: "Year" } } })
    .createLinePlot({
      x: { field: "YearNum", fieldType: "quantitative" },
      y: { field: "GDPn", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [0, 26] })
    .editYScale({ target: "linePlot", domain: [0, 130] })
    .encodeGroup({ target: "linePlot", field: "country" })
    .encodeColor({ target: "linePlot", field: "country" })
    .editColorScale({ target: "linePlot", domain: ["Congo", "Greece", "US"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodeStrokeWidth({ value: 1, target: "linePlot" })
    .createScatterPlot({
      x: { field: "YearNum", fieldType: "quantitative" },
      y: { field: "GDPn", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 26] })
    .editYScale({ target: "scatterPlot", domain: [0, 130] })
    .encodeColor({ target: "scatterPlot", field: "country" })
    .editColorScale({ target: "scatterPlot", domain: ["Congo", "Greece", "US"], range: ["#4c78a8", "#f58518", "#e45756"] })
    .encodePointRadius({ value: 2.7386128, target: "scatterPlot" })
    .encodeOpacity({ value: 1, target: "scatterPlot" })
    .createGrid({
      horizontal: { values: [0, 20, 40, 60, 80, 100, 120] },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Years since peak", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createLegend({
      target: "scatterPlot",
      channels: ["color"],
      position: "bottom-right"
    })
    .editLegendSymbols({
      target: "scatterPlot",
      symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
    })
    .editLegendTitle({ target: "scatterPlot", title: false })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      text: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .createTitle({
      text: "Great depressions",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "GDP, real terms. Rebased=100; US: 1929, Congo:1991; Greece:2007\nSources: World Bank, FRED",
      gap: 1
    })
    .editTitle({ offset: -12, alongOffset: -24 })
    .editTitle({ titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black" } });
}