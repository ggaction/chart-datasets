// DOCS: doc-471cb9289c01f96c (public boxplot docs)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 463,
      height: 249,
      margin: { left: 78, top: 10, right: 5, bottom: 39 }
    })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .createData({ values: data })
    .createBoxPlot({
      x: { field: "age", fieldType: "ordinal", scale: { type: "band", domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], paddingInner: 0, paddingOuter: 0 } },
      y: { field: "people", fieldType: "quantitative", scale: { domain: [0, 12000000] } },
      whisker: { type: "minmax", caps: false, stroke: "black", strokeWidth: 1 }
    })
    .editBoxPlot({
      box: { fill: "#4c78a8", stroke: "transparent", strokeWidth: 0 },
      median: { stroke: "white", strokeWidth: 1, width: { pixels: 14 } }
    })
    .encodeOpacity({ target: "boxPlotMedian", value: 0.7 })
    .createGrid({
      horizontal: { scale: "y", values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000], color: "#ddd", lineWidth: 1 }
    })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "age", offset: 30, fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, color: "black", format: ",.0f" }
        },
        title: { text: "population", offset: 66, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontWeight: 700, color: "black" }
      }
    });
}