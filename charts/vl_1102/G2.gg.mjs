import { chart } from "ggaction";
import data from "./data.json";

// G1 complete whole-chart program: 7-panel column facet of bar plots, final 606x403.
export function buildChart() {
  // Standalone child canvas: 234x384.390625 with margins left 65 / right 109 / top 7.390625 / bottom 77,
  // giving the 60x300 plot; the seven source panels assemble at the source origins into the 606x403 output.
  return chart()
    .createCanvas({
      width: 234,
      height: 384.390625,
      margin: { left: 65, right: 109, top: 7.390625, bottom: 77 }
    })
    // Retain every ancestor raw row exactly once via the frozen ./data.json import.
    .createData({ values: data })
    // Raw "Value" strings are not coercible: fresh derived numeric alias via toNumber,
    // preserving all 42 raw rows and the original Value field.
    .createComputedData({
      id: "energyValueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    // Bar facade: source band scale with frozen domain order, paddingInner 0.1 / paddingOuter 0.05;
    // y domain [0, 100000]; no per-panel guides (axes are outer, legend shared).
    .createBarPlot({
      x: {
        field: "Type",
        scale: { type: "band", domain: ["Coal", "Draught Animal", "Firewood", "Human", "Water", "Wind"], paddingInner: 0.1, paddingOuter: 0.05 }
      },
      y: { field: "ValueNum", scale: { domain: [0, 100000] } },
      guides: false
    })
    // Separate color encoding: source 6-domain / exact 6-hex range, overlay layout.
    .encodeColor({
      field: "Type",
      layout: "overlay",
      scale: { domain: ["Coal", "Draught Animal", "Firewood", "Human", "Water", "Wind"], range: ["#122b39", "#e6224b", "#f4c345", "#00a767", "#179fdb", "#36b7b4"] }
    })
    // Source fixed 9px bars (band fraction 1) with no stroke.
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    // Guides created before facet. X: bottom, no title, no ticks, 10px white labels rotated 270 degrees at offset 3.5.
    .createAxes({
      x: {
        title: false,
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { ticks: { length: 0, color: "transparent" }, labels: { fontSize: 10, color: "white", offset: 3.5, rotation: { value: 270, unit: "degrees" } } }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7, format: ",.0f" }
        },
        title: { text: "Energy consumption per capita (megajoules)", fontSize: 11, fontWeight: 700, color: "black", offset: 52.5693359375 }
      }
    })
    // Source horizontal grid at the same 11 values.
    .createHorizontalGrid({
      values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
      color: "#ddd",
      lineWidth: 1
    })
    // Shared parent-owned legend: 11px/700/black title, 10px black labels, one 10x10 strokeless swatch layer.
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .editLegendTitle({ title: "Energy source" })
    // One-field facet composition: outer axes, shared legend, implicit column headers at measured offset 8.609375.
    .facet({
      field: "Time",
      spacing: "plot",
      guides: { axes: "outer", legend: "shared" },
      headers: { fontSize: 10, offset: 8.609375 }
    })
    // Header ownership boundary: source header weight/color move to the focused whole-composition editor.
    .editFacetHeaders({ fontWeight: 400, color: "black" })
    // Source 2px inter-panel gap with start alignment.
    .editCompositionLayout({ gap: 2, align: "start" });
}
// All 7 source panels, 42 raw rows, per-panel raw partitions, source global headers/axes/shared legend are preserved;
// no manual row partitioning, no flattened child datasets, no primitive replay. Final assembled output is the single
// source-equivalent 606x403 faceted chart.
// DOCS: doc-6c2c08869091f6a0 (createBarPlot card), doc-082280176c704b96 (Repeated chart structure/facet).