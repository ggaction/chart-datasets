// DOCS: doc-60b61133ba03bf60, doc-82e309a0b6ac0052, doc-3b660fabf78cdd08, doc-eb6e59db232dc6c0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1093,
      height: 702,
      margin: { left: 68, top: 5, right: 75, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "timedRows",
      field: "Time (seconds)",
      predicate: { op: "gt", value: "" }
    })
    .createComputedData({
      id: "timeNum",
      as: "TimeSeconds",
      expression: { op: "toNumber", operand: { field: "Time (seconds)" } }
    })
    .createComputedData({
      id: "timeBin",
      as: "timeBin",
      expression: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 8 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 4 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 2 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 1 } }, then: { constant: 0 }, else: { constant: 1 } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 3 } }, then: { constant: 2 }, else: { constant: 3 } } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 6 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 5 } }, then: { constant: 4 }, else: { constant: 5 } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 7 } }, then: { constant: 6 }, else: { constant: 7 } } } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 12 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 10 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 9 } }, then: { constant: 8 }, else: { constant: 9 } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 11 } }, then: { constant: 10 }, else: { constant: 11 } } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 14 } }, then: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 13 } }, then: { constant: 12 }, else: { constant: 13 } }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 15 } }, then: { constant: 14 }, else: { op: "if", condition: { op: "lt", left: { field: "TimeSeconds" }, right: { constant: 16 } }, then: { constant: 15 }, else: { constant: 16 } } } } } }
    })
    .createSummaryData({
      id: "binnedCounts",
      groupBy: ["timeBin", "Age Group"],
      aggregates: [{ op: "count", as: "Count" }]
    })
    .createHeatmap({
      x: { field: "timeBin", fieldType: "ordinal" },
      y: { field: "Age Group", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: ["", "Retired", "Adult", "Teen", "Pre-Teen", "Kid"], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({
      field: "Count",
      fieldType: "quantitative"
    })
    .editColorScale({ domain: [1, 64], palette: "yellowgreenblue", interpolate: "hcl" })
    .editRectMark({ stroke: false })
    .createScale({ id: "sourceTimeAxis", type: "linear", domain: [0, 17] })
    .createAxes({
      x: {
        scale: "sourceTimeAxis",
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true }
        },
        title: { text: "Time (seconds)", fontSize: 11, offset: 27 }
      },
      y: {
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, labelMap: [{ value: "", label: "" }] }
        },
        title: {
          text: "Age Group",
          fontSize: 11,
          offset: 56.576171875,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888", length: 5 })
    .editYAxisTicks({ color: "#888", length: 5 })
    .editXAxisLabels({ format: ".1f" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createLegend({
      gradient: { length: 200 },
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}