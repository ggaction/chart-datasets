// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot ranged bars),
// doc-b257fb08998617a5 (guide aggregation / encodeBarWidth before guides), doc-76573a465e2b6a33 (guides)
import { chart } from "ggaction";
import data from "./data.json";

//vl_1382
export function buildChart() {
  return chart()
    // Contract canvas: 526x244, margins left 44 / top 5 / right 82 / bottom 39 -> plot 400x200
    .createCanvas({
      width: 526,
      height: 244,
      margin: { left: 44, top: 5, right: 82, bottom: 39 }
    })
    // Raw immutable source rows
    .createData({ id: "data", values: data })
    // Sort groups so the stack order is witch, tiger, munchkin, lion, dog, bear
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "item", order: "descending" }]
    })
    // Stack quantity by time/item on the sorted dataset; outputs quantity_start/quantity_end
    .createStackData({
      category: "time",
      group: "item",
      value: "quantity"
    })
    // Ranged stacked bars: categorical band x, stacked lower/upper quantity per item
    .createBarPlot({
      x: { field: "time", fieldType: "ordinal" },
      y: { lower: "quantity_start", upper: "quantity_end" },
      guides: false
    })
    // Nominal color for item with resolved ordinal palette
    .encodeColor({ field: "item", fieldType: "nominal" })
    // Resolved categorical color scale domain/range moved to the scale editor
    .editColorScale({
      target: "barPlot",
      domain: ["bear", "dog", "lion", "munchkin", "tiger", "witch"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
    })
    // Resolved x band scale: numeric ordinal categories 0..19, paddingInner 0.1, paddingOuter 0.05
    .editXScale({
      domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Resolved y linear domain pinned with zero
    .editYScale({ domain: [0, 240] })
    // Source bar width equals full resolved bandwidth (18px of a 20px slot)
    .encodeBarWidth({ band: 1 })
    // Horizontal grid lines from the grid-only y axis (scale y = horizontal direction), #ddd
    .createGrid({
      horizontal: { values: [0, 50, 100, 150, 200], color: "#ddd" },
      vertical: false
    })
    // Complete display axes with source typography fitted to tight margins
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 270, unit: "degrees" }
        }
      },
      title: { text: "time", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif" }
      },
      title: { fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: {},
        labels: { fontSize: 10 }
      },
      title: { text: "Sum of quantity", fontSize: 11 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif" }
      },
      title: { fontWeight: "bold" }
    })
    .createLegend({ title: "item", position: "right" })
  .editYAxis({
  title: { offset: 32.1064453125 },
  ticksAndLabels: { labels: { offset: 6.5 } }
});
}