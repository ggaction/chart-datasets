// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 createBarPlot; doc-76573a465e2b6a33 encodeBarWidth/createGuides trace
import { chart } from "ggaction";
import data from "./data.json";

// G1 compact integrated declaration of the settled source render.
// Canvas: contract 360x354, margins left84/top72/right76/bottom82 (plot 200x200 preserved).
// Data: complete frozen ./data.json (binned Amount centers with counts), no derivation needed.
// Facade: createBarPlot with x:"Amount" (quantitative centers), y:"count"; guides:false per budget.
// Bar geometry: source rect width 70px centered at each numeric Amount center -> encodeBarWidth({pixels:70}).
// Scales: x linear [0,12000], y linear [0,70] pinned from contract referenceScales (no range/zero authored).
// Grids: source grid-only axes (both directions, grid #ddd implicit default) -> createGrid.
// Axes: complete axes with source typography (labels 10px offset7, titles 11px bold), axis line #888.
// Title: "Angry Democrats Donations" 13px, offset = 72 - 16 - 13 = 43 from plot top (16px fixed inset).
export function buildChart() {
  return chart()
    .createCanvas({
      width: 360,
      height: 354,
      margin: { left: 84, top: 72, right: 76, bottom: 82 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Amount", fieldType: "quantitative", scale: { domain: [0, 12000], nice: false } },
      y: { field: "count", fieldType: "quantitative", scale: { domain: [0, 70], nice: false } },
      guides: false
    })
    .encodeBarWidth({ pixels: 70 })
    .createGrid({
      vertical: { scale: "x", color: "#ddd" },
      horizontal: { scale: "y", color: "#ddd" }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "Amount",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          offset: 28
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "# Donations",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          offset: 28
        }
      }
    })
    .createTitle({
      text: "Angry Democrats Donations",
      offset: 43,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: "bold" }
    });
}