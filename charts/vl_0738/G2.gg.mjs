// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 487, height: 255, margin: { left: 5, top: 50, right: 282, bottom: 5 } })
    .createData({ values: data })
    .createTitle({
      text: "Share of World GDP weighted by Population Represented by 4 Main Regimes",
      titleStyle: { color: "black", fontSize: 13 },
      subtitleStyle: { fontStyle: "italic", fontSize: 12, color: "black" }
    })
    .editTitle({ subtitle: "Source: The Economist", align: "left", offset: -4 })
    .createPiePlot({ category: "Regime", value: "value", guides: false })
    .editArcMark({ innerRadius: 0.4, stroke: false })
    .encodeColor({ field: "Regime", fieldType: "nominal" })
    .editColorScale({
      domain: ["Flawed Democracy", "Authoritarian Regime", "Hybrid Regime", "Full Democracy"],
      range: ["#700", "#880", "#175930", "#935909"]
    })
    .editThetaScale({
      domain: ["Authoritarian Regime", "Flawed Democracy", "Full Democracy", "Hybrid Regime"]
    })
    .createLegend({ channels: ["color"], title: "Regime", symbol: { layers: [{ type: "point", shape: "circle" }] } });
}
