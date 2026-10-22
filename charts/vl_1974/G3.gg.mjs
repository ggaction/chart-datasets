import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-8f7efd41b2186a84 createBarPlot facade for categorical bars
// DOCS: doc-9be42ac1ab803c31 facet-shared-top-lane whole-program shape
// DOCS: doc-06d1dfbd494a77d9 shared top lane retains 508x262 source frame
// DOCS: doc-a00014ef473037d0 facet header styling and labelMap
// DOCS: doc-fc11e9fb291905d1 bar position/scale vocabulary

export function buildChart() {
  // Stage 1: standalone child canvas (verified geometry only)
  return chart()
    .createCanvas({ plot: { width: 40, height: 200 }, margin: { left: 40, top: 43, right: 56, bottom: 19 }, plotBorder: { color: "#ddd", lineWidth: 1 } })

    // Stage 2: frozen raw rows plus public weekday derivation (all 14 raw dates retained)
    .createData({ values: data })
    .createTimeUnitData({ id: "weekdays", field: "label", unit: "weekday" })

    // Stage 3: bar facade with complete source guides at birth (band scale, domain [0,50])
    .createBarPlot({ x: { field: "group" }, y: { field: "value" }, guides: false })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 50], nice: false })

    // Stage 4: grouped overlay color, band-1 widths, outline-free bars
    .encodeColor({ field: "group", layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: ["a", "b"],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, color: "black", rotation: { value: -90, unit: "degrees" }, offset: 8.5, alongOffset: 0.390625 }
          },
          title: false
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, color: "black", offset: 7.5, alongOffset: 0.890625 }
          },
          title: { text: "value", fontSize: 11, fontWeight: 700, color: "black", offset: 27.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: false,
      legend: false
    })

    // Stage 5: shared categorical legend with measured source fonts and swatch recipe
    .createLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, strokeWidth: 0, opacity: 1 }] }
    })
    .editLegend({ titlePadding: 3 })

    // Stage 6: single facet with weekday header labelMap at birth
    .facet({
      field: "label_weekday",
      values: [0, 1, 2, 3, 4, 5, 6],
      headers: {
        fontSize: 10,
        fontWeight: 400,
        color: "black",
        offset: 10.609375,
        labelMap: [
          { value: 0, label: "Sun" },
          { value: 1, label: "Mon" },
          { value: 2, label: "Tue" },
          { value: 3, label: "Wed" },
          { value: 4, label: "Thu" },
          { value: 5, label: "Fri" },
          { value: 6, label: "Sat" }
        ]
      }
    })

    // Stage 7: outer facet guides and plot-spaced shared-top composition
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ spacing: "plot", gap: 22, topLane: "shared" })

    // Stage 8: parent title with measured placement
    .createTitle({ text: "Grouped Bar Chart", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -2.953125, alongOffset: -34.123046875 });
}