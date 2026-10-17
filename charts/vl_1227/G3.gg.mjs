// DOCS: doc-76573a465e2b6a33, doc-0a1e48878a814143, doc-5a3ee5c6cc499dee
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 236,
      height: 212,
      margin: { left: 38, top: 35, right: 43, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 2200] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000
        ],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          color: "black",
          format: ",.0f"
        }
      },
      title: false
    })
    
    .createTitle({
      text: "Exports to World: Tobacco products",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -32
    })
    .editTitle({
      offset: -13,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 3
    })
    .editTitle({
      subtitle: "Data source: ONS (2022)"
    });
}