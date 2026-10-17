import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae, doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({
      width: 313,
      height: 247,
      margin: { left: 39, top: 10, right: 74, bottom: 37 }
    })
    .createData({
      id: "brushBounds",
      values: [{ x0: 55, x1: 160, y0: 13, y1: 37 }]
    })
    .createRectMark({ id: "brushBackground", fill: "#333", opacity: 0.125 })
    .editRectMark({ target: "brushBackground", stroke: false })
    .encodeXRange({ lower: "x0", upper: "x1", scale: { id: "brushX", type: "linear", domain: [0, 240] } })
    .encodeYRange({ lower: "y0", upper: "y1", scale: { id: "brushY", type: "linear", domain: [0, 50] } })
    .createData({ values: data, id: "sourceCars" })
    .filterData({
      id: "filterHorsepower",
      field: "Horsepower",
      predicate: { op: "neq", value: null }
    })
    .filterData({
      id: "filterMiles_per_Gallon",
      field: "Miles_per_Gallon",
      predicate: { op: "neq", value: null }
    })
    .createComputedData({
      id: "brushStrokeData",
      as: "brushStroke",
      expression: {
        op: "if",
        condition: {
          op: "and",
          operands: [
            { op: "gte", left: { field: "Horsepower" }, right: { constant: 55 } },
            { op: "lte", left: { field: "Horsepower" }, right: { constant: 160 } },
            { op: "gte", left: { field: "Miles_per_Gallon" }, right: { constant: 13 } },
            { op: "lte", left: { field: "Miles_per_Gallon" }, right: { constant: 37 } }
          ]
        },
        then: { field: "Cylinders" },
        else: { constant: null }
      }
    })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeStroke({
      field: "brushStroke",
      fieldType: "ordinal",
      scale: { unknown: "grey" }
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: [3, 4, 5, 6, 8],
      range: [
        "rgb(175, 209, 231)",
        "rgb(134, 188, 220)",
        "rgb(91, 163, 207)",
        "rgb(56, 135, 192)",
        "rgb(27, 105, 173)"
      ]
    })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRectMark({ id: "brushOutline", data: "brushBounds", fill: "transparent" })
    .editRectMark({ target: "brushOutline", stroke: "white", strokeWidth: 1 })
    .encodeXRange({ lower: "x0", upper: "x1", scale: { id: "brushX" } })
    .encodeYRange({ lower: "y0", upper: "y1", scale: { id: "brushY" } })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50], scale: "y" },
      vertical: { values: [0, 50, 100, 150, 200], scale: "x" }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      scale: "x",
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      scale: "y",
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 32 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createLegend({
      title: "Cylinders",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegendSymbols({
      target: "scatterPlot",
      symbol: {
        layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 2 }]
      }
    });
}