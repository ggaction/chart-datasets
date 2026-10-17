// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 117,
      height: 270,
      margin: { left: 72, top: 10, right: 5, bottom: 60 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "x",
        fieldType: "nominal"
      },
      y: {
        field: "y",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: ["fake", "reliable"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 2000000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "type", fontSize: 11, fontWeight: 700, offset: 53 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 500000, 1000000, 1500000, 2000000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, labelMap: [{ value: 0, label: "0" }, { value: 500000, label: "500,000" }, { value: 1000000, label: "1,000,000" }, { value: 1500000, label: "1,500,000" }, { value: 2000000, label: "2,000,000" }] }
      },
      title: { text: "Count", fontSize: 11, fontWeight: 700, offset: 61 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false });
}