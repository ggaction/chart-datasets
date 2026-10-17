// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

// G1: compact integrated high-level declaration.
// Facade carries exactly x, y, guides:false (3 top-level fields).
// Canvas/margins frozen from contract; data imported from ./data.json (309 rows,
// Date string + "US Natural Gas Price per mil BTU" number). No schema invented.
// Full final design in G1: line #fe921f strokeWidth 2, scales, axes, grid, title.
export function buildChart() {
  return chart()
    .createCanvas({
      width: 392,
      height: 428,
      margin: { left: 39, top: 46, right: 8, bottom: 37 }
    })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "US Natural Gas Price per mil BTU", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#fe921f", strokeWidth: 2 })
    .editXScale({
      domain: [852076800000, 1661990400000]
    })
    .editYScale({
      domain: [0, 14]
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          852076800000, 946684800000, 1009843200000, 1073001600000,
          1136073600000, 1199145600000, 1262304000000, 1325376000000,
          1388534400000, 1451606400000, 1514764800000, 1577836800000,
          1640995200000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .editXAxis({ title: { fontWeight: "bold" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "US Natural Gas Price per mil BTU",
        fontSize: 11,
        offset: 32
      }
    })
    .editYAxis({ title: { fontWeight: "bold" } })
    
    .createTitle({
      text: "Energy prices in the US",
      subtitle: "Natural gas prices in the US",
      offset: -16
    })
    .editTitle({
      align: "left",
      titleStyle: { color: "transparent", fontSize: 13, fontWeight: "bold" },
      subtitleStyle: { fontStyle: "normal", fontWeight: 400, fontSize: 17, color: "#000000" }
    });
}
