// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 233, margin: { left: 66, top: 28, right: 5, bottom: 5 } })
    .createData({ values: data })
    .filterData({ id: "year2017", field: "year", oneOf: ["2017"] })
    .filterData({ id: "europe", field: "region", oneOf: ["Europe"] })
    .filterData({ id: "validLifeExp", field: "lifeExp", predicate: { op: "neq", value: "NA" } })
    .createComputedData({ id: "lifeExpNum", as: "lifeExpNum", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createWindowData({ id: "ranked", sortBy: [{ field: "lifeExpNum", order: "descending" }], operations: [{ op: "rank", as: "rank" }] })
    .filterData({ id: "top10", field: "rank", predicate: { op: "lte", value: 10 } })
    .createTitle({ text: "Countries in Europe with the highest life expectancy, 2017", offset: -10.953125, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ align: "center" })
    .createBarPlot({ x: "lifeExpNum", y: "country", guides: false })
    .editXScale({ domain: [0, 90], nice: false })
    .editYScale({ domain: ["Switzerland", "Spain", "France", "Italy", "Iceland", "Luxembourg", "Norway", "Sweden", "Finland", "Netherlands"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "#FFDC25", stroke: false })
    .encodeBarWidth({ band: 1 })
    .createYAxis({ line: false, ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 10, offset: 5 } }, title: false })
    .editYAxis({ ticks: false })
    .createTextMark({ id: "labels", data: "top10", fontSize: 11 })
    .encodeX({ target: "labels", field: "lifeExpNum", fieldType: "quantitative" })
    .encodeY({ target: "labels", field: "country", fieldType: "nominal" })
    .encodeText({ target: "labels", field: "lifeExp" })
    .editTextMark({ target: "labels", baseline: "middle", dx: 3 })
    .editTextMark({ target: "labels", fill: "#757575" });
}