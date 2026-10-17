// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-b257fb08998617a5 createGuides/axes; doc-dd4a5f585ff65fb2 encodeColor
import { chart } from "ggaction";
import data from "./data.json";

const Y_DOMAIN = [
  "Alaska","District of Columbia","Vermont","West Virginia","Mississippi","Missouri","Oklahoma","Puerto Rico","Wisconsin","South Dakota","Iowa","Alabama","Wyoming","Ohio","Arkansas","Kentucky","Kansas","South Carolina","New Hampshire","Tennessee","Montana","Idaho","Indiana","Minnesota","Pennsylvania","New Mexico","Louisiana","Delaware","North Dakota","Oregon","North Carolina","Rhode Island","Virginia","Utah","Maryland","Connecticut","Maine","Georgia","Illinois","Colorado","Washington","Hawaii","Michigan","Massachusetts","Nebraska","New Jersey","California","New York","Arizona","Texas","Nevada","Florida"
];
const COLOR_DOMAIN = ["Asylees","Lawful Permanent Residents","Naturalizations","Nonimmigrants","Refugees"];
const COLOR_RANGE = ["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 911, height: 920, margin: { left: 105, top: 83, right: 6, bottom: 37 } })
    .createData({ values: data })
.createComputedData({ id: "invalidFlags", as: "invalidFlag", expression: { op: "if", condition: { op: "eq", left: { field: "ValueC" }, right: { constant: "N/A" } }, then: { constant: 1 }, else: { constant: 0 } } })
    .createSortedData({ id: "invalidOrder", sortBy: [{ field: "Type1", order: "ascending" }] })
    .createWindowData({ id: "invalidPrefixData", partitionBy: ["State"], operations: [{ op: "cumulativeSum", field: "invalidFlag", as: "invalidPrefix" }] })
    .filterData({ id: "valueCValid", field: "invalidPrefix", predicate: { op: "eq", value: 0 } })
    .createComputedData({ id: "valueCNum", as: "ValueCNum", expression: { op: "toNumber", operand: { field: "ValueC" } } })
    .createTitle({ text: "Total Immigrants by State as percentage of population", gap: 1, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .createSummaryData({
      id: "summary",
      groupBy: ["State", "Type1", "ValueC"],
      aggregates: [{ op: "sum", field: "ValueCNum", as: "SumValueC" }]
    })
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "Type1", order: "ascending" }]
    })
    .createStackData({
      category: "State",
      group: "Type1",
      value: "SumValueC"
    })
    .createBarPlot({
      x: { lower: "SumValueC_start", upper: "SumValueC_end", fieldType: "quantitative" },
      y: "State",
      guides: false
    })
    .encodeColor({ field: "Type1", layout: "overlay" })
    .editColorScale({ domain: COLOR_DOMAIN, range: COLOR_RANGE })
    .editYScale({ domain: Y_DOMAIN, paddingInner: 0.1, paddingOuter: 0.05 })
    .editXScale({ target: "barPlot", domain: [0, 16], nice: false })
    .encodeBarWidth({ band: 1 })
    .editTitle({ subtitle: "Source: Homeland Security\n", subtitleStyle: { fontSize: 13, fontWeight: 400 } })
    .editTitle({ offset: -13, alongOffset: -100 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Migration as % of State Population", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } }, title: { fontWeight: 700 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createGrid({ horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ channels: ["color"], title: false, at: { x: -99, y: -31 } })
    .editLegend({ columns: 13, symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }, labels: { fontSize: 10 } });
}