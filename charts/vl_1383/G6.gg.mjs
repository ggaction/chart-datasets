import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fc11e9fb291905d1 doc-6c2c08869091f6a0 doc-333a87e52954985d

export function buildChart() {
  return chart()
    .createCanvas({ width: 968, height: 450, margin: { left: 202, top: 5, right: 166, bottom: 45 } })
    .editCanvas({ background: "white" })
    .createData({ values: data })
    .filterData({
      id: "packageFilter",
      field: "package",
      oneOf: ["Julia CSV.jl", "Julia CSV.jl copycols", "Julia CSV.jl parallel", "Julia CSV.jl copycols parallel", "Julia CSVFiles.jl", "Julia CSVReader.jl", "Julia TableReader.jl", "Julia Pandas.jl", "Julia TextParse.jl", "Python Arrow", "Python Arrow parallel", "Python Pandas", "R fread", "R fread parallel", "R readr"]
    })
    .createComputedData({
      id: "withna_verbal",
      as: "withna_verbal",
      expression: { op: "if", condition: { op: "eq", left: { field: "withna" }, right: { constant: "true" } }, then: { constant: "With NA values" }, else: { constant: "Without NA values" } }
    })
    .createComputedData({ id: "proofX", as: "proofX", expression: { op: "toNumber", operand: { field: "timing" } } })
    .createSummaryData({ id: "packageMinimum", groupBy: ["package"], aggregates: [{ op: "min", field: "proofX", as: "minTiming" }] })
    .createComputedData({ id: "zero", as: "zero", expression: { constant: 0 } })
    .createBarPlot({
      x: { lower: "zero", upper: "minTiming" },
      y: { field: "package" },
      guides: false
    })
    .encodeColor({ field: "package", layout: "overlay" })
    .editColorScale({ palette: "category20", domain: ["Julia CSV.jl", "Julia CSV.jl copycols", "Julia CSV.jl copycols parallel", "Julia CSV.jl parallel", "Julia CSVFiles.jl", "Julia Pandas.jl", "Julia TextParse.jl", "Python Arrow parallel", "Python Pandas", "R fread", "R fread parallel", "R readr"] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .editXScale({ domain: [0, 0.0024], nice: false })
    .editYScale({ domain: ["Julia CSV.jl", "Julia CSV.jl copycols", "Julia CSV.jl copycols parallel", "Julia CSV.jl parallel", "Julia CSVFiles.jl", "Julia Pandas.jl", "Julia TextParse.jl", "Python Arrow parallel", "Python Pandas", "R fread", "R fread parallel", "R readr"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createGrid({ horizontal: false, vertical: { values: [0, 0.0002, 0.0004, 0.0006, 0.0008, 0.001, 0.0012, 0.0014, 0.0016, 0.0018, 0.002, 0.0022, 0.0024] } })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.0002, 0.0004, 0.0006, 0.0008, 0.001, 0.0012, 0.0014, 0.0016, 0.0018, 0.002, 0.0022, 0.0024],
        ticks: { length: 5 },
        labels: { fontSize: 18, offset: 7, flush: true, labelMap: [{ value: 0.0002, label: "" }, { value: 0.0006, label: "" }, { value: 0.001, label: "" }, { value: 0.0014, label: "" }, { value: 0.0018, label: "" }, { value: 0.0022, label: "" }] }
      },
      title: { text: "seconds", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ".4f" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 18, offset: 7, labelMap: [{ value: "Julia CSV.jl copycols parallel", label: "Julia CSV.jl copycol…" }] } },
      title: { text: "package", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createLegend({ title: "package", labels: { fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } })
    .editLegendLayout({ position: "right" })
    .editLegendSymbols({ symbol: { width: 10, height: 10 } });
}