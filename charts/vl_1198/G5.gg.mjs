import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69, doc-18627fd264d621fc

const X_TICKS = [-157766400000, 157766400000, 473299200000, 788832000000, 1104364800000, 1419897600000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 358, height: 379, margin: { left: 53, top: 42, right: 5, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "energyYear", as: "year", expression: { op: "toNumber", operand: { field: "Date" } } })
    .createComputedData({ id: "energyValue", as: "value", expression: { op: "toNumber", operand: { field: "Date" } } })
    .createComputedData({ id: "energyNumeric", as: "EnergyConsumptionNum", expression: { op: "toNumber", operand: { field: "EnergyConsumption" } } })
    .createSortedData({ id: "energySorted", sortBy: [{ field: "Energy Source", order: "descending" }] })
    .createAreaPlot({
      guides: false,
      x: { field: "Date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "EnergyConsumptionNum" }
    })
    .editXScale({ domain: [-157766400000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 6000] })
    .encodeGroup({ field: "Energy Source" })
    .encodeColor({
      field: "Energy Source",
      layout: "stack"
    })
    .editColorScale({
      domain: ["1 Geo Biomass", "2 Nuclear", "3 Solar", "4 Wind", "5 Hydro", "6 Coal", "7 Gas", "8 Oil"],
      range: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
    })
    .editAreaMark({ opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-glyphs-1198",
        measurements: [
          { text: "1965", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "EnergyConsumption", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 108.171875 },
          { text: "1 Geo Biomass", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 68.375 },
          { text: "2 Nuclear", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 42.8125 },
          { text: "3 Solar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.6875 },
          { text: "4 Wind", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.125 },
          { text: "5 Hydro", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.015625 },
          { text: "6 Coal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.90625 },
          { text: "7 Gas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 26.6875 },
          { text: "8 Oil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.5625 },
          { text: "Energy Source", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 77.640625 },
          { text: "Energy Consumption in Africa by Source", fontFamily: "sans-serif", fontSize: 15, fontWeight: 700, fontStyle: "normal", width: 292.0 },
          { text: "Source: Our World in Data", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 117.2802734375 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Date", fontSize: 11, offset: 30 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: "%Y" }
      },
      title: { color: "black", fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 7,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "EnergyConsumption", fontSize: 11, offset: 41 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: ",.0f" }
      },
      title: { color: "black", fontWeight: "bold" }
    })
    .createGrid({
      horizontal: { color: "#ddd", count: 7 },
      vertical: { color: "#ddd", values: X_TICKS }
    })
    .createLegend({
      position: "top-left",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editLegend({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
      border: { background: "white" }
    })
    .createTitle({
      text: "Energy Consumption in Africa by Source",
      titleStyle: { fontSize: 15, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -47, gap: 1 })
    .editTitle({ subtitle: "Source: Our World in Data" });
}