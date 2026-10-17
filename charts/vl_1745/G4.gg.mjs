// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 238, height: 265, margin: { left: 33, top: 5, right: 5, bottom: 60 } })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "Origin", fieldType: "nominal" },
      y: { field: "Cylinders", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: ["Europe", "Japan", "USA"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [3, 4, 5, 6, 8], paddingInner: 0, paddingOuter: 0 })
    .editRectMark({ cornerRadius: 8, opacity: 0.6, fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 4 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Origin", fontSize: 11, offset: 42 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 4 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cylinders", fontSize: 11, offset: 23 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: 700 });
}
