// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 160, height: 178, margin: { left: 5, top: 23, right: 5, bottom: 5 } })
    .editCanvas({ background: "#fffcf9" })
    .createData({ values: data })
    .createComputedData({ id: "pctComputed", as: "pct", expression: { op: "toNumber", operand: { field: "Percentage" } } })
    .createPiePlot({ category: "Surface", value: "pct", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 50 }, stroke: false })
    .encodeColor({ field: "Surface" })
    .editColorScale({ domain: ["Clay", "Other"], range: ["#c9532e", "#95A5A6"] })
    .createComputedData({ id: "labelRows", as: "sourceLabel", expression: { constant: "36.53%" } })
    .createAnnotation({ text: "36.53%", anchor: "plot-center", fontSize: 25 })
    .encodeText({ field: "sourceLabel" })
    .editTextMark({ fill: "black" })
    .createTitle({ text: "Clay", titleStyle: { fontSize: 14, fontWeight: 700 }, offset: -10.71875 })
    .editTitle({ align: "center" });
}