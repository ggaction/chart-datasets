// DOCS: actual delivered doc-b11b4627b143730d doc-76573a465e2b6a33 doc-c2eafbbd16fe3c71 doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // G1: compact integrated declaration — canvas, data, line facade (x, y, guides:false)
    .createCanvas({
      width: 247,
      height: 347,
      margin: { left: 41, top: 10, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createSortedData({ id: "sorted", source: "data", sortBy: [{ field: "Horsepower", order: "ascending" }] })
    .createLinePlot({
      x: { field: "Horsepower", fieldType: "quantitative" },
      y: { field: "Horsepower", fieldType: "quantitative" },
      guides: false
    })
    // source mark constants (stroke #4c78a8, strokeWidth 0.5)
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 0.5 })
    // resolved scales: x domain [1,5] drawn reversed (range [200,0]); y pinned [0,5]
    .editXScale({ domain: [1, 5], reverse: true })
    .editYScale({ domain: [0, 5] })
    // source grid axes (grid:true, no domain/ticks/labels) — both directions, default #ddd
    .createGrid({ horizontal: {color: '#ddd'}, vertical: {color: '#ddd'} })
    // labeled axes: domain:false, source typography (labels 10px offset 7, titles 11px bold)
    .createXAxis({
      ticksAndLabels: { count: 5, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Horsepower", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: { count: 8, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Horsepower", fontSize: 11, offset: 33 }
    })
    .editXAxis({ line: { color: "#888" }, title: { fontWeight: "bold" } })
    .editYAxis({ line: { color: "#888" }, title: { fontWeight: "bold" } });
}
