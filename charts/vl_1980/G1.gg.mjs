// DOCS: actual delivered doc-* IDs (doc-6c2c08869091f6a0 createBarPlot, doc-fc11e9fb291905d1 createBarPlot basic-charts)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 245,
      height: 264,
      margin: { left: 39, top: 27, right: 6, bottom: 37 }
    })
    .createData({ id: "data", values: data })
    .createBarPlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1262304000000, 1451606400000] })
    .editYScale({ domain: [0, 50] })
    .encodeBarWidth({ interval: { unit: "year", insetStart: 1 } })
    .createTitle({
      text: "temporal bar chart",
      offset: -3,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .createGuides({
      grid: {
        vertical: {
          values: [
            1262304000000, 1293840000000, 1325376000000, 1356998400000,
            1388534400000, 1420070400000, 1451606400000
          ]
        , color: '#ddd'},
        horizontal: { values: [0, 10, 20, 30, 40, 50] , color: '#ddd'}
      },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              1262304000000, 1293840000000, 1325376000000, 1356998400000,
              1388534400000, 1420070400000
            ],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: "%Y"
            }
          },
          title: {
            text: "date (year)",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 28
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40, 50],
            ticks: { length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "value",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            offset: 32
          }
        }
      }
    });
}