// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-6c2c08869091f6a0 — createCanvas with explicit literal dimensions and margins
    .createCanvas({
      width: 644,
      height: 345,
      margin: { left: 39, top: 10, right: 5, bottom: 35 }
    })
    // DOCS: doc-fc11e9fb291905d1 — createData takes values only; no schema invented
    .createData({ values: data })
    // DOCS: doc-6c2c08869091f6a0 — compact integrated facade: x, y, guides:false (3 fields)
    .createBarPlot({
      x: { field: "category", fieldType: "ordinal", scale: { domain: ["A", "B", "C"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "value", fieldType: "quantitative", scale: { domain: [0, 35] } },
      guides: false
    })
    // DOCS: doc-b257fb08998617a5 — source bandwidth 180 of 200 step slot → band 1
    .encodeBarWidth({ band: 1 })
    // DOCS: doc-fc11e9fb291905d1 — complete axes with source typography for tight margins
    .createGuides({
      grid: { horizontal: { color: "#ddd", count: 8 }, vertical: false },
      axes: {
        x: {
          ticksAndLabels: {
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: { text: "category", fontSize: 11, fontFamily: "sans-serif", fontWeight: "bold", offset: 28 }
        },
        y: {
          ticksAndLabels: {
            count: 8,
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "value",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: "bold",
            offset: 28,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      }
    });
}
