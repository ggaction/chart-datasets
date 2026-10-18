// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 613, height: 142, margin: { left: 207, top: 5, right: 6, bottom: 37 } })
    .createData({ id: "data", values: data })
    .filterData({ id: "pointsData", field: "pointEstimate", noneOf: [null] })
    .createScatterPlot({
      x: { field: "pointEstimate", fieldType: "quantitative" },
      y: { field: "title", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({
      domain: [
        "Covid-19: four fifths of cases are asymptomatic, China figures indicate",
        "Covid-19: identifying and isolating asymptomatic people helped eliminate virus in Italian village",
        "Estimating the asymptomatic proportion of coronavirus disease 2019 (COVID-19) cases on board the Diamond Princess cruise ship, Yokohama, Japan, 2020",
        "Estimation of the asymptomatic ratio of novel coronavirus infections (COVID-19)",
        "Suppression of a SARS-CoV-2 outbreak in the Italian municipality of Vo'"
      ],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editPointMark({ shape: "square", fill: "#4c78a8" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(70 / Math.PI) })
    .createRuleMark({ id: "rulePlot", data: "data", missing: "skip" })
    .editRuleMark({ stroke: "black", strokeWidth: 1 })
    .encodeXRange({ target: "rulePlot", lower: "lowerBound", upper: "upperBound" })
    .encodeY({ target: "rulePlot", field: "title", fieldType: "ordinal" })
    .createGrid({ horizontal: false, vertical: { lineWidth: 1 } }).editVerticalGrid({ color: "#ddd" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-glyphs",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "Covid-19: four fifths of cases are asy…", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 172.296875 },
          { text: "Covid-19: identifying and isolating asy…", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 177.890625 },
          { text: "Estimating the asymptomatic proporti…", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 174.515625 },
          { text: "Estimation of the asymptomatic ratio o…", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 179.53125 },
          { text: "Suppression of a SARS-CoV-2 outbre…", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 177.328125 }
        ]
      }
    })
    .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
        },
        title: { text: "Asymptomatic ratio (as a percentage)", fontSize: 11, offset: 30 }
      })
      .editXAxisLine({ color: "#888" })
      .editXAxisTicks({ color: "#888" })
      .editXAxisTitle({ fontWeight: 700 })
      .createYAxis({
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [
              { value: "Covid-19: four fifths of cases are asymptomatic, China figures indicate", label: "Covid-19: four fifths of cases are asy…" },
              { value: "Covid-19: identifying and isolating asymptomatic people helped eliminate virus in Italian village", label: "Covid-19: identifying and isolating asy…" },
              { value: "Estimating the asymptomatic proportion of coronavirus disease 2019 (COVID-19) cases on board the Diamond Princess cruise ship, Yokohama, Japan, 2020", label: "Estimating the asymptomatic proporti…" },
              { value: "Estimation of the asymptomatic ratio of novel coronavirus infections (COVID-19)", label: "Estimation of the asymptomatic ratio o…" },
              { value: "Suppression of a SARS-CoV-2 outbreak in the Italian municipality of Vo'", label: "Suppression of a SARS-CoV-2 outbre…" }
            ]
          }
        },
        title: {
          text: "title",
          fontSize: 11,
          offset: 192.5,
          rotation: { value: -90, unit: "degrees" }
        }
      })
      .editYAxisLine({ color: "#888" })
      .editYAxisTicks({ color: "#888" })
      .editYAxisTitle({ fontWeight: 700 })
      ;
}