// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 436,
      height: 389,
      margin: { left: 39, top: 52, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "inflationNum",
      as: "InflationNum",
      expression: { op: "toNumber", operand: { field: "Inflation" } }
    })
    .createLinePlot({
      x: {
        field: "Date",
        fieldType: "temporal"
      },
      y: { field: "InflationNum" },
      guides: false
    })
    .editXScale({ domain: [1635724800000, 1667260800000], nice: false })
    .editYScale({ domain: [0, 10] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createTitle({
      offset: -13,
      text: "Inflation in Uk (Nov 2021 - DNov 2022)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 3, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" } })
    .editTitle({ subtitle: "Source: Statista", alongOffset: -33 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1635724800000, 1646092800000, 1656633600000, 1667260800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Inflation (%)", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontFamily: "sans-serif" } })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black", fontFamily: "sans-serif" } })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1, values: [1635724800000, 1638316800000, 1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000, 1667260800000] }
    });
}