// DOCS: doc-eb6e59db232dc6c0, doc-3b660fabf78cdd08, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 491,
      height: 439,
      margin: { left: 386, top: 23, right: 75, bottom: 386 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "r2num",
      as: "r2_num",
      expression: { op: "toNumber", operand: { field: "r2" } }
    })
    .createHeatmap({
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
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
    .encodeColor({
      field: "r2_num",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [0, 1],
      palette: {
        name: "yellowgreenblue",
        count: 11
      },
      interpolate: "hcl"
    })
    .editRectMark({ stroke: "black", strokeWidth: 1 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
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
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createLegend({
      title: "r2",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendLabels({ fontFamily: "sans-serif" })
    .editLegendTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editLegendSymbols({ target: "heatmap", gradient: { length: 64 } })
    .createTitle({
      text: "Lib-4",
      offset: -8,
      titleStyle: {
        fontSize: 13,
        fontFamily: "sans-serif"
      }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" }
    });
}