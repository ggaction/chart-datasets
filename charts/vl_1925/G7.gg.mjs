import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-ed5155a9b2cc3bf8

export function buildChart() {
  return chart()
    .createCanvas({ width: 749, height: 464, margin: { left: 58, top: 27, right: 91, bottom: 37 } })
    .editCanvas({ background: "#FcFdFd" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-actual-font-metrics", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.1474609375 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.1474609375 },
      { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.1474609375 },
      { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.1474609375 },
      { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "1,200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "1,400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "1,600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "1,800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "2,200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "2,400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
      { text: "Cases", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.41455078125 },
      { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
      { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "35,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "45,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "55,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
      { text: "Deaths", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 36.67919921875 },
      { text: "Austria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.123046875 },
      { text: "France", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.123046875 },
      { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.123046875 },
      { text: "Ireland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.576171875 },
      { text: "Italy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.33984375 },
      { text: "Portugal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.24609375 },
      { text: "Spain", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.576171875 },
      { text: "Switzerland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.689453125 },
      { text: "UK", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.8916015625 },
      { text: "country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.3369140625 },
      { text: "COVID-19 - CASES AND DEATHS, WITH COUNTRY SELECTOR", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 386.19140625 }
    ] } })
    .createTitle({ text: "COVID-19 - CASES AND DEATHS, WITH COUNTRY SELECTOR", titleStyle: { fontSize: 13 }, offset: -10.953125 })
    .editTitle({ alongOffset: -52.5859375, titleStyle: { fontWeight: 700, color: "black" } })
    .createData({ values: data })
    .filterData({ id: "sourceCountries", field: "country", oneOf: ["UK", "France", "Germany", "Portugal", "Spain", "Italy", "Ireland", "Austria", "Switzerland"] })
    .createComputedData({ id: "typedX", as: "sourceX", expression: { op: "if", condition: { op: "eq", left: { field: "cases_cml" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "cases_cml" } } } })
    .createComputedData({ id: "typedY", as: "sourceY", expression: { op: "if", condition: { op: "eq", left: { field: "deaths_cml" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "deaths_cml" } } } })
    .createScatterPlot({ x: { field: "sourceX", fieldType: "quantitative" }, y: { field: "sourceY", fieldType: "quantitative" }, guides: false })
    .editPointMark({ stroke: "none", strokeWidth: 0, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .encodeColor({ field: "country", fieldType: "nominal" })
    .editXScale({ domain: [0, 2400000] })
    .editYScale({ domain: [0, 60000] })
    .editColorScale({ domain: ["Austria", "France", "Germany", "Ireland", "Italy", "Portugal", "Spain", "Switzerland", "UK"], range: ["rgb(23, 12, 59)", "rgb(66, 10, 104)", "rgb(107, 23, 110)", "rgb(147, 38, 103)", "rgb(187, 55, 85)", "rgb(221, 81, 58)", "rgb(243, 119, 26)", "rgb(252, 165, 10)", "rgb(246, 214, 69)"] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000, 1600000, 1800000, 2000000, 2200000, 2400000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10, offset: 7, flush: true,
          labelMap: [
            { value: 0, label: "0" }, { value: 200000, label: "200,000" }, { value: 400000, label: "400,000" },
            { value: 600000, label: "600,000" }, { value: 800000, label: "800,000" }, { value: 1000000, label: "1,000,000" },
            { value: 1200000, label: "1,200,000" }, { value: 1400000, label: "1,400,000" }, { value: 1600000, label: "1,600,000" },
            { value: 1800000, label: "1,800,000" }, { value: 2000000, label: "2,000,000" }, { value: 2200000, label: "2,200,000" },
            { value: 2400000, label: "" }
          ]
        }
      },
      title: { text: "Cases", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Deaths", fontSize: 11, offset: 46.0078125, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ labelMap: [{ value: 0, label: "0" }, { value: 5000, label: "5,000" }, { value: 10000, label: "10,000" }, { value: 15000, label: "15,000" }, { value: 20000, label: "20,000" }, { value: 25000, label: "25,000" }, { value: 30000, label: "30,000" }, { value: 35000, label: "35,000" }, { value: 40000, label: "40,000" }, { value: 45000, label: "45,000" }, { value: 50000, label: "50,000" }, { value: 55000, label: "55,000" }, { value: 60000, label: "60,000" }], color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })

    .createGuides({
      axes: false, grid: false,
      legend: {
        position: "right", channels: ["color"],
        title: "country", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, stroke: "none", strokeWidth: 0 }] }
      }
    });
}