import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-9f1e9ae3b82a4178

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 363, margin: { left: 5, top: 58, right: 5, bottom: 5 } })
    .createData({ id: "raw", values: data })
    .filterData({ id: "confirmed", field: "classificacao", oneOf: ["confirmados"] })
    .filterData({ id: "latest", field: "ultima_atualizacao", oneOf: ["True"] })
    .createFoldData({ id: "folded", fields: ["masculino", "feminino"] })
    .createComputedData({ id: "labeled", as: "sexLabel", expression: { op: "if", condition: { op: "eq", left: { field: "key" }, right: { constant: "masculino" } }, then: { constant: "Masculino" }, else: { constant: "Feminino" } } })
    .createComputedData({ id: "numeric", as: "numericValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createSummaryData({ id: "agg", groupBy: ["sexLabel"], aggregates: [{ op: "sum", field: "numericValue", as: "sumValue" }] })
    .createPiePlot({ category: "sexLabel", value: "sumValue", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 30 }, stroke: "#fff", strokeWidth: 1 })
    .encodeR({ field: "sumValue", scale: { domain: [0, 41835] } })
    .editRScale({ type: "sqrt", range: [0, 80] })
    .editThetaScale({ reverse: true })
    .editColorScale({ domain: ["Masculino", "Feminino"], range: ["#1f77b4", "#dc56b4"] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "polar-source-metrics", measurements: [{ text: "34878", fontFamily: "sans-serif", fontSize: 20, fontWeight: 400, fontStyle: "normal", width: 55.625 }, { text: "41835", fontFamily: "sans-serif", fontSize: 20, fontWeight: 400, fontStyle: "normal", width: 55.625 }] } })
    .createMarkLabels({ fontSize: 20, inheritColor: "fill", format: ".0f" })
    .editMarkLabelPlacement({ target: "piePlot-labels", placement: { anchor: "outsideEnd", gap: 1.0495011658966718, overflow: "allow" } })
    .createLegend({ position: "top", titleStyle: { fontSize: 14 }, labels: { fontSize: 16 } })
    .editLegend({ direction: "horizontal" })
    .editLegendTitle({ title: "Sexo", fontWeight: 700 })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", size: 5, stroke: "#fff", strokeWidth: 1.5 }] } });
}