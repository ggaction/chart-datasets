// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 712, height: 720, margin: { left: 105, top: 83, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "state", as: "State", expression: { field: "\ufeffState" } })
    .createComputedData({ id: "imm", as: "ValueCn", expression: { op: "toNumber", operand: { field: "ValueC" } } })
    .createSortedData({
      id: "type1SourceOrder",
      sortBy: [{ field: "Type1", order: "ascending" }],
    })
    .createBarPlot({
      x: { field: "ValueCn", aggregate: "sum" },
      y: "State",
      guides: false
    })
    .encodeColor({ field: "Type1", layout: "stack" })
    .editColorScale({
      domain: ["Asylees", "Lawful Permanent Residents", "Naturalizations", "Nonimmigrants", "Refugees"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editYScale({
      domain: ["West Virginia", "Mississippi", "Missouri", "Oklahoma", "Puerto Rico", "Wisconsin", "South Dakota", "Iowa", "Alabama", "Wyoming", "Ohio", "Arkansas", "Kentucky", "Kansas", "South Carolina", "New Hampshire", "Tennessee", "Montana", "Idaho", "Indiana", "Minnesota", "Pennsylvania", "New Mexico", "Louisiana", "Delaware", "North Dakota", "Oregon", "North Carolina", "Vermont", "Rhode Island", "Virginia", "Utah", "Maryland", "Connecticut", "Maine", "Georgia", "Illinois", "Colorado", "Washington", "Hawaii", "Michigan", "Massachusetts", "Nebraska", "New Jersey", "California", "New York", "Alaska", "Arizona", "Texas", "Nevada", "District of Columbia", "Florida"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editXScale({ domain: [0, 16], nice: false })
    .editBarMark({ stroke: false })
.encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Migration as % of State Population", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createGrid({ horizontal: false, vertical: {} })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({ at: { x: -99, y: -31 }, title: false, labels: { fontSize: 10 } })
    .editLegendLayout({ columns: 13 })
    .createTitle({
      text: "Total Immigrants by State as percentage of population",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Source: Homeland Security", offset: -13, alongOffset: -100 })
    .editTitle({ gap: 1 });
}
