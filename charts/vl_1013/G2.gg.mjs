// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 342, height: 385, margin: { left: 47, top: 40, right: 35, bottom: 45 } })
    .createData({ values: data })
    .filterData({ id: "validX", field: "Years", noneOf: [""] })
    .createComputedData({
      id: "relGdpNum",
      as: "relGdp",
      expression: { op: "toNumber", operand: { field: "Totals (Relative to GDP) (Billions)" } }
    })
    .createBarPlot({
      x: { field: "Years", fieldType: "temporal", temporalUnit: "year",
      },
      y: { field: "relGdp", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [418409280000, 1632813120000], nice: false })
    .editYScale({ domain: [0, 0.35] })
    .encodeBarWidth({ target: "barPlot", pixels: 5 })
    .editBarMark({ target: "barPlot", fill: "#3662f1" })
    .createTitle({
      text: "IMF credit outstanding relative to global GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -41.5 })
    .editTitle({ subtitle: "Total IMF credit outstanding relative to global GDP Source:IMF,World Bank" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [473385600000, 631152000000, 788918400000, 946684800000,
                 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 2, format: "%Y", rotation: { value: 45, unit: "degrees" } }
      },
      title: { text: "Years", fontSize: 11, fontWeight: 700, offset: 34.8 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".2f" }
      },
      title: { text: "Billions $ (% of Global GDP) ", fontSize: 11, fontWeight: 700, offset: 36.5 }
    });
}