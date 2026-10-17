// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 403, height: 352, margin: { left: 5, top: 47, right: 98, bottom: 5 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "typed", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "Item", noneOf: ["Net exports"] })
    .createSortedData({ id: "sourceCategoryOrder", sortBy: [{ field: "Item", order: "ascending" }] })
  .createPiePlot({ category: "Item", value: "ValueNum", guides: false })
    .encodeColor({ field: "Item", fieldType: "nominal" })
    .editColorScale({ type: "ordinal", domain: ["Consumption", "Government", "Investment"], range: ["rgb(128,0,0)", "rgb(118,118,118)", "rgb(214,214,206)"] })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, padAngle: 1.1459155902616465, stroke: false }).encodeR({ field: "ValueNum", scale: { range: [120, 120] } })
  .editThetaScale({ range: [151.833815109669, 511.833815109669] })
    .createLegend({ title: false, labels: { fontSize: 10 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .createTitle({ text: "US GDP - expenditure", titleStyle: { fontSize: 13 }, subtitleStyle: { fontSize: 10 } })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .editTitle({ subtitle: "2022 Q3, excluding trade. Source: BEA", offset: -13, gap: 1 });
}