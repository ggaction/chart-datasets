// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Fixed contract canvas and margins; no automatic plot sizing.
    .createCanvas({
      width: 272,
      height: 102,
      margin: { left: 66, top: 5, right: 6, bottom: 37 }
    })
    // Raw data is immutable and imported; no schema invented.
    .createData({ values: data })
    // Window transform: TotalTime = movingSum over a frame covering all rows.
    .createWindowData({
      id: "withTotal",
      operations: [{
        op: "movingSum",
        field: "Time",
        as: "TotalTime",
        frame: { preceding: 4, following: 4 },
        minPeriods: 1
      }]
    })
    // Calculate transform: PercentOfTotal = Time / TotalTime * 100 (typed AST).
    .createComputedData({
      id: "percentOfTotal",
      as: "PercentOfTotal",
      expression: {
        op: "multiply",
        left: { op: "divide", left: { field: "Time" }, right: { field: "TotalTime" } },
        right: { constant: 100 }
      }
    })
    // Horizontal bars: quantitative x, nominal y; pinned resolved domains
    // and exact source category order; band paddings reproduce step 12 / band 10.8.
    .createBarPlot({
      x: { field: "PercentOfTotal", fieldType: "quantitative" },
      y: { field: "Activity", fieldType: "nominal" },
      guides: false
    })
    // Pin resolved x domain and y category band paddings in scale editors.
    .editXScale({ domain: [0, 35] })
    .editYScale({
      domain: ["Eating", "Exercise", "Sleeping", "TV", "Work"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Source bar height equals full band (10.8), so band fraction 1.
    .encodeBarWidth({ band: 1 })
    // Complete axes: source typography/offsets preserved at creation for tight margins.
    // DOCS: doc-76573a465e2b6a33
    .createXAxis({
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "% of total time",
        fontSize: 11,
        fontWeight: "bold",
        offset: 28
      }
    })
    .createYAxis({
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Activity",
        fontSize: 11,
        fontWeight: "bold",
        offset: 54
      }
    })
    // Explicit vertical grid only (#ddd).
    .createVerticalGrid({ color: "#ddd" });
}