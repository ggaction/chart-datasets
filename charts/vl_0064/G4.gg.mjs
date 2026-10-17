// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

const COUNTRIES = ["Albania","Austria","Belgium","Croatia","Czech Republic","England","France","Germany","Hungary","Iceland","Italy","Northern Ireland","Poland","Portugal","Republic of Ireland","Romania","Russia","Slovakia","Spain","Sweden","Switzerland","Turkey","Ukraine","Wales"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 532, height: 316, margin: { left: 47, top: 5, right: 5, bottom: 111 } })
    .createData({ values: data })
    .createComputedData({ id: "salaryNum", as: "SalaryNum", expression: { op: "toNumber", operand: { field: "Salary" } } })
    .createSummaryData({ id: "byCountry", groupBy: "Country", aggregates: [{ field: "SalaryNum", op: "mean", as: "mean_Salary" }] })
    .createBarPlot({
      x: { field: "Country", fieldType: "nominal" },
      y: { field: "mean_Salary", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: COUNTRIES, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 26000000], nice: false })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Country", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 94 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000000, 10000000, 15000000, 20000000, 25000000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: 0, label: "0M" },
            { value: 5000000, label: "5M" },
            { value: 10000000, label: "10M" },
            { value: 15000000, label: "15M" },
            { value: 20000000, label: "20M" },
            { value: 25000000, label: "25M" }
          ]
        }
      },
      title: { text: "Mean of Salary", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 38 }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" });
}