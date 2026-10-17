// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 632, height: 385, margin: { left: 39, top: 40, right: 193, bottom: 45 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typed0", as: "CpihNum", expression: { op: "toNumber", operand: { field: "CPIH 12-month inflation rate" } } })
    .createComputedData({ id: "typed1", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({
      id: "typed2",
      as: "TypeOrder",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Type" }, right: { constant: "Housing and household services" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "Type" }, right: { constant: "Food and non-alcoholic beverages" } },
          then: { constant: 1 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "Type" }, right: { constant: "Clothing and footwear" } },
            then: { constant: 2 },
            else: { constant: 3 }
          }
        }
      }
    })
    .createSortedData({
      id: "stackOrder",
      sortBy: [{ field: "TypeOrder", order: "ascending" }]
    })
    .createStackData({
      category: "Date",
      group: "Type",
      value: "ValueNum",
      mode: "diverging"
    })
    .createBarPlot({
      x: { field: "Date", fieldType: "ordinal" },
      y: { lower: "ValueNum_start", upper: "ValueNum_end" },
      guides: false
    })
    .editBarMark({ stroke: false }).encodeColor({ field: "Type", fieldType: "nominal", layout: "overlay" })
    .editColorScale({
      target: "barPlot",
      domain: ["Other goods and services", "Restaurants and hotels", "Recreation and culture", "Transport", "Furniture and household goods", "Alcohol and tobacco", "Clothing and footwear", "Food and non-alcoholic beverages", "Housing and household services"],
      range: ["rgb(188, 223, 39)", "rgb(122, 209, 81)", "rgb(67, 191, 113)", "rgb(34, 168, 132)", "rgb(33, 145, 141)", "rgb(42, 120, 142)", "rgb(53, 96, 141)", "rgb(65, 68, 135)", "rgb(72, 37, 117)"]
    })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1, target: "barPlot" })
    .editYScale({ domain: [-1, 10] })
    .createLineMark({ id: "cpihLine", data: "typed2", stroke: "black" })
    .encodeOpacity({ value: 0.5, target: "cpihLine" })
    .encodeX({ field: "Date", fieldType: "ordinal", target: "cpihLine" })
    .encodeY({ field: "CpihNum", fieldType: "quantitative", target: "cpihLine" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 8,
          offset: 7,
          rotation: { value: 60, unit: "degrees" },
          overlap: "allow"
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" }).editXAxisLabels({ color: "#000" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "CPIH", fontSize: 11, offset: 27, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" }).editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { values: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "Type of Spending",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ fontWeight: 700 })
    .createTitle({ text: "Sources of Inflation", titleStyle: { fontSize: 13, fontWeight: 700, color: "#000" }, offset: -13 })
    .editTitle({ subtitle: "Contributions to CPIH all items, by sub series. Source: ONS", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#000" }, gap: 1 })
    .editTitle({ alongOffset: -33.4013671875 });
}