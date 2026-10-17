// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
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
    .filterData({
      id: "cars1970ValidHP",
      field: "Horsepower",
      predicate: { op: "gte", value: 0 }
    })
    .filterData({
      id: "cars1970ValidMPG",
      field: "Miles_per_Gallon",
      predicate: { op: "gte", value: 0 }
    })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .editXScale({ domain: [0, 240], nice: false, zero: true })
    .editYScale({ domain: [0, 28], nice: false, zero: true })
    .encodeStroke({ value: "#4c78a8" })
    .encodePointRadius({ value: 3.0901936161855166 })
    .editPointMark({ shape: "square", fill: "none", opacity: 0.6 })
    .editPointMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createGrid({
      vertical: { values: [0, 50, 100, 150, 200] },
      horizontal: { values: [0, 5, 10, 15, 20, 25] }
    })
    .editVerticalGrid({ color: '#ddd', lineWidth: 1 })
    .editHorizontalGrid({ color: '#ddd', lineWidth: 1 });
}