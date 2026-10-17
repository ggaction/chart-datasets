// DOCS: doc-3558b809b504c100, doc-f84e560d3e4dc523, doc-82e309a0b6ac0052
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 476,
      height: 424,
      margin: { top: 23, right: 75, bottom: 386, left: 386 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({
      field: "r2",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [0, 1],
      range: ["rgb(239, 249, 189)", "rgb(28, 49, 133)"],
      interpolate: "hcl"
    })
    .editRectMark({ target: "heatmap", stroke: "black", strokeWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: false
    })
    .editXAxis({
      ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 } }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({
      ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 } }
    })
    .createLegend({
      position: "right",
      titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editLegendLabels({ fontFamily: "sans-serif" })
    .createTitle({
      text: "Lib-3",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700 },
      offset: -8
    });
}