// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const Y_DOMAIN = ["West Virginia","Mississippi","Missouri","Oklahoma","Puerto Rico","Wisconsin","South Dakota","Iowa","Alabama","Wyoming","Ohio","Arkansas","Kentucky","Kansas","South Carolina","New Hampshire","Tennessee","Montana","Idaho","Indiana","Minnesota","Pennsylvania","New Mexico","Louisiana","Delaware","North Dakota","Oregon","North Carolina","Vermont","Rhode Island","Virginia","Utah","Maryland","Connecticut","Maine","Georgia","Illinois","Colorado","Washington","Hawaii","Michigan","Massachusetts","Nebraska","New Jersey","California","New York","Alaska","Arizona","Texas","Nevada","District of Columbia","Florida"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 912, height: 920, margin: { left: 105, top: 83, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "imm", as: "ValueCNum", expression: { op: "toNumber", operand: { field: "ValueC" } } })
    .createSortedData({ id: "sourceTypeStackOrder", sortBy: [{ field: "Type1", order: "ascending" }] })
    .createBarPlot({ x: { field: "ValueCNum", aggregate: "sum", fieldType: "quantitative" }, y: { field: "\uFEFFState", fieldType: "ordinal" }, guides: false })
    .editXScale({ domain: [0, 16] })
    .editYScale({ domain: Y_DOMAIN, paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "Type1", layout: "stack" })
    .editColorScale({ domain: ["Asylees", "Lawful Permanent Residents", "Naturalizations", "Nonimmigrants", "Refugees"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"] })
    .editBarMark({ stroke: false })
.encodeBarWidth({ band: 1 })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Migration as % of State Population", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createLegend({ at: { x: -99, y: -31 }, title: false, labels: { fontSize: 10 } })
    .editLegendLayout({ columns: 13 })
    .createTitle({
      text: "Total Immigrants by State as percentage of population",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 13 }
    })
    .editTitle({ offset: -13, alongOffset: -100, gap: 1 })
    .editTitle({ subtitle: "Source: Homeland Security" });
}