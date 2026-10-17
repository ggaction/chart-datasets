// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 232,
      height: 212,
      margin: { left: 29, top: 35, right: 48, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "value_num",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "value_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000] })
    .editYScale({ domain: [0, 350] })
    .editLineMark({ stroke: "rgb(0,47,167)", strokeWidth: 2 })
    .createAxes({
        x: {
          line: { color: "#888" },
          title: false,
          ticksAndLabels: {
            values: [946684800000, 1136073600000, 1293840000000, 1420070400000, 1577836800000],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7 }
          }
        },
        y: {
          line: { color: "#888" },
          title: false,
          ticksAndLabels: {
            values: [0, 100, 200, 300],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, offset: 7 }
          }
        }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "title-metrics",
        measurements: [
          { text: "Exports to EU: Textile yarn & thread", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, width: 221.546875 },
          { text: "Data source: ONS (2022)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 112.8466796875 }
        ]
      }
    })
    .createTitle({
      text: "Exports to EU: Textile yarn & thread",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -13,
      alongOffset: -23.6845703125
    })
    .editTitle({
      subtitle: "Data source: ONS (2022)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      gap: 3
    });
}
