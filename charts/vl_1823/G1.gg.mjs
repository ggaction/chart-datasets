// DOCS: doc-cc4024999766e88b doc-9a0f2eeed4bc9b31 doc-7182bd642b5c2e5e
// GAP: layer 1 text placement (per-row mid-angle theta + variable sqrt radius + radiusOffset 25) has no public createTextMark/encoder expression; emitted with data/typography/fill as delivered, position not inventable.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 363, margin: { left: 5, top: 58, right: 5, bottom: 5 } })
    .createData({ id: "source", values: data })
    .filterData({ id: "mortos", field: "classificacao", oneOf: ["mortos"] })
    .filterData({ id: "latest", field: "ultima_atualizacao", oneOf: ["True"] })
    .createFoldData({ id: "folded", fields: ["masculino", "feminino"] })
    .createComputedData({ id: "sexLabel", as: "sexLabel", expression: { op: "if", condition: { op: "eq", left: { field: "key" }, right: { constant: "masculino" } }, then: { constant: "Masculino" }, else: { constant: "Feminino" } } })
    .createComputedData({ id: "numericValue", as: "numericValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createSummaryData({ id: "sumValue", groupBy: ["sexLabel"], aggregates: [{ op: "sum", field: "numericValue", as: "sumValue" }] })
    .createPiePlot({ category: "sexLabel", value: "sumValue", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 40 }, stroke: "#fff", strokeWidth: 1 })
    .encodeR({ field: "sumValue", scale: { type: "sqrt", domain: [0, 999], range: [20, 100] } })
    .editThetaScale({ reverse: true })
    .editColorScale({ target: "piePlot", domain: ["Masculino", "Feminino"], range: ["#1f77b4", "#dc56b4"] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "polar-source-metrics", measurements: [{ "text": "999", "fontFamily": "sans-serif", "fontSize": 30, "fontWeight": 400, "fontStyle": "normal", "width": 50.0625 }, { "text": "728", "fontFamily": "sans-serif", "fontSize": 30, "fontWeight": 400, "fontStyle": "normal", "width": 50.0625 }] } })
    .createMarkLabels({ fontSize: 30, inheritColor: "fill", format: ".0f" })
    .editMarkLabelPlacement({ target: "piePlot-labels", placement: { anchor: "outsideEnd", gap: 0, overflow: "allow" } })
    .createGuides({ axes: false, grid: false, legend: { position: "top", direction: "horizontal", title: "Sexo", titleStyle: { fontSize: 14, fontWeight: 700 }, labels: { fontSize: 16 }, symbol: { layers: [{ type: "point", size: 5, stroke: "#fff", strokeWidth: 1.5 }] } } });
}