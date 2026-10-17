// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 365, height: 377, margin: { left: 58, top: 40, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valuesNum", as: "Values_num", expression: { op: "toNumber", operand: { field: "Values" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Values_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-5364662400000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 55000], nice: false })
    .encodeColor({
      field: "Energy Source",
      scale: {
        domain: ["Biofuels ()", "Coal ()", "Gas ()", "Hydropower ()", "Nuclear ()", "Oil ()", "Other renewables ()", "Solar ()", "Traditional biomass ()", "Wind ()"],
        palette: { name: "darkmulti", count: 10, extent: [1 / 11, 10 / 11] }
      }
    })
    .encodeGroup({ field: "Energy Source" })
    .editLineMark({ strokeWidth: 2 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-glyphs",
        measurements: [
          { text: "1800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1840", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1880", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1920", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1960", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "35,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "45,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "55,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "Global primary energy consumption", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 223.21875 },
          { text: "Global primary energy consumption by source, Source: Our World in Data", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 326.8212890625 }
        ]
      }
    })
    .createTitle({
      text: "Global primary energy consumption",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -52.586
    })
    .editTitle({
      offset: -13,
      gap: 1,
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Global primary energy consumption by source, Source: Our World in Data"
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-5364662400000, -4733596800000, -4102444800000, -3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000, 1577836800000],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            format: "%Y",
            labelMap: [
              { value: -4733596800000, label: "" },
              { value: -3471292800000, label: "" },
              { value: -2208988800000, label: "" },
              { value: -946771200000, label: "" },
              { value: 315532800000, label: "" },
              { value: 1577836800000, label: "" }
            ]
          }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000],
          ticks: {},
          labels: { fontSize: 10, offset: 7, format: "," }
        },
        title: { text: "Energy Consumption (TWh)", fontSize: 11, fontWeight: 700, offset: 48, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createLegend({
      position: "top-left",
      title: "Energy Source",
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegend({
      labels: { fontSize: 10 },
      symbol: { length: 10, lineWidth: 1.5 }
    });
}
