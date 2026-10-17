// DOCS: doc-2bd5de4bd99e314a, doc-aff0694302d3fc9f, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-e790db38fc2a278a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Canvas: 278x267 with source margins; plot area 200x200 preserved exactly.
    .createCanvas({
      width: 278,
      height: 267,
      margin: { left: 33, top: 30, right: 45, bottom: 37 }
    })
    // DOCS: doc-2e6240c00cb297cc — createData takes values (no schema needed; raw immutable dataset)
    .createData({ values: data })
    // DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33 — integrated scatter facade; guides:false so the
    // explicit guide tree below owns axes/grid/legend. Resolved domains [0,40]/[0,4] pinned.
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative", scale: { domain: [0, 40] } },
      y: { field: "y", fieldType: "quantitative", scale: { domain: [0, 4] } },
      guides: false
    })
    // Constant size 2000 -> circle radius sqrt(2000)/2 (doc-76573a465e2b6a33: size vs radius).
    .encodePointRadius({ value: 22.360679774997898 })
    // Fill channel driven by y (ordinal), resolved per-value palette from the source.
    .encodeColor({
      field: "y",
      fieldType: "ordinal",
      scale: {
        domain: [1, 2, 3, 4],
        range: [
          "rgb(168, 206, 229)",
          "rgb(116, 178, 215)",
          "rgb(69, 146, 198)",
          "rgb(32, 111, 178)"
        ]
      }
    })
    // Constant mark appearance: black stroke, strokeWidth 2, opacity 0.7.
    .editPointMark({ stroke: "black", strokeWidth: 2, opacity: 0.7 })
    // Explicit axes with source titles (11px bold), source labels (10px, offset 7);
    // grid as a separate createGrid with source #ddd paint.
    .createAxes({
      x: {
        ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
        title: { text: "x", fontSize: 11, fontWeight: "bold" }
      },
      y: {
        ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
        title: { text: "y", fontSize: 11, fontWeight: "bold" }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    // DOCS: doc-aff0694302d3fc9f — single fill legend for y; circle symbols, black stroke, 0.7 opacity.
    .createLegend({
      channels: ["color"],
      title: "y"
    })
.editYAxis({ title: { offset: 20.9833984375 } });
}