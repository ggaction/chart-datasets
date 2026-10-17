// DOCS: doc-e790db38fc2a278a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 490, height: 463, margin: { left: 58, top: 76, right: 32, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "xNumData",
      as: "XNum",
      expression: { op: "toNumber", operand: { field: "X" } }
    })
    .createComputedData({
      id: "yNumData",
      as: "yNum",
      expression: { op: "toNumber", operand: { field: "y" } }
    })
    .createComputedData({
      id: "y2NumData",
      as: "y2Num",
      expression: { op: "toNumber", operand: { field: "y2" } }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "sourceTitleWidth",
        measurements: [
          {
            text: "Linear regression of % of population in Extreme poverty on Net ODA received",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 479.1875
          }
        ]
      }
    })
    .createTitle({
      text: "Linear regression of % of population in Extreme poverty on Net ODA received",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -52.9
    })
    .editTitle({
      offset: -13,
      gap: 1,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle:
        "% of population given by value reported closest to year 2014\nNet ODA refers to Official Development Aid received (millions, in constant terms, 2020 US$)\nSource: World Bank\nR Squared value = 0.04"
    })
    .createScatterPlot({
      x: { field: "XNum", fieldType: "quantitative" },
      y: { field: "yNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ value: "darkblue" })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodePointRadius({ value: 2.739 })
    .createLinePlot({
      x: { field: "XNum", fieldType: "quantitative" },
      y: { field: "y2Num", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "red", strokeWidth: 2 })
    .editXScale({ domain: [0, 90] })
    .editYScale({ domain: [-1000, 4500] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
          ticks: {},
          labels: { fontSize: 10, offset: 7, flush: true }
        },
        title: { text: " Population in Extreme poverty (%)", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-1000, -500, 0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            labelMap: [
              { value: -1000, label: "\u22121,000" },
              { value: -500, label: "\u2212500" },
              { value: 0, label: "0" },
              { value: 500, label: "500" },
              { value: 1000, label: "1,000" },
              { value: 1500, label: "1,500" },
              { value: 2000, label: "2,000" },
              { value: 2500, label: "2,500" },
              { value: 3000, label: "3,000" },
              { value: 3500, label: "3,500" },
              { value: 4000, label: "4,000" },
              { value: 4500, label: "4,500" }
            ]
          }
        },
        title: { text: "ODA (millions US$)", fontSize: 11, fontWeight: 700, offset: 40 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}