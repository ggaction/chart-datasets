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
    .createGrid({
      vertical: {
        values: [
          1262304000000, 1293840000000, 1325376000000, 1356998400000,
          1388534400000, 1420070400000, 1451606400000
        ]
      , color: '#ddd'},
      horizontal: { values: [0, 10, 20, 30, 40, 50] , color: '#ddd'}
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            1262304000000, 1293840000000, 1325376000000, 1356998400000,
            1388534400000, 1420070400000
          ],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "date (year)", fontSize: 11, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "value", fontSize: 11, offset: 32 }
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { fontFamily: "sans-serif", format: "%Y" }
      },
      title: { fontWeight: "bold", fontFamily: "sans-serif" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { fontFamily: "sans-serif" }
      },
      title: { fontWeight: "bold", fontFamily: "sans-serif" }
    });
}