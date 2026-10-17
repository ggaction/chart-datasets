// DOCS: doc-b11b4627b143730d, doc-f30bfed200b50a98, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 230,
      height: 270,
      margin: { left: 24, top: 35, right: 6, bottom: 35 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNumData",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 22], nice: false })
    .editLineMark({ stroke: "#588157", strokeWidth: 1 })
    .createTitle({
      text: "Total population aged 18-24",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({ subtitle: "Unemployment rate, %, 1992-2022", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, gap: 1 })
    .editTitle({ alongOffset: -18.12 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "black",
            offset: 7,
            rotation: { value: 45, unit: "degrees" },
            format: "%Y"
          }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20],
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      }
    });
}
