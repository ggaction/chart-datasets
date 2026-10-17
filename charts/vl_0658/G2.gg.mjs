// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-bc26da5598d35bae
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 313, height: 247, margin: { left: 39, top: 10, right: 74, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "cars", field: "Miles_per_Gallon", noneOf: [null] })
    .filterData({ id: "validHorsepower", field: "Horsepower", noneOf: [null] })
    .createScatterPlot({ x: "Horsepower", y: "Miles_per_Gallon", guides: false })
    .editPointMark({ fill: "transparent", stroke: "grey", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 5 })
    .createPointMark({ id: "squares", shape: "square", opacity: 0.7 })
    .encodeX({ field: "Horsepower", target: "squares" })
    .encodeY({ field: "Miles_per_Gallon", target: "squares" })
    .encodeColor({ field: "Cylinders", fieldType: "ordinal", target: "squares" })
    .encodePointRadius({ target: "squares", value: Math.sqrt(150 / Math.PI) })
    .editColorScale({ domain: [3, 4, 5, 6, 8], range: ["rgb(175, 209, 231)", "rgb(134, 188, 220)", "rgb(91, 163, 207)", "rgb(56, 135, 192)", "rgb(27, 105, 173)"] })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 50] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7 }
        },
        title: { text: "Horsepower", fontSize: 11, fontWeight: 700, color: "black", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7 }
        },
        title: { text: "Miles_per_Gallon", rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontWeight: 700, color: "black", offset: 27 }
      }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        target: "squares",
        channels: ["color"],
        title: "Cylinders",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "squares", channel: "color", symbol: { opacity: 0.7 } });
}