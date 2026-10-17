// DOCS: doc-dfae58344d5a524e, doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 344, height: 374, margin: { left: 49, top: 52, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "amountNum", as: "amount", expression: { op: "toNumber", operand: { field: "issueAmount" } } })
    .createBarPlot({
      guides: false,
      x: { field: "issueYear", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "amount", aggregate: "sum" }
    })
    .editXScale({ domain: [484634571428, 1661282228571], nice: false, range: [49, 339] })
    .editYScale({ domain: [0, 350000] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "red" })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7, format: "%Y" } },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7, format: "," } },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createTitle({
      text: "UK debt - by issue date",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -43
    })
    .editTitle({
      offset: -13,
      gap: 1
    })
    .editTitle({
      subtitle: "\u00A3 millions. Source: DMO",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}
