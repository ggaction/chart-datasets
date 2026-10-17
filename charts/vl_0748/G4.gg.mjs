// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 488, height: 484, margin: { left: 77, top: 47, right: 61, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "CAF_score",
      as: "CAF_score",
      expression: { op: "toNumber", operand: { field: "CAF_2021" } }
    })
    .createSummaryData({
      id: "summary",
      groupBy: "2021",
      aggregates: [{ op: "mean", field: "CAF_score", as: "CAF_mean" }]
    })
    .createScatterPlot({
      x: { field: "CAF_mean", fieldType: "quantitative" },
      y: { field: "2021", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [19, 43] })
    .editYScale({ type: "point", domain: ["Shintoism", "Judaism", "Islam", "Hinduism", "Christianity", "Buddhism"] })
    .encodePointRadius({ value: 4.472135955 })
    .editPointMark({ fill: "darkgreen", stroke: false, opacity: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [19, 39, 43],
        ticks: { color: "#888", length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: false,
          labelMap: [
            { value: 19, label: "Bottom" },
            { value: 39, label: "Median" },
            { value: 43, label: "Top" }
          ]
        }
      },
      title: { text: "Mean WGI Score", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888", length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Religion", fontSize: 11, fontWeight: 700, offset: 68 }
    })
    .createVerticalGrid({ values: [19, 39, 43] })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Mean World Giving Index Scores 2021 for countries grouped by main religion",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -71.46
    })
    .editTitle({ subtitle: "Sources: CAF and Everycountryintheworld.com", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 });
}
