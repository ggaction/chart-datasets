// DOCS: doc-dfae58344d5a524e (createCanvas), doc-e790db38fc2a278a (createScatterPlot), doc-b53f98d9f1c94c48, doc-08d24a62ced0d1b8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 307,
      margin: { left: 39, top: 70, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "carsClean",
      field: "Miles_per_Gallon",
      predicate: { op: "gte", value: 0 }
    })
    .filterData({
      id: "carsFinite",
      field: "Horsepower",
      predicate: { op: "gte", value: 0 }
    })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7, stroke: false })
    .encodePointRadius({ value: 2.7386 })
    .createTitle({
      text: "Car\nScatter",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 12 }
    })
    .editTitle({ subtitle: "A subtitle\nalso over two lines", align: "center", offset: -13 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" });
}