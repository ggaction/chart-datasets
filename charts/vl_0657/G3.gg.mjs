// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 472,
      height: 102,
      margin: { left: 66, top: 5, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "pct",
      as: "PercentOfTotal",
      expression: {
        op: "multiply",
        left: { op: "divide", left: { field: "Time" }, right: { constant: 24 } },
        right: { constant: 100 }
      }
    })
    .createBarPlot({
      guides: false,
      x: { field: "PercentOfTotal", fieldType: "quantitative" },
      y: { field: "Activity", fieldType: "nominal" }
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 35] })
    .editYScale({
      domain: ["Eating", "Exercise", "Sleeping", "TV", "Work"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createVerticalGrid({ color: "#ddd", values: [0, 5, 10, 15, 20, 25, 30, 35] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "% of total Time", fontSize: 11, offset: 26 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "Activity", fontSize: 11, offset: 55 }
    });
}
