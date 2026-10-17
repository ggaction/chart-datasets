import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 960,
      margin: { left: 39, top: 27, right: 74, bottom: 37 }
    })
    .createData({
      id: "brushBounds",
      values: [{ x0: 55, x1: 160, y0: 13, y1: 37 }]
    })
    .createRectMark({ id: "brushFill", fill: "#333", opacity: 0.125 })
    .editRectMark({ stroke: false })
    .encodeXRange({
      lower: "x0",
      upper: "x1",
      scale: { id: "brushX", type: "linear", domain: [0, 240] }
    })
    .encodeYRange({
      lower: "y0",
      upper: "y1",
      scale: { id: "brushY", type: "linear", domain: [0, 50] }
    })
    .createData({ id: "raw", values: data })
    .filterData({ id: "carsHP", field: "Horsepower", noneOf: [null] })
    .filterData({ id: "carsMPG", field: "Miles_per_Gallon", noneOf: [null] })
    .createComputedData({
      id: "carsBrushed",
      as: "BrushedCylinders",
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
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .encodeColor({ field: "BrushedCylinders", fieldType: "ordinal", scale: { unknown: "grey" } })
    .editColorScale({
      domain: [3, 4, 5, 6, 8],
      range: ["rgb(175, 209, 231)", "rgb(134, 188, 220)", "rgb(91, 163, 207)", "rgb(56, 135, 192)", "rgb(27, 105, 173)"]
    })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ opacity: 0.7 })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .createRectMark({ id: "brushOutline", data: "brushBounds", fill: "transparent" })
    .editRectMark({ target: "brushOutline", stroke: "white", strokeWidth: 1 })
    .encodeXRange({
      lower: "x0",
      upper: "x1",
      scale: { id: "brushX" }
    })
    .encodeYRange({
      lower: "y0",
      upper: "y1",
      scale: { id: "brushY" }
    })
    .createXAxis({
      scale: "x",
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 2, flush: true }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 26.5 }
    })
    .createYAxis({
      scale: "y",
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 27.623046875 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { scale: "brushY" },
      vertical: { scale: "brushX" }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Cylinders",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegend({ symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 0 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({
      text: "Horsepower and miles per gallon for various cars",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -10.953125
    })
    .editTitle({ align: "center" });
}