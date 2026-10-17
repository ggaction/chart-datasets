// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-76573a465e2b6a33 doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 420, height: 391, margin: { left: 32, top: 40, right: 88, bottom: 51 } })
    .createData({ values: data })
    .createComputedData({ id: "incomeNum", as: "Med income num", expression: { op: "toNumber", operand: { field: "Med income" } } })
    .createComputedData({ id: "deathsNum", as: "Firearm deaths num", expression: { op: "toNumber", operand: { field: "Firearm deaths" } } })
    .createScatterPlot({
      x: { field: "Med income num", fieldType: "quantitative" },
      y: { field: "Firearm deaths num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [40000, 80000] })
    .editYScale({ domain: [0, 0.24] })
    .encodeColor({ field: "Division" })
    .editColorScale({ target: "scatterPlot", palette: "set1", domain: ["Midwest", "Northeast", "South", "West"] })
    .encodePointRadius({ value: 8.660254037844387 })
    .editPointMark({ opacity: 0.7, stroke: false })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
.editTitle({ subtitle: "Median income (x), and firearm deaths per 100k population", offset: -11, alongOffset: -26.46 })
    .editTitle({ gap: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [40000, 50000, 60000, 70000, 80000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".2f" }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
      labels: { fontSize: 10 },
      title: false
    }).editLegendLayout({ position: "bottom", direction: "horizontal", layout: "legacy-bottom" })
  .editCanvas({ width: 338, height: 411, margin: { right: 6, bottom: 71 } });
}
