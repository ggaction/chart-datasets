// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 217,
      height: 242,
      margin: { left: 24, top: 40, right: 13, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "unemp",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [31536000000, 1609459200000], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [0, 12] }
      },
      guides: false
    })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2, opacity: 1 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: {
            values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: "%Y" }
          },
          title: false
        },
        y: {
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: {},
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
          },
          title: false
        }
      },
      grid: {
        horizontal: { color: "#ddd", lineWidth: 1 },
        vertical: { color: "#ddd", lineWidth: 1 }
      }
    })
    .createTitle({
      text: "Female unemployment rate %",
      titleStyle: { fontSize: 13, fontWeight: "700" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "(aged 16 and over, seasonally adjusted)",
      gap: 1,
      offset: -13
    })
    .editTitle({ alongOffset: -18.12 });
}
