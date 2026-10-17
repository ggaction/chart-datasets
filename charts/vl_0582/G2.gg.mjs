import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-bedf05337affd6f4 doc-dfae58344d5a524e
export function buildChart() {
  return chart()
    .createCanvas({ width: 493, height: 374, margin: { left: 38, top: 52, right: 5, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .filterData({
      id: "validYear",
      field: "year",
      noneOf: ["\uFFFD2013", "\uFFFD2014", "\uFFFD2015", "\uFFFD2016", "\uFFFD2017", "\uFFFD2018", "\uFFFD2019", "\uFFFD2020", "\uFFFD2021", "\uFFFD2022"]
    })
    .createComputedData({ id: "infl", as: "changeNum", expression: { op: "if", condition: { op: "eq", left: { field: "change" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "change" } } } })
    .createBarPlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "changeNum" },
      guides: false
    })
    .editXScale({ domain: [-5440685563636, 1401399163636], range: [38, 488], nice: false })
    .editYScale({ domain: [-0.15, 0.3] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(128,0,0)", stroke: false })
    .createGrid({
      horizontal: { count: 8 },
      vertical: { values: [-5364662400000, -4733596800000, -4102444800000, -3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: { values: [-5364662400000, -4733596800000, -4102444800000, -3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000], ticks: { color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { count: 8, ticks: { color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
      title: false
    })
    .createTitle({
      text: "US inflation",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "CPI - annual change. Source: Minneapolis Fed", subtitleStyle: { fontStyle: "italic", fontSize: 10 }, gap: 3 })
    .editTitle({ alongOffset: -32.302734375 });
}