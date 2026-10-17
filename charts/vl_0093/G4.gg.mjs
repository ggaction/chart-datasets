import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1035,
      height: 324,
      margin: { left: 50, top: 10, right: 5, bottom: 114 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numeric",
      as: "proofValue",
      expression: { op: "toNumber", operand: { field: "Profit" } }
    })
    .createSummaryData({
      id: "means",
      groupBy: ["State"],
      aggregates: [{ op: "mean", field: "proofValue", as: "mean" }]
    })
    .createBarPlot({ x: "State", y: "mean", guides: false })
    .editXScale({
      domain: ["Alabama","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [-100, 300], zero: false })
    .encodeBarWidth({ pixels: 18 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "State", fontSize: 11, fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-100, 0, 100, 200, 300],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, labelMap: [{ value: -100, label: "−100" }] }
      },
      title: { text: "Mean of Profit", fontSize: 11, fontWeight: 700 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black" }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" });
}