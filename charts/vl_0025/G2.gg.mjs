// DOCS: doc-2a31551f1566fc6b, doc-fb3b01cca895bdad, doc-de8d0ae0cb55c5f3
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 455,
      height: 347,
      margin: { top: 10, right: 8, bottom: 37, left: 47 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "TW", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1514764800000] })
    .editYScale({ domain: [0, 0.4], zero: true })
    .editLineMark({ stroke: "dodgerblue", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "year", fieldType: "temporal" },
      y: { field: "TW", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ target: "scatterPlot", fill: "dodgerblue", opacity: 0.7 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            631152000000, 725846400000, 820454400000, 915148800000,
            1009843200000, 1104537600000, 1199145600000, 1293840000000
          ],
          ticks: { color: "#888", length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            format: "%Y"
          }
        },
        title: { text: "year", fontSize: 11, fontWeight: 700, offset: 27 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          count: 8,
          ticks: { color: "#888", length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            format: ".2f"
          }
        },
        title: { text: "Wind Generation [TW]", fontSize: 11, fontWeight: 700, offset: 35.5 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}