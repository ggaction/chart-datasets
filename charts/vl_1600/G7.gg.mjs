// DOCS: doc-e790db38fc2a278a doc-2fcdfbdfb290e440 doc-b53f98d9f1c94c48
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 336,
      height: 247,
      margin: { top: 10, right: 97, bottom: 37, left: 39 }
    })
    .createData({ id: "cars", values: data })
.filterData({ id: "cars_horsepower_valid", field: "Horsepower", noneOf: [null] })
    .filterData({
      id: "carsPlot",
      field: "Miles_per_Gallon",
      predicate: { op: "gte", value: 0 }
    })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 240], nice: false })
    .editYScale({ target: "scatterPlot", domain: [0, 50], nice: false })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({ palette: "plasma", domain: [8, 24.8], reverse: true })
    .editColorScale({ interpolate: "hcl" })
    .encodePointRadius({ value: 3.872983346207417 })
.editPointMark({ opacity: 1, stroke: false })
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
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Miles_per_Gallon", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50] },
      vertical: { values: [0, 50, 100, 150, 200] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Acceleration",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}