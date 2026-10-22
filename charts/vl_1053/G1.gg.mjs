import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .createCanvas({ width: 326, height: 344, margin: { left: 55, right: 71, top: 89, bottom: 55 } })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1053-original-source-font-widths", measurements: [
      { text: "gender", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 36.6875 },
      { text: "female", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.015625 },
      { text: "male", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.6875 },
      { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "Category", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 47.6875 }
    ] } })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .createData({ values: data })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .createPiePlot({ category: "category", value: "value", guides: false })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .editArcMark({ stroke: false })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 150 }, overflow: "allow" } })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .encodeColor({ field: "category", scale: { domain: [1, 2, 3, 4, 5, 6], range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"] } })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .createLegend({ title: "Category", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, labels: { fontSize: 10, color: "black" } })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference)
    .editLegend({ symbol: { layers: [{ type: "point", size: 3.1622776601683795 }] }, border: { background: "#ffffff", lineWidth: 0, padding: 0 } })
    // DOCS: doc-c2f124b1ba4ad332 (action-cards facet)
    .facet({ field: "gender", values: ["female", "male"], headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 24.390625 } })
    // DOCS: doc-da6e304c0dd40c0c (facets)
    .editFacetScales({ color: "independent" })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference editCompositionLayout)
    .editCompositionLayout({ gap: 10 })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference createTitle)
    .createTitle({ text: "gender", titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }, offset: -2.421875 })
    // DOCS: doc-9b8ffb4e65fb646c (action-reference editTitle)
    .editTitle({ align: "center", alongOffset: 8 });
}