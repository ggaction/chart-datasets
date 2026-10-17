// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 440, height: 521, margin: { left: 84, top: 49, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "cents",
      as: "regularLowCents",
      expression: { op: "if", condition: { op: "eq", left: { field: "RegularJobLow" }, right: { constant: "n/a" } }, then: { constant: null }, else: { op: "multiply", left: { op: "toNumber", operand: { field: "RegularJobLow" } }, right: { constant: 100 } } }
    })
    .createComputedData({
      id: "centsSort",
      as: "regularLowSort",
      expression: { op: "if", condition: { op: "eq", left: { field: "RegularJobLow" }, right: { constant: "n/a" } }, then: { constant: -1 }, else: { op: "toNumber", operand: { field: "RegularJobLow" } } }
    })
    .createSortedData({ id: "sortedStates", sortBy: [{ field: "regularLowSort", order: "ascending" }] })
    .createBarPlot({
      x: { field: "regularLowCents", fieldType: "quantitative" },
      y: { field: "State", fieldType: "ordinal" },
      guides: false
    })
    .editYScale({ domain: ["Delaware", "Maine", "Nevada", "Washington", "Alabama", "Arkansas", "Florida", "Georgia", "Mississippi", "South Carolina", "Texas", "Louisiana", "West Virginia", "Missouri", "North Carolina", "Oklahoma", "Oregon", "California", "Illinois", "Kansas", "Wisconsin", "Idaho", "New Mexico", "New York", "Ohio", "Indiana", "Federal Prisons", "Colorado", "Connecticut", "Kentucky", "Massachusetts", "Michigan", "Average", "Arizona", "Maryland", "Montana", "Nebraska", "Tennessee", "North Dakota", "Pennsylvania", "Hawaii", "Minnesota", "New Hampshire", "South Dakota", "Vermont", "New Jersey", "Iowa", "Virginia", "Rhode Island", "Alaska", "Wyoming", "Utah"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "rgb(0,47,167)" })
    .editXScale({ domain: [0, 40] })
    .createTitle({
      text: "Pay in US prisons",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Hourly pay (\u00A2) Source: PrisonPolicy.org", subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .editTitle({ offset: 4.8, alongOffset: -78.13, gap: 1 })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, overlap: "allow" } },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}
