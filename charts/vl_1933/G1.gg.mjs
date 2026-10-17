// DOCS: doc-e790db38fc2a278a doc-2bd5de4bd99e314a doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 408,
      height: 364,
      margin: { left: 56, top: 27, right: 12, bottom: 37 }
    })
    .editCanvas({ background: "#FcFdFd" })
    .createData({ values: data })
    .createComputedData({
      id: "riskNum",
      as: "risk_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "risk_share" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "risk_share" } }
      }
    })
    .createComputedData({
      id: "casesNum",
      as: "cases_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "cases_pop" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "cases_pop" } }
      }
    })
    .createScatterPlot({
      x: { field: "risk_num", fieldType: "quantitative", scale: { domain: [0, 0.16] } },
      y: { field: "cases_num", fieldType: "quantitative", scale: { domain: [0, 0.011] } },
      guides: false
    })
    .encodePointRadius({ value: 8.660254 })
    .encodeOpacity({ value: 0.4 })
    .editPointMark({ fill: "blue" })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16],
            ticks: { color: "#888" },
            labels: { format: ".1%", fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, labelMap: [{ value: 0.01, label: "" }, { value: 0.03, label: "" }, { value: 0.05, label: "" }, { value: 0.07, label: "" }, { value: 0.09, label: "" }, { value: 0.11, label: "" }, { value: 0.13, label: "" }, { value: 0.15, label: "" }, { value: 0.16, label: "" }] }
          },
          title: { text: "At risk / Population", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.001, 0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.009, 0.01, 0.011],
            ticks: { color: "#888" },
            labels: { format: ".2%", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "Cases / Population", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 48, rotation: { value: -90, unit: "degrees" } }
        }
      }
    })
    .createTitle({
      text: "COVID-19 - CASES AND DEATHS PER CAPITA",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({ alongOffset: -50.355 });
}