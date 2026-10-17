// DOCS: doc-76573a465e2b6a33, doc-b11b4627b143730d, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 433,
      height: 382,
      margin: { left: 26, top: 10, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .filterData({
      id: "validRates",
      field: "value",
      predicate: { op: "neq", value: "" }
    })
    .createComputedData({
      id: "validRateNumbers",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [189302400000, 912470400000], nice: false })
    .editYScale({ domain: [0, 1.1] })
    .editLineMark({ stroke: "#e54753", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            189302400000, 252460800000, 315532800000, 378691200000,
            441763200000, 504921600000, 567993600000, 631152000000,
            694224000000, 757382400000, 820454400000, 883612800000
          ],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y" }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, format: ".1f" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}
