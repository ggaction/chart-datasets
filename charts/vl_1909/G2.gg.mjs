import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 361, height: 377, margin: { left: 41, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2013", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "3.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "4.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Household montly mortgage rate", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 203.703125 },
          { text: "Monthly average, standard variable rate. Source: BoE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 238.84765625 }
        ]
      }
    })
    .createData({ id: "mortgage", values: data })
    .createComputedData({
      id: "mortgageNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "darkblue" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createRuleMark({ id: "rule", data: "mortgageNum", strokeWidth: 1 })
    .editRuleMark({ target: "rule", stroke: "black", opacity: 0.1 })
    .encodeX({ target: "rule", field: "Date", fieldType: "temporal" })
    
    .editXScale({ domain: [1296432000000, 1451520000000], nice: false })
    .editYScale({ domain: [3, 4] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1325376000000, 1356998400000, 1388534400000, 1420070400000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ".1f" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 29.3232421875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({
      text: "Household montly mortgage rate",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -35.9013671875
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({
      subtitle: "Monthly average, standard variable rate. Source: BoE",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}