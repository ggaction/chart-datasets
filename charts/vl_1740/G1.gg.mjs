// DOCS: doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 242, margin: { left: 39, top: 5, right: 5, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "cars1970", field: "Year", predicate: { op: "eq", value: "1970-01-01" } })
    .filterData({ id: "cars1970ValidMpg", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative", scale: { domain: [0, 240] } },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative", scale: { domain: [0, 28] } },
      guides: false,
    })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ shape: "diamond", fill: "none", strokeWidth: 2 })
    .encodeOpacity({ value: 0.6 })
    .encodePointRadius({ value: 2.1850968611841584 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { values: [0, 50, 100, 150, 200], ticks: {}, labels: { fontSize: 10, offset: 7 } },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700 }
      },
      y: {
        line: {},
        ticksAndLabels: { values: [0, 5, 10, 15, 20, 25], ticks: {}, labels: { fontSize: 10, offset: 7 } },
        title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
  .editYAxis({ title: { offset: 26.544921875 } })
;
}