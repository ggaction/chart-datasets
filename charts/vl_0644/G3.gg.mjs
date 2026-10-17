// DOCS: doc-cc4024999766e88b, doc-18627fd264d621fc, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 473, height: 352, margin: { left: 5, top: 47, right: 168, bottom: 5 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "computed", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "Number", oneOf: ["4", "5", "6", "10", "11", "12", "13", "24", "25", "26"] })
    .createPiePlot({ category: "Item", value: "ValueNum", guides: false })
    .encodeColor({ field: "Item", fieldType: "nominal" })
    .editColorScale({ type: "ordinal", domain: ["Durable goods", "Nondurable goods", "Services", "Structures", "Equipment", "Intellectual property products", "Residential", "National defense", "Nondefense", "State and local"], range: ["rgb(128,0,0)", "rgb(128,0,0)", "rgb(128,0,0)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(214,214,206)", "rgb(214,214,206)", "rgb(214,214,206)"] })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, padAngle: 1.1459155902616465, stroke: false })
    .createLegend({ position: "right", title: false, labels: { fontSize: 10 } })
    .createTitle({ text: "US GDP - expenditure", offset: -13, titleStyle: { fontSize: 13, fontFamily: "sans-serif" } })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitle: "2022 Q3, excluding trade. Source: BEA", gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" } });
}
