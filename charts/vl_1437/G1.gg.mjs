// DOCS: doc-eb6e59db232dc6c0, doc-3b660fabf78cdd08, doc-3558b809b504c100
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
    .createHeatmap({
      x: {
        field: "sample_1",
        fieldType: "nominal",
        scale: {
          domain: [
            "2022-03-25_thaw-1_VSVG_control_1 vs 2022-04-13_thaw-1_no-antibody_control_1",
            "2022-03-25_thaw-1_VSVG_control_2 vs 2022-04-13_thaw-1_no-antibody_control_2"
          ]
        }
      },
      y: {
        field: "sample_2",
        fieldType: "nominal",
        scale: {
          domain: [
            "2022-03-25_thaw-1_VSVG_control_1 vs 2022-04-13_thaw-1_no-antibody_control_1",
            "2022-03-25_thaw-1_VSVG_control_2 vs 2022-04-13_thaw-1_no-antibody_control_2"
          ]
        }
      },
      guides: false
    })
    .encodeColor({
      field: "r2",
      fieldType: "quantitative",
      scale: {
        domain: [0, 1],
        palette: "yellowgreenblue"
      }
    })
    .editRectMark({ stroke: "black" })
    .createGuides({
      axes: {
        x: {
          title: false,
          ticksAndLabels: {
            labels: {
              fontSize: 10,
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          }
        },
        y: {
          title: false,
          ticksAndLabels: {
            labels: { fontSize: 10, offset: 7 }
          }
        }
      },
      legend: {
        position: "right",
        title: "r2",
        gradient: { length: 64 },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({
      text: "Lib-1",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    });
}