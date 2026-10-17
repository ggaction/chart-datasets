import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-3558b809b504c100, doc-eb6e59db232dc6c0, doc-60b61133ba03bf60
export function buildChart() {
  return chart()
    .createCanvas({
      width: 238,
      height: 265,
      margin: { left: 33, top: 5, right: 5, bottom: 60 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "Origin", fieldType: "nominal" },
      y: { field: "Cylinders", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: ["Europe", "Japan", "USA"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [3, 4, 5, 6, 8], paddingInner: 0, paddingOuter: 0 })
    .editRectMark({ fill: "#4c78a8", opacity: 0.6, cornerRadiusTopRight: 8 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: ["Europe", "Japan", "USA"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Origin", fontSize: 11, fontWeight: 700, offset: 48 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [3, 4, 5, 6, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cylinders", fontSize: 11, fontWeight: 700, offset: 22 }
    })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" });
}