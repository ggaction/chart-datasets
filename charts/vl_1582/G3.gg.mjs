// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
  .createCanvas({
    width: 275,
    height: 266,
    margin: { top: 6, right: 5, bottom: 60, left: 70 }
  })
  .createData({ values: data })
    .filterData({ id: "filter-horsepower-nonnull", field: "Horsepower", predicate: { op: "neq", value: null } })
  .filterData({ id: "filter-mpg-nonnull", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
  .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
  .editXScale({ domain: [0, 240] })
  .editYScale({ domain: [0, 50] })
  .encodeStroke({ field: "Origin", fieldType: "nominal" })
  .editStrokeScale({
    target: "scatterPlot",
    domain: ["Europe", "Japan", "USA"],
    range: ["#4c78a8", "#f58518", "#e45756"]
  })
  .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
  .encodePointRadius({ value: 2.7386127875258306 })
  .createGrid({
    horizontal: { count: 5 },
    vertical: { count: 5 }
  })
  .editGrid({
    horizontal: { color: "#ddd" },
    vertical: { color: "#ddd" }
  })
  .createXAxis({
    line: {},
    ticksAndLabels: {
      values: [0, 50, 100, 150, 200],
      labels: {
        labelMap: [
          { value: 0, label: "0\nhorses" },
          { value: 50, label: "" },
          { value: 100, label: "100\nhorses" },
          { value: 150, label: "" },
          { value: 200, label: "200\nhorses" }
        ],
        fontSize: 11,
        offset: 7,
        lineHeight: 22,
        maxWidth: 40,
        wrap: "word",
        overlap: "allow",
        flush: true
      }
    },
    title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 53 }
  })
  .createYAxis({
    line: {},
    ticksAndLabels: {
      values: [0, 10, 20, 30, 40, 50],
      labels: {
        labelMap: [
          { value: 0, label: "0\nmpg" },
          { value: 10, label: "" },
          { value: 20, label: "20\nmpg" },
          { value: 30, label: "" },
          { value: 40, label: "40\nmpg" },
          { value: 50, label: "" }
        ],
        fontSize: 22,
        offset: 7,
        lineHeight: 22,
        maxWidth: 50,
        wrap: "word",
        overlap: "allow"
      }
    },
    title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 58 }
  });

  ;
}
