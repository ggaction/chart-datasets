// DOCS: doc-148b81d7fc52eff8, doc-5f9c35fbf79658cc, doc-9f1e9ae3b82a4178
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 418,
      height: 362,
      margin: { left: 63, top: 40, right: 5, bottom: 22 }
    })
    .createData({ id: "src", values: data })
    .createComputedData({
      id: "num",
      as: "Value2n",
      expression: { op: "toNumber", operand: { field: "Value2" } }
    })
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "Country", order: "descending" }]
    })
    .createStackData({
      category: "Year",
      group: "Country",
      value: "Value2n"
    })
    .createBarPlot({
      x: "Year",
      y: {
        lower: "Value2n_start",
        upper: "Value2n_end"
      },
      guides: false
    })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .editYScale({ domain: [0, 60000000] })
    .encodeColor({ field: "Country", layout: "overlay" })
    .editColorScale({
      type: "ordinal",
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
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "$ million. Source: IMF World Economic Outlook 2021",
      offset: -11,
      alongOffset: -57
    })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: ",.0f" }
      },
      title: false
    })
    .createLegend({
      position: "top-left",
      columns: 2,
      title: false
    })
    .editLegend({
      labels: { fontSize: 10, fontFamily: "sans-serif", offset: 8 },
      symbol: { layers: [{ type: "swatch", width: 12, height: 12 }] }
    });
}