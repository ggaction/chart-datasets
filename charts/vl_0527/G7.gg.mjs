import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-6c2c08869091f6a0, doc-2ba6dfbdbb611825, doc-fc11e9fb291905d1, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 450, height: 357, margin: { left: 90, top: 35, right: 110, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "emissions_num",
      as: "food_emissions_num",
      expression: {
        op: "if",
        condition: {
          op: "neq",
          left: { field: "food_emissions" },
          right: { constant: "" }
        },
        then: { op: "toNumber", operand: { field: "food_emissions" } },
        else: { constant: 0 }
      }
    })
    .createTitle({
      text: "Food - CO2 greenhouse gas emissions",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .createSortedData({
      id: "sourceStackOrder",
      sortBy: [{ field: "Type", order: "ascending" }]
    })
    .createBarPlot({
      guides: false,
      x: { field: "food_emissions_num", fieldType: "quantitative" },
      y: { field: "Entity", fieldType: "ordinal" }
    })
    .encodeColor({ field: "Type", layout: "stack" })
    .editColorScale({
      domain: ["Land Use", "Farm", "Animal Feed", "Processing", "Transport", "Retail", "Packaging"],
      range: ["rgb(212, 238, 180)", "rgb(169, 221, 183)", "rgb(116, 201, 189)", "rgb(69, 180, 194)", "rgb(41, 151, 190)", "rgb(33, 115, 177)", "rgb(35, 78, 160)"]
    })
    .editBarMark({ stroke: false })
  .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 60] })
    .editYScale({
      domain: ["Beef (beef herd)", "Lamb & Mutton", "Cheese", "Beef (dairy herd)", "Coffee", "Shrimps (farmed)", "Palm Oil", "Pig Meat", "Poultry Meat", "Fish (farmed)", "Eggs", "Rice", "Tofu", "Milk", "Wheat & Rye", "Maize", "Bananas", "Peas", ""],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7, flush: true } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Emissions from:",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .editTitle({
      alongOffset: -84.236328125
    })
    .editTitle({
      subtitle: "Kg of CO2 emitted per kg of food, source: Our World in Data",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    })
    .editLegendLayout({ position: "bottom-right", direction: "vertical" })
    .editCanvas({ width: 346, margin: { right: 6 } }).editYAxisLabels({ labelMap: [{ value: "", label: "" }] });
}