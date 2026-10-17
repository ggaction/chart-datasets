// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 373, height: 297, margin: { left: 44, top: 58, right: 129, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "xNum", as: "Spend Index Num", expression: { op: "toNumber", operand: { field: "Spend Index" } } })
    .createComputedData({ id: "yNum", as: "Average Footfall Num", expression: { op: "toNumber", operand: { field: "Average Footfall" } } })
    .createComputedData({ id: "vNum", as: "Vacancy Num", expression: { op: "if", condition: { op: "eq", left: { field: "High Street Vacancies" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "High Street Vacancies" } } } })
    .createScatterPlot({ x: "Spend Index Num", y: "Average Footfall Num", guides: false })
    .editXScale({ domain: [70, 200], zero: false, nice: false })
    .editYScale({ domain: [50, 170], zero: false, nice: false })
    .encodeColor({ field: "Vacancy Num", fieldType: "quantitative" })
    .editColorScale({ domain: [10, 33], palette: "blues", clamp: false })
    .encodePointRadius({ value: 5 })
    .encodeOpacity({ target: "scatterPlot", value: 0.9 })
    .editPointMark({ stroke: false })
    .createRegressionData({ id: "reg", x: "Spend Index Num", y: "Average Footfall Num" })
    .editRegressionData({ target: "reg", predict: { domain: [70, 100], steps: 2 } })
    .createLinePlot({ x: "Spend Index Num", y: "Average Footfall Num", guides: false })
    .encodeStroke({ target: "linePlot", value: "firebrick" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({ id: "r2src", source: "vNum", aggregates: [{ op: "count", as: "N" }] })
    .createComputedData({ id: "r2txt", as: "R2", expression: { constant: "R²: 0.22" } })
    .createTextMark({ data: "r2txt", fill: "firebrick", fontSize: 11 })
    .encodeText({ field: "R2" })
    .editTextMark({ align: "right", baseline: "middle" })
    .encodeX({ datum: 200 })
    .encodeY({ datum: 173 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [80, 100, 120, 140, 160, 180, 200], ticks: { length: 5 }, labels: { fontSize: 10, fontWeight: 400, offset: 7, flush: true } },
      title: { text: "Spend Index", fontSize: 11 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [60, 80, 100, 120, 140, 160], ticks: { length: 5 }, labels: { fontSize: 10, fontWeight: 400, offset: 7 } },
      title: { text: "Average Footfall", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      vertical: { values: [80, 100, 120, 140, 160, 180, 200] },
      horizontal: { values: [60, 80, 100, 120, 140, 160] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        position: "right",
        title: "% of Shops Vacant",
        gradient: { length: 200, thickness: 16, opacity: 0.9 },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10 }
      }
    })
    .createTitle({ text: "Highstreet Recovery", titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" }, alongOffset: -38.6845703125 })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Data from April 2022 showing High Street Recovery.\nIndex=100 a pre-lockdown baseline Source: Center for Cities", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "rgb(0, 0, 0)" } });
}