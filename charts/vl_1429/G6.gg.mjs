// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-3b660fabf78cdd08, doc-82e309a0b6ac0052
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 485,
      height: 439,
      margin: { left: 386, top: 23, right: 69, bottom: 386 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "r2", fieldType: "quantitative" })
    .editColorScale({
      domain: [0, 1],
      palette: "yellowgreenblue",
      interpolate: "hcl"
    })
    .editXScale({
      domain: [
        "2021-10-28_thaw-1_VSVG_control_1 vs 2021-12-14_thaw-1_no-antibody_control_1",
        "2021-10-28_thaw-1_VSVG_control_2 vs 2021-12-14_thaw-1_no-antibody_control_2"
      ],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: [
        "2021-10-28_thaw-1_VSVG_control_1 vs 2021-12-14_thaw-1_no-antibody_control_1",
        "2021-10-28_thaw-1_VSVG_control_2 vs 2021-12-14_thaw-1_no-antibody_control_2"
      ],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editRectMark({ stroke: "black", strokeWidth: 1 })
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
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: false
    })
    .createLegend({
      count: 3,
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendSymbols({ gradient: { length: 64 } })
    .editLegendLabels({ format: ".1f" })
    .editLegendTitle({ fontWeight: 700 })
    .createTitle({
      text: "Lib-1",
      offset: -8,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}