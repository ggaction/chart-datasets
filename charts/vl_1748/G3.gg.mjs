// DOCS: doc-3558b809b504c100, doc-eb6e59db232dc6c0, doc-82e309a0b6ac0052
import { chart } from "ggaction";
import data from "./data.json";

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
    .editXScale({
      domain: ["Europe", "Japan", "USA"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: [3, 4, 5, 6, 8],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editRectMark({ fill: "#4c78a8", opacity: 0.6, cornerRadiusBottomLeft: 8 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "Origin", fontSize: 11, offset: 47 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif", color: "black" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cylinders", fontSize: 11, offset: 22 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif", color: "black" }
      },
      title: { fontWeight: 700, color: "black" }
    });
}
