// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 453, height: 549, margin: { left: 39, top: 10, right: 114, bottom: 239 } })
    .createData({ id: "cars", values: data })
    .filterData({ id: "carsClean", field: "Miles_per_Gallon", predicate: { op: "neq", value: null } })
  .filterData({ id: "horsepowerValid", field: "Horsepower", predicate: { op: "neq", value: null } })
    .createScatterPlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Miles_per_Gallon", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "Origin", fieldType: "nominal", scale: { domain: ["Europe", "Japan", "USA"], range: ["#4c78a8", "#f58518", "#e45756"] } })
    .editPointMark({ stroke: false })
    .encodeSize({ field: "Horsepower", fieldType: "quantitative", scale: { domain: [0, 230], range: [3.141592653589793, 283.52873698647815] } })
    .encodeOpacity({ field: "Weight_in_lbs", fieldType: "quantitative", scale: { domain: [1613, 5140], range: [0.3, 0.8] } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
          ticks: {},
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true, labelMap: [
      { value: 20, label: "" },
      { value: 60, label: "" },
      { value: 100, label: "" },
      { value: 140, label: "" },
      { value: 180, label: "" },
      { value: 220, label: "" }
    ] }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          ticks: {},
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
        },
        title: { text: "Miles_per_Gallon", fontSize: 11, fontWeight: 700, offset: 32 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ channels: ["color"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } })
    .createGuides({ axes: false, legend: { channels: ["size"], values: [0, 50, 100, 150, 200], labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } } })
    .createGuides({ axes: false, legend: { channels: ["opacity"], values: [2000, 2500, 3000, 3500, 4000, 4500, 5000], labels: { fontSize: 10, format: ",.0f" }, titleStyle: { fontSize: 11, fontWeight: 700 } } })
  .editLegendLayout({ position: "bottom-left", blockLayout: "row" })
  .editCanvas({ width: 345, height: 347, margin: { left: 39, top: 10, right: 6, bottom: 37 } });
}