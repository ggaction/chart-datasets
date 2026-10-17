// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 379, height: 362, margin: { left: 24, top: 40, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "num",
      as: "Value2n",
      expression: { op: "toNumber", operand: { field: "Value2" } }
    })
    .createSortedData({
      id: "countryStackOrder",
      sortBy: [{ field: "Country", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "Value2n", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .encodeColor({ field: "Country", layout: "stack" })
    .editXScale({ domain: ["2016", "2017", "2018", "2019", "2020"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 60] })
    .editColorScale({
      target: "barPlot",
      domain: ["Canada", "France", "Germany", "Italy", "Japan", "UK", "United States"],
      range: [
        "rgb(212, 238, 180)",
        "rgb(169, 221, 183)",
        "rgb(116, 201, 189)",
        "rgb(69, 180, 194)",
        "rgb(41, 151, 190)",
        "rgb(33, 115, 177)",
        "rgb(35, 78, 160)"
      ]
    })
    .createTitle({
      text: "Government debt - G7",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      subtitle: "$ trillion. Source: IMF World Economic Outlook 2021",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      gap: 1
    })
    .editTitle({ alongOffset: -18.12 })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: ["2016", "2017", "2018", "2019", "2020"],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50, 60],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        }
      },
      legend: { position: "top-left", columns: 2, title: false, labels: { fontSize: 10 } }
    });
}