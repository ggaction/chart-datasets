import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 532, height: 307, margin: { top: 20, right: 174, bottom: 37, left: 58 } })
    .createData({ values: data })
    .createComputedData({
      id: "gdpNum",
      as: "gdpValue",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "gdpPerCapitaPPP" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "gdpPerCapitaPPP" } }
      }
    })
    .createComputedData({
      id: "medianNum",
      as: "medianValue",
      expression: { op: "toNumber", operand: { field: "medianIncome" } }
    })
    .createComputedData({
      id: "popNum",
      as: "popValue",
      expression: { op: "toNumber", operand: { field: "pop2022" } }
    })
    .createScatterPlot({
      x: { field: "gdpValue", fieldType: "quantitative" },
      y: { field: "medianValue", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 80000] })
    .editYScale({ domain: [0, 25000] })
    .encodeSize({ field: "popValue", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 1425887337], range: [Math.PI, Math.PI * 361 / 4] })
    .encodeStroke({ value: "transparent" })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .editPointMark({ strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "GDP per Capita (PPP)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Median Income", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 48 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createLegend({
      title: "Population",
      labels: { fontSize: 10, fontFamily: "sans-serif", format: ",.0f" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editLegend({
      values: [0, 200000000, 400000000, 600000000, 800000000, 1000000000, 1200000000, 1400000000]
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "#4c78a8", stroke: "transparent", strokeWidth: 1.5, opacity: 0.7 }
    });
}