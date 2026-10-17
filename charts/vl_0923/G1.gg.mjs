import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 486, height: 366, margin: { left: 44, top: 40, right: 192, bottom: 76 } })
    .createData({ values: data })
    .createComputedData({
      id: "typeOrder",
      as: "TypeOrder",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Type" }, right: { constant: "Housing, water, electricity" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "Type" }, right: { constant: "Food and non-alcoholic drinks" } },
          then: { constant: 1 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "Type" }, right: { constant: "Clothing and footwear" } },
            then: { constant: 2 },
            else: { constant: 3 },
          },
        },
      },
    })
    .createComputedData({
      id: "numericValue",
      as: "numericValue",
      expression: { op: "toNumber", operand: { field: "Value" } },
    })
    .createSortedData({ id: "sortedData", sortBy: [{ field: "TypeOrder", order: "ascending" }] })
    .createStackData({ category: "Income Quintile", group: "Type", value: "numericValue" })
    .createBarPlot({
      x: { field: "Income Quintile", fieldType: "nominal" },
      y: { lower: "numericValue_start", upper: "numericValue_end", fieldType: "quantitative" },
      guides: false,
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .encodeColor({ field: "Type", fieldType: "nominal", layout: "overlay" })
    .encodeOpacity({ value: 1 })
    .editColorScale({
      domain: ["Other", "Miscellaneous goods and services", "Restaurants and hotels", "Education", "Recreation and culture", "Communication", "Transport", "Health", "Households goods and services", "Alcohol and tobacco", "Clothing and footwear", "Food and non-alcoholic drinks", "Housing, water, electricity"],
      range: ["rgb(14, 9, 41)", "rgb(40, 11, 84)", "rgb(72, 11, 106)", "rgb(101, 21, 110)", "rgb(130, 32, 108)", "rgb(159, 42, 99)", "rgb(187, 55, 85)", "rgb(212, 72, 67)", "rgb(232, 96, 45)", "rgb(245, 125, 21)", "rgb(252, 158, 8)", "rgb(251, 193, 39)", "rgb(243, 228, 93)"],
    })
    .editXScale({ domain: ["1 - Poorest", "2", "3", "4", "5 - Richest"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 100] })
    .createGrid({ horizontal: { values: [0, 20, 40, 60, 80, 100], color: "#ddd" }, vertical: false })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } },
          values: ["1 - Poorest", "2", "3", "4", "5 - Richest"],
        },
        title: { text: "Equivilised Income Quintile", fontSize: 11, fontWeight: 700, color: "black" },
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" },
          values: [0, 20, 40, 60, 80, 100],
        },
        title: { text: "Percentage of Total Spend", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } },
      },
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Type of Spending",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
      },
    })
    .createTitle({
      text: " Household Spending",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -38.6845703125 })
    .editTitle({ subtitle: "Composition of spending, by income quitile and sub series. Source: Joseph Rowntree Foundation" });
}