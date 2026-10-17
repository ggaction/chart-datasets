// DOCS: doc-7f2c254224fc4908, doc-074cfcd2d7c62d4a, doc-4aba5fb850bbed9c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 547,
      height: 389,
      margin: { left: 48, top: 52, right: 99, bottom: 37 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "selected", field: "dum", oneOf: ["All"] })
    .createComputedData({
      id: "years",
      as: "yearTime",
      expression: {
        op: "parseTime",
        operand: { op: "concat", operands: [{ field: "Year" }, { constant: "-01-01" }] },
        format: "%Y-%m-%d"
      }
    })
    .createComputedData({
      id: "numeric",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: {
        field: "yearTime",
        fieldType: "temporal"
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [-283996800000, 1672531200000], nice: false })
    .editYScale({ domain: [0, 0.7], nice: false })
    .encodeColor({
      field: "Series ID"
    })
    .editColorScale({
      domain: ["All"],
      range: ["rgb(128,0,0)"]
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0599-source-font-widths",
        measurements: [
          { text: "1965", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.265625 },
          { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "10%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "20%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "30%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "40%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "50%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "60%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "70%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "Labor Force Participation Rate", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 160.15625 },
          { text: "All", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Demographic:", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 73.96875 },
          { text: "US Participation Rate 1960-2023", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 197.984375 },
          { text: "Sources: Bureau of Labor Statistics & the OECD", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 215.15625 }
        ]
      }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          color: "black",
          offset: 5.5,
          alongOffset: 0.5,
          flush: false,
          labelMap: [
            { value: -157766400000, label: "1965" },
            { value: 0, label: "1970" },
            { value: 157766400000, label: "1975" },
            { value: 315532800000, label: "1980" },
            { value: 473385600000, label: "1985" },
            { value: 631152000000, label: "1990" },
            { value: 788918400000, label: "1995" },
            { value: 946684800000, label: "2000" },
            { value: 1104537600000, label: "2005" },
            { value: 1262304000000, label: "2010" },
            { value: 1420070400000, label: "2015" },
            { value: 1577836800000, label: "2020" }
          ]
        }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          color: "black",
          offset: 6.5,
          alongOffset: 0.890625,
          labelMap: [
            { value: 0, label: "0%" },
            { value: 0.1, label: "10%" },
            { value: 0.2, label: "20%" },
            { value: 0.3, label: "30%" },
            { value: 0.4, label: "40%" },
            { value: 0.5, label: "50%" },
            { value: 0.6, label: "60%" },
            { value: 0.7, label: "70%" }
          ]
        }
      },
      title: { text: "Labor Force Participation Rate", fontSize: 11, fontWeight: 700, color: "black", offset: 35.4365234375 }
    })
    .createGuides({
      axes: false,
      grid: {
        horizontal: { values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7], color: "rgba(221,221,221,0.4)" },
        vertical: { values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "rgba(221,221,221,0.4)" }
      },
      legend: {
        title: "Demographic:",
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
      }
    })
    .createTitle({
      text: "US Participation Rate 1960-2023",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -42.0146484375
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({
      subtitle: "Sources: Bureau of Labor Statistics & the OECD\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}