// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 442, height: 357, margin: { left: 84, top: 35, right: 88, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "meat", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({ id: "sourceTypeStackOrder", sortBy: [{ field: "Type", order: "ascending" }] })
.createBarPlot({
      x: { field: "valueNum", fieldType: "quantitative" },
      y: { field: "Country", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 110] })
    .editYScale({ domain: ["United States", "Israel", "Australia", "Argentina", "Chile", "Brazil", "New Zealand", "OECD", "Canada", "Korea", "United Kingdom", "Mexico", "China", "Japan", "Turkey", "BRICS", "Nigeria", "India"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "Type", layout: "stack" })
    .editColorScale({ target: "barPlot", domain: ["Beef", "Pork", "Poultry", "Mutton/lamb"], range: ["rgb(189, 229, 181)", "rgb(105, 197, 190)", "rgb(44, 158, 192)", "rgb(33, 99, 170)"] })
    .editBarMark({ stroke: false })
.encodeBarWidth({ band: 1 })
    .createTitle({ text: "Food - annual meat consumption by country", titleStyle: { fontSize: 13 }, alongOffset: -78.15 })
    .editTitle({ subtitle: "Kg per capita, by food type, 2020. Source: OECD", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", fontWeight: 400, color: "black" }, offset: -13 })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 20, 40, 60, 80, 100], ticks: { color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: false })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: false })
    .createGrid({ horizontal: false, vertical: { color: "#ddd", values: [0, 20, 40, 60, 80, 100] } })
    .createLegend({ position: "right", title: false, labels: { fontSize: 10, fontFamily: "sans-serif" } })
      .editLegendLayout({ position: "bottom-right" })
      .editCanvas({ width: 359, margin: { right: 5 } });
}
