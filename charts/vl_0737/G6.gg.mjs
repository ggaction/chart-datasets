// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-6947deb65f00e732, doc-9e1fe774c8def920
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 487,
      height: 255,
      margin: { left: 5, top: 50, right: 282, bottom: 5 }
    })
    .createData({ values: data })
    .createPiePlot({
      category: {
        field: "Regime"
      },
      value: "value",
      guides: false
    })
    .editThetaScale({
      domain: [
        "Authoritarian Regime",
        "Flawed Democracy",
        "Full Democracy",
        "Hybrid Regime"
      ]
    })
    .encodeColor({
      field: "Regime",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: [
        "Flawed Democracy",
        "Authoritarian Regime",
        "Hybrid Regime",
        "Full Democracy"
      ],
      range: ["#880", "#700", "#935909", "#175930"]
    })
    .editArcMark({ innerRadius: { unit: "px", value: 40 }, stroke: false })
    .createTitle({
      text: "Share of World GDP weighted by Population Represented by 4 Main Regimes",
      titleStyle: { fontSize: 13, color: "black" },
      offset: -12
    })
    .editTitle({
      subtitle: "Source: The Economist",
      subtitleStyle: { fontStyle: "italic", fontSize: 12, color: "black" },
      gap: 4
    })
    .createLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendSymbols({
      symbol: {
        layers: [
          { type: "point", shape: "circle", size: 5, stroke: "none", strokeWidth: 0 }
        ]
      }
    })
    .editLegendTitle({
      fontWeight: "bold"
    });
}