import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-333a87e52954985d, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 319, height: 440, margin: { left: 61, top: 60, right: 98, bottom: 80 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .filterData({ id: "d_mortos", field: "classificacao", predicate: { op: "eq", value: "mortos" } })
    .filterData({ id: "d_latest", field: "ultima_atualizacao", predicate: { op: "eq", value: "True" } })
    .createFoldData({ id: "d_fold_total", source: "d_latest", fields: ["total"] })
    .createComputedData({ id: "d_label_total", as: "key_label", expression: { constant: "Total" } })
    .createComputedData({ id: "d_num_total", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .createFoldData({ id: "d_fold_masculino", source: "d_latest", fields: ["masculino"] })
    .createComputedData({ id: "d_label_masculino", as: "key_label", expression: { constant: "Masculino" } })
    .createComputedData({ id: "d_num_masculino", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ id: "layer_1", x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", target: "layer_1", layout: "overlay" })
    .encodeBarWidth({ target: "layer_1", band: 1 })
    .createFoldData({ id: "d_fold_feminino", source: "d_latest", fields: ["feminino"] })
    .createComputedData({ id: "d_label_feminino", as: "key_label", expression: { constant: "Feminino" } })
    .createComputedData({ id: "d_num_feminino", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createBarPlot({ id: "layer_2", x: { field: "faixa_etaria", fieldType: "nominal" }, y: "value_num", guides: false })
    .encodeColor({ field: "key_label", target: "layer_2", layout: "overlay" })
    .encodeBarWidth({ target: "layer_2", band: 1 })
    .editXScale({ domain: ["00 a 19", "20 a 29", "30 a 39", "40 a 49", "50 a 59", "60 a 69", "70 a 79", "80 ou mais"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 550] })
    .editColorScale({ domain: ["Total", "Masculino", "Feminino"], range: ["#e60000", "#1f77b4", "#dc56b4"] })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" }, overlap: "allow" }
      },
      title: { text: "Faixa Etária", fontSize: 14, offset: 66.7847900390625 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" }, offset: 38.521484375 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { format: ",.0f" } })
    .editYAxisTitle({ fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "top",
        target: "barPlot",
        title: "Selecione a opção",
        titleStyle: { fontSize: 16, fontWeight: 700 },
        labels: { fontSize: 16 },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    });
}