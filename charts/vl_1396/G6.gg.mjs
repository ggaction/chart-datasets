// DOCS: actual delivered doc-* IDs: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot range/width), doc-b257fb08998617a5 (guide trace)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // G1 compact integrated declaration: fixed Canvas + raw data + bar facade.
    // Numeric bars (quantitative x/y): one bar per row at the numeric center.
    .createCanvas({
      width: 448,
      height: 349,
      margin: { left: 124, top: 67, right: 124, bottom: 82 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "candidate_diff_spend", fieldType: "quantitative" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    // DOCS: doc-fc11e9fb291905d1 (createBarPlot range/width)
    // Resolved scale domains move from facade position bindings to scale editors.
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 130] })
    // Source bar thickness: sample rects are 70 logical px wide.
    .encodeBarWidth({ pixels: 70 })
    // Complete Cartesian axes: exactly ticksAndLabels, title each (default
    // visible axis line is obtained by omitting the line option).
    // DOCS: doc-fc11e9fb291905d1 (createBarPlot range/width)
    // Complete axes decomposed from the former createAxes aggregate;
    // protected geometry (tick lengths, label/title fonts and offsets) kept at creation.
    .createXAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "candidate_diff_spend",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisTitle({ fontFamily: "sans-serif", fontWeight: "bold" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "# Candidates",
        fontSize: 11,
        offset: 40
      }
    })
    .editYAxisTitle({ fontFamily: "sans-serif", fontWeight: "bold" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    // Guide families decomposed from the former createGuides aggregate.
    // Explicit source grids (vertical + horizontal, #ddd) move to createGrid,
    // placed AFTER createAxes to preserve createGuides' internal order
    // (axes created before grid). Theme-default axis paint is left implicit.
    // DOCS: doc-b257fb08998617a5 (guide trace)
    // DOCS: doc-b257fb08998617a5 (guide trace)
    // Grid family moved to directional editors; horizontal materializes before vertical.
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" })
    // Chart title: fixed 16px Canvas inset, top margin 67, source title font 13.
    // Create centered (default anchor middle, offset 0) to fit the 448 canvas,
    // then editTitle applies the source vertical offset.
    .createTitle({
      text: "Distribution of Differential Spending (8/1/2018-11/6/2018)",
      align: "center",
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ offset: 38 });
}