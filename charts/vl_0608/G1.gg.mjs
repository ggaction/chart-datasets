// DOCS: doc-6c2c08869091f6a0, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const categories = ["Brazil","India","Iran","Turkey","Egypt","Nigeria","Russia","Indonesia","Bangladesh","UK","China","Congo DR","USA","Pakistan","Mexico","Philippines","Vietnam","Thailand","Germany","Ethiopia","Japan"];
  const ticks = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];
  return chart()
    .createCanvas({ width: 471, height: 381, margin: { left: 65, top: 59, right: 6, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "p21Rows", field: "p21", oneOf: ["1"] })
    .createComputedData({
      id: "unempRows",
      as: "unempPercent",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "value2021" } }, right: { constant: 100 } }
    })
    .createSortedData({ id: "sortedRows", sortBy: [{ field: "unempPercent", order: "descending" }] })
    .createBarPlot({ x: { field: "unempPercent" }, y: { field: "nameSimple" }, guides: false })
    .editXScale({ domain: [0, 0.35] })
    .editYScale({ domain: categories, paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .createGrid({ horizontal: false, vertical: { color: "white", lineWidth: 0.5, values: ticks, zIndex: 1 } })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: ticks, ticks: { length: 5 }, labels: { format: ".0%", fontSize: 10, offset: 7, flush: true } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createTitle({
      text: "Millions without work",
      offset: -13,
      titleStyle: { color: "black", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      alongOffset: -59.82,
      gap: 1,
      subtitleStyle: { color: "black", fontFamily: "sans-serif", fontSize: 10, fontStyle: "italic", fontWeight: 400 }
    })
    .editTitle({ subtitle: "Youth Unemployment (15-24 year olds). World's 21 most populous countries\nSource: World Bank" });
}