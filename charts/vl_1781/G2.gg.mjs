import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-d8d22d3671e96045, doc-2dc8568cdadd5a99, doc-69327e6cf9f1c185, doc-05bad4ba0190e112, doc-919ecfba273140a0, doc-4caf8f5e4552a6b2

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 323, height: 200 },
      margin: { left: 79, top: 10, right: 74, bottom: 36 },
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({
      id: "gender",
      as: "gender",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } },
        then: { constant: "Female" },
        else: { constant: "Male" },
      },
    })
    .createSummaryData({
      id: "totals",
      groupBy: ["age", "gender"],
      aggregates: [{ op: "sum", field: "people", as: "totalPopulation" }],
    }).createBarPlot({
      x: {
        field: "age",
        fieldType: "ordinal",
        scale: {
          domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
          paddingInner: 0.1,
          paddingOuter: 0.05,
        },
      },
      y: { field: "totalPopulation", scale: { domain: [0, 12000000] } },
      guides: false,
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontFamily: "sans-serif",
              fontSize: 10,
              color: "black",
              rotation: { value: 270, unit: "degrees" },
              align: "right",
              offset: 8.5,
              alongOffset: 0.390625,
            },
          },
          title: {
            text: "age",
            fontFamily: "sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: "black",
            offset: 29.701171875,
            alongOffset: 0.5,
          },
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontFamily: "sans-serif",
              fontSize: 10,
              color: "black",
              format: ",.0f",
              offset: 7.5,
              alongOffset: 0.890625,
            },
          },
          title: {
            text: "Population",
            fontFamily: "sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: "black",
            offset: 66.470703125,
            alongOffset: 0.5,
          },
        },
      },
      grid: {
        horizontal: { color: "#ddd", values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000] },
      },
      legend: false,
    })
    .encodeColor({
      field: "gender",
      scale: { domain: ["Female", "Male"], range: ["#CC9933", "#3399CC"] },
      layout: "overlay",
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false, opacity: 1 })
    .facet({
      field: "gender",
      values: ["Female", "Male"],
      headers: {
        column: { side: "bottom", fontSize: 10, fontWeight: 400, color: "black", offset: 44.513671875 },
      },
    })
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    .editFacetHeaders({ role: "column", side: "bottom", offset: 44.513671875 })
    .editFacetHeaders({
      role: "column",
      title: { text: "gender", fontSize: 11, fontWeight: 700, offset: 75.578125 },
    })
    .editFacetGuides({ axes: "outer", legend: false })
    .editCompositionLayout({ columns: 2, gap: 2, spacing: "plot" })
    .editCompositionLayout({ topLane: "shared" })
    .editFacetGuides({ axes: "outer", legend: { title: "gender" } })
    .editLegend({
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "transparent", strokeWidth: 0 }] },
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
      titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" },
    });
}