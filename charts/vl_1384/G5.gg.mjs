// DOCS: doc-5d974e8fdcb4f774 (createAreaPlot), doc-9f1e9ae3b82a4178 (createAreaPlot reference),
// doc-2e8ae49a2e6e5e17 (examples/area-layout/program.js), doc-e7f2fa9f88cd79b5 (Action Reference),
// doc-fb01dc309afec904 (charts-data reference)
// G1: integrated stacked-area declaration; stacking via documented createStackData
// (total_start/total_end), color via encodeColor, guides via createGuides.

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 437,
      height: 279,
      margin: { left: 38, top: 57, right: 259, bottom: 22 }
    })
    .createData({ values: data })
    // Stack baseline via sorted current dataset: lexical sales DESC gives
    // Video Ads, Union Ads, Search Engine, Email, Direct bottom-to-top.
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "sales", order: "descending" }]
    })
    .createAreaPlot({
      x: { field: "weekday", fieldType: "ordinal" },
      y: { field: "total" },
      guides: false
    })
    .editXScale({ type: "point", domain: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], padding: 0.5 })
    .editYScale({ domain: [0, 2600] })
    .editAreaMark({ opacity: 1 })
    .encodeGroup({ field: "sales" })
    .encodeColor({ field: "sales", fieldType: "nominal" })
    .editColorScale({
      type: "ordinal",
      domain: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .layoutSeries({ mode: "stack" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        values: [0, 500, 1000, 1500, 2000, 2500],
        labels: { fontSize: 10, fontFamily: "sans-serif", format: ",", offset: 7 }
      },
      title: false
    })
    .createGrid({
      vertical: false,
      horizontal: {
        scale: "y",
        values: [0, 500, 1000, 1500, 2000, 2500],
        color: "#ddd"
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Sales",
        position: "top",
        direction: "horizontal",
        align: "left",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 }
      }
    });
}
