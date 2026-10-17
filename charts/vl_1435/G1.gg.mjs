// DOCS: doc-74fc341a49e892f8 (complete axes), doc-071c93dff3a5ea2e (minimal flow)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 479, height: 98, margin: { left: 204, top: 5, right: 75, bottom: 37 } })
    .createData({ id: "source", values: data })
    .createFoldData({ id: "folded", fields: ["counts", "variants"], as: { key: "fraction_type", value: "fraction" } })
    .createScatterPlot({
      x: { field: "fraction", fieldType: "quantitative", scale: { domain: [0, 1] } },
      y: { field: "library_sample", fieldType: "nominal", scale: { type: "point", domain: [
        "Lib-1 2022-03-25_thaw-1_VSVG_control_1",
        "Lib-1 2022-03-25_thaw-1_VSVG_control_2",
        "Lib-2 2022-06-22_thaw-1_VSVG_control_1",
        "Lib-3 2022-06-22_thaw-1_VSVG_control_1"
      ] } },
      guides: false
    })
    .encodeColor({ field: "fraction_type", fieldType: "nominal", scale: { domain: ["counts", "variants"] } })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 3.5355339059327378 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: { values: [0, 0.2, 0.4, 0.6, 0.8, 1], ticks: {}, labels: { fontSize: 10, offset: 5, format: ".1f", flush: true } },
          title: { text: "fraction above threshold", fontSize: 11, fontWeight: "bold", offset: 27 }
        },
        y: { ticksAndLabels: { labels: { fontSize: 10, offset: 6 } }, title: false }
      },
      grid: { horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } },
      legend: { position: "right", title: false, labels: { fontSize: 10 } }
    });
}
