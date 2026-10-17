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
    // Explicit guide tree: no grid in source (referenceGridAxisSpecs unused),
    // only the two real display axes with resolved tick values and typography.
    .createGuides({
      grid: { vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } },
      axes: {
        x: {
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100],
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "candidate_diff_spend",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 28
          }
        },
        y: {
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120],
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "# Candidates",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 40
          }
        }
      }
    })
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