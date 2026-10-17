// DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 415,
      height: 242,
      margin: { left: 105, top: 5, right: 110, bottom: 37 }
    })
    .createData({ id: "barley", values: data })
    .createComputedData({
      id: "ordered",
      as: "siteOrder",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "site" }, right: { constant: "University Farm" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "site" }, right: { constant: "Grand Rapids" } },
          then: { constant: 1 },
          else: { constant: 2 }
        }
      }
    })
    .createSortedData({ id: "sorted", source: "ordered", sortBy: [{ field: "siteOrder" }] })
    .createSummaryData({
      id: "summarized",
      groupBy: ["variety", "site"],
      aggregates: [{ field: "yield", op: "sum", as: "yield" }]
    })
    .createStackData({
      category: "variety",
      group: "site",
      value: "yield"
    })
    .createBarPlot({
      x: { lower: "yield_start", upper: "yield_end", fieldType: "quantitative" },
      y: {
        field: "variety",
        fieldType: "nominal"
      },
      guides: false
    })
    .encodeColor({ field: "site", layout: "overlay" })
    .editColorScale({
      target: "barPlot",
      domain: ["Crookston", "Duluth", "Grand Rapids", "Morris", "University Farm", "Waseca"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 500] })
    .editYScale({
      domain: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Sum of yield", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "variety", fontSize: 11, offset: 94 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createVerticalGrid({ color: "#ddd" })
    .createLegend({
      position: "right",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}