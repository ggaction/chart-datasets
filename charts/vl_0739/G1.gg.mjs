// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 255, margin: { left: 5, top: 50, right: 133, bottom: 5 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-typography", measurements: [
      { text: "Flawed Democracy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 85.59375 },
      { text: "Authoritarian Regime", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 93.9375 },
      { text: "Full Democracy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 69.46875 },
      { text: "Hybrid Regime", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 66.140625 },
      { text: "Regime", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 39.75 },
      { text: "Share of World GDP Represented by 4 Main Regimes", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, width: 326.796875 },
      { text: "Source: The Economist", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, width: 125.560546875 }
    ] } })
    .createData({ values: data })
    .createSortedData({ id: "sourceArcOrder", sortBy: [{ field: "Regime", order: "ascending" }] })
    .createPiePlot({ category: "Regime", value: "value", guides: false })
    .editArcMark({ innerRadius: 0.4, stroke: false })
    
    .encodeColor({
      field: "Regime",
      fieldType: "nominal",
      scale: {
        domain: ["Flawed Democracy", "Authoritarian Regime", "Full Democracy", "Hybrid Regime"],
        range: ["#700", "#880", "#175930", "#935909"]
      }
    })
    .createGuides({ axes: false, grid: false, legend: { position: "right", title: "Regime", titleStyle: { fontSize: 11, fontWeight: 700 }, symbol: { layers: [{ type: "point", size: 5 }] }, labels: { fontSize: 10 } } })
    .createTitle({
      text: "Share of World GDP Represented by 4 Main Regimes",
      align: "left",
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ subtitleStyle: { fontStyle: "italic", fontSize: 12 } })
    .editTitle({ subtitle: "Source: The Economist", offset: -11 });
}