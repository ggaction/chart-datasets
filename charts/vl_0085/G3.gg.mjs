import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-e790db38fc2a278a, doc-19aafdf6d7c93097

export function buildChart() {
  return chart()
    .createCanvas({ width: 341, height: 377, margin: { left: 56, top: 40, right: 25, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "riskShareNum",
      as: "risk_share_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "risk_share" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "risk_share" } }
      }
    })
    .createComputedData({
      id: "casesPopNum",
      as: "cases_pop_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "cases_pop" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "cases_pop" } }
      }
    })
    .createScatterPlot({ x: { field: "risk_share_num" }, y: { field: "cases_pop_num" }, guides: false })
    .editXScale({ domain: [0, 0.16] })
    .editYScale({ domain: [0, 0.011] })
    .encodePointRadius({ value: 8.660254037844387 })
    .editPointMark({ fill: "blue", opacity: 0.4 })
    .createTitle({
      text: "Risk hotspots: case rates and elderly population",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -50.3545
    })
    .editTitle({
      offset: -13,
      gap: 1,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Case rate, per capita. Share of population 75+ years old. Source: my calcs"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".1%", flush: true, labelMap: [{ value: 0.01, label: "" }, { value: 0.02, label: "" }, { value: 0.04, label: "" }, { value: 0.06, label: "" }, { value: 0.08, label: "" }, { value: 0.1, label: "" }, { value: 0.12, label: "" }, { value: 0.14, label: "" }, { value: 0.16, label: "" }] }
      },
      title: { text: "Elderly population", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.011],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".2%" }
      },
      title: { text: "Case rate", fontSize: 11, fontWeight: 700, offset: 44, rotation: { value: -90, unit: "degrees" } }
    });
}