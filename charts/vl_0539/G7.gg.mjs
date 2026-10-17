// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-af5562e03efab97d
import { chart } from "ggaction";
import data from "./data.json";

const yDomain = ["Beef (beef herd)", "Lamb & Mutton", "Cheese", "Beef (dairy herd)", "Coffee", "Shrimps (farmed)", "Palm Oil", "Pig Meat", "Poultry Meat", "Fish (farmed)", "Eggs", "Rice", "Tofu", "Milk", "Wheat & Rye", "Maize", "Bananas", "Peas", ""];
const colorDomain = ["Land Use", "Farm", "Animal Feed", "Processing", "Transport", "Retail", "Packaging"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 436, height: 357, margin: { left: 90, top: 35, right: 96, bottom: 22 } })
    .createData({ id: "food", values: data })
    .createComputedData({
      id: "food_num",
      as: "food_emissions_num",
      expression: { op: "if", condition: { op: "eq", left: { field: "food_emissions" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "food_emissions" } } }
    })
    .createSortedData({
      id: "sorted-data",
      sortBy: [{ field: "Type", order: "ascending" }]
    })
    .createStackData({
      category: "Entity",
      group: "Type",
      value: "food_emissions_num"
    })
    .createTitle({
      text: "Food - CO2 greenhouse gas emissions",
      titleStyle: { fontSize: 13 },
      alongOffset: -84.24
    })
    .editTitle({ offset: -9, gap: 1, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Kg of CO2 emitted per kg of food, source: Our World in Data",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .filterData({ id: "visibleColorRows", field: "Type", noneOf: [""] })
    .createBarPlot({
      x: { lower: "food_emissions_num_start", upper: "food_emissions_num_end" },
      y: { field: "Entity", fieldType: "ordinal" },
      guides: false
    })
    .encodeColor({
      field: "Type",
      layout: "overlay"
    })
    .encodeBarWidth({ band: 1 })
    .editColorScale({
      target: "barPlot",
      domain: colorDomain,
      range: ["rgb(212, 238, 180)", "rgb(169, 221, 183)", "rgb(116, 201, 189)", "rgb(69, 180, 194)", "rgb(41, 151, 190)", "rgb(33, 115, 177)", "rgb(35, 78, 160)"]
    })
    .editXScale({ domain: [0, 60] })
    .editYScale({ domain: yDomain, paddingInner: 0.1, paddingOuter: 0.05 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true } },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createGrid({ horizontal: false, vertical: {} })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ title: "Emissions from:", labels: { fontSize: 10 }, titleStyle: { fontSize: 11 } })
    .editLegendTitle({ fontWeight: 700 }).editLegendLayout({ position: "bottom-right", direction: "vertical" }).editCanvas({ width: 346, height: 357, margin: { left: 90, top: 35, right: 6, bottom: 22 } }).editYAxisLabels({ labelMap: [{ value: "", label: "" }] });
}