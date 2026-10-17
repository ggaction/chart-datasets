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
    // Grid ownership separated from axes; #ddd source style preserved on both directions.
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    // Axes aggregate split into complete per-axis declarations (line, ticksAndLabels, title).
    // DOCS: doc-4facb3f7f9825633, doc-55bc813b8b74dd08
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "time",
        fontSize: 11,
        fontWeight: "bold",
        offset: 28
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "quantity",
        fontSize: 11,
        fontWeight: "bold",
        offset: 28
      }
    })
    // Axis paint ownership moved from the complete-axis declarations to whole-axis editors.
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisTitle({ color: "#000" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ color: "#000" })
    // Legend moved to a focused guide action; default outside spacing preserved.
    .createLegend({
      title: "item",
      titleStyle: { fontSize: 11, fontWeight: "bold" },
      labels: { fontSize: 10 }
    });
}