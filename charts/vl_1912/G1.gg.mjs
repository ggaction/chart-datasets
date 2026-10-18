import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 354, height: 377, margin: { left: 39, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Month", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.984375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Inflation", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 50.546875 },
          { text: "CPIH annual % change. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 169.072265625 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "rowsNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "Month", fieldType: "temporal" },
      y: "valueNum",
      guides: false
    })
    .editLineMark({ stroke: "darkblue", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Month", fieldType: "temporal" },
      y: "valueNum",
      guides: false
    })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ id: "rules", stroke: "black", opacity: 0.1 })
    .encodeX({ field: "Month", fieldType: "temporal", target: "rules" })
    .editRuleMark({ target: "rules", strokeWidth: 1 })
    .removeEncoding({ target: "rules", channel: "y" })
    .editXScale({ domain: [599616000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 10], nice: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
        },
        title: { text: "Month", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({
      text: "Inflation",
      alongOffset: -33.123046875,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      offset: -10.953125,
      gap: 3.34375
    })
    .editTitle({
      subtitle: "CPIH annual % change. Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}