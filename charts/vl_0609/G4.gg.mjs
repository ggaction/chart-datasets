import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

const FOLD_FIELDS = [
  "ARG","AUS","AUT","BDI","BEL","BEN","BFA","BGD","BHS","BLZ","BMU","BOL","BRA","BWA","CAF","CHL","CHN","CIV","CMR","COD","COG","COL","CRI","DNK","DOM","DZA","ECU","EGY","ESP","FIN","FJI","FRA","GAB","GBR","GHA","GRC","GTM","GUY","HND","HTI","IDN","IND","IRN","ITA","JPN","KEN","KOR","LSO","LUX","MDG","MEX","MIC","MWI","MYS","NER","NGA","NIC","NLD","NOR","NPL","PAK","PAN","PER","PHL","PNG","PRI","PRT","PRY","RWA","SDN","SEN","SGP","SLE","SUR","SWE","SYC","SYR","TCD","TGO","THA","TTO","TUR","URY","USA","VCT","ZAF","ZMB","ZWE"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 257, height: 474, margin: { left: 24, top: 52, right: 33, bottom: 22 } })
    .createData({ id: "gdp", values: data })
    .createFoldData({ id: "foldA", source: "gdp", fields: ["ARG", "AUS", "AUT", "BDI", "BEL", "BEN", "BFA", "BGD", "BHS", "BLZ", "BMU", "BOL", "BRA", "BWA", "CAF", "CHL", "CHN", "CIV", "CMR", "COD", "COG", "COL", "CRI", "DNK", "DOM", "DZA", "ECU", "EGY", "ESP", "FIN", "FJI", "FRA", "GAB", "GBR", "GHA", "GRC", "GTM", "GUY", "HND", "HTI", "IDN", "IND", "IRN", "ITA", "JPN", "KEN", "KOR", "LSO", "LUX", "MDG", "MEX", "MWI", "MYS", "NER", "NGA", "NIC", "NLD", "NOR", "NPL", "PAK", "PAN", "PER", "PHL"] })
    .createComputedData({ id: "numA", as: "gdp", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "gdp", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "key" })
    .encodeColor({ field: "key" })
    .editLineMark({ strokeWidth: 1 })
    .createFoldData({ id: "foldB", source: "gdp", fields: ["PNG", "PRI", "PRT", "PRY", "RWA", "SDN", "SEN", "SGP", "SLE", "SUR", "SWE", "SYC", "SYR", "TCD", "TGO", "THA", "TTO", "TUR", "URY", "USA", "VCT", "ZAF", "ZMB", "ZWE"] })
    .createComputedData({ id: "numB", as: "gdp", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      id: "remainingCountries",
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "gdp", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-315619200000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 50] })
    .encodeGroup({ field: "key" })
    .encodeColor({ field: "key" })
    .editColorScale({ domain: FOLD_FIELDS, range: ["rgba(128,0,0, 0.2)"] })
    .editLineMark({ strokeWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true,
          labelMap: [
            { value: 0, label: "" },
            { value: 631152000000, label: "" },
            { value: 1262304000000, label: "" }
          ]
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "GDP per capita",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18, gap: 3 })
    .editTitle({ subtitle: "GDP, constant prices. National currencies. Source: IMF." });
}