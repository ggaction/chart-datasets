// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-5134693c6a279d8c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 415,
      height: 242,
      margin: { left: 105, top: 5, right: 110, bottom: 37 },
    })
    .createData({ values: data })
    .createSummaryData({
      id: "agg",
      groupBy: ["variety", "site"],
      aggregates: [{ field: "yield", op: "sum", as: "sum_yield" }],
    })
    .createSortedData({
      id: "sort-site-desc",
      sortBy: [{ field: "site", order: "ascending" }],
    })
    .createStackData({
      category: "variety",
      group: "site",
      value: "sum_yield",
    })
    .createBarPlot({
      x: {
        lower: "sum_yield_start",
        upper: "sum_yield_end",
      },
      y: {
        field: "variety",
        fieldType: "nominal",
      },
      guides: false,
    })
    .editXScale({ domain: [0, 500] })
    .editYScale({
      domain: [
        "Glabron", "Manchuria", "No. 457", "No. 462", "No. 475",
        "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38",
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05,
    })
    .encodeColor({
      field: "site",
      layout: "overlay",
    })
    .editColorScale({
      domain: ["Crookston", "Duluth", "Grand Rapids", "Morris", "University Farm", "Waseca"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"],
    })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
      },
      title: { text: "Sum of yield", fontSize: 11, fontWeight: 700, offset: 28 },
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
      },
      title: { text: "variety", fontSize: 11, fontWeight: 700, offset: 86, rotation: { value: -90, unit: "degrees" } },
    })
    .createGrid({ horizontal: false, vertical: { scale: "x", color: "#ddd" } })
    .createLegend({
      channels: ["color"],
      title: "site",
      labels: { fontSize: 10 },
    });
}