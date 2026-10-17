// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 329, height: 430, margin: { left: 58, top: 17, right: 131, bottom: 113 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .createComputedData({ id: "locationKey", as: "locationKey", expression: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "" } }, then: { constant: "Não Identificado" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "SAMU" } }, then: { constant: "SAMU" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "UPA" } }, then: { constant: "UPA" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "hospital privado" } }, then: { constant: "Hospital Privado" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "hospital público" } }, then: { constant: "Hospital Público" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "maternidade pública" } }, then: { constant: "Maternidade Pública" }, else: { op: "if", condition: { op: "eq", left: { field: "localDoObito" }, right: { constant: "residência" } }, then: { constant: "Residência" }, else: { field: "localDoObito" } } } } } } } } } )
    .createSummaryData({ id: "counts", groupBy: "locationKey", aggregates: [{ op: "count", as: "count" }] })
    .createBarPlot({ x: "locationKey", y: { field: "count" }, guides: false })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .encodeBarWidth({ pixels: 30 })
    .editBarMark({ cornerRadiusTopLeft: 4, cornerRadiusTopRight: 4, stroke: false })
    .encodeOpacity({ value: 0.7 })
    .encodeColor({ field: "locationKey", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: ["SAMU", "Não Identificado", "UPA", "Hospital Privado", "Hospital Público", "Maternidade Pública", "Residência"], range: ["#FE0312", "#FFBD00", "#FF5400", "#FF0054", "#9E0059", "#390099", "#000000"] })
    .editXScale({ domain: ["Hospital Privado", "Hospital Público", "Maternidade Pública", "Não Identificado", "Residência", "SAMU", "UPA"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 800], nice: false })
    .createTextMark({ data: "counts" })
    .encodeX({ target: "text", field: "locationKey", fieldType: "nominal" })
    .encodeY({ target: "text", field: "count", fieldType: "quantitative" })
    .encodeText({ target: "text", field: "count" })
    .editTextMark({ fontSize: 15, align: "center" })
    .editTextMark({ baseline: "middle", dy: -10 })
    .editTextMark({ fill: "black" })
    .createXAxis({ ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" }, overlap: "allow" } }, title: { text: "key", fontSize: 12, offset: 100.63592529296875 } })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({ ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 12, offset: 7 } }, title: { text: "Quantidade de óbitos", fontSize: 12, offset: 37.521484375, rotation: { value: -90, unit: "degrees" } } })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    
    .createLegend({ title: "key", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.7 } });
}