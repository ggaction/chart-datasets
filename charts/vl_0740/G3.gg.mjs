// DOCS: doc-eb6e59db232dc6c0 (createHeatmap), doc-3558b809b504c100 (createHeatmap)
// DOCS: doc-82e309a0b6ac0052 (Heatmap Recipe), doc-60b61133ba03bf60, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 165,
      height: 165,
      margin: { left: 20, top: 5, right: 5, bottom: 20 }
    })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "High Median Age →", fieldType: "nominal" },
      y: { field: "High Giving Index →", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "color", fieldType: "nominal" })
    .editColorScale({
      type: "ordinal",
      domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      range: [
        "#FFF7FB", "#ECE7F2", "#D0D1E6", "#A6BDDB", "#74A9CF",
        "#3690C0", "#0570B0", "#045A8D", "#023858"
      ]
    })
    .editXScale({ domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 })
    .editRectMark({ stroke: false })
    .createXAxis({
      line: { color: "transparent" },
      ticksAndLabels: false,
      title: {
        text: "High Median Age →",
        color: "black",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 10
      }
    })
    .createYAxis({
      line: { color: "transparent" },
      ticksAndLabels: false,
      title: {
        text: "High Giving Index →",
        color: "black",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 10
      }
    });
}