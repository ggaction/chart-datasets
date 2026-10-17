import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-3b660fabf78cdd08, doc-60b61133ba03bf60

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
    .editRectMark({ fill: "#4c78a8", opacity: 0.6, cornerRadiusBottomRight: 8 })
    .editXScale({ domain: ["Europe", "Japan", "USA"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [3, 4, 5, 6, 8], paddingInner: 0, paddingOuter: 0 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            rotation: { value: -90, unit: "degrees" }
          }
        },
        title: { text: "Origin", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 43 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "Cylinders",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          offset: 22,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    });
}
