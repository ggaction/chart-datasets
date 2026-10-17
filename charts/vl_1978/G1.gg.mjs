// DOCS: doc-5d974e8fdcb4f774 (createAreaPlot), doc-9f1e9ae3b82a4178 (createAreaPlot range/guides semantics)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Canvas: 294x264, margins left39 top27 right55 bottom37
    .createCanvas({
      width: 301,
      height: 348,
      margin: { left: 39, top: 27, right: 62, bottom: 121 }
    })
    // Raw immutable dataset
    .createData({ id: "raw", values: data })
    // Chart title (top margin 27 is tight: fixed inset 16 + 13px title -> offset -2)
    .createTitle({
      text: "area chart fixture",
      titleStyle: { fontSize: 13, fontWeight: "bold" },
      offset: -2
    })
    // Cyclical weekday extraction (Sunday=0) from raw date strings -> label_weekday
    .createTimeUnitData({ id: "weekdayData", field: "label", unit: "weekday" })
    // Complete missing weekday/group cells (source-imputed zero vertices)
    .createCompleteData({ id: "completeWeekdays", key: "label_weekday", groupBy: "group" })
    // Zero-fill missing values for stacking
    .createComputedData({
      id: "zeroFilled",
      as: "value_filled",
      expression: { op: "coalesce", operands: [{ field: "value" }, { constant: 0 }] }
    })
    // Stack order: group descending (J...A), stable raw order within group
    .createSortedData({ id: "sortedData", sortBy: [{ field: "group", order: "descending" }] })
    // Cumulative stack within each weekday partition (sorted input preserved)
    .createWindowData({
      id: "stackedData",
      partitionBy: "label_weekday",
      operations: [{ op: "cumulativeSum", field: "value_filled", as: "value_end" }]
    })
    // Lower bound of each stacked band
    .createComputedData({
      id: "bandedData",
      as: "value_start",
      expression: { op: "subtract", left: { field: "value_end" }, right: { field: "value_filled" } }
    })
    // Cyclical weekday epoch: 2012-01-01 anchor + weekday * 86400000
    .createComputedData({
      id: "epochData",
      as: "label_epoch",
      expression: {
        op: "add",
        left: { op: "multiply", left: { field: "label_weekday" }, right: { constant: 86400000 } },
        right: { constant: 1325376000000 }
      }
    })
    // High-level area declaration: ranged y (value_start..value_end), temporal x epoch domain, no guides
    .createAreaPlot({
      x: { field: "label_epoch", fieldType: "temporal", temporalUnit: "timestamp", scale: { type: "time", domain: [1325376000000, 1325894400000] } },
      y: { lower: "value_start", upper: "value_end", scale: { domain: [0, 80] } },
      guides: false
    })
    // Series identification by group
    .editAreaMark({ opacity: 1 })
    .encodeGroup({ field: "group" })
    // Per-category colors, source domain and palette order
    .encodeColor({
      field: "group",
      fieldType: "nominal",
      scale: {
        type: "ordinal",
        domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    // Explicit guide tree: complete X/Y axes, both grid directions, one color legend
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 13,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, format: "%m-%d", labelMap: [{value: 1325419200000, label: ""}, {value: 1325462400000, label: ""}, {value: 1325505600000, label: ""}, {value: 1325592000000, label: ""}, {value: 1325635200000, label: ""}, {value: 1325678400000, label: ""}, {value: 1325764800000, label: ""}, {value: 1325808000000, label: ""}, {value: 1325851200000, label: ""}] }
          },
          title: { text: "label (day)", fontSize: 11, fontWeight: "bold", offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "value", fontSize: 11, fontWeight: "bold", offset: 28 }
        }
      },
      grid: { horizontal: { count: 5, color: "#ddd" }, vertical: { count: 13, color: "#ddd" } },
      legend: {
        title: "group",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: "bold" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    });
}