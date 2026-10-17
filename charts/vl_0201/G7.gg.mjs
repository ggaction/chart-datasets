// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [
  100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000,
  100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
  1000000
];
const X_MINOR_LABELS = [
  { value: 100, label: "$100" },
  { value: 200, label: "" },
  { value: 300, label: "" },
  { value: 400, label: "" },
  { value: 500, label: "" },
  { value: 600, label: "" },
  { value: 700, label: "" },
  { value: 800, label: "" },
  { value: 900, label: "" },
  { value: 1000, label: "$1,000" },
  { value: 2000, label: "" },
  { value: 3000, label: "" },
  { value: 4000, label: "" },
  { value: 5000, label: "" },
  { value: 6000, label: "" },
  { value: 7000, label: "" },
  { value: 8000, label: "" },
  { value: 9000, label: "" },
  { value: 10000, label: "$10,000" },
  { value: 20000, label: "" },
  { value: 30000, label: "" },
  { value: 40000, label: "" },
  { value: 50000, label: "" },
  { value: 60000, label: "" },
  { value: 70000, label: "" },
  { value: 80000, label: "" },
  { value: 90000, label: "" },
  { value: 100000, label: "$100,000" },
  { value: 200000, label: "" },
  { value: 300000, label: "" },
  { value: 400000, label: "" },
  { value: 500000, label: "" },
  { value: 600000, label: "" },
  { value: 700000, label: "" },
  { value: 800000, label: "" },
  { value: 900000, label: "" },
  { value: 1000000, label: "" }
];
export function buildChart() {
  return chart()
    .createCanvas({
      width: 421,
      height: 403,
      margin: { left: 77, top: 27, right: 144, bottom: 176 }
    })
    .createData({ values: data })
    .filterData({ id: "gapminder2017", field: "year", predicate: { op: "eq", value: "2017" } })
    .filterData({ id: "validRawLifeExp", field: "lifeExp", noneOf: ["NA"] })
    .createComputedData({ id: "lifeExpNum", as: "lifeExpNum", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createComputedData({ id: "gdpPercapNum", as: "gdpPercapNum", expression: { op: "toNumber", operand: { field: "gdpPercap" } } })
    .createComputedData({ id: "popNum", as: "popNum", expression: { op: "toNumber", operand: { field: "pop" } } })
    .createScatterPlot({
      x: { field: "gdpPercapNum", fieldType: "quantitative" },
      y: { field: "lifeExpNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "log", domain: [100, 1000000], nice: false })
    .editYScale({ domain: [50, 85], nice: false, zero: false })
    .encodeColor({ field: "region" })
    .encodeSize({ field: "popNum", fieldType: "quantitative" })
    .editColorScale({ domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] })
    .editSizeScale({ domain: [0, 1410000000], range: [0, 250 * Math.PI] })
    .encodeStroke({ value: "#000000" })
    .encodeOpacity({ value: 0.8 })
    .editPointMark({ strokeWidth: 0.5 })
    .createXAxis({
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          flush: true,
          labelMap: X_MINOR_LABELS
        }
      },
      title: { text: "Income per person", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [50, 55, 60, 65, 70, 75, 80, 85],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7 }
      },
      title: { text: "Life expectancy", fontSize: 11, offset: 28 }
    })
    .editXAxis({ line: { color: "#888888" }, title: { fontWeight: 700 } })
    .editYAxis({ line: { color: "#888888" }, title: { fontWeight: 700 } })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        title: "region",
        position: "right",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { stroke: "#000000", strokeWidth: 1.5, opacity: 0.8 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["size"],
        title: "pop",
        position: "right",
        values: [200000000, 400000000, 600000000, 800000000, 1000000000, 1200000000, 1400000000],
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", format: ",.0f" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "rgba(0,0,0,0.8)", stroke: "#000000", strokeWidth: 1.5, opacity: 0.8 } })
    .createTitle({
      text: "Relationship between life expectancy and income, 2017",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -4
    })
    .editTitle({ alongOffset: -71.2 });
}
