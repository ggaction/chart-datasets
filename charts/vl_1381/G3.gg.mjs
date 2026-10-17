// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Source outer canvas 314x242; right margin widened 75→89 (+width 314→328) for default right legend; inner plot 200x200.
    .createCanvas({
      width: 328,
      height: 242,
      margin: { left: 39, top: 5, right: 89, bottom: 37 }
    })
    // DOCS: doc-c2eafbbd16fe3c71 (createData takes values/schema/id)
    .createData({ values: data })
    // G1: compact integrated declaration — x, y, guides:false exactly.
    // DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
    .createLinePlot({
      x: { field: "time", fieldType: "quantitative" },
      y: { field: "quantity", fieldType: "quantitative" },
      guides: false
    })
    // Scale domain ownership moved from the facade position channels to scale editors.
    .editXScale({ domain: [0, 20] })
    .editYScale({ domain: [0, 55] })
    // Field color moved out of the facade per G1 budget; source ordinal scale.
    .encodeColor({ field: "item", fieldType: "nominal" })
    // Color scale identity (domain/range) moved to the color scale editor.
    .editColorScale({
      domain: ["broom", "monkey", "slipper"],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    // Preserve line series grouping by item (no cross-series connection).
    .encodeGroup({ field: "item" })
    // Explicit guide tree: titled axes, #ddd grid, and the color legend.
    .createGuides({
      grid: {
        horizontal: { color: "#ddd" },
        vertical: { color: "#ddd" }
      },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "#000" }
          },
          title: {
            text: "time",
            fontSize: 11,
            fontWeight: "bold",
            color: "#000",
            offset: 28
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "#000" }
          },
          title: {
            text: "quantity",
            fontSize: 11,
            fontWeight: "bold",
            color: "#000",
            offset: 28
          }
        }
      },
      legend: {
        title: "item",
        titleStyle: { fontSize: 11, fontWeight: "bold" },
        labels: { fontSize: 10 }
      }
    });
}