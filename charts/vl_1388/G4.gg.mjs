// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 304,
      height: 247,
      margin: { left: 44, top: 10, right: 60, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "salesDated",
      as: "Date",
      expression: { op: "parseTime", operand: { field: "Time" }, format: "auto" }
    })
    .createComputedData({
      id: "salesNum",
      as: "SalesNum",
      expression: { op: "toNumber", operand: { field: "Sales" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "SalesNum", aggregate: "mean", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1262304000000, 1330560000000] })
    .editYScale({ domain: [0, 100] })
    .encodeColor({ field: "Series" })
    .editColorScale({ domain: ["A", "B", "C"], palette: "tableau10" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1262304000000, 1277942400000, 1293840000000, 1309478400000, 1325376000000
        ],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: 1262304000000, label: "2010" },
            { value: 1277942400000, label: "July" },
            { value: 1293840000000, label: "2011" },
            { value: 1309478400000, label: "July" },
            { value: 1325376000000, label: "2012" }
          ]
        }
      },
      title: {
        text: "Time",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Mean of Sales",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 26
      }
    })
    .createGrid({
      horizontal: { values: [0, 20, 40, 60, 80, 100] },
      vertical: {
        values: [
          1262304000000, 1277942400000, 1293840000000, 1309478400000, 1325376000000
        ]
      }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ target: "linePlot", channels: ["color"], title: "Series" })
    .editLegendTitle({ target: "linePlot", fontSize: 11, fontWeight: 700 })
    .editLegendTitle({ target: "linePlot", fontFamily: "sans-serif" })
    .editLegendLabels({
      target: "linePlot",
      fontSize: 10,
      fontFamily: "sans-serif"
    })
    .editLegendSymbols({
      target: "linePlot",
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    });
}