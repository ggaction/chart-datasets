// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 303, height: 276, margin: { left: 44, top: 37, right: 79, bottom: 39 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "category", fieldType: "ordinal", scale: { type: "band", domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "value", fieldType: "quantitative", scale: { domain: [-60, 40], zero: false } },
      guides: false
    })
    .encodeColor({ field: "value", fieldType: "quantitative", scale: { domain: [-57.6, 34.4], palette: "redblue" } })
    .encodeBarWidth({ band: 1 })
    .createGuides({
      axes: {
        x: { position: "top", line: false, ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } }, title: { text: "category", fontSize: 11, fontWeight: 700, offset: 26 } },
        y: { position: "left", ticksAndLabels: { values: [-60, -40, -20, 0, 20, 40], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } }, title: { text: "value", fontSize: 11, fontWeight: 700, offset: 33 } }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: false },
      legend: { position: "right", title: "value", gradient: { length: 200 }, titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } }
    });
}
