// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-81f3b4da1bfe0908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 374, height: 286, margin: { left: 44, top: 47, right: 130, bottom: 39 } })
    .createData({ values: data })
    .createComputedData({ id: "spendNum", as: "spend", expression: { op: "toNumber", operand: { field: "Spend Index" } } })
    .createComputedData({ id: "footfallNum", as: "footfall", expression: { op: "toNumber", operand: { field: "Average Footfall" } } })
    .createComputedData({ id: "vacNum", as: "vacancies", expression: { op: "if", condition: { op: "eq", left: { field: "High Street Vacancies" }, right: { constant: "" } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "High Street Vacancies" } } } })
    .createScatterPlot({
      x: { field: "spend", fieldType: "quantitative" },
      y: { field: "footfall", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [70, 200], zero: false })
    .editYScale({ domain: [50, 170], zero: false })
    .encodeColor({ field: "vacancies", fieldType: "quantitative", scale: { unknown: "rgb(255, 255, 255)" } })
    .editColorScale({ domain: [10, 33], palette: "blues" })
    .encodePointRadius({ value: 5 })
    .editPointMark({ stroke: false })
    .encodeOpacity({ value: 0.9 })
    .createTitle({ text: "Highstreet Recovery", titleStyle: { fontSize: 13, fontWeight: 700 }, alongOffset: -38.7 })
    .editTitle({
      subtitle: "Data from April 2022 showing High Street Recovery.\nIndex=100 a pre-lockdown baseline Source: Center for Cities",
      offset: -13,
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [80, 100, 120, 140, 160, 180, 200],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Spend Index", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [60, 80, 100, 120, 140, 160],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Average Footfall", fontSize: 11, fontWeight: 700, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "% of Shops Vacant",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11 }
    })
    .editLegendTitle({ fontWeight: 700 });
}