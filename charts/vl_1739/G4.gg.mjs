// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-76573a465e2b6a33, doc-48c72317a1a99e17
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
      oneOf: ["1970-01-01"]
    })
    .filterData({
      id: "horsepowerValid",
      field: "Horsepower",
      range: { min: 0 }
    })
    .filterData({
      id: "pointsValid",
      field: "Miles_per_Gallon",
      range: { min: 0 }
    })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({
      shape: "plus",
      fill: "#4c78a8",
      opacity: 0.6
    })
    .encodePointRadius({ value: 2.265767385318311 })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 28] })
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" })
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
      title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 28 }
    });
}