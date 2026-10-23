import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-9b8ffb4e65fb646c (editCompositionLayout signature and preserved omission semantics)
export function buildChart() {
  return chart()
    // Stage1 canvas + source text metrics (two measured negative-label widths)
    .createCanvas({
      plot: { width: 60, height: 275 },
      margin: { left: 45, top: 26, right: 6, bottom: 81 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0526-two-source-negative-label-widths-v1",
        measurements: [
          { text: "−15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.96875 },
          { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.96875 }
        ]
      }
    })
    // Stage2 data binding: original CSVSTRING rows preserved (keys Nation/Quarter/Value/Detail incl. unused Detail)
    .createData({ values: data })
    .createComputedData({
      id: "numeric",
      as: "numericValue",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createSummaryData({
      id: "panelSummary",
      groupBy: ["Quarter", "Nation"],
      aggregates: [{ op: "sum", field: "numericValue", as: "settledValue" }]
    })
    // Stage3 bar plot at birth with complete directional axes and grid-only guides
    .createBarPlot({
      x: {
        field: "Nation",
        scale: { domain: ["Wales", "Northern Ireland", "England", "Scotland"], paddingInner: 0.1, paddingOuter: 0.05 }
      },
      y: { field: "settledValue", scale: { domain: [-25, 15] } },
      guides: false
    })
    .encodeColor({
      field: "Nation",
      layout: "overlay",
      scale: { domain: ["England", "Northern Ireland", "Scotland", "Wales"], range: ["#122b39", "#00a767", "#179fdb", "#e6224b"] }
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, rotation: { value: 270, unit: "degrees" }, align: "right", offset: 3.5, alongOffset: 0.390625 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-25, -20, -15, -10, -5, 0, 5, 10, 15],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7.5,
          labelMap: [
            { value: -25, label: "−25" },
            { value: -20, label: "−20" },
            { value: -15, label: "−15" },
            { value: -10, label: "−10" },
            { value: -5, label: "−5" }
          ],
          alongOffset: 0.890625
        }
      },
      title: { text: "GDP growth versus 2019Q4 (%)", fontSize: 11, fontWeight: 700, offset: 33.384765625, alongOffset: 0.5 }
    })
    .createGuides({ axes: false, grid: { horizontal: { color: "#ddd" } }, legend: false })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ labels: { color: "white" } })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black" })
    // DOCS: doc-9b8ffb4e65fb646c (facet repeats the complete chart by a field)
    // Facet at birth: field/headers/guides only; parent-owned inside legend at source-qualified coordinates;
    // native legend itemGap/label offset omitted (defaults 18 pitch / 8 label gap)
    .facet({
      field: "Quarter",
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 },
      guides: {
        axes: "outer",
        legend: {
          at: { x: 18, y: 18.578125 },
          titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
          labels: { fontSize: 10, color: "black" },
          symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] },
          titlePadding: 5.8125
        }
      }
    })
    // DOCS: doc-9b8ffb4e65fb646c (columns wrapping on facet composition)
    // DOCS: doc-06d1dfbd494a77d9 (space between plots: spacing plot, gap)
    .editCompositionLayout({ columns: 4, spacing: "plot", gap: 2 })
    // DOCS: doc-9be42ac1ab803c31 (share the existing facet top margin via topLane shared)
    .editCompositionLayout({ topLane: "shared" });
}