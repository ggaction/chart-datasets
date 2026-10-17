// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 234, height: 234, margin: { left: 58, top: 47, right: 26, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valuesNum", as: "Values_num", expression: { op: "toNumber", operand: { field: "Values" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Values_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-5364662400000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 55000], nice: false })
    .encodeColor({ field: "Energy Source" })
    .editColorScale({
      target: "linePlot",
      domain: ["Biofuels ()", "Coal ()", "Gas ()", "Hydropower ()", "Nuclear ()", "Oil ()", "Other renewables ()", "Solar ()", "Traditional biomass ()", "Wind ()"],
      palette: { name: "darkmulti", count: 10, extent: [1 / 11, 10 / 11] }
    })    .applyTextMetrics({
      profile: {
        id: "source-glyphs",
        schemaVersion: 1,
        measurements: [
          { text: "1800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1850", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1900", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1950", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
          { text: "Global primary energy consumption", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 223.21875 },
          { text: "Global primary energy consumption by source", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 204.2333984375 },
          { text: "Source: Our World in Data", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 117.2802734375 }
        ]
      }
    })
    .encodeGroup({ field: "Energy Source" })
    .editLineMark({ strokeWidth: 2 })
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
      subtitle: "Global primary energy consumption by source\nSource: Our World in Data"
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-5364662400000, -3786825600000, -2208988800000, -631152000000, 946684800000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 7, flush: true }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 30 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 7, format: "," }
      },
      title: { text: "Energy Consumption (TWh)", fontSize: 11, fontWeight: 700, color: "black", offset: 48, rotation: { value: -90, unit: "degrees" } }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "top-left",
        itemGap: 11,
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 7, color: "black" },
        symbol: { length: 10, lineWidth: 1.5 }
      }
    });
}
