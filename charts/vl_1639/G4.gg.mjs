// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (createScatterPlot/point),
// doc-a929fd81abd909f8 (facade + guides pattern)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 252,
      height: 242,
      margin: { top: 5, right: 8, bottom: 37, left: 44 }
    })
    .createData({ id: "data", values: data })
    // G1 compact line declaration: scales pinned to resolved source domains
    .createLinePlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    // source mark point:true -> scatter overlay, identical bindings, no guides
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    // pinned resolved source domains now owned by scale editors (shared by both layers)
    .editXScale({ domain: [1, 4], zero: false })
    .editYScale({ domain: [90, 106], zero: false })
    .editLineMark({ target: "linePlot", stroke: "#4c78a8", strokeWidth: 2 })
    // scatter: activate stroke, then constant point appearance (size 30 -> radius sqrt(30)/2)
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", stroke: false, opacity: 1 })
    // source grids (#ddd is the default grid color; values follow tick positions)
    .createGrid({
      vertical: { scale: "x", values: [1, 1.5, 2, 2.5, 3, 3.5, 4] , color: '#ddd'},
      horizontal: { scale: "y", values: [90, 95, 100, 105] , color: '#ddd'}
    })
    // complete axes: no domain line, no ticks, 10px labels, 11px bold titles
    .createXAxis({
      ticksAndLabels: {
        values: [1, 1.5, 2, 2.5, 3, 3.5, 4],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ".1f" }
      },
      title: { text: "x", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    .editXAxis({ line: { color: "#888" } })
    .createYAxis({
      ticksAndLabels: {
        values: [90, 95, 100, 105],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, fontWeight: "bold", offset: 33 }
    })
    .editYAxis({ line: { color: "#888" } });
}