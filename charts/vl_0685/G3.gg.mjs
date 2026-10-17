// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 522,
      height: 522,
      margin: { left: 53, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "key",
        fieldType: "temporal",
        
      },
      y: {
        field: "doc_count",
        fieldType: "quantitative",
        
      },
      guides: false
    })
    .editXScale({ domain: [1512950400000, 1513728000000] })
    .editYScale({ domain: [0, 5000] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1512950400000, 1513036800000, 1513123200000, 1513209600000, 1513296000000, 1513382400000, 1513468800000, 1513555200000, 1513641600000, 1513728000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, flush: true, format: "%a %d" }
        },
        title: { text: "key", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "," }
        },
        title: { text: "doc_count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 42 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}
