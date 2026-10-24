import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    .createCanvas({ width: 591, height: 292, margin: { left: 45, top: 54, right: 346, bottom: 38 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "sourceYear", expression: { op: "parseTime", operand: { field: "Year" } } })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "if", condition: { op: "eq", left: { field: "Value" }, right: { constant: "NaN" } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "Value" } } } })
    .filterData({ id: "finite", field: "sourceValue", predicate: { op: "neq", value: null } }).createLinePlot({x: {field: "sourceYear", fieldType: "temporal", scale: {domain: [-1262304000000, 1104537600000]}}, y: {field: "sourceValue", scale: {domain: [0, 110]}}, guides: false}).createXAxis({ticksAndLabels: {values: [-946771200000, -315619200000, 315532800000, 946684800000], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true}}, title: {text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}).createYAxis({ticksAndLabels: {values: [0, 20, 40, 60, 80, 100], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625}}, title: {text: "Cost relative to 1930, %", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125, alongOffset: 0.5}}).editXAxis({line: {color: "#888"}}).editYAxis({line: {color: "#888"}}).createGrid({horizontal: {values: [0, 20, 40, 60, 80, 100], color: "#ddd", lineWidth: 1, alongOffset: 0.5}, vertical: false})
    .encodeGroup({ field: "Type" })
    .encodeStroke({
      field: "Type",
      scale: {
        domain: [
          "International calling costs (relative to 1930) (OECD Economic Outlook (2007))",
          "Passenger air transport cost (relative to 1930) (OECD Economic Outlook (2007))",
          "Sea freight cost (relative to 1930) (OECD Economic Outlook (2007))"
        ],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createLegend({ channels: ["stroke"], at: { x: 0, y: 0 }, symbol: { layers: [{ type: "line", length: 5, lineWidth: 1.5 }] } })
    .editLegend({ labels: { fontSize: 10, color: "black" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "black" } })
    .editLegendBlock({
      target: "linePlot",
      channel: "stroke",
      labelMap: [
        { value: "International calling costs (relative to 1930) (OECD Economic Outlook (2007))", label: "International calling costs (relativ…" },
        { value: "Passenger air transport cost (relative to 1930) (OECD Economic Outlook (2007))", label: "Passenger air transport cost (rela…" },
        { value: "Sea freight cost (relative to 1930) (OECD Economic Outlook (2007))", label: "Sea freight cost (relative to 1930)…" }
      ]
    })
    .editLegend({ position: "right" })
    .createTitle({ text: "Decline in Transport and Communication costs relative to 1930", align: "left", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -9.953125, alongOffset: -38.6845703125, gap: 3.046875 })
    .editTitle({ subtitle: "Source: Our World in Data\n", subtitleStyle: { fontSize: 13, fontStyle: "italic", color: "black" } });
}
// DOCS: doc-8a4f6f06e0d37d5e doc-ab11b865390b47d5 doc-097261235d6c5589 doc-6804a98cc679901a