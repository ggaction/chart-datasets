// DOCS: doc-3558b809b504c100, doc-dfae58344d5a524e
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
    .editRectMark({
      fill: "#4c78a8",
      opacity: 0.6,
      cornerRadius: 16
    })
    .editRectMark({ cornerRadiusTopRight: 0, cornerRadiusBottomLeft: 0 })
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
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "Origin", fontSize: 11, offset: 43 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Cylinders", fontSize: 11, offset: 22 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 });
}
