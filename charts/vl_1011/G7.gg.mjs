// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 527, height: 334, margin: { left: 44, top: 36, right: 83, bottom: 98 } })
    .createData({ values: data })
    .createComputedData({ id: "medals_num", as: "TotalNum", expression: { op: "toNumber", operand: { field: "Total" } } })
    .createStackData({ category: "Country", group: "Medal", value: "TotalNum" })
    .createBarPlot({
      x: "Country",
      y: { lower: "TotalNum_start", upper: "TotalNum_end" },
      guides: false
    })
    .encodeColor({ field: "Medal", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["Gold", "Silver", "Bronze"], range: ["#e7ba52", "#A7A7AD", "#A77044"] })
    .editXScale({ domain: ["United States", "China", "Great Britain*", "Russia", "Germany", "Japan", "France", "Australia", "South Korea", "Italy", "Netherlands", "Spain", "Ukraine", "Hungary", "Cuba", "Iran", "New Zealand", "Jamaica", "Czech Republic", "South Africa"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 110] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: "none" })
    .createXAxis({
      ticksAndLabels: { values: ["United States", "China", "Great Britain*", "Russia", "Germany", "Japan", "France", "Australia", "South Korea", "Italy", "Netherlands", "Spain", "Ukraine", "Hungary", "Cuba", "Iran", "New Zealand", "Jamaica", "Czech Republic", "South Africa"], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } } },
      title: { text: "Country", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: { values: [0, 20, 40, 60, 80, 100], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Total", fontSize: 11 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd", values: [0, 20, 40, 60, 80, 100] })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
      title: "Medal Type",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
      position: "right"
    }
    })
    .createTitle({ text: "London 2012 Olympics Medal Distrobution - Top 20 Nations", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 12, fontStyle: "italic", color: "black" } })
    .editTitle({ offset: -13, gap: 1, align: "center" })
    .editTitle({ subtitle: "Source: Wikipedia" });
}