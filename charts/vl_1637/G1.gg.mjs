// DOCS: actual delivered doc-* IDs.
// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 104,
      height: 238,
      margin: { left: 39, top: 5, right: 5, bottom: 33 }
    })
    .createData({ id: "source", values: data })
    .createBarPlot({
      x: {
        field: "cat",
        fieldType: "nominal",
        scale: {
          type: "band",
          domain: ["a", "b", "c"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: {
        field: "val",
        fieldType: "quantitative",
        scale: { type: "linear", domain: [0, 18] }
      },
      guides: false
    })
    .encodeBarWidth({ pixels: 18 })
    .editBarMark({ fill: "#4c78a8" })
    .createGuides({
      grid: {
        horizontal: { scale: "y", color: "#ddd" },
        vertical: false
      },
      axes: {
        x: {
          position: "bottom",
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888", length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: -Math.PI / 2
            }
          },
          title: {
            text: "cat",
            fontSize: 11,
            fontWeight: "bold",
            offset: 26
          }
        },
        y: {
          position: "left",
          line: {"color":"#888"},
          ticksAndLabels: {
            ticks: { length: 5 },
            values: [0, 5, 10, 15],
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7
            }
          },
          title: {
            text: "val",
            fontSize: 11,
            fontWeight: "bold",
            offset: 28
          }
        }
      }
    });
}