// DOCS: doc-2bd5de4bd99e314a, doc-76573a465e2b6a33, doc-e790db38fc2a278a, doc-2e6240c00cb297cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 479,
      height: 154,
      margin: { left: 204, top: 5, right: 75, bottom: 37 }
    })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["counts", "variants"],
      as: { key: "fraction_type", value: "fraction" }
    })
    .createScatterPlot({
      x: { field: "fraction", fieldType: "quantitative" },
      y: { field: "library_sample", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({
      type: "point",
      domain: [
        "Lib-1 2021-10-28_thaw-1_VSVG_control_1",
        "Lib-1 2021-10-28_thaw-1_VSVG_control_2",
        "Lib-2 2021-10-28_thaw-1_VSVG_control_1",
        "Lib-2 2021-10-28_thaw-1_VSVG_control_2",
        "Lib-3 2021-10-28_thaw-1_VSVG_control_1",
        "Lib-3 2021-10-28_thaw-1_VSVG_control_2",
        "Lib-4 2021-10-28_thaw-1_VSVG_control_1",
        "Lib-4 2021-10-28_thaw-1_VSVG_control_2"
      ]
    })
    .encodeColor({ field: "fraction_type", fieldType: "nominal" })
    .editColorScale({ domain: ["counts", "variants"], range: ["#4c78a8", "#f58518"] })
    .encodePointRadius({ value: 3.5355339059327378 })
    .editPointMark({ opacity: 0.7 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true, overlap: "allow", format: ".1f" }
        },
        title: { text: "fraction above threshold", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } })
    .createLegend({
      position: "right",
      title: false,
      labels: { fontSize: 10 }
    });
}