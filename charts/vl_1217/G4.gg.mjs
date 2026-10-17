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
      x: { field: "category", fieldType: "ordinal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    // DOCS: doc-b257fb08998617a5 — source bandwidth 180 of 200 step slot → band 1
    .encodeBarWidth({ band: 1 })
    // DOCS: doc-6c2c08869091f6a0 — scale objects moved from facade bindings into scale editors, X and Y paired
    .editXScale({ domain: ["A", "B", "C"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 35] })
    // DOCS: doc-7f2c254224fc4908 — axes aggregate decomposed into per-axis complete axes with identical settings
    .createXAxis({
      ticksAndLabels: {
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "category", fontSize: 11, fontFamily: "sans-serif", fontWeight: "bold", offset: 28 }
    })
    .createYAxis({
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
    })
    // DOCS: doc-af5562e03efab97d — explicit horizontal grid preserved as createGrid, vertical disabled; moved after createAxes to match guides insertion order (axes → grid → legend)
    .createGrid({ horizontal: { color: "#ddd", count: 8 }, vertical: false });
}
