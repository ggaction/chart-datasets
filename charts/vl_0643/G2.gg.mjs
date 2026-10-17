import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31
export function buildChart() {
  return chart()
    .createCanvas({ width: 473, height: 352, margin: { left: 5, top: 47, right: 168, bottom: 5 } })
    .createData({ id: "source", values: data })
    .createComputedData({ id: "sourceNum", as: "Number_n", expression: { op: "toNumber", operand: { field: "Number" } } })
    .filterData({ id: "filtered", field: "Number_n", oneOf: [4, 5, 6, 10, 11, 12, 13, 24, 25, 26] })
    .createComputedData({ id: "filteredNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTitle({ text: "US GDP - expenditure", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -13 })
    .editTitle({ subtitle: "2022 Q3, excluding trade. Source: BEA", subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" }, gap: 3 })
    .createPiePlot({
      category: {
        field: "Item",
        scale: { domain: ["Services", "Nondefense", "Nondurable goods", "Durable goods", "Intellectual property products", "Residential", "Structures", "Equipment", "State and local", "National defense"] }
      },
      value: "valueNum",
      guides: false
    })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 120 } } })
    .editArcMark({ innerRadius: { unit: "px", value: 60 }, padAngle: 1.1459155902616465, stroke: false })
    .encodeColor({ field: "Item", fieldType: "nominal" })
    .editColorScale({ type: "ordinal", domain: ["Services", "Nondefense", "Nondurable goods", "Durable goods", "Intellectual property products", "Residential", "Structures", "Equipment", "State and local", "National defense"], range: ["rgb(128,0,0)", "rgb(128,0,0)", "rgb(128,0,0)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(118,118,118)", "rgb(214,214,206)", "rgb(214,214,206)", "rgb(214,214,206)"] })
    .createGuides({ axes: false,
  grid: false, legend: { channels: ["color"], title: false, position: "right", symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }, labels: { fontSize: 10 } } });
}
