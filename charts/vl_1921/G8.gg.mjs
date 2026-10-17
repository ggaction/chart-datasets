import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({
      width: 741,
      height: 464,
      margin: { left: 58, top: 27, right: 83, bottom: 37 }
    })
    .editCanvas({ background: "#FcFdFd" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24609375 },
          { text: "February", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 40.0146484375 },
          { text: "March", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.783203125 },
          { text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0048828125 },
          { text: "May", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.8916015625 },
          { text: "June", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.6845703125 },
          { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.783203125 },
          { text: "August", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.1328125 },
          { text: "September", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 48.916015625 },
          { text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.5712890625 },
          { text: "November", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.1279296875 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84228515625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
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
          { text: "65,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.5859375 },
          { text: "Cases", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.41455078125 },
          { text: "France", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.123046875 },
          { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.123046875 },
          { text: "Portugal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.24609375 },
          { text: "UK", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.8916015625 },
          { text: "country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 40.3369140625 },
          { text: "COVID-19 - LIVE DATA TRACKER", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 205.3720703125 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({
      id: "sourceCountries",
      field: "country",
      oneOf: ["UK", "France", "Germany", "Portugal"]
    })
    .createComputedData({
      id: "typedX",
      as: "sourceX",
      expression: { op: "parseTime", operand: { field: "date2" }, format: "%Y-%m-%d" }
    })
    .createComputedData({
      id: "typedY",
      as: "sourceY",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "cases_ma7" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "cases_ma7" } }
      }
    })
    .createLinePlot({
      x: { field: "sourceX", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "sourceY", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "country", palette: "inferno" })
    .editColorScale({
      domain: ["France", "Germany", "Portugal", "UK"],
      range: ["rgb(66, 10, 104)", "rgb(147, 38, 103)", "rgb(221, 81, 58)", "rgb(252, 165, 10)"]
    })
    .editXScale({ domain: [1577750400000, 1606694400000], nice: false })
    .editYScale({ domain: [0, 65000] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1577836800000, 1580515200000, 1583020800000, 1585699200000, 1588291200000, 1590969600000, 1593561600000, 1596240000000, 1598918400000, 1601510400000, 1604188800000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1577836800000, label: "2020" },
            { value: 1580515200000, label: "February" },
            { value: 1583020800000, label: "March" },
            { value: 1585699200000, label: "April" },
            { value: 1588291200000, label: "May" },
            { value: 1590969600000, label: "June" },
            { value: 1593561600000, label: "July" },
            { value: 1596240000000, label: "August" },
            { value: 1598918400000, label: "September" },
            { value: 1601510400000, label: "October" },
            { value: 1604188800000, label: "November" }
          ]
        }
      },
      title: { text: "Date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cases", fontSize: 11, offset: 46.0078125 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { length: 10, lineWidth: 1.5 }
    })
    .editLegendTitle({ color: "black", fontWeight: 700 })
    .editLegendLabels({ color: "black" })
    
    .createTitle({
      text: "COVID-19 - LIVE DATA TRACKER",
      titleStyle: { fontSize: 13 },
      offset: -10.953125
    })
    .editTitle({ titleStyle: { color: "black", fontWeight: 700 }, alongOffset: -52.5859375 });
}