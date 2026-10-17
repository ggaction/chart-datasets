// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 766, height: 566, margin: { left: 33, top: 33, right: 33, bottom: 33 } })
    .editCanvas({ background: "#222431" })
    .createData({ values: data })
    .createComputedData({ id: "seed", as: "sequence", expression: { constant: 0 } })
    .createCompleteData({ id: "expanded", key: "sequence", groupBy: ["a", "val"], sequence: { start: 0, end: 39, step: 1 } })
    .createComputedData({ id: "seq2", as: "sequence2", expression: { op: "if", condition: { op: "lt", left: { field: "sequence" }, right: { field: "val" } }, then: { field: "sequence" }, else: { constant: null } } })
    .createComputedData({ id: "withB", as: "b", expression: { constant: 1 } })
    .createComputedData({ id: "withC", as: "c", expression: { op: "if", condition: { op: "isNull", operand: { field: "sequence2" } }, then: { constant: null }, else: { constant: 1 } } })
    .createStackData({ category: "a", group: "sequence", value: "b" })
    .createBarPlot({ x: "a", y: { lower: "b_start", upper: "b_end" }, guides: false })
    .editBarMark({ fill: "#3f424e", stroke: "#222431", strokeWidth: 3 })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"], paddingInner: 0.1, paddingOuter: 0 })
    .editYScale({ domain: [0, 40] })
    .filterData({ id: "layer2", field: "c", predicate: { op: "eq", value: 1 } })
    .createBarMark({ id: "bar2", data: "layer2" })
    .editBarMark({ target: "bar2", stroke: "#222431", strokeWidth: 3 })
    .encodeX({ target: "bar2", field: "a", fieldType: "nominal" })
    .encodeYRange({ target: "bar2", lower: "b_start", upper: "b_end" })
    .encodeColor({ target: "bar2", field: "a" })
    .editColorScale({ target: "bar2", domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"], palette: { name: "sinebow", count: 16, extent: [1 / 17, 16 / 17] } })
    .encodeBarWidth({ target: "bar2", band: 1 });
}