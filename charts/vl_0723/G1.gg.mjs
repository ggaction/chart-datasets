import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-d9e3b1b7add0d2c6

export function buildChart() {
  return chart()
    .createCanvas({ width: 520, height: 384, margin: { left: 77, top: 47, right: 43, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "cafNum", as: "CAF_num", expression: { op: "toNumber", operand: { field: "CAF_2022" } } })
    .createSummaryData({
      id: "religionMeans",
      groupBy: ["2022"],
      aggregates: [{ op: "mean", field: "CAF_num", as: "meanCAF" }]
    })
    .createScatterPlot({
      x: { field: "meanCAF", scale: { domain: [19, 43], nice: false } },
      y: { field: "2022", fieldType: "nominal", scale: { domain: ["Shintoism", "Judaism", "Islam", "Hinduism", "Christianity", "Buddhism"] } },
      guides: false
    })
    .encodePointRadius({ value: 4.4721 })
    .editPointMark({ shape: "circle", fill: "darkred", stroke: false })
    .createAxes({
      x: {
        title: { text: "Mean WGI Score", fontSize: 11, fontWeight: "bold", offset: 28 },
        ticksAndLabels: {
          values: [19, 39, 43],
          ticks: {},
          labels: {
            offset: 7,
            fontSize: 10,
            labelMap: [
              { value: 19, label: "Bottom" },
              { value: 39, label: "Median" },
              { value: 43, label: "Top" }
            ]
          }
        }
      },
      y: {
        title: { text: "Religion", fontSize: 11, fontWeight: "bold", offset: 59, rotation: { value: -90, unit: "degrees" } },
        ticksAndLabels: { ticks: {}, labels: { offset: 7, fontSize: 10 } }
      }
    })
    .createTitle({
      text: "Mean CAF World Giving Index scores for countries grouped by main religion, 2022",
      titleStyle: { fontSize: 13, fontWeight: "700" },
      alongOffset: -71.46
    })
    .editTitle({ offset: -13 })
    .editTitle({ subtitle: "Sources: CAF and Everycountryintheworld.com\n", subtitleStyle: { fontStyle: "italic", fontSize: 10 }, gap: 3 })
    .createGrid({ vertical: { values: [19, 39, 43], color: "#ddd" }, horizontal: false });
}
