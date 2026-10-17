// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1, doc-2bd5de4bd99e314a, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 222,
      margin: { left: 30, top: 5, right: 11, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "b", fieldType: "quantitative", scale: { type: "linear", domain: [0, 100] } },
      y: {
        field: "a",
        fieldType: "ordinal",
        scale: {
          type: "band",
          domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      guides: false
    })
    .editBarMark({ cornerRadiusTopRight: 4, cornerRadiusBottomRight: 4 })
    .encodeBarWidth({ pixels: 18 })
    .createGuides({
      axes: {
        x: {
          position: "bottom",
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 8 }
          },
          title: { text: "b", fontSize: 11, fontWeight: "bold", color: "black", offset: 28 }
        },
        y: {
          position: "left",
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 8 }
          },
          title: { text: "a", fontSize: 11, fontWeight: "bold", color: "black", offset: 23 }
        }
      },
      grid: {
        vertical: { color: "#ddd" },
        horizontal: false
      }
    });
}
