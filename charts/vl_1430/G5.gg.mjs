// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-82e309a0b6ac0052, doc-3b660fabf78cdd08, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const domain = [
    "2021-10-28_thaw-1_VSVG_control_1 vs 2021-12-14_thaw-1_no-antibody_control_1",
    "2021-10-28_thaw-1_VSVG_control_2 vs 2021-12-14_thaw-1_no-antibody_control_2"
  ];
  return chart()
    .createCanvas({
      width: 491,
      height: 439,
      margin: { left: 386, top: 23, right: 75, bottom: 386 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain, paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain, paddingInner: 0, paddingOuter: 0 })
    .encodeColor({
      field: "r2",
      fieldType: "quantitative"
    })
    .editColorScale({
      palette: "yellowgreenblue",
      domain: [0, 1]
    })
    .editRectMark({ stroke: "black", strokeWidth: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: domain,
        ticks: { color: "#888", length: 5 },
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
      line: { color: "#888" },
      ticksAndLabels: {
        values: domain,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGuides({
      axes: false,
      legend: {
        title: "r2",
        position: "right",
        gradient: { length: 64 },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    })
    .createTitle({
      text: "Lib-3",
      offset: -8,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}
