// DOCS: doc-e790db38fc2a278a, doc-48c72317a1a99e17, doc-c3b674f4d604fa1e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 648, height: 364, margin: { left: 124, top: 27, right: 124, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 16] })
    .editYScale({ domain: [0, 16] })
    .encodeColor({ field: "cluster_number", fieldType: "quantitative" })
    .editColorScale({ target: "scatterPlot", domain: [0, 9], palette: "blues" })
    .encodePointRadius({ value: 3.873 })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: { count: 10, ticks: { color: "#888", length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "x", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: { count: 10, ticks: { color: "#888", length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      gradient: { length: 200, opacity: 0.7 },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-title-1515",
        measurements: [
          {
            text: "new green skill groups based on high green occupation greenness and low % of green skills requested",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 637.140625
          }
        ]
      }
    })
    .createTitle({
      text: "new green skill groups based on high green occupation greenness and low % of green skills requested",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.5,
      alongOffset: -118.5703125
    });
}