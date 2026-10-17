// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 490, height: 463, margin: { left: 58, top: 76, right: 32, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numX", as: "XNum", expression: { op: "toNumber", operand: { field: "X" } } })
    .createComputedData({ id: "numY", as: "yNum", expression: { op: "toNumber", operand: { field: "y" } } })
    .createComputedData({ id: "numY2", as: "y2Num", expression: { op: "toNumber", operand: { field: "y2" } } })
    .createTitle({
      text: "Linear regression of % of population in Extreme poverty on Net ODA received",
      titleStyle: { fontSize: 13 },
      alongOffset: -53
    })
    .editTitle({ offset: -13, gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({
      titleStyle: { fontWeight: "bold", color: "black" },
      subtitle:
        "% of population given by value reported closest to year 2022\nNet ODA refers to Official Development Aid received (millions, in constant terms, 2020 US$)\nSource: World Bank and UNDP\nR Squared value = 0.11"
    })
    .createScatterPlot({
      x: { field: "XNum", fieldType: "quantitative" },
      y: { field: "yNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 0.65] })
    .editYScale({ target: "scatterPlot", domain: [-1000, 11000] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ value: "darkblue" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .createLinePlot({
      x: { field: "XNum", fieldType: "quantitative" },
      y: { field: "y2Num", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "red" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-labels", measurements: [
      { text: "0.00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4687 },
      { text: "0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.55", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 },
      { text: "0.65", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.4688 }
    ] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "1 - HDI", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: ".2f" })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-1000, 0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "ODA (millions US$)", fontSize: 11, offset: 40 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ format: ",.0f" })
    .editYAxisTitle({ fontWeight: "bold" })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}