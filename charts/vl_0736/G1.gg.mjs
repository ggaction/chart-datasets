// DOCS: doc-cc4024999766e88b (createPiePlot), doc-9a0f2eeed4bc9b31 (polar arcs)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas 338x255, plot 200x200 via explicit margins
    .createCanvas({
      width: 345,
      height: 255,
      margin: { left: 5, top: 50, right: 140, bottom: 5 }
    })
    .createData({ id: "source", values: data })
    // Donut: category -> Regime, value -> value (sum), guides deferred
    .createPiePlot({
      category: "Regime",
      value: "value",
      guides: false
    })
    // Source innerRadius is 40 logical pixels
    .editArcMark({ innerRadius: 0.4, stroke: false })
    // Pin resolved category order (categorical theta domain)
    .editThetaScale({ domain: ["Authoritarian Regime", "Flawed Democracy", "Full Democracy", "Hybrid Regime"] })
    // Pin resolved category order (raw source order)
    .editColorScale({
      domain: ["Authoritarian Regime", "Flawed Democracy", "Full Democracy", "Hybrid Regime"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    // Legend: fill channel with title "Regime", right-side clearance
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Regime",
        channels: ["color"],
        position: "right",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    // Title block: fonts set first
    .createTitle({
      text: "Share of World GDP Represented by 4 Main Regimes",
      titleStyle: { fontSize: 13, fontWeight: "bold" },
      subtitleStyle: { fontStyle: "italic", fontSize: 12 }
    })
    // Anchor start, tight 50px top margin -> negative offset keeps text in canvas
    .editTitle({ subtitle: "Source: The Economist", align: "left", offset: -5 });
}