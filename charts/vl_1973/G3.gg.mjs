// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot docs),
// DOCS: doc-76573a465e2b6a33 (createScatterPlot docs), doc-bedf05337affd6f4 (bar-chart recipe)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 161,
      height: 293,
      margin: { left: 39, top: 29, right: 22, bottom: 64 }
    })
    .createData({ values: data })
    .createTitle({ text: "Categorical Bar Chart", align: "center", titleStyle: { fontSize: 13 } })
    .createBarPlot({
      x: {
        field: "animal",
        fieldType: "nominal",
        scale: {
          domain: ["cow", "elephant", "mouse", "rabbit", "snake"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: {
        field: "value",
        fieldType: "quantitative",
        scale: { domain: [0, 35] }
      },
      guides: false
    })
    .createAxes({
      x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: {
              offset: 7,
              fontSize: 10,
              fontFamily: "sans-serif",
              color: "black",
              rotation: { value: -Math.PI / 2, unit: "radians" }
            }
          },
          title: {
            text: "animal",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "black",
            offset: 54
          }
        },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888", length: 5 },
          labels: {
            offset: 7,
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black"
          }
        },
        title: {
          text: "count",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          color: "black",
          offset: 29
        }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" }
    })
    .encodeBarWidth({ pixels: 18 });
}