// DOCS: doc-fc11e9fb291905d1, doc-16c583350443cc93
import { chart } from "ggaction";
import data from "./data.json";

const COUNTRIES = [
  "Chad", "South Sudan", "Zimbabwe", "Sierra Leone", "Guinea-Bissau",
  "Zambia", "Afghanistan", "Swaziland", "Somalia",
  "Central African Republic", "Lesotho"
];
const TICKS = [
  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
  40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 280, margin: { left: 120, top: 28, right: 5, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .filterData({ id: "y2017", field: "yearNum", predicate: { op: "eq", value: 2017 } })
    .filterData({ id: "lifeValid", field: "lifeExp", noneOf: ["NA"] })
    .createComputedData({ id: "lifeExpNum", as: "lifeExpNum", expression: { op: "toNumber", operand: { field: "lifeExp" } } })
    .createWindowData({ id: "ranked", sortBy: [{ field: "lifeExpNum", order: "ascending" }], operations: [{ op: "rank", as: "rank" }] })
    .filterData({ id: "topRanked", field: "rank", predicate: { op: "lte", value: 10 } })
    .createSortedData({ id: "sorted", sortBy: [{ field: "lifeExpNum", order: "descending" }] })
    .createTitle({
      text: "Countries with the lowest life expectancy, 2017",
      titleStyle: { fontSize: 13 },
      offset: -3
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: { field: "lifeExpNum", fieldType: "quantitative" },
      y: { field: "country", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 65], nice: false })
    .editYScale({ domain: COUNTRIES, paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "region", layout: "overlay" })
    .editColorScale({ domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: TICKS,
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, flush: true }
      },
      title: { text: "Life expectancy", fontSize: 11, offset: 22 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: ".0f" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .createGrid({
      horizontal: false,
      vertical: { scale: "x", values: TICKS, lineWidth: 1 }
    })
    .editVerticalGrid({ color: "#ddd" });
}