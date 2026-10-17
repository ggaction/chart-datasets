import { chart } from "ggaction";
// DOCS: doc-fc11e9fb291905d1
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 708,
      height: 388,
      margin: { left: 53, top: 38, right: 5, bottom: 50 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Year of Survey type", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: ["?", "2019"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 1600], zero: true })
    .createAxes({
        x: {
          line: {},
          ticksAndLabels: {
            values: ["?", "2019"],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          title: {
            text: "Year of Survey type",
            fontSize: 11,
            fontFamily: "sans-serif",
            offset: 44
          }
        },
      y: {
          line: {},
          ticksAndLabels: {
            values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: 1000, label: "1,000" },
                { value: 1200, label: "1,200" },
                { value: 1400, label: "1,400" },
                { value: 1600, label: "1,600" }
              ]
            }
          },
          title: {
            text: "count",
            fontSize: 11,
            fontFamily: "sans-serif",
            offset: 42
          }
      }
    })
    .createGrid({
      horizontal: {
          values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600],
          color: "#ddd",
          lineWidth: 1
      }
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888", lineWidth: 1 },
        labels: { color: "black" }
      },
      title: { color: "black", fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#888", lineWidth: 1 }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createTitle({
      text: "Year of Survey Image (crossings)",
      titleStyle: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "black"
      },
      offset: -6
    });
}
