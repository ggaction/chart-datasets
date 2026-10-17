// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 353,
      height: 370,
      margin: { left: 47, top: 40, right: 6, bottom: 30 }
    })
    .createData({ values: data })
.filterData({ id: "yearRows", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "percentageCalc",
      as: "percentage",
      expression: {
        op: "multiply",
        left: { op: "if", condition: { op: "eq", left: { field: "GDP1" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "GDP1" } } },
        right: { constant: 100 }
      }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "percentage", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false, range: [47, 347] })
    .editYScale({ domain: [0, 0.35], nice: false, zero: true })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(0,47,167)" })
    .createTitle({
      text: "IMF Leading Outstanding",
      alongOffset: -41.5,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Credit outstanding to all members as a percentage of world GDP, Source:IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      offset: -11
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        },
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ]
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35]
      },
      title: {
        text: "Credit oustanding as a percentage of world GDP",
        fontSize: 11,
        offset: 40
      }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } } })
    .editYAxis({
      ticksAndLabels: { labels: { format: ".2f" } },
      title: { fontWeight: 700 }
    });
}