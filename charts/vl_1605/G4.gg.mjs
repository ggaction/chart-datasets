// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 342, height: 247, margin: { left: 39, top: 10, right: 103, bottom: 37 } })
    .createData({ values: data })
    .filterData({
      id: "validHorsepower",
      field: "Horsepower",
      predicate: { op: "neq", value: null }
    })
    .filterData({
      id: "validMilesPerGallon",
      field: "Miles_per_Gallon",
      predicate: { op: "neq", value: null }
    })
    .createComputedData({
      id: "carsZ",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .encodePointRadius({ value: 3.873 })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .editColorScale({ target: "scatterPlot", type: "log", domain: [8, 24.8] })
    .editColorScale({ target: "scatterPlot", range: ["yellow", "red"], interpolate: "hcl" })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Horsepower", fontSize: 11, offset: 26 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Miles_per_Gallon", fontSize: 11, offset: 31 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createLegend({ representation: "gradient", title: "Acceleration" })
    .editLegendSymbols({ target: "scatterPlot", gradient: { length: 200 } })
    .editLegendLabels({ target: "scatterPlot", fontSize: 10 })
    .editLegendTitle({ target: "scatterPlot", fontSize: 11, fontWeight: 700 });
}
