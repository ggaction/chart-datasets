// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 320, height: 247, margin: { left: 39, top: 10, right: 81, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "salaryNum", as: "SalaryN", expression: { op: "toNumber", operand: { field: "Salary" } } })
    .createComputedData({ id: "goalsNum", as: "GoalsN", expression: { op: "toNumber", operand: { field: "Goals" } } })
    .createScatterPlot({
      x: { field: "SalaryN" },
      y: { field: "GoalsN" },
      guides: false
    })
    .editXScale({ domain: [0, 110000000] })
    .editYScale({ domain: [0, 70] })
    .encodeStroke({ field: "Foot" })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["Both", "Left", "Right", "Unknown"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"]
    })
    .encodePointRadius({ value: 2.7386128875 })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .applyTextMetrics({
      profile: {
        id: "source-axis-glyphs",
        schemaVersion: 1,
        measurements: [
          { text: "0M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "20M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
          { text: "40M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
          { text: "60M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
          { text: "80M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
          { text: "100M", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.015625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20000000, 40000000, 60000000, 80000000, 100000000],
          ticks: { color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [
              { value: 0, label: "0M" },
              { value: 20000000, label: "20M" },
              { value: 40000000, label: "40M" },
              { value: 60000000, label: "60M" },
              { value: 80000000, label: "80M" },
              { value: 100000000, label: "100M" }
            ]
          }
        },
        title: { text: "Salary", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "Goals",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          offset: 30,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      symbol: { fill: "none", strokeWidth: 1.5, opacity: 0.7 }
    });
}
