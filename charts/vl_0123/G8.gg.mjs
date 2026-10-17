// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-3b660fabf78cdd08
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 420, height: 379, margin: { left: 57, top: 28, right: 63, bottom: 51 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({
      id: "familyStart",
      as: "familyStart",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "famsize" }, right: { constant: "GT3" } },
        then: { constant: 0 },
        else: { constant: 1 }
      }
    })
    .createComputedData({
      id: "familyEnd",

      as: "familyEnd",
      expression: { op: "add", left: { field: "familyStart" }, right: { constant: 1 } }
    })
    .createComputedData({
      id: "rectBaseline",

      as: "rectBaseline",
      expression: { constant: 0 }
    })
    .createHeatmap({
      x: { field: "famsize", fieldType: "nominal" },
      y: { field: "famrel", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "Walc", fieldType: "quantitative" })
    .editColorScale({ target: "heatmap", domain: [1, 5], range: { palette: "yellowgreenblue" } })
    .encodeXRange({ lower: "familyStart", upper: "familyEnd", scale: { id: "quantX", type: "linear", domain: [0, 2] } })
    .encodeYRange({ lower: "famrel", upper: "rectBaseline", scale: { id: "quantY", type: "linear", domain: [0, 5] } })
    .editRectMark({ stroke: false })
    .createXAxis({
      scale: "quantX",
      ticksAndLabels: {
        values: [0.5, 1.5],
        ticks: { length: 5 },
        labels: {
          fontSize: 15,
          offset: 5.5,
          labelMap: [{ value: 0.5, label: "GT3" }, { value: 1.5, label: "LE3" }]
        }
      },
      title: {
        text: "Family Size (>3 / <=3)",
        fontSize: 20,
        offset: 37.1875
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      scale: "quantY",
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
        ticks: { length: 5 },
        labels: { fontSize: 15, offset: 6.5, alongOffset: 1.578125, format: ".1f" }
      },
      title: {
        text: "Quality of Family Relationships (1-5)",
        fontSize: 20,
        offset: 40.66455078125,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      horizontal: {
        scale: "quantY",
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
      }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      gradient: { length: 200 },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" }
    });
}