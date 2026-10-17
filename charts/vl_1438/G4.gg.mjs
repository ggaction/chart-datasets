// DOCS: doc-3558b809b504c100, doc-60b61133ba03bf60, doc-3b660fabf78cdd08
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 470,
      height: 424,
      margin: { left: 386, top: 23, right: 69, bottom: 386 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "r2", fieldType: "quantitative" })
    .editColorScale({ domain: [0, 1], range: ["rgb(239, 249, 189)", "rgb(28, 49, 133)"], interpolate: "hcl" })
    .editXScale({ domain: ["2022-06-22_thaw-1_VSVG_control_1 vs 2022-06-22_thaw-1_no-antibody_control_1"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: ["2022-06-22_thaw-1_VSVG_control_1 vs 2022-06-22_thaw-1_no-antibody_control_1"], paddingInner: 0, paddingOuter: 0 })
    .editRectMark({ target: "heatmap", stroke: "black" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "r2",
        gradient: { length: 64 },
        count: 3,
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    })
    .createTitle({
      text: "Lib-2",
      offset: -8,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    });
}