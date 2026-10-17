import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
export function buildChart() {
  const xTicks = [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
  const yTicks = [-0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08];
  return chart()
    .createCanvas({ width: 340, height: 362, margin: { left: 33, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    
    .filterData({ id: "windowed", field: "Date", range: { min: "1989-01-01", max: "2022-12-31" } })
    .createComputedData({
      id: "infl",
      as: "value",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "CPIAUCSL_PC1" } }, right: { constant: 100 } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1640995200000] })
    .editYScale({ domain: [-0.02, 0.08] })
    .editLineMark({ stroke: "rgb(0,112,192)", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Inflation - US",
      titleStyle: { fontSize: 13, fontWeight: 700, fontStyle: "normal", color: "black", fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, color: "black", fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -27.29296875 })
    .editTitle({ subtitle: "All items, FRED series: CPIAUCSL_PC1" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: xTicks,
        ticks: { color: "#888", length: 5 },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", flush: true,
          labelMap: [
            { value: 631152000000, label: "1990" },
            { value: 788918400000, label: "1995" },
            { value: 946684800000, label: "2000" },
            { value: 1104537600000, label: "2005" },
            { value: 1262304000000, label: "2010" },
            { value: 1420070400000, label: "2015" },
            { value: 1577836800000, label: "2020" }
          ]
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: yTicks,
        ticks: { color: "#888", length: 5 },
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black",
          labelMap: [
            { value: -0.02, label: "\u22122%" }, { value: -0.01, label: "\u22121%" },
            { value: 0, label: "0%" }, { value: 0.01, label: "1%" }, { value: 0.02, label: "2%" },
            { value: 0.03, label: "3%" }, { value: 0.04, label: "4%" }, { value: 0.05, label: "5%" },
            { value: 0.06, label: "6%" }, { value: 0.07, label: "7%" }, { value: 0.08, label: "8%" }
          ]
        }
      },
      title: false
    })
    .createGrid({
      horizontal: { values: yTicks, color: "#ddd", lineWidth: 1 },
      vertical: { values: xTicks, color: "#ddd", lineWidth: 1 }
    });
}