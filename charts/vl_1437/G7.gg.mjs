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
      x: { field: "sample_1", fieldType: "nominal" },
      y: { field: "sample_2", fieldType: "nominal" },
      guides: false
    })
    .editXScale({
      domain: [
        "2022-03-25_thaw-1_VSVG_control_1 vs 2022-04-13_thaw-1_no-antibody_control_1",
        "2022-03-25_thaw-1_VSVG_control_2 vs 2022-04-13_thaw-1_no-antibody_control_2"
      ]
    })
    .editYScale({
      domain: [
        "2022-03-25_thaw-1_VSVG_control_1 vs 2022-04-13_thaw-1_no-antibody_control_1",
        "2022-03-25_thaw-1_VSVG_control_2 vs 2022-04-13_thaw-1_no-antibody_control_2"
      ]
    })
    .encodeColor({ field: "r2", fieldType: "quantitative" })
    .editColorScale({ domain: [0, 1], palette: "yellowgreenblue" })
    .editRectMark({ stroke: "black" })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createYAxis({
      title: false,
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .createLegend({
      title: "r2",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendSymbols({ gradient: { length: 64 } })
    .editLegendTitle({ fontWeight: 700 })
    .createTitle({
      text: "Lib-1",
      offset: -13,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}