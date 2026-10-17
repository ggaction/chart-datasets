// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const xTicks = [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000];
  return chart()
    .createCanvas({ width: 1280, height: 261, margin: { left: 24, top: 27, right: 5, bottom: 34 } })
    .createData({ values: data })
    .filterData({ id: "y2017", field: "year", predicate: { op: "eq", value: "2017" } })
    .createComputedData({ id: "gdpNum", as: "gdp", expression: { op: "toNumber", operand: { field: "gdpPercap" } } })
    .createHistogram({ field: "gdp", binStep: 5000, guides: false })
    .editXScale({ domain: [0, 120000], nice: false })
    .editYScale({ domain: [0, 60] })
    .editBarMark({ fill: "#fc6721", opacity: 0.7, stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: xTicks,
        ticks: { length: 0 },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 2, flush: true,
          labelMap: [
          { value: 0, label: "$0" },
          { value: 10000, label: "$10,000" },
          { value: 20000, label: "$20,000" },
          { value: 30000, label: "$30,000" },
          { value: 40000, label: "$40,000" },
          { value: 50000, label: "$50,000" },
          { value: 60000, label: "$60,000" },
          { value: 70000, label: "$70,000" },
          { value: 80000, label: "$80,000" },
          { value: 90000, label: "$90,000" },
          { value: 100000, label: "$100,000" },
          { value: 110000, label: "$110,000" },
          { value: 120000, label: "$120,000" }
        ]
        }
      },
      title: { text: "GDP per capita", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editXAxisLine({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createTitle({
      text: "Distribution of income across countries, 2017",
      offset: -3,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}