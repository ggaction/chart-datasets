// DOCS: actual delivered doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 369, height: 357, margin: { left: 140, top: 35, right: 49, bottom: 22 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-fonts",
        measurements: [
          { text: "CO2 per capita emissions by region", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 221.078125 },
          { text: "Metric tons per capita (2019). Source: Center for International Climate Research.", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 357.390625 }
        ]
      }
    })
    .createTitle({
      text: "CO2 per capita emissions by region",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -13,
      alongOffset: -134.2802734375
    })
    .editTitle({
      subtitle: "Metric tons per capita (2019). Source: Center for International Climate Research.",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black", fontFamily: "sans-serif" }
    })
    .createData({ values: data })
    .createComputedData({ id: "emissions", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({
      x: { field: "ValueNum", fieldType: "quantitative" },
      y: { field: "Region", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 16] })
    .editYScale({ domain: ["North America", "Oceania", "European Union", "East Asia and Pacific", "Middle East and North Africa", "Latin America & Caribbean", "South Asia", "Sub-Saharan Africa"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "#86d0bb", opacity: 1 })
    .encodeBarWidth({ band: 1 })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } },
        title: false
      }
    });
}
