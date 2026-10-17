// DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 342, height: 249, margin: { left: 39, top: 10, right: 103, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({
      id: "accelZScore",
      as: "accelerationZScore",
      expression: {
        op: "divide",
        left: { op: "subtract", left: { field: "Acceleration" }, right: { constant: 15.52 } },
        right: { constant: 2.80 }
      }
    })
    .filterData({ id: "validHorsepower", field: "Horsepower", predicate: { op: "neq", value: null } })
    .filterData({ id: "validMilesPerGallon", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Acceleration", fieldType: "quantitative" })
    .editColorScale({ domain: [8, 24.8], interpolate: "hcl", range: ["yellow", "red"] })
    .encodePointRadius({ value: 3.873 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ title: "Acceleration", gradient: { length: 200 } })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif" });
}