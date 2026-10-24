import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-d8d22d3671e96045, doc-9b8ffb4e65fb646c
export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 24, height: 200 }, margin: { left: 78, top: 56, right: 73, bottom: 46 } })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({ id: "gender", as: "gender", expression: { op: "if", condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } }, then: { constant: "Female" }, else: { constant: "Male" } } })
    .createSummaryData({ id: "totals", groupBy: ["age", "gender"], aggregates: [{ op: "sum", field: "people", as: "totalPopulation" }] })
    .createBarPlot({
      x: { field: "gender", fieldType: "nominal", scale: { domain: ["Female", "Male"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "totalPopulation", scale: { domain: [0, 12000000] } },
      guides: {
        axes: {
          x: {
            line: { color: "#888" },
            ticksAndLabels: { values: ["Female", "Male"], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", rotation: { value: 270, unit: "degrees" }, align: "right", offset: 7.5, alongOffset: 0.390625 } },
            title: false
          },
          y: {
            line: { color: "#888" },
            ticksAndLabels: { values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000], ticks: { length: 5, color: "#888", alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625 } },
            title: { text: "population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 65.470703125, alongOffset: 0.5 }
          }
        },
        grid: false,
        legend: false
      }
    })
    .encodeColor({ field: "gender", scale: { domain: ["Female", "Male"], range: ["#EA98D2", "#659CCA"] }, layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false, opacity: 1 })
    .facet({ field: "age", values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], headers: { column: { side: "top", fontSize: 10, fontWeight: 400, color: "black", offset: 9.609375 } } })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ role: "column", side: "top", offset: 9.609375 })
    .editFacetHeaders({ role: "column", title: { text: "age", fontSize: 11, fontWeight: 700, offset: 39.421875 } })
    .editFacetGuides({ axes: "outer", legend: false })
    .editCompositionLayout({ columns: 19, gap: 20, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared" })
    .editFacetGuides({ axes: "outer", legend: { title: "gender" } })
    .editLegend({ symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "transparent", strokeWidth: 0 }] }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } });
}