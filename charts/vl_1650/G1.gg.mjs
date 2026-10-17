// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-76573a465e2b6a33 (basic-charts/scatter)
// G1 compact integrated declaration: pivot source data, scatter facade with guides:false,
// explicit pinned scales, point styling, and explicit guide tree (grid + complete axes).
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 274,
      height: 102,
      margin: { left: 66, top: 5, right: 8, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    // Pivot: one row per city, temperature per year as "2017"/"2018" columns.
    .filterData({ id: "in2017", field: "year", oneOf: [2017] })
    .createSummaryData({
      id: "pivoted",
      groupBy: "city",
      aggregates: [{ field: "temperature", op: "sum", as: "2017" }]
    })
    .createScatterPlot({
      x: { field: "2017", fieldType: "quantitative" },
      y: { field: "city", fieldType: "nominal" },
      guides: false
    })
    // Pin resolved scales measured from the settled source.
    .editXScale({ domain: [0, 12] })
    .editYScale({ type: "point", domain: ["Bristol", "Glasgow", "Sheffield"] })
    // Constant point appearance: source size 30 -> radius sqrt(30)/2, opacity 0.7.
    .editPointMark({
      fill: "#4c78a8",
      opacity: 0.7,
      stroke: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    // Vertical grid lines at the x tick positions (source #ddd).
    .createGrid({
      horizontal: false,
      vertical: { scale: "x", values: [0, 2, 4, 6, 8, 10, 12], color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "2017", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "city", fontSize: 11, fontWeight: "bold", offset: 55 }
    });
}
