// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1295,
      height: 247,
      margin: { left: 47, top: 10, right: 116, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "hm",
      as: "hm",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: { op: "parseTime", operand: { field: "t" }, format: "auto" }
      }
    })
    .createComputedData({
      id: "yn",
      as: "ynum",
      expression: { op: "toNumber", operand: { field: "y" } }
    })
    .createLinePlot({
      x: {
        field: "hm",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "ynum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1325376000000, 1325461500000], nice: false })
    .editYScale({ domain: [0.88, 1], nice: false })
    .encodeColor({ field: "scenario" })
    .encodeGroup({ field: "scenario" })
    .editLineMark({ strokeWidth: 2 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-glyphs",
        measurements: [
          { text: "04:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "08:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "12:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "16:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "20:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "0.88", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.92", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.94", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.96", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.98", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "1.00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 }
        ]
      }
    })
    // DOCS: doc-8a4f6f06e0d37d5e (createXAxis/createYAxis)
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1325390400000,
          1325404800000,
          1325419200000,
          1325433600000,
          1325448000000
        ],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%H:%M"
        }
      },
      title: {
        text: "Time",
        fontSize: 11,
        fontWeight: "bold",
        offset: 30
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: ".2f"
        }
      },
      title: {
        text: "Rel. travel time",
        fontSize: 11,
        fontWeight: "bold",
        offset: 35
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", values: [0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1] },
      vertical: {
        color: "#ddd",
        values: [
          1325390400000,
          1325404800000,
          1325419200000,
          1325433600000,
          1325448000000
        ]
      }
    })
    .createLegend({
      title: "scenario",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700 }
    })
    .editLegendSymbols({ target: "linePlot", symbol: { length: 10, lineWidth: 1.5 } });
}