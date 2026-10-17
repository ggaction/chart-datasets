// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 242,
      margin: { left: 39, top: 5, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "cars1970",
      field: "Year",
      predicate: { op: "eq", value: "1970-01-01" }
    })
    .filterData({ id: "hpValid", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "mpgValid", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createRugPlot({
      y: { field: "Miles_per_Gallon" },
      edge: "left",
      guides: false
    })
    .editYScale({ domain: [0, 28] })
    .encodeX({ field: "Horsepower", fieldType: "quantitative", scale: { id: "tickX" } })
    .editXScale({ id: "tickX", domain: [0, 240] })
    .editTickMark({ length: 5.477225575051661, strokeWidth: 2, opacity: 0.6 })
    .encodeStroke({ value: "#4c78a8" })
    .createXAxis({
      scale: "tickX",
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 32, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ fontFamily: "sans-serif", fontWeight: 400, color: "black" })
    .editXAxisTitle({
      fontWeight: 700,
      fontFamily: "sans-serif",
      color: "black"
    })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ fontFamily: "sans-serif", fontWeight: 400, color: "black" })
    .editYAxisTitle({
      fontWeight: 700,
      fontFamily: "sans-serif",
      color: "black"
    })
    .createGrid({
      horizontal: { scale: "y", count: 6 },
      vertical: { scale: "tickX", count: 5 }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}