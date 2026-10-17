// DOCS: doc-cc4024999766e88b (createPiePlot), doc-9a0f2eeed4bc9b31 (polar arcs / donut innerRadius)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 160, height: 178, margin: { left: 5, top: 23, right: 5, bottom: 5 } })
    .editCanvas({ background: "#fffcf9" })
    .createTitle({ text: "Carpet", titleStyle: { fontSize: 14, fontWeight: 700 }, offset: -10.71875 })
    .editTitle({ align: "center" })
    .createData({ values: data })
    .createComputedData({ id: "pctNum", as: "PercentageNum", expression: { op: "toNumber", operand: { field: "Percentage" } } })
    .createPiePlot({ category: "Surface", value: "PercentageNum", guides: false })
    .editArcMark({ target: "piePlot", innerRadius: { unit: "px", value: 50 }, stroke: false })
    .encodeColor({ field: "Surface", fieldType: "nominal", scale: { domain: ["Carpet", "Other"], range: ["#fc8c14", "#95A5A6"] } })
    .createComputedData({ id: "labelRows", as: "sourceLabel", expression: { constant: "15.47%" } })
    .createAnnotation({ text: "15.47%", anchor: "plot-center", fontSize: 25 })
    .encodeText({ field: "sourceLabel" })
    .editTextMark({ fill: "black" });
}
