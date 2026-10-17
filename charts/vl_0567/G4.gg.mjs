// DOCS: doc-d53f34f3a8edbb1a, doc-4aa38a7eeac95256, doc-dc3d5f698ef3aebc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 493, height: 463, margin: { left: 38, top: 64, right: 5, bottom: 99 } })
    .createData({ values: data })
    .createComputedData({ id: "gdpNum", as: "GDPn", expression: { op: "toNumber", operand: { field: "GDP" } } })
    .createComputedData({ id: "rank2Num", as: "rank2n", expression: { op: "toNumber", operand: { field: "rank2" } } })
    .createComputedData({ id: "rankNum", as: "rankn", expression: { op: "toNumber", operand: { field: "rank" } } })
    .createComputedData({ id: "yearNumData", as: "yearNum", expression: { op: "toNumber", operand: { field: "Year" } } })
    .createSortedData({ id: "ranked", sortBy: [{ field: "rankn", order: "ascending" }] })
    .filterData({ id: "year2021", field: "yearNum", predicate: { op: "eq", value: 2021 } })
    .createBarPlot({ x: "Country", y: { field: "GDPn", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: ["Nigeria", "Ethiopia", "United States", "Pakistan", "Bangladesh", "Egypt, Arab Rep.", "Japan", "China", "Brazil", "Indonesia", "Iran, Islamic Rep.", "India", "Russian Federation", "France", "Philippines", "Turkiye", "Congo, Dem. Rep.", "Mexico", "Germany", "Thailand", "Vietnam"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 2] })
    .encodeColor({ field: "rank2n", fieldType: "quantitative", aggregate: "mean" })
    .editColorScale({ interpolate: "hcl", domain: [1, 21], range: ["rgb(65, 0, 0)", "rgb(67, 0, 0)", "rgb(69, 0, 0)", "rgb(72, 0, 0)", "rgb(75, 0, 0)", "rgb(78, 0, 0)", "rgb(82, 0, 0)", "rgb(85, 0, 0)", "rgb(89, 0, 0)", "rgb(93, 0, 0)", "rgb(96, 0, 0)", "rgb(100, 0, 0)", "rgb(104, 0, 0)", "rgb(108, 0, 0)", "rgb(112, 0, 0)", "rgb(116, 0, 0)", "rgb(120, 0, 0)", "rgb(124, 0, 0)", "rgb(128, 0, 0)", "rgb(132, 0, 0)", "rgb(136, 0, 0)"] })
    .editBarMark({ opacity: 1 })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createGrid({ horizontal: { color: "rgba(221, 221, 221, 0.5)" }, vertical: false })
    .createTitle({
      text: "Openness to trade: 21 Populous Countries",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, alongOffset: -32.58, gap: 1 })
    .editTitle({ subtitle: "Trade as a % of GDP\nSource: World Bank\n" });
}