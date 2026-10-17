// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-5488e292a83e78ba
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const cats = [
    "ALGEBRA LINEAR I",
    "ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA",
    "CALCULO DIFERENCIAL E INTEGRAL I",
    "CALCULO DIFERENCIAL E INTEGRAL II",
    "ESTRUTURA DE DADOS",
    "ESTRUTURA DE DADOS E ALGORITMOS",
    "FUND DE MATEMATICA P/ C.DA COMPUTACAO I",
    "FUND DE MATEMATICA P/ C.DA COMPUTACAO II",
    "FUNDAMENTOS DE FÍSICA CLÁSSICA",
    "INTRODUÇÃO À PROBABILIDADE",
    "LAB.DE ESTRUTURA DE DADOS E ALGORITMOS",
    "LABORATORIO DE ESTRUTURA DE DADOS",
    "LABORATÓRIO DE PROGRAMAÇÃO I",
    "LABORATÓRIO DE PROGRAMAÇÃO II",
    "MATEMÁTICA DISCRETA",
    "PROBABILIDADE E ESTATÍSTICA",
    "PROGRAMAÇÃO I",
    "PROGRAMAÇÃO II",
    "PROJETO DE SOFTWARE",
    "TEORIA DA COMPUTAÇÃO"
  ];
  return chart()
    .createCanvas({
      width: 742,
      height: 311,
      margin: { left: 207, top: 24, right: 85, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dataNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createSummaryData({
      id: "pairedIntervals",
      groupBy: ["nome_disciplina"],
      aggregates: [
        { op: "min", field: "valueNum", as: "pairLo" },
        { op: "max", field: "valueNum", as: "pairHi" }
      ]
    })
    .createRuleMark({
      id: "sourceConnectors",
      stroke: "#000000",
      strokeWidth: 2
    })
    .encodeX({
      field: "pairLo",
      fieldType: "quantitative",
      scale: { domain: [0.37, 0.8], nice: false }
    })
    .encodeX2({
      field: "pairHi",
      fieldType: "quantitative"
    })
    .encodeY({
      field: "nome_disciplina",
      fieldType: "nominal",
      scale: { domain: ["ALGEBRA LINEAR I", "ALGEBRA VETORIAL E GEOMETRIA ANALÍTICA", "CALCULO DIFERENCIAL E INTEGRAL I", "CALCULO DIFERENCIAL E INTEGRAL II", "ESTRUTURA DE DADOS", "ESTRUTURA DE DADOS E ALGORITMOS", "FUND DE MATEMATICA P/ C.DA COMPUTACAO I", "FUND DE MATEMATICA P/ C.DA COMPUTACAO II", "FUNDAMENTOS DE FÍSICA CLÁSSICA", "INTRODUÇÃO À PROBABILIDADE", "LAB.DE ESTRUTURA DE DADOS E ALGORITMOS", "LABORATORIO DE ESTRUTURA DE DADOS", "LABORATÓRIO DE PROGRAMAÇÃO I", "LABORATÓRIO DE PROGRAMAÇÃO II", "MATEMÁTICA DISCRETA", "PROBABILIDADE E ESTATÍSTICA", "PROGRAMAÇÃO I", "PROGRAMAÇÃO II", "PROJETO DE SOFTWARE", "TEORIA DA COMPUTAÇÃO"] }
    })
    .createScatterPlot({
      data: "dataNum",
      x: { field: "valueNum", fieldType: "quantitative" },
      y: { field: "nome_disciplina", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({
      target: "scatterPlot",
      field: "sexo",
      scale: { domain: ["Feminino", "Masculino"], range: ["#d95f02", "#1b9e77"] }
    })
    .encodePointRadius({ target: "scatterPlot", value: 3.1622776601683795 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "Percentual de sucesso",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          offset: 27
        }
      },
      y: {
        line: false,
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
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
        title: {
          text: "Disciplinas",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          offset: 192,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createLegend({
      title: "Gênero",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .createTitle({
      text: "Taxa de sucesso das top 20 disciplinas",
      offset: -9,
      titleStyle: { fontSize: 15, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center" });
}