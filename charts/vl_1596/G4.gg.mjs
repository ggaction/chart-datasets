import { chart } from "ggaction";
// DOCS: doc-e790db38fc2a278a doc-bc26da5598d35bae doc-48c72317a1a99e17
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 336,
      height: 250,
      margin: { left: 39, top: 10, right: 97, bottom: 40 }
    })
    .createData({ values: data })
    .filterData({ id: "carsVisible", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "carsValid", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({
      x: { field: "Horsepower" },
      y: { field: "Miles_per_Gallon" },
      guides: false
    })
    .encodeColor({
      field: "Acceleration",
      fieldType: "quantitative",
      scale: { type: "sequential" }
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .editColorScale({
      domain: [8, 24.8],
      range: ["rgb(255, 255, 0)", "rgb(255, 0, 0)"],
      interpolate: "cubehelix"
    })
    .encodePointRadius({ value: 3.872983346207417 })
    .editPointMark({ opacity: 1, stroke: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Miles_per_Gallon",
        fontSize: 11,
        fontWeight: 700,
        offset: 27,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({
      vertical: { values: [0, 50, 100, 150, 200] },
      horizontal: { values: [0, 10, 20, 30, 40, 50] }
    })
    .editGrid({
      vertical: { color: "#ddd", lineWidth: 1 },
      horizontal: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      title: "Acceleration",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendSymbols({ gradient: { length: 200 } });

}