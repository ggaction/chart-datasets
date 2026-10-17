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
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "category", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      labels: { fontFamily: "sans-serif" },
      title: { fontFamily: "sans-serif", fontWeight: "bold" }
    })
    .createYAxis({
      ticksAndLabels: {
        count: 8,
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "value",
        fontSize: 11,
        offset: 28,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      labels: { fontFamily: "sans-serif" },
      title: { fontFamily: "sans-serif", fontWeight: "bold" }
    })
    // DOCS: doc-af5562e03efab97d — whole-grid family moved to directional editors: vertical default disabled via editGrid, horizontal grid appearance in createHorizontalGrid
    .createHorizontalGrid({ color: "#ddd", count: 8 });
}
