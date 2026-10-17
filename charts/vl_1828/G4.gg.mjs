// DOCS: doc-0a1e48878a814143, doc-b30469a9489ccd34, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 410, margin: { left: 67, top: 30, right: 5, bottom: 80 } })
    .createData({ values: data })
    .filterData({ id: "mortos", field: "classificacao", oneOf: ["mortos"] })
    .createComputedData({ id: "mortosNum", as: "totalN", expression: { op: "toNumber", operand: { field: "total" } } })
    .createStackData({ category: "faixa_etaria", group: "data", value: "totalN" })
    .createBarPlot({
      x: { field: "faixa_etaria", fieldType: "nominal" },
      y: { lower: "totalN_start", upper: "totalN_end", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["00 a 19", "20 a 29", "30 a 39", "40 a 49", "50 a 59", "60 a 69", "70 a 79", "80 ou mais"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ zero: true, domain: [0, 12000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#e60000" })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" } } },
      title: { text: "Faixa Et\u00e1ria", fontSize: 14, fontWeight: 700, offset: 66 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 12, offset: 7, format: ",.0f" } },
      title: { text: "N\u00famero de Casos", fontSize: 14, fontWeight: 700, offset: 55, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({ text: "Mortes por Faixa Et\u00e1ria", offset: 0, titleStyle: { fontSize: 14, fontWeight: 700 } })
    .editTitle({ align: "center" });
}
