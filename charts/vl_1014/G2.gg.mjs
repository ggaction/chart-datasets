// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 239,
      margin: { left: 18, top: 37, right: 43, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "unemployment",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
        
      },
      y: {
        field: "valueNum",
        
      },
      guides: false
    })
    .editLineMark({ stroke: "#3662f1", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 9], nice: false, zero: false })
    .createTitle({
      text: "ILO Unemployment Rate: South West",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -13
    })
    .editTitle({
      subtitle: "United Kingdom (%), seasonally adjusted",
      offset: -13,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black", format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
        },
        title: false
      }
    });
}