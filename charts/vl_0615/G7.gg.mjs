import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

const FOLD_FIELDS = [
  "ARG","AUS","AUT","BDI","BEL","BEN","BFA","BGD","BHS","BLZ","BMU","BOL","BRA","BWA","CAF","CHL","CHN","CIV","CMR","COD","COG","COL","CRI","DNK","DOM","DZA","ECU","EGY","ESP","FIN","FJI","FRA","GAB","GBR","GHA","GRC","GTM","GUY","HND","HTI","IDN","IND","IRN","ITA","JPN","KEN","KOR","LSO","LUX","MDG","MEX","MIC","MWI","MYS","NER","NGA","NIC","NLD","NOR","NPL","PAK","PAN","PER","PHL","PNG","PRI","PRT","PRY","RWA","SDN","SEN","SGP","SLE","SUR","SWE","SYC","SYR","TCD","TGO","THA","TTO","TUR","URY","USA","VCT","WLD","ZAF","ZMB","ZWE"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 540, height: 374, margin: { left: 32, top: 52, right: 8, bottom: 22 } })
    .createData({ id: "gdp", values: data })
    .createFoldData({ id: "foldA", source: "gdp", fields: ["CHN", "KOR", "SGP", "BWA", "THA", "MYS", "IDN", "IND", "DOM", "JPN", "TUR", "PRT", "EGY", "SYC", "PAN", "PRI", "CHL", "LUX", "ESP", "VCT", "PRY", "FIN", "NOR", "GUY", "PAK", "BGD", "GRC", "AUT", "LSO", "BLZ", "BEL", "CRI", "FRA", "NLD", "BRA", "TTO", "COL", "SWE", "ITA", "USA", "DNK", "NPL", "WLD", "BFA", "PHL", "GBR", "AUS", "BMU", "RWA", "URY", "MEX", "BOL", "PER", "GTM", "IRN", "ECU", "KEN", "MWI", "FJI", "HND", "GAB", "TGO", "DZA"] })
    .createComputedData({ id: "numA", as: "logGDP", expression: { op: "log", operand: { op: "toNumber", operand: { field: "value" } } } })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "logGDP", fieldType: "quantitative" },
      guides: false
    })
    
    .encodeGroup({ field: "key" })
    .encodeColor({ field: "key" })
    .encodeStrokeWidth({ value: 2 })
    .createFoldData({ id: "foldB", source: "gdp", fields: ["BEN", "PNG", "GHA", "SUR", "ARG", "NGA", "CIV", "CMR", "ZAF", "BHS", "COG", "SDN", "NIC", "SLE", "SEN", "ZWE", "TCD", "ZMB", "BDI", "HTI", "NER", "CAF", "MDG", "COD", "SYR"] })
    .createComputedData({ id: "numB", as: "logGDP", expression: { op: "log", operand: { op: "toNumber", operand: { field: "value" } } } })
    .createLinePlot({
      id: "remainingCountries",
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "logGDP", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-315619200000, 1609459200000], nice: false })
    .editYScale({ domain: [-1.5, 4] })
    .encodeGroup({ field: "key" })
    .encodeColor({ field: "key" })
    .encodeStrokeWidth({ value: 2 })
    .editColorScale({ domain: FOLD_FIELDS, range: ["rgba(128,0,0, 0.2)"] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .editYAxisLabels({ format: ".1f" })
    .createGrid({ horizontal: { color: "rgba(221,221,221,0.3)" }, vertical: false })
    .createTitle({
      text: "Growth tradjectories",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -26.7412109375, gap: 3 })
    .editTitle({ subtitle: "GDP per capita, 1960=1, logs. Source: World Bank.\n" });
}