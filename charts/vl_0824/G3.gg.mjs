// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 360, height: 642, margin: { left: 80, top: 88, right: 80, bottom: 254 } })
    .createData({ values: data })
    .createComputedData({ id: "numX", as: "plPos", expression: { op: "toNumber", operand: { field: "pl_seasonfinish" } } })
    .createComputedData({ id: "numY", as: "spend", expression: { op: "toNumber", operand: { field: "5year_spend" } } })
    .createScatterPlot({
      x: { field: "plPos", fieldType: "quantitative" },
      y: { field: "spend", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 20], zero: false })
    .editYScale({ domain: [0, 1000], zero: false })
    .encodeColor({ field: "cluster_clubs" })
    .editColorScale({ domain: ["4", "1", "2", "3", "0", "5"], range: ["green", "#90EE90", "#4fc3f7", "#FBE122", "orange", "#EF0107"] })
    .encodePointRadius({ value: 5 })
    .editPointMark({ target: "scatterPlot", opacity: 0.8 })
    .createTitle({
      text: "Transfer Expenditure vs League Position",
      titleStyle: { fontSize: 18, fontWeight: 700, color: "black" },
      align: "center"
    })
    .editTitle({
      subtitleStyle: { fontSize: 12, fontStyle: "italic", color: "black" },
      gap: 1,
      offset: -12
    })
    .editTitle({
      subtitle: "Figure 1: 6 clusters based on investment level.\nSource: Transfermarkt + Kaggle\nNote: All charts have a legend at the bottom\nto make them mobile-friendly"
    })
    .createAxes({
      x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10, 15, 20],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7, flush: true }
          },
          title: { text: "League Position", fontSize: 11, fontWeight: 700, offset: 27 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7, format: "," }
          },
          title: { text: "5 year rolling spend (£ Millions)", fontSize: 11, fontWeight: 700, offset: 37, rotation: { value: -90, unit: "degrees" } }
        }
    })
    .createLegend({
      title: "Level of Investment",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      position: "bottom"
    })
    .editLegend({
      labels: { fontSize: 10, color: "black" },
      columns: 1,
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegend({
      border: { background: "#FfFfFf" }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      labelMap: [
        { value: "4", label: "Very High: Aiming for 1st" },
        { value: "1", label: "High: Aiming for Top 4" },
        { value: "2", label: "Above Average: Aiming for Europe" },
        { value: "3", label: "Average: Aiming for Mid-Table" },
        { value: "0", label: "Low: Aiming to comfortably survive" },
        { value: "5", label: "Very Low: Aiming to survive" }
      ]
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      symbol: { opacity: 0.8 }
    });
}
