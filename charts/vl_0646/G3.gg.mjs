// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 250, height: 374, margin: { left: 25, top: 89, right: 25, bottom: 5 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "Item", predicate: { op: "neq", value: "Net exports" } })
    .createTitle({ text: "US GDP - expenditure", alongOffset: -20, titleStyle: { fontSize: 13 } })
    .editTitle({ offset: -13, gap: 3 }).editTitle({ subtitle: "2022 Q3, excluding trade. Source: BEA", titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .createPiePlot({ category: "Item", value: "ValueNum", guides: false })
    .encodeColor({ field: "Item", scale: { id: "color-scale" } })
    .editColorScale({ domain: ["Consumption", "Government", "Investment"], range: ["rgb(128,0,0)", "rgb(118,118,118)", "rgb(214,214,206)"] })
    .editThetaScale({ domain: ["Consumption", "Government", "Investment"], range: [0, 360] })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, padAngle: 1.1459155902616465, stroke: false })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 }, overflow: "allow" } })
    .createGuides({ axes: false, grid: false, legend: { position: "top", columns: 2, title: false, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" } } });
}