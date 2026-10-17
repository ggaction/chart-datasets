// DOCS: actual delivered doc-* IDs: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-80e4c9f28fa38343 (TimeUnit), doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas per contract; margins reserved for tight title (top), y labels (left), right legend (right).
    .createCanvas({
      width: 279,
      height: 400,
      margin: { left: 24, top: 27, right: 55, bottom: 173 }
    })
    // Raw data is complete and immutable in ./data.json.
    .createData({ values: data })
    // Source utcday is a CYCLIC WEEKDAY: derive label_weekday 0..6 (3 top-level options).
    .createTimeUnitData({
      id: "utcday",
      field: "label",
      unit: "weekday"
    })
    // Source stack order: group descending, stable ties (all 137 raw rows preserved).
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "group", order: "descending" }]
    })
    // Cumulative stack end per weekday partition.
    .createWindowData({
      id: "stacked",
      partitionBy: "label_weekday",
      operations: [{ op: "cumulativeSum", field: "value", as: "value_end" }]
    })
    // Stack start = end - value.
    .createComputedData({
      id: "stacked2",
      as: "value_start",
      expression: {
        op: "subtract",
        left: { field: "value_end" },
        right: { field: "value" }
      }
    })
    // Timestamp bar center: day start + weekday offset + 12h (+0.5px in ms = 1512000).
    .createComputedData({
      id: "final",
      as: "ts_center",
      expression: {
        op: "add",
        left: {
          op: "add",
          left: { constant: 1325376000000 },
          right: {
            op: "multiply",
            left: { field: "label_weekday" },
            right: { constant: 86400000 }
          }
        },
        right: { constant: 44712000 }
      }
    })
    // Integrated G1 facade: stacked temporal interval bars colored by group, no implicit guides.
    .createBarPlot({
      x: {
        field: "ts_center",
        fieldType: "temporal",
        temporalUnit: "timestamp",
      },
      y: {
        lower: "value_start",
        upper: "value_end",
        fieldType: "quantitative"
      },
      guides: false
    })
    // Positional scale policies moved from facade bindings to focused scale editors.
    .editXScale({ domain: [1325376000000, 1325980800000], range: [24, 224] })
    .editYScale({ domain: [0, 80] })
    // Exact source ordinal color scale: domain + literal range (never palette).
    .encodeColor({
      field: "group",
      fieldType: "nominal",
    })
    // Ordinal color scale policy moved from the encoding into a focused scale editor.
    .editColorScale({
      domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    // Source bar width: one day slot is 200/7 = 28.5714px; observed rect width 27.5714px.
    .encodeBarWidth({ pixels: 27.571428571428573 })
    // Source bars have no stroke.
    .editBarMark({ stroke: false })
    // Grid lines in both source-required directions on the default #ddd styling.
    .createGrid({
  horizontal: { color: "#ddd" },
  vertical: { color: "#ddd" }
})
    // Display axes only (no grid duplication): x bottom with %m-%d labels, no title;
    // y left with ticks 0..80 step 20 (tickCount ceil(200/40)=5), no title.
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { format: "%m-%d", fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    // Source legend: fill=color, title "group", default outside-right placement and itemGap.
    .createLegend({
  channels: ["color"],
  title: "group",
  titleStyle: { fontSize: 11 }
})
.editLegendTitle({
  fontWeight: "bold",
  color: "#000"
})
.editLegendLabels({ fontSize: 10, color: "#000" })
    // Source chart title in the tight 27px top margin (fixed 16px inset; 13px title block).
    .createTitle({
      text: "Detections by Tactic (Last 30 days)",
      titleStyle: { fontSize: 13 },
      offset: -3
    });
}