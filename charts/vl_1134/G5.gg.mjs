// DOCS: doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 249,
      height: 252,
      margin: { left: 39, top: 35, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 45] })
    .encodeStroke({ value: "rgb(0,47,167" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          788918400000, 946684800000, 1104537600000,
          1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: {
        text: "date",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Unemployment rate (%)",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 30,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createTitle({
      text: "UK Unemployment rate (Aged 16-17) ",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -33.123046875
    })
    .editTitle({
      offset: -9,
      gap: 3,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Seasonally adjusted from 1992-2022 , Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}
