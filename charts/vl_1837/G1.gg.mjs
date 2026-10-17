import { chart } from "ggaction"; // DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4, doc-fc11e9fb291905d1
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 749, height: 261, margin: { left: 44, top: 24, right: 5, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "periodoNum",
      as: "periodo_num",
      expression: { op: "toNumber", operand: { field: "periodo_ingresso" } }
    })
    .filterData({ id: "periodo2000", field: "periodo_num", range: { min: 2000.1 } })
    .createSummaryData({
      id: "idadeCount",
      groupBy: "idade_ingresso",
      aggregates: [{ op: "count", as: "count_idade" }]
    })
    .createBarPlot({
      x: {
        field: "idade_ingresso",
        fieldType: "ordinal",
        scale: {
          domain: ["16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","32","33","34","35","36","39"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { field: "count_idade", fieldType: "quantitative", scale: { domain: [0, 160] } },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#F1C40F" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
          },
          title: { text: "Idade de ingresso", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 50, 100, 150],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
          },
          title: { text: "Quantidade", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 32.6845703125, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: { color: "#ddd" } }
    })
    .createTitle({
      text: "Idade de ingresso das ingressantes, de 2000.1 até 2020.1",
      offset: -9,
      titleStyle: { fontSize: 15, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ align: "center" });
}