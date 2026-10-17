// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc (createScatterPlot), doc-76573a465e2b6a33 (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 407, height: 288, margin: { left: 41, top: 45, right: 166, bottom: 43 } })
    .createData({ id: "raw", values: data })
    .createTitle({
      text: "LCOE/capacity regression",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 9, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ align: "left", offset: -13, alongOffset: -35.9013671875 })
    .editTitle({ subtitle: "A regression of Solar PV LCOE on the log of capacity installed, Sources: IRENA, Our World in Data", gap: 2 })
    .createComputedData({ id: "xTyped", as: "xNum", expression: { op: "toNumber", operand: { field: "log_solar" } } })
    .createComputedData({ id: "yTyped", as: "yNum", expression: { op: "toNumber", operand: { field: "Solar photovoltaic levelized cost of energy" } } })
    .createComputedData({ id: "xx", as: "xx", expression: { op: "multiply", left: { field: "xNum" }, right: { field: "xNum" } } })
    .createComputedData({ id: "yy", as: "yy", expression: { op: "multiply", left: { field: "yNum" }, right: { field: "yNum" } } })
    .createComputedData({ id: "xy", as: "xy", expression: { op: "multiply", left: { field: "xNum" }, right: { field: "yNum" } } })
    .createScatterPlot({ x: { field: "xNum", fieldType: "quantitative" }, y: { field: "yNum", fieldType: "quantitative" }, guides: false })
    .encodeColor({ target: "scatterPlot", field: "Year", fieldType: "nominal" })
    .editColorScale({ target: "scatterPlot", domain: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"], range: ["rgb(44, 67, 92)", "rgb(33, 80, 129)", "rgb(29, 99, 137)", "rgb(26, 118, 139)", "rgb(30, 138, 129)", "rgb(37, 158, 113)", "rgb(66, 177, 95)", "rgb(116, 194, 76)", "rgb(165, 210, 53)", "rgb(214, 222, 24)", "rgb(255, 234, 20)", "rgb(255, 244, 137)"] })
    .editPointMark({ target: "scatterPlot", stroke: false, opacity: 0.7 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createLineMark({ id: "regressionLine", stroke: "firebrick" })
    .editLineMark({ target: "regressionLine", strokeWidth: 2 })
    .encodeX({ target: "regressionLine", field: "xNum", fieldType: "quantitative" })
    .encodeY({ target: "regressionLine", field: "yNum", fieldType: "quantitative" })
    .createRegressionData({ id: "fit", x: "xNum", y: "yNum" })
    .editRegressionData({ target: "fit", predict: { domain: [10.605044521487178, 13.65111286304443], steps: 2 } })
    .bindMarkData({ target: "regressionLine", data: "fit" })
    .createSummaryData({ id: "stats", source: "xy", aggregates: [{ op: "count", as: "N" }, { op: "sum", field: "xNum", as: "sum_xNum" }, { op: "sum", field: "yNum", as: "sum_yNum" }, { op: "sum", field: "xx", as: "sum_xx" }, { op: "sum", field: "yy", as: "sum_yy" }, { op: "sum", field: "xy", as: "sum_xy" }] })
    .createComputedData({ id: "rsquared", as: "rSquared", expression: { op: "divide", left: { op: "multiply", left: { op: "subtract", left: { op: "multiply", left: { field: "N" }, right: { field: "sum_xy" } }, right: { op: "multiply", left: { field: "sum_xNum" }, right: { field: "sum_yNum" } } }, right: { op: "subtract", left: { op: "multiply", left: { field: "N" }, right: { field: "sum_xy" } }, right: { op: "multiply", left: { field: "sum_xNum" }, right: { field: "sum_yNum" } } } }, right: { op: "multiply", left: { op: "subtract", left: { op: "multiply", left: { field: "N" }, right: { field: "sum_xx" } }, right: { op: "multiply", left: { field: "sum_xNum" }, right: { field: "sum_xNum" } } }, right: { op: "subtract", left: { op: "multiply", left: { field: "N" }, right: { field: "sum_yy" } }, right: { op: "multiply", left: { field: "sum_yNum" }, right: { field: "sum_yNum" } } } } } })
    .createComputedData({ id: "r2text", as: "R2", expression: { op: "if", condition: { op: "and", operands: [{ op: "gte", left: { field: "rSquared" }, right: { constant: 0.915 } }, { op: "lt", left: { field: "rSquared" }, right: { constant: 0.925 } }] }, then: { constant: "R²: 0.92" }, else: { constant: "" } } })
    .createTextMark({ id: "r2Text", data: "r2text", fontSize: 11 })
    .editTextMark({ target: "r2Text", fill: "firebrick", fontFamily: "sans-serif" })
    .editTextMark({ target: "r2Text", align: "right", baseline: "middle" })
    .editTextMark({ target: "r2Text", dy: -205 })
    .encodeX({ target: "r2Text", datum: 16 })
    .encodeY({ target: "r2Text", datum: 0 })
    .encodeText({ target: "r2Text", field: "R2" })
    .editXScale({ domain: [0, 16], nice: false })
    .editYScale({ domain: [0, 0.45], nice: false })
    .createXAxis({
      title: { text: "log Capacity", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27.578125 },
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000", offset: 7, format: ".0f", flush: true }
      }
    })
    .createYAxis({
      title: { text: "Solar PV LCOE", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 29.9013671875, rotation: { value: -90, unit: "degrees" } },
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000", offset: 7, format: ".1f" }
      }
    })
    .createLegend({
      target: "scatterPlot",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editLegend({ symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .editLegend({ title: "Year" });
}