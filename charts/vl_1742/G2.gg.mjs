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
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
          },
          title: { text: "Horsepower", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            count: 6,
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7 }
          },
          title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 32, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: {
        horizontal: { scale: "y", count: 6, color: "#ddd", lineWidth: 1 },
        vertical: { scale: "tickX", count: 5, color: "#ddd", lineWidth: 1 }
      },
      legend: false
    });
}