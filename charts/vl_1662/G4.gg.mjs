// DOCS: actual delivered doc-* IDs.
// createBarPlot: doc-6c2c08869091f6a0 (action-cards.json /cards/269),
//                doc-fc11e9fb291905d1 (docs/api/basic-charts.md#L177),
//                doc-bedf05337affd6f4 (docs/recipes/bar-chart.md)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return (
    chart()
      // Outer 244x243 with the contract margin; plot area stays exactly 200x200.
      .createCanvas({
        width: 244,
        height: 243,
        margin: { left: 39, top: 10, right: 5, bottom: 33 },
      })
      // Raw immutable dataset from ./data.json.
      .createData({ id: "source", values: data })
      // Integrated G1 bar facade: x (nominal band) + y (quantitative),
      // guides:false so the explicit guide tree below owns all guides.
      .createBarPlot({
        x: { field: "cat", fieldType: "nominal" },
        y: { field: "value", fieldType: "quantitative" },
        guides: false,
      })
      // Source paddingInner 0.1 / paddingOuter 0.05 moves to the scale editor;
      // band slot geometry is unchanged.
      .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
      // Source mark.color is a CONSTANT item-local vertical linear gradient
      // (red top -> orange 0.4 -> blue bottom) painted identically on every bar,
      // not a value-driven color scale. No color legend exists in the source.
      .editBarMark({
        fill: {
          type: "linear-gradient",
          from: { x: 1, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { offset: 0, color: "red" },
            { offset: 0.4, color: "orange" },
            { offset: 1, color: "blue" },
          ],
        },
      })
      // Source paddingInner 0.1 / paddingOuter 0.05 leaves full 45px bandwidth; band 1
      // matches the source bar thickness exactly (default would be 0.72 of the slot).
      .encodeBarWidth({ band: 1 })
      // Complete per-axis declarations (X then Y), preserving all protected
      // geometry: tick length 5, label offset 7 / rotation -90deg, title offsets.
      .createXAxis({
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: -90, unit: "degrees" },
          },
        },
        title: { text: "cat", fontSize: 11, offset: 19 },
      })
      .createYAxis({
        ticksAndLabels: {
          count: 5,
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 },
        },
        title: { text: "value", fontSize: 11, offset: 28 },
      })
      // Horizontal-only grid lines at y tick positions (source grid axis scale=y), #ddd.
      .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
      // Whole-axis ownership layer (paired X/Y): line color, tick color and
      // title fontWeight move together out of the complete axis declarations.
      .editXAxis({
        line: { color: "#888" },
        ticks: { color: "#888" },
        title: { fontWeight: "bold" },
      })
      .editYAxis({
        line: { color: "#888" },
        ticks: { color: "#888" },
        title: { fontWeight: "bold" },
      })
  );
}