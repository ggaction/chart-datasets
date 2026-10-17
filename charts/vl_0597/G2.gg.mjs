// DOCS: doc-b11b4627b143730d createLinePlot; doc-8a4f6f06e0d37d5e line chart tutorial (canvas/data/facade + createTitle ordering)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 449, height: 378, margin: { left: 42, top: 41, right: 7, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "usRows", field: "cont", oneOf: ["US"] })
    .createComputedData({
      id: "underpctNum",
      as: "underpctNum",
      expression: { op: "toNumber", operand: { field: "underpct" } }
    })
    .createLinePlot({
      x: { field: "DATE", fieldType: "temporal" },
      y: { field: "underpctNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-463017600000, 1675209600000], nice: false })
    .editYScale({ domain: [0, 0.07] })
    .editLineMark({ stroke: "#a12800", strokeWidth: 2 })
    .createTitle({
      text: "Underemployed % of Labor Force",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -13
    })
    .editTitle({ alongOffset: -36.453125 })
    .editTitle({ subtitle: "Sources: FRED & ONS", subtitleStyle: { fontSize: 12 }, gap: 1 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              -315619200000, -157766400000, 0, 157766400000, 315532800000,
              473347200000, 631152000000, 788918400000, 946684800000,
              1104537600000, 1262304000000, 1420070400000, 1577836800000
            ],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
          },
          title: { text: "DATE", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" }
          },
          title: {
            text: "% of Workers Underemployed",
            fontSize: 11,
            fontWeight: 700,
            offset: 32,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      },
      legend: false
    });
}
