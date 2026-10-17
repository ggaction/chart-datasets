// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc, doc-76573a465e2b6a33, doc-36d83b2f56120958
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 384, height: 430, margin: { left: 24, top: 40, right: 110, bottom: 90 } })
    .createData({ values: data })
.filterData({ id: "filteredByType", field: "Type", predicate: { op: "neq", value: "" } })
    .createComputedData({ id: "foodNum", as: "food_emissions_num", expression: { op: "toNumber", operand: { field: "food_emissions" } } })
    .createSortedData({ id: "sourceStackOrder", sortBy: [{ field: "Type", order: "descending" }] })
.createStackData({ category: "Entity", group: "Type", value: "food_emissions_num" })
    .createBarPlot({
      x: {
        field: "Entity",
        fieldType: "nominal",

      },
      y: { lower: "food_emissions_num_start", upper: "food_emissions_num_end", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05, domain: ["Beef (beef herd)", "Lamb & Mutton", "Cheese", "Beef (dairy herd)", "Coffee", "Shrimps (farmed)", "Palm Oil", "Pig Meat", "Poultry Meat", "Fish (farmed)", "Eggs", "Rice", "Tofu", "Milk", "Wheat & Rye", "Maize", "Bananas", "Peas", ""] })
    .editYScale({ domain: [0, 60] })
    .encodeColor({
      field: "Type",
      fieldType: "nominal"
    })
    .editColorScale({ domain: ["Land Use", "Farm", "Animal Feed", "Processing", "Transport", "Retail", "Packaging"], range: ["rgb(212, 238, 180)", "rgb(169, 221, 183)", "rgb(116, 201, 189)", "rgb(69, 180, 194)", "rgb(41, 151, 190)", "rgb(33, 115, 177)", "rgb(35, 78, 160)"] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({
      title: "Emissions from:",
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .createTitle({
      text: "Food - CO2 greenhouse gas emissions",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Kg of CO2 emitted per kg of food, source: Our World in Data",
      offset: -13,
      alongOffset: -18
    })
    .editLegendLayout({ position: "top-right" })
    .editCanvas({
      width: 279,
      margin: { left: 24, top: 40, right: 5, bottom: 90 }
    }).editXAxisLabels({ labelMap: [{ value: "", label: "" }]});
}
