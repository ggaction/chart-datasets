// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const tickValues = [-30000, -20000, -10000, 0, 10000, 20000, 30000, 40000, 50000, 60000, 70000];
  const xLabelMap = [
    { value: -30000, label: "−$30,000" },
    { value: -20000, label: "−$20,000" },
    { value: -10000, label: "−$10,000" },
    { value: 0, label: "$0" },
    { value: 10000, label: "$10,000" },
    { value: 20000, label: "$20,000" },
    { value: 30000, label: "$30,000" },
    { value: 40000, label: "$40,000" },
    { value: 50000, label: "$50,000" },
    { value: 60000, label: "$60,000" },
    { value: 70000, label: "$70,000" }
  ];

  return chart()
    .createCanvas({
      width: 1285,
      height: 539,
      margin: { left: 121, top: 57, right: 5, bottom: 32 }
    })
    .createData({ id: "raw", values: data })
    .filterData({ id: "y2017", field: "year", predicate: { op: "eq", value: "2017" } })
    .filterData({ id: "europe", field: "region", predicate: { op: "eq", value: "Europe" } })
    .createComputedData({ id: "income", as: "income", expression: { op: "toNumber", operand: { field: "gdpPercap" } } })
    .createComputedData({ id: "one", as: "one", expression: { constant: 1 } })
    .createWindowData({
      id: "ranked",
      sortBy: [{ field: "income", order: "ascending" }],
      operations: [
        { op: "rowNumber", as: "orderedRow" },
        { op: "movingSum", field: "one", as: "countAll", frame: { preceding: 2618, following: 2618 }, minPeriods: 1, missing: "skip" }
      ]
    })
    .createComputedData({
      id: "medianSeed",
      as: "medianSeed",
      expression: {
        op: "if",
        condition: {
          op: "and",
          operands: [
            { op: "gte", left: { field: "orderedRow" }, right: { op: "divide", left: { field: "countAll" }, right: { constant: 2 } } },
            { op: "lte", left: { field: "orderedRow" }, right: { op: "add", left: { op: "divide", left: { field: "countAll" }, right: { constant: 2 } }, right: { constant: 1 } } }
          ]
        },
        then: { field: "income" },
        else: { constant: null }
      }
    })
    .createWindowData({
      id: "withMedian",
      sortBy: [{ field: "income", order: "ascending" }],
      operations: [
        { op: "movingMean", field: "medianSeed", as: "median", frame: { preceding: 2618, following: 2618 }, minPeriods: 1, missing: "skip" }
      ]
    })
    .createComputedData({
      id: "withDiff",
      as: "diff",
      expression: { op: "subtract", left: { field: "income" }, right: { field: "median" } }
    })
    .createComputedData({
      id: "withType",
      as: "type",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "income" }, right: { field: "median" } },
        then: { constant: "Below median" },
        else: { constant: "Above median" }
      }
    })
    .createSortedData({ id: "sorted", sortBy: [{ field: "diff", order: "descending" }] })
    .createBarPlot({
      x: { field: "diff" },
      y: { field: "country" },
      guides: false
    })
    .editBarMark({ opacity: 0.7 })
    .encodeColor({ field: "type", layout: "overlay" })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editXScale({ domain: [-30000, 70000] })
    .editColorScale({ domain: ["Above median", "Below median"], range: ["#91cf60", "#fc8d59"] })
    .createVerticalGrid({ values: tickValues })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: false,
      ticksAndLabels: {
        values: tickValues,
        ticks: { length: 0 },
        labels: { fontSize: 10, flush: true, offset: 2, fontFamily: "sans-serif" }
      },
      title: { text: "Income per person", fontSize: 11 }
    })
    .editXAxis({ ticksAndLabels: { labels: { labelMap: xLabelMap, color: "black" } }, title: { fontWeight: 700 } })
    .createYAxis({
      line: false,
      ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 10 } },
      title: false
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "top",
        direction: "horizontal",
        title: false,
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
        labels: { fontSize: 10 }
      }
    })
    .createTitle({
      text: "Income per person, 2017",
      offset: -10.953125,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ align: "center" });
}