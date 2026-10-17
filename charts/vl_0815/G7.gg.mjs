// DOCS: doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 377, margin: { left: 78, top: 35, right: 13, bottom: 42 } })
    .createData({ values: data })
    .createComputedData({ id: "usageNum", as: "usage", expression: { op: "toNumber", operand: { field: "% of usage" } } })
    .createBarPlot({
      x: { field: "usage", fieldType: "quantitative" },
      y: { field: "Programming Language", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 70] })
    .editYScale({ domain: ["Assembly", "Bash/Shell", "C", "C#", "C++", "Dart", "Go", "HTML/CSS", "Java", "JavaScript", "Kotlin", "PHP", "PowerShell", "Python", "R", "Ruby", "Rust", "SQL", "Swift", "TypeScript"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#ef8236" })
    .createTitle({
      text: "20 most commonly used Programming Languages 2022",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -9, alongOffset: -72.6, gap: 1 })
    .editTitle({ subtitle: "Source: Stack Overflow Survey 2022", titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70],
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "% of usage", fontSize: 11, offset: 32 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Programming Language", fontSize: 11, offset: 65 }
    })
    .createGrid({ horizontal: false, vertical: { values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70] } })
    .editVerticalGrid({ color: "#ddd" })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    ;
}