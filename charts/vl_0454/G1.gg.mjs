import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-a6a030a60e7ed085

export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 362, margin: { left: 29, top: 40, right: 6, bottom: 22 } })
    .createTitle({
      text: "Price flexbility - all items",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -23.6845703125
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Share of prices changing, monthly, 1988-2021. Source: LRPD (2021)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .createData({ values: data })
    .filterData({ id: "validChange", field: "change_sh", noneOf: [""] })
    .createComputedData({
      id: "changeNum",
      as: "alias",
      expression: { op: "toNumber", operand: { field: "change_sh" } }
    })
    .createHistogram({ field: "alias", binStep: 0.02, guides: false })
    .editBarMark({ fill: "orange", stroke: false })
    .editXScale({ domain: [0.02, 0.9400000000000001], nice: false })
    .editYScale({ domain: [0, 450], nice: false })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ".0%", flush: true, labelMap: [{ "value": 0.02, "label": "2%" }, { "value": 0.04, "label": "" }, { "value": 0.06, "label": "" }, { "value": 0.08, "label": "" }, { "value": 0.1, "label": "10%" }, { "value": 0.12, "label": "" }, { "value": 0.14, "label": "" }, { "value": 0.16, "label": "" }, { "value": 0.18, "label": "18%" }, { "value": 0.2, "label": "" }, { "value": 0.22, "label": "" }, { "value": 0.24, "label": "" }, { "value": 0.26, "label": "26%" }, { "value": 0.28, "label": "" }, { "value": 0.3, "label": "" }, { "value": 0.32, "label": "" }, { "value": 0.34, "label": "34%" }, { "value": 0.36, "label": "" }, { "value": 0.38, "label": "" }, { "value": 0.4, "label": "" }, { "value": 0.42, "label": "42%" }, { "value": 0.44, "label": "" }, { "value": 0.46, "label": "" }, { "value": 0.48, "label": "" }, { "value": 0.5, "label": "50%" }, { "value": 0.52, "label": "" }, { "value": 0.54, "label": "" }, { "value": 0.56, "label": "" }, { "value": 0.58, "label": "58%" }, { "value": 0.6, "label": "" }, { "value": 0.62, "label": "" }, { "value": 0.64, "label": "" }, { "value": 0.66, "label": "66%" }, { "value": 0.68, "label": "" }, { "value": 0.7, "label": "" }, { "value": 0.72, "label": "" }, { "value": 0.74, "label": "74%" }, { "value": 0.76, "label": "" }, { "value": 0.78, "label": "" }, { "value": 0.8, "label": "" }, { "value": 0.82, "label": "82%" }, { "value": 0.84, "label": "" }, { "value": 0.86, "label": "" }, { "value": 0.88, "label": "" }, { "value": 0.9, "label": "90%" }, { "value": 0.92, "label": "" }, { "value": 0.94, "label": "" }] },
        },title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: false
      }
    });
}