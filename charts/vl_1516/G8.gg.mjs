import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2e6240c00cb297cc, doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-aff0694302d3fc9f
export function buildChart() {
  return chart()
    .createCanvas({
      width: 668,
      height: 364,
      margin: { left: 134, top: 27, right: 134, bottom: 37 }
    })
    .createData({ values: data })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-title-1516",
        measurements: [
          {
            text: "new green skill groups based on green Science, engineering and production technicians n.e.c. occupation",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 657.359375
          }
        ]
      }
    })
    .createTitle({
      text: "new green skill groups based on green Science, engineering and production technicians n.e.c. occupation",
      titleStyle: { fontSize: 13 },
      offset: -10.5,
      alongOffset: -128.6796875
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 18] })
    .editYScale({ domain: [0, 16] })
    .encodeColor({ field: "cluster_number", fieldType: "quantitative" })
    .editColorScale({ target: "scatterPlot", domain: [0, 9], palette: "blues" })
    .encodePointRadius({ value: 3.873 })
    .editPointMark({ opacity: 0.7 })    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "x", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, offset: 28 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      gradient: { length: 200, opacity: 0.7 }
    })
    .editLegend({
      labels: { color: "black" }
    });
}