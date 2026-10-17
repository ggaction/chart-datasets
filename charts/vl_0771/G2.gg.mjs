// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-43e5ca89db00d328, doc-aff0694302d3fc9f, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 491,
      height: 384,
      margin: { left: 77, top: 47, right: 14, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "cafNum",
      as: "CAF_num",
      expression: { op: "toNumber", operand: { field: "CAF_2022" } }
    })
    .createSummaryData({
      id: "summaryReligion",
      groupBy: "2022",
      aggregates: [{ field: "CAF_num", op: "mean", as: "mean_CAF" }]
    })
    .createScatterPlot({
      x: { field: "mean_CAF", fieldType: "quantitative" },
      y: { field: "2022", fieldType: "nominal" },
      guides: false
    })
    .encodePointRadius({ value: 4.47213595499958 })
    .editPointMark({ fill: "darkgreen" })
    .editXScale({ domain: [19, 43] })
    .editYScale({ domain: ["Shintoism", "Judaism", "Islam", "Hinduism", "Christianity", "Buddhism"] })
    .createGrid({
      horizontal: false,
      vertical: { values: [19, 39, 43], color: "#ddd" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [19, 39, 43],
        ticks: {},
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
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "Religion", fontSize: 11, fontWeight: 700, offset: 65.46 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-heading-profile",
        measurements: [
          {
            text: "Mean World Giving Index Scores 2022 for countries grouped by main religion",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 476.53125
          }
        ]
      }
    })
    .createTitle({
      text: "Mean World Giving Index Scores 2022 for countries grouped by main religion",
      offset: -13,
      titleStyle: { fontSize: 13 },
      alongOffset: -71.4580078125
    })
    .editTitle({
      subtitle: "Sources: CAF and Everycountryintheworld.com",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" },
      gap: 3
    })
    .editTitle({
      titleStyle: { color: "black", fontWeight: 700 }
    });
}