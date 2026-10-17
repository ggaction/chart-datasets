// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
// G1 integrated declaration: horizontal bar chart, "Length" quantitative x (domain [0,400]),
// "Prime Minister" nominal y with resolved sorted category domain and band padding,
// constant fill #78969d (via editBarMark), source grid on x only, x title axis, y axis without title.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 426, height: 372, margin: { left: 116, top: 35, right: 10, bottom: 37 } })
    .createData({ values: data })
    .createBarPlot({
      guides: false,
      x: { field: "Length", fieldType: "quantitative" },
      y: {
        field: "Prime Minister",
        fieldType: "nominal",
        scale: {
          domain: [
            "Sir Alec Douglas-Home",
            "The Earl of Bute",
            "The Earl of Shelburne",
            "The Duke of Devonshire",
            "Bonar Law",
            "The Viscount Goderich",
            "George Canning",
            "Liz Truss"
          ],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      }
    })
    .editXScale({ target: "barPlot", domain: [0, 400] })
    .editBarMark({ fill: "#78969d" })
    .encodeBarWidth({ pixels: 33.75 })
    .createGuides({
      grid: { horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } },
      axes: {
        x: {
          position: "bottom",
          ticksAndLabels: {
            count: 8,
            ticks: { color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: {
            text: "Length",
            offset: 28,
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "black"
          }
        },
        y: {
          position: "left",
          ticksAndLabels: {
            ticks: { color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: false
        }
      }
    })
    .createTitle({
      text: "Shortest Serving UK Prime Ministers ",
      titleStyle: { fontSize: 13, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Measured in days",
      offset: -12
    });
}
