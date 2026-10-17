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
.editPointMark({ shape: "triangle-up", fill: "none", opacity: 0.6 })
.editPointMark({ strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ vertical: { color: "#ddd", lineWidth: 1 }, horizontal: { color: "#ddd", lineWidth: 1 } });
}