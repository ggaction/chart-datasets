// DOCS: doc-b11b4627b143730d (createLinePlot), doc-dfae58344d5a524e (createCanvas),
// doc-76573a465e2b6a33 (basic charts), doc-f30bfed200b50a98 (line example)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 247,
      margin: { left: 39, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [978307200000, 978912000000] }
      },
      y: {
        field: "valA",
        fieldType: "quantitative",
        scale: { domain: [0, 40] }
      },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGuides({
      grid: {
        horizontal: { scale: "y", count: 5 , color: '#ddd'},
        vertical: { scale: "x", count: 8 , color: '#ddd'}
      },
      axes: {
        x: {
          position: "bottom",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [978307200000, 978480000000, 978652800000, 978825600000],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              color: "black",
              offset: 7,
              format: "%m-%d"
            }
          },
          title: { text: "date", fontSize: 11, fontWeight: "bold", color: "black", offset: 28 }
        },
        y: {
          position: "left",
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: { text: "valA", fontSize: 11, fontWeight: "bold", color: "black", offset: 28 }
        }
      }
    });
}
