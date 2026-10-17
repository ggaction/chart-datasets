// DOCS: doc-dfae58344d5a524e, doc-fc11e9fb291905d1, doc-8355bead4b606de7
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 226, height: 257, margin: { left: 43, top: 52, right: 8, bottom: 30 } })
    .createData({ id: "imf", values: data })
    .filterData({ id: "validYears", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "yearDate",
      as: "YearDate",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .createComputedData({
      id: "adjustedY",
      as: "Y",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Total_GDP_adjusted_billions" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Total_GDP_adjusted_billions" } }
      }
    })
    .createBarPlot({
      x: { field: "YearDate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "Y" },
      guides: false
    })
    .encodeBarWidth({ pixels: 4 })
    .editBarMark({ fill: "#86d0bb" })
    .editXScale({ domain: [405422836363, 1677335563636], nice: false })
    .editYScale({ domain: [0, 0.0035], nice: false })
    .createXAxis({
      line: { color: "#888" },
      title: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        labels: { fontSize: 10, format: "%Y", offset: 2, rotation: { value: 45, unit: "degrees" } }
      }
    })
    .createYAxis({
      line: { color: "#888" },
      title: false,
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        values: [0, 0.0005, 0.001, 0.0015, 0.002, 0.0025, 0.003, 0.0035],
        labels: { fontSize: 10, format: ".4f", offset: 7 }
      }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-glyphs",
        measurements: [
          { text: "Adjusted IMF lending", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 131.4375 },
          { text: "Proportion of credit outstanding to all members,", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 210.109375 },
          { text: "Source: IMF", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 55.703125 }
        ]
      }
    })
    .createTitle({
      text: "Adjusted IMF lending",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -37.5859375
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({
      subtitle: "Proportion of credit outstanding to all members,\nSource: IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", fontWeight: 400, color: "black" }
    });
}