import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-80198e379a34e5ab
export function buildChart() {
  return chart()
    .createCanvas({ width: 430, height: 522, margin: { left: 24, top: 55, right: 6, bottom: 67 } })
    .createData({ id: "players", values: data })
    .createComputedData({ id: "c1", as: "C1", expression: { op: "toNumber", operand: { field: "Component 1" } } })
    .createComputedData({ id: "c2", as: "C2", expression: { op: "toNumber", operand: { field: "Component 2" } } })
    .createScatterPlot({
      x: { field: "C1", fieldType: "quantitative" },
      y: { field: "C2", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-5, 6] })
    .editYScale({ domain: [-6, 6] })
    .encodeColor({ field: "Pos" })
    .editColorScale({ palette: "set1", domain: ["Defender", "Forward", "Midfielder", "Wingback", "Winger"] })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .createTitle({
      text: "Principle Component Analysis on Football Players\nin Europe's Top 5 Leagues",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editTitle({ titleStyle: { fontWeight: 700 }, subtitleStyle: { fontStyle: "italic" } })
    .editTitle({ subtitle: "Component 1 (x), Component 2 (y). Min 1500 mins played, data: FBRef.", offset: -13, gap: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" } })
    .createYAxis({
      ticksAndLabels: {
        values: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({ line: { color: "#888" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        title: "Position",
        titlePosition: "top",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } });
}