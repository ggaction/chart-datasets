// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 340, height: 389, margin: { left: 39, top: 52, right: 11, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "validPopulation", field: "Population (2021)", noneOf: ["23,855,010"] })
    .createComputedData({ id: "cryptoPct", as: "cryptoPct", expression: { op: "toNumber", operand: { field: "Percentage of Population who own/use crypto" } } })
    .createComputedData({ id: "gdpGrowth", as: "gdpGrowth", expression: { op: "toNumber", operand: { field: "Real GDP growth (Annual percent change)" } } })
    .createComputedData({ id: "population", as: "population", expression: { op: "toNumber", operand: { field: "Population (2021)" } } })
    .createScatterPlot({
      x: { field: "cryptoPct", fieldType: "quantitative" },
      y: { field: "gdpGrowth", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [5, 45], zero: false })
    .editYScale({ domain: [-1, 9], zero: false })
    .encodeSize({ field: "population", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 1412360000], range: [7.853981633974483, 628.3185307179587] })
    .editPointMark({ fill: "#3662f1", opacity: 0.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [5, 10, 15, 20, 25, 30, 35, 40, 45],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "% of Population who use/own Crypto", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Real GDP growth (% change)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 22 }
    })
    .editYAxis({
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black" }
      },
      title: { color: "black" }
    })
    .createTitle({
      text: "Real GDP growth relative to Crypto usage 2022",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" }, alongOffset: -33.4013671875 })
    .editTitle({
      subtitle: "This graph illustares Real GDP growth of 55 countries relative to\nthe pecenatge of that country that use/own Cyptocurrenies",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 3
    });
}