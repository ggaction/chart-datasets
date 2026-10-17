// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 708, height: 388, margin: { left: 53, top: 38, right: 5, bottom: 50 } })
    .createData({ values: data })
    .createBarPlot({
      x: "Year of Survey type",
      y: "count",
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["?", "2020", "2019", "2021"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 7000], zero: true })
    .createTitle({
      text: "Year of Survey Image (sidewalks)",
      offset: -6,
      titleStyle: { fontSize: 24, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Year of Survey type", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 42 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 40 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticks: { color: "#888" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticks: { color: "#888" }
    });
}
