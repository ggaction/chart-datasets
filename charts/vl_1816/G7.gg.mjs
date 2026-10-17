import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-6c2c08869091f6a0

export function buildChart() {
  return chart()
    .createCanvas({ width: 325, height: 440, margin: { left: 67, top: 60, right: 78, bottom: 80 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .filterData({ id: "d_conf", field: "classificacao", oneOf: ["confirmados"] })
    .filterData({ id: "d_upd", field: "ultima_atualizacao", oneOf: ["True"] })
    .createFoldData({ id: "d_fold_total", source: "d_upd", fields: ["total"] })
    .createComputedData({ id: "d_key_total", as: "key_label", expression: { constant: "Total" } })
    .createComputedData({ id: "d_val_total", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", layout: "overlay", target: "barPlot" })
    .encodeBarWidth({ band: 1, target: "barPlot" })
    .createFoldData({ id: "d_fold_masculino", source: "d_upd", fields: ["masculino"] })
    .createComputedData({ id: "d_key_masculino", as: "key_label", expression: { constant: "Masculino" } })
    .createComputedData({ id: "d_val_masculino", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ id: "layer_1", x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", layout: "overlay", target: "layer_1" })
    .encodeBarWidth({ band: 1, target: "layer_1" })
    .createFoldData({ id: "d_fold_feminino", source: "d_upd", fields: ["feminino"] })
    .createComputedData({ id: "d_key_feminino", as: "key_label", expression: { constant: "Feminino" } })
    .createComputedData({ id: "d_val_feminino", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ id: "layer_2", x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", layout: "overlay", target: "layer_2" })
    .encodeBarWidth({ band: 1, target: "layer_2" })
    .editXScale({ domain: ["00 a 09", "10 a 19", "20 a 29", "30 a 39", "40 a 49", "50 a 59", "60 a 69", "70 a 79", "80 ou mais"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 20000] })
    .editColorScale({ domain: ["Total", "Masculino", "Feminino"], range: ["#003366", "#1f77b4", "#dc56b4"] })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" }, overlap: "allow" }
      },
      title: { text: "Faixa Etária", fontSize: 14, offset: 66.7847900390625 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" }, offset: 55.203125 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ format: ",.0f" })
    .editYAxisTitle({ fontWeight: "bold" })
    .createLegend({ position: "top", titleStyle: { fontSize: 16 }, labels: { fontSize: 16 } })
    .editLegend({ title: "Selecione a opção" })
    .editLegendTitle({ fontWeight: 700 })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } })
    ;
}