import { chart } from "ggaction";
// DOCS: doc-6c2c08869091f6a0
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 930, height: 311, margin: { left: 58, top: 24, right: 172, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createSummaryData({
      id: "counts",
      groupBy: ["forma_reserva_vagas", "periodo_ingresso"],
      aggregates: [{ op: "count", as: "count_cota" }]
    })
    .createSortedData({
      id: "sortedCounts",
      source: "counts",
      sortBy: [{ field: "forma_reserva_vagas", order: "ascending" }]
    })
    .createBarPlot({
      x: { field: "count_cota", fieldType: "quantitative", stack: "zero" },
      y: "periodo_ingresso",
      guides: false
    })
    .encodeColor({
      field: "forma_reserva_vagas",
      layout: "stack"
    })
    .editColorScale({
      target: "barPlot",
      domain: ["Escola", "Escola Cor", "Escola Cor Deficiencia", "Escola Renda", "Escola Renda Cor", "Escola Renda Cor Deficiencia", "Escola Renda Deficiencia"],
      palette: "set2"
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 13] })
    .editYScale({
      domain: ["2020.1", "2019.2", "2019.1", "2018.2", "2018.1", "2017.2", "2017.1", "2016.2", "2016.1", "2015.2", "2015.1", "2014.2", "2014.1", "2013.2", "2013.1"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createTitle({
      text: "Tipos de cota utilizadas pelas ingressantes",
      titleStyle: { fontSize: 15 },
      offset: -9
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Quantidade de vagas utilizadas", fontSize: 11, offset: 27 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Periodo", fontSize: 11, offset: 46, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: false,
      vertical: { values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }
    })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ title: "Cota", titleStyle: { fontSize: 11 }, labels: { fontSize: 10, fontFamily: "sans-serif" } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } })
    .editLegendTitle({ fontWeight: 700 });
}