import { chart } from "ggaction";
import data from "./data.json";

const rows = data;

export function buildChart() {
  return chart()
    .createCanvas({ width: 742, height: 311, margin: { left: 207, top: 24, right: 85, bottom: 37 } })
    .createData({ id: "main", values: rows })
    .createComputedData({ id: "mainNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    // DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
    .createSummaryData({
      id: "pairedIntervals",
      groupBy: ["nome_disciplina"],
      aggregates: [
        { op: "min", field: "valueNum", as: "pairLo" },
        { op: "max", field: "valueNum", as: "pairHi" }
      ]
    })
    .createRuleMark({ id: "sourceConnectors", stroke: "#000000", strokeWidth: 2 })
    .encodeX({ field: "pairLo", fieldType: "quantitative", scale: { type: "linear", domain: [4.8, 8], nice: false } })
    .encodeX2({ field: "pairHi", fieldType: "quantitative" })
    .encodeY({ field: "nome_disciplina", fieldType: "nominal", scale: { type: "point", padding: 0.5, domain: ["ALGEBRA LINEAR I", "ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA", "CALCULO DIFERENCIAL E INTEGRAL I", "CALCULO DIFERENCIAL E INTEGRAL II", "ESTRUTURA DE DADOS", "ESTRUTURA DE DADOS E ALGORITMOS", "FUND DE MATEMATICA P/ C.DA COMPUTACAO I", "FUND DE MATEMATICA P/ C.DA COMPUTACAO II", "FUNDAMENTOS DE FÍSICA CLÁSSICA", "INTRODUÇÃO À PROBABILIDADE", "LAB.DE ESTRUTURA DE DADOS E ALGORITMOS", "LABORATORIO DE ESTRUTURA DE DADOS", "LABORATÓRIO DE PROGRAMAÇÃO I", "LABORATÓRIO DE PROGRAMAÇÃO II", "MATEMÁTICA DISCRETA", "PROBABILIDADE E ESTATÍSTICA", "PROGRAMAÇÃO I", "PROGRAMAÇÃO II", "PROJETO DE SOFTWARE", "TEORIA DA COMPUTAÇÃO"] } })
    .createScatterPlot({
      data: "mainNum",
      x: { field: "valueNum", fieldType: "quantitative" },
      y: { field: "nome_disciplina", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "mediana", scale: { domain: ["Feminino", "Masculino"], range: ["#d95f02", "#1b9e77"] } })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(40) / 2 })
    .createVerticalGrid({
      values: [4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8, 7, 7.2, 7.4, 7.6, 7.8, 8],
    })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
          values: [4.8, 5, 5.2, 5.4, 5.6, 5.8, 6, 6.2, 6.4, 6.6, 6.8, 7, 7.2, 7.4, 7.6, 7.8, 8],
          ticks: {},
          labels: { format: ".1f", fontSize: 10, offset: 7 }
        },
        title: { text: "Mediana das notas", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: false,
      ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            offset: 5,
            fontSize: 10,
            labelMap: [
              { value: "ALGEBRA LINEAR I", label: "ALGEBRA LINEAR I" },
              { value: "ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA", label: "ALGEBRA VETORIAL E GEOMETRI…" },
              { value: "CALCULO DIFERENCIAL E INTEGRAL I", label: "CALCULO DIFERENCIAL E INTEGR…" },
              { value: "CALCULO DIFERENCIAL E INTEGRAL II", label: "CALCULO DIFERENCIAL E INTEGR…" },
              { value: "ESTRUTURA DE DADOS", label: "ESTRUTURA DE DADOS" },
              { value: "ESTRUTURA DE DADOS E ALGORITMOS", label: "ESTRUTURA DE DADOS E ALGORI…" },
              { value: "FUND DE MATEMATICA P/ C.DA COMPUTACAO I", label: "FUND DE MATEMATICA P/ C.DA CO…" },
              { value: "FUND DE MATEMATICA P/ C.DA COMPUTACAO II", label: "FUND DE MATEMATICA P/ C.DA CO…" },
              { value: "FUNDAMENTOS DE FÍSICA CLÁSSICA", label: "FUNDAMENTOS DE FÍSICA CLÁSSI…" },
              { value: "INTRODUÇÃO À PROBABILIDADE", label: "INTRODUÇÃO À PROBABILIDADE" },
              { value: "LAB.DE ESTRUTURA DE DADOS E ALGORITMOS", label: "LAB.DE ESTRUTURA DE DADOS E …" },
              { value: "LABORATORIO DE ESTRUTURA DE DADOS", label: "LABORATORIO DE ESTRUTURA DE…" },
              { value: "LABORATÓRIO DE PROGRAMAÇÃO I", label: "LABORATÓRIO DE PROGRAMAÇÃO I" },
              { value: "LABORATÓRIO DE PROGRAMAÇÃO II", label: "LABORATÓRIO DE PROGRAMAÇÃO II" },
              { value: "MATEMÁTICA DISCRETA", label: "MATEMÁTICA DISCRETA" },
              { value: "PROBABILIDADE E ESTATÍSTICA", label: "PROBABILIDADE E ESTATÍSTICA" },
              { value: "PROGRAMAÇÃO I", label: "PROGRAMAÇÃO I" },
              { value: "PROGRAMAÇÃO II", label: "PROGRAMAÇÃO II" },
              { value: "PROJETO DE SOFTWARE", label: "PROJETO DE SOFTWARE" },
              { value: "TEORIA DA COMPUTAÇÃO", label: "TEORIA DA COMPUTAÇÃO" }
            ]
          }
        },
        title: { text: "Disciplinas", fontSize: 11, fontWeight: 700, offset: 192, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({ ticks: false })
    .createLegend({
      title: "Sexo",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegendSymbols({ target: "scatterPlot", symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .createTitle({
      text: "Desempenho das top 20 disciplinas",
      offset: -10.484375,
      titleStyle: { fontSize: 15, fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "center" });
}