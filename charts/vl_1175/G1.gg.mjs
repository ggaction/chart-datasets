import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-eb6e59db232dc6c0, doc-3b660fabf78cdd08, doc-82e309a0b6ac0052, doc-60b61133ba03bf60, doc-3558b809b504c100
export function buildChart() {
  return chart()
    .createCanvas({
      width: 1061,
      height: 707,
      margin: { left: 44, top: 10, right: 67, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "timeNum",
      as: "timeNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Time (seconds)" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Time (seconds)" } }
      }
    })
    .createComputedData({
      id: "heightNum",
      as: "heightNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Height" }, right: { constant: "" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Height" } }
      }
    })
    .filterData({
      id: "heightUnder100",
      field: "heightNum",
      predicate: { op: "lt", value: 100 }
    })
    .filterData({ id: "validTime", field: "timeNum", noneOf: [null] })
    .createHeatmap({
      x: { field: "timeNum", fieldType: "quantitative" },
      y: { field: "heightNum", fieldType: "quantitative" },
      bin: { bins: { x: 17, y: 20 }, extent: { x: [0, 17], y: [0, 100] }, includeEmpty: false },
      guides: false
    })
    .editColorScale({ domain: [1, 61], palette: "yellowgreenblue", interpolate: "hcl" })
    .editRectMark({ stroke: "none", strokeWidth: 0 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            count: 18,
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7, format: ".1f", flush: true }
          },
          title: { text: "Time (seconds)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 26 }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            count: 21,
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
          },
          title: { text: "Height (inches)", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black", offset: 26, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: false,
      legend: {
        title: "Count",
        position: "right",
        gradient: { length: 200 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black" },
        titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" }
      }
    });
}
