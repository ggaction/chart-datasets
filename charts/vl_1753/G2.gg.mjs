// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 createBarPlot
// G1: facade carries exactly x, y, guides:false; guides moved to createGuides(axes,grid).
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 169,
      height: 245,
      margin: { left: 44, top: 10, right: 5, bottom: 35 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "a",
        fieldType: "ordinal"
      },
      y: {
        field: "b",
        fieldType: "quantitative",
        scale: { domain: [0, 100] }
      },
      guides: false
    })
    .encodeBarWidth({ pixels: 18 })
    .editXScale({
      domain: ["B", "A", "C", "Z", "Y", "X"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createGuides({
      axes: {
        x: {
          position: "bottom",
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: 270, unit: "degrees" }
            }
          },
          title: { text: "a", fontSize: 11, fontWeight: "bold", offset: 28 }
        },
        y: {
          position: "left",
          line: {"color":"#888"},
          ticksAndLabels: {
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "b", fontSize: 11, fontWeight: "bold", offset: 33 }
        }
      },
      grid: {
        horizontal: { scale: "y", color: "#ddd" }
      }
    })
    .editBarMark({ fill: "#4c78a8" });
}
