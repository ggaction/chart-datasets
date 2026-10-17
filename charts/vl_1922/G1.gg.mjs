import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a,doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({
      width: 739,
      height: 464,
      margin: { left: 58, top: 27, right: 81, bottom: 37 }
    })
    .editCanvas({ background: "#FcFdFd" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.1474609375 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.4873046875 },
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
          { text: "France", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.123046875 },
          { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.123046875 },
          { text: "Italy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.33984375 },
          { text: "Portugal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.24609375 },
          { text: "Spain", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.576171875 },
          { text: "UK", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.8916015625 },
          { text: "country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.3369140625 },
          { text: "COVID-19 - CASES AND DEATHS", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 204.1787109375 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({
      id: "sourceCountries",
      field: "country",
      oneOf: ["UK", "France", "Germany", "Portugal", "Spain", "Italy"]
    })
    .createComputedData({
      id: "typedX",
      as: "sourceX",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "cases_cml" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "cases_cml" } }
      }
    })
    .createComputedData({
      id: "typedY",
      as: "sourceY",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "deaths_cml" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "deaths_cml" } }
      }
    })
    .createScatterPlot({ x: "sourceX", y: "sourceY", guides: false })
    .encodeStroke({
      field: "country",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["France", "Germany", "Italy", "Portugal", "Spain", "UK"],
        range: [
          "rgb(40, 11, 84)",
          "rgb(101, 21, 110)",
          "rgb(159, 42, 99)",
          "rgb(212, 72, 67)",
          "rgb(245, 125, 21)",
          "rgb(251, 193, 39)"
        ]
      }
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.5 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editXScale({ domain: [0, 2400000] })
    .editYScale({ domain: [0, 60000] })
    .createGrid({
      vertical: { color: "#ddd", values: [0, 500000, 1000000, 1500000, 2000000] },
      horizontal: {
        color: "#ddd",
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 500000, 1000000, 1500000, 2000000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 7,
            flush: true,
            labelMap: [
              { value: 0, label: "0" },
              { value: 500000, label: "500,000" },
              { value: 1000000, label: "1,000,000" },
              { value: 1500000, label: "1,500,000" },
              { value: 2000000, label: "2,000,000" }
            ]
          }
        },
        title: { text: "Cases", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 7,
            labelMap: [
              { value: 0, label: "0" },
              { value: 5000, label: "5,000" },
              { value: 10000, label: "10,000" },
              { value: 15000, label: "15,000" },
              { value: 20000, label: "20,000" },
              { value: 25000, label: "25,000" },
              { value: 30000, label: "30,000" },
              { value: 35000, label: "35,000" },
              { value: 40000, label: "40,000" },
              { value: 45000, label: "45,000" },
              { value: 50000, label: "50,000" },
              { value: 55000, label: "55,000" },
              { value: 60000, label: "60,000" }
            ]
          }
        },
        title: { text: "Deaths", fontSize: 11, fontWeight: 700, color: "black", offset: 46.0078125 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["stroke"],
        title: "country",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: {
          layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }]
        }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.5 } })
    .createTitle({
      text: "COVID-19 - CASES AND DEATHS",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    })
    .editTitle({ alongOffset: -52.5859375 });
}