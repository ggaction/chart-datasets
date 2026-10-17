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
        x: {
          field: "cat",
          fieldType: "nominal",
          scale: { paddingInner: 0.1, paddingOuter: 0.05 },
        },
        y: { field: "value", fieldType: "quantitative" },
        guides: false,
      })
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
      // Explicit guide tree replacing the automatic guides:
      // - x bottom axis: #888 line, ticks + 10px labels rotated like the source
      //   (labelAngle 270 => -90 degrees, outward anchor), bold 11px "cat" title.
      // - y left axis: #888 line, ticks with the source tickCount ceil(200/40) = 5,
      //   10px right-aligned labels at offset 7, bold 11px "value" title.
      // - vertical grid lines on the x band scale, source #ddd
      //   (referenceGridAxisSpecs: scale y, gridScale x => vertical lines at x positions).
      .createAxes({
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              rotation: { value: -90, unit: "degrees" },
            },
          },
          title: { text: "cat", fontSize: 11, fontWeight: "bold", offset: 19 },
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7 },
          },
          title: { text: "value", fontSize: 11, fontWeight: "bold", offset: 28 },
        },
      })
      // Horizontal-only grid lines at y tick positions (source grid axis scale=y), #ddd.
      .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
  );
}