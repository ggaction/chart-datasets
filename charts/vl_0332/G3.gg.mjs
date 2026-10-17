
// DOCS: doc-da6e304c0dd40c0c (facet), doc-fc11e9fb291905d1 (createBarPlot),
// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-f1f94dec7d5389ca (composition)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return (
    chart()
      // Stage 1: Canvas scaffold at birth (source margins, inner plot, border paint).
      .createCanvas({
        width: 230,
        height: 320,
        margin: { left: 30, right: 100, top: 10, bottom: 10 }
      })
      .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
      // Stage 2: One complete frozen ancestor dataset; every raw row retained.
      .createData({ values: data })
      // Stage 3: Highest ordinary semantic facade; source scales, color layout, band width.
      .createBarPlot({
        x: "category",
        y: "value",
        guides: false
      })
      .encodeColor({ field: "category", layout: "overlay" })
      .editColorScale({
        domain: ["All US adults", "Crypto owners"],
        range: ["#033542", "#78969d"]
      })
      .editXScale({
        domain: ["All US adults", "Crypto owners"],
        paddingInner: 0.1,
        paddingOuter: 0.05
      })
      .editYScale({ domain: [0, 70] })
      .encodeBarWidth({ band: 1 })
      .editBarMark({ stroke: false })
      // Stage 4: Guides at birth with measured source fonts; y axis, horizontal grid, swatch legend.
      
      .createYAxis({
        title: false,
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        }
      })
      .createGrid({
        horizontal: { values: [0, 10, 20, 30, 40, 50, 60, 70], color: "#ddd" }
      })
      .createLegend({
        title: false,
        labels: { fontSize: 10, color: "black" },
        symbol: {
          layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }]
        }
      })
      // Stage 5: Native facet partitions the full ancestor raw rows by Ethnicity; no manual partitioning.
      .facet({
        field: "Ethnicity",
        values: ["Asian or other", "Black", "Hispanic", "White"],
        headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 5 }
      })
      .editFacetGuides({ axes: "outer", legend: "shared" })
      // Stage 6: Measured final header offset for the whole composition.
      
      // Stage 7: Composition layout: plot spacing, source gap and alignment.
      .editCompositionLayout({ spacing: "plot", gap: 22, align: "start" })
      .editFacetHeaders({ offset: 10.609375 })
      // Stage 8a: Global title with actual source text and fonts before eager placement.
      .createTitle({
        text: "Cryptocurrency ownership by ethnicity in USA",
        titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
        offset: -2.953125
      })
      // Stage 8b: Measured alongOffset and title-subtitle gap.
      .editTitle({ alongOffset: -19.123046875, gap: 3.34375 })
      // Stage 8c: Exact source subtitle with measured style.
      .editTitle({
        subtitle: "as a % of the population or total crypto owners, source: Morning Consult Crypto Report",
        subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
      })
  );
}
