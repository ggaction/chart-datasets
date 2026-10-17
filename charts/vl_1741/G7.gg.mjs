// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 242, margin: { left: 39, top: 5, right: 5, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "yearOfManufacture",
      as: "YearOfManufacture",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" }
    })
    .filterData({ id: "cars1970", field: "YearOfManufacture", predicate: { op: "eq", value: 0 } })
    .filterData({ id: "filter_mpg_nonnull", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "filter_hp_nonnull", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false,
    })
    .editXScale({ domain: [0, 240], nice: false })
    .editYScale({ domain: [0, 28], nice: false })
    .encodeStroke({ value: "#4c78a8" })
    .encodePointRadius({ value: 2.0335536076666813 })
.editPointMark({ shape: "triangle-up", fill: "none", strokeWidth: 2 })
.encodeOpacity({ target: "scatterPlot", value: 0.6 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ vertical: {}, horizontal: {} })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}