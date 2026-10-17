// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 260,
      height: 410,
      margin: { left: 53, top: 10, right: 5, bottom: 50 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "value", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editBarMark({ fill: "#4c78a8" })
    .editXScale({ domain: [2015, 2016, 2017, 2018], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 6000] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "value",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 40
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "count",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 44,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({ vertical: false })
    .editHorizontalGrid({ color: '#ddd' });
}
