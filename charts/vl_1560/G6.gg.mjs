import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69, doc-18627fd264d621fc

export function buildChart() {
  return chart()
    .createCanvas({ width: 349, height: 242, margin: { left: 78, top: 5, right: 71, bottom: 37 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["dem", "rep", "decline", "other"], as: { key: "party", value: "percentage" } })
    .createComputedData({ id: "computed", as: "total_people", expression: { op: "multiply", left: { field: "registered" }, right: { field: "percentage" } } })
    .createSortedData({ id: "sortedParties", sortBy: [{ field: "party", order: "descending" }] })
    .createStackData({ category: "year", group: "party", value: "total_people" })
    .createAreaPlot({
      x: { field: "year" },
      y: { lower: "total_people_start", upper: "total_people_end" },
      guides: false
    })
    .editXScale({ target: "areaPlot", domain: [1992, 2008], nice: false })
    .editYScale({ target: "areaPlot", domain: [0, 16000000], nice: false })
    .encodeGroup({
      target: "areaPlot",
      fields: ["party"]
    })
    .encodeColor({
      field: "party",
      target: "areaPlot"
    })
    .editColorScale({ target: "areaPlot", domain: ["dem", "rep", "other", "decline"], range: ["#0000DDAA", "#DD0000AA", "#00DD00AA", "#000000AA"] })
    .editAreaMark({ target: "areaPlot", opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1995, 2000, 2005],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "year", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000000, 10000000, 15000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "total_people", fontSize: 11, offset: 70 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } }, title: { fontWeight: 700 } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } }, title: { fontWeight: 700 } })
    .createGrid({
      horizontal: { values: [0, 5000000, 10000000, 15000000] },
      vertical: { values: [1995, 2000, 2005] }
    })
    .editGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "areaPlot",
        channels: ["color"],
        title: "party",
        position: "right",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    });
}