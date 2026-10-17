// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 bar ranges; doc-33fa1aba30cffb4f edit-selected-labels
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 410, margin: { left: 74, top: 30, right: 5, bottom: 80 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .filterData({ id: "confirmadosRows", field: "classificacao", oneOf: ["confirmados"] })
    .createComputedData({ id: "rowsNum", as: "total_num", expression: { op: "toNumber", operand: { field: "total" } } })
    .createStackData({
      category: "faixa_etaria",
      group: "data",
      value: "total_num"
    })
    .createBarPlot({
      x: "faixa_etaria",
      y: { lower: "total_num_start", upper: "total_num_end" },
      guides: false
    })
    .editXScale({ domain: ["00 a 09", "00 a 19", "10 a 19", "20 a 29", "30 a 39", "40 a 49", "50 a 59", "60 a 69", "70 a 79", "80 ou mais"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 220000], zero: true })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#003366", stroke: "none", strokeWidth: 0 })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-y-glyphs",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 6.6875 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 36.703125 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 36.703125 },
          { text: "60,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 36.703125 },
          { text: "80,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 36.703125 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "120,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "140,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "160,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "180,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 },
          { text: "220,000", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 43.390625 }
        ]
      }
    })
    // DOCS: doc-fc11e9fb291905d1 createBarPlot; doc-33fa1aba30cffb4f edit-selected-labels
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" } } },
      title: { text: "Faixa Et\u00e1ria", fontSize: 14, fontWeight: 700, offset: 72 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 12, offset: 7, format: "," },
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000]
      },
      title: { text: "N\u00famero de Casos", fontSize: 14, fontWeight: 700, offset: 58, rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({ text: "Confirmados por Faixa Et\u00e1ria", align: "center", titleStyle: { fontSize: 14, fontWeight: 700 } })
    .editTitle({ offset: -2 });
}
