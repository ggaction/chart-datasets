import { chart } from "ggaction";
// DOCS: actual cached id from doc-8a4f6f06e0d37d5e, doc-efb03835af4d2e1b, doc-55b83d5194033052, doc-8e80ee3d1535d44e, doc-24636fdde2b1ab11
import data from "./data.json";
import usData from "./us-data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 481, height: 362, margin: { left: 24, right: 7, top: 40, bottom: 22 } })
    .editCanvas({ plotBorder: { underlay: true } })
    .createTitle({ text: "Unemployment: US and UK", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -18.123046875 })
    .editTitle({ offset: -10.953125 })
    .editTitle({ subtitle: "From the ECO API", subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .createData({ values: data })
    .createComputedData({ id: "ukNumeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "date", fieldType: "temporal" }, y: { field: "sourceValue" }, guides: false })
    .editXScale({ domain: [-694310400000, 1788220800000] })
    .editYScale({ domain: [0, 16] })
    .editLineMark({ stroke: "red" })
    .createData({ id: "us", values: usData })
    .createComputedData({ id: "usNumeric", as: "sourceValue", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "." } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createLineMark({ id: "usLine", stroke: "blue", missing: "break" })
    .encodeX({ field: "date", fieldType: "temporal", scale: { id: "x" } })
    .encodeY({ field: "sourceValue", scale: { id: "y" } })
    .createAxes({
      x: { scale: "x", ticksAndLabels: { values: [-631152000000, -473385600000, -315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000, 1735689600000], labels: { fontSize: 10, format: "%Y", offset: 5.5 } }, title: false, underlay: true },
      y: { scale: "y", ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16], labels: { fontSize: 10, offset: 6.5 } }, title: false, underlay: true }
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicks({ length: 5, color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ length: 5, color: "#888", alongOffset: 0.5 })
    .editXAxisLabels({ color: "#000", alongOffset: 0.5 })
    .editYAxisLabels({ color: "#000", alongOffset: 0.890625 });
}