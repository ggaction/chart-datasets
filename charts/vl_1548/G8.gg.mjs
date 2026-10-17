import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-76573a465e2b6a33 doc-bc26da5598d35bae
export function buildChart() {
  return chart()
    .createCanvas({
      width: 523,
      height: 342,
      margin: { left: 41, top: 5, right: 82, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "derivedSpecies", as: "species", expression: { op: "getPath", operand: { field: "_source" }, path: ["species"] } })
    .createComputedData({ id: "derivedPetalLength", as: "petalLength", expression: { op: "getPath", operand: { field: "_source" }, path: ["petalLength"] } })
    .createComputedData({ id: "derivedPetalWidth", as: "petalWidth", expression: { op: "getPath", operand: { field: "_source" }, path: ["petalWidth"] } })
    .createScatterPlot({
      x: { field: "petalLength", fieldType: "quantitative" },
      y: { field: "petalWidth", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 7] })
    .editYScale({ domain: [0, 2.6] })
    .encodeColor({ field: "species", fieldType: "nominal" })
    .editColorScale({ target: "scatterPlot", domain: ["setosa", "versicolor", "virginica"], palette: "tableau10" })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "petalLength", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "petalWidth",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 30,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxis({
      ticksAndLabels: { labels: { format: ".1f" } },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { format: ".1f" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    });
}