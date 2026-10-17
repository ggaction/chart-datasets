// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 339,
      height: 437,
      margin: { top: 40, right: 47, bottom: 97, left: 57 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "sizeNum",
      as: "Size_num",
      expression: { op: "toNumber", operand: { field: "Size" } }
    })
    .createSortedData({
      id: "wildfiresSorted",
      source: "sizeNum",
      sortBy: [{ field: "Size_num", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "Name", fieldType: "nominal" },
      y: { field: "Size_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 1100000] })
    .editBarMark({ fill: "#86d0bb" })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "California wildfires - top 20 by size",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -51.5 })
    .editTitle({ gap: 1, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .editTitle({ subtitle: "Acres. Source: Cal fire" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: 45, unit: "degrees" },
          overlap: "allow"
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: false
    });
}
