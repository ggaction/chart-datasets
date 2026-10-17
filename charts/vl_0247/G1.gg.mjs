// DOCS: doc-2a31551f1566fc6b, doc-e790db38fc2a278a, doc-04276a48bb028dda
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 377,
      height: 384,
      margin: { left: 57, top: 62, right: 20, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numGdp",
      as: "gdpNum",
      expression: { op: "toNumber", operand: { field: "GDP per Capita" } }
    })
    .createComputedData({
      id: "numPct",
      as: "pctNum",
      expression: { op: "toNumber", operand: { field: "Percentage Difference" } }
    })
    .createScatterPlot({
      x: { field: "gdpNum", fieldType: "quantitative", scale: { domain: [0, 140000] } },
      y: { field: "pctNum", fieldType: "quantitative", scale: { domain: [-60, 70] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#30D5C8", opacity: 0.7 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-y-minus-label-metrics",
        measurements: [
          { text: "−60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.96875 },
          { text: "−40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.96875 }
        ]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000],
          ticks: { color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "#000000",
            offset: 7,
            format: ",.0f"
          }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-60, -40, -20, 0, 20, 40, 60],
          ticks: { color: "#888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            color: "#000000",
            offset: 7,
            labelMap: [
              { value: -60, label: "\u221260" },
              { value: -40, label: "\u221240" },
              { value: -20, label: "\u221220" },
              { value: 0, label: "0" },
              { value: 20, label: "20" },
              { value: 40, label: "40" },
              { value: 60, label: "60" }
            ]
          }
        },
        title: {
          text: "Better Women's Team                        Better Men's Team\n\u27F5                                                                \u27F6",
          fontSize: 11,
          fontWeight: 700,
          color: "#000000",
          fontFamily: "sans-serif",
          offset: 40,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createTitle({
      text: "Difference between Men's and Women's Team Performance\nvs GDP per Capita",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "#000000" },
      alongOffset: -52
    })
    .editTitle({ offset: -9 })
    .editTitle({
      subtitle: "GDP per Capita ($) (x), Percentage Difference between\nMen's and Women's FIFA Ranking Points (y).",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "#000000" },
      gap: 1
    });
}