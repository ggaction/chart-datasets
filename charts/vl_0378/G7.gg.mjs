// DOCS: doc-2c912465a1515bd5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 331, height: 374, margin: { left: 24, top: 52, right: 7, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "g7", field: "LOCATION", noneOf: ["OECD"] })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-glyphs",
        measurements: [
          { text: "Productivity, G7", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 98.734375 },
          { text: "GDP per hour worked. US dollars, 1970-2020. Source: OECD", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 273.896484375 }
        ]
      }
    })
    .createTitle({
      text: "Productivity, G7",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", fontStyle: "normal", color: "black" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -18.12 })
    .editTitle({ subtitle: "GDP per hour worked. US dollars, 1970-2020. Source: OECD\n" })
    .createLinePlot({
      x: { field: "TIME", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 1577836800000] })
    .editYScale({ domain: [0, 80] })
    .encodeGroup({ field: "LOCATION" })
    .encodeColor({ field: "LOCATION" })
    .editColorScale({ domain: ["CAN", "DEU", "FRA", "GBR", "ITA", "JPN", "USA"], range: ["yellow", "orange", "lightgrey", "black", "lightblue", "pink", "lightgreen"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 157788000000, 315532800000, 473364000000, 631152000000, 788940000000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 157788000000, label: "" },
            { value: 473364000000, label: "" },
            { value: 788940000000, label: "" },
            { value: 1104537600000, label: "" },
            { value: 1420070400000, label: "" }
          ]
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    
    .createLegend({
      position: "top-left",
      symbol: { length: 10, lineWidth: 1.5 },
      title: false
    })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif", fontWeight: 400 });
}