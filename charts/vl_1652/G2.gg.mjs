// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 328, height: 247, margin: { left: 44, top: 10, right: 84, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "priced", as: "priceNum", expression: { op: "toNumber", operand: { field: "price" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "priceNum" },
      guides: false
    })
    .encodeGroup({ field: "symbol" })
    .encodeStrokeDash({ field: "symbol" })
    .editStrokeDashScale({
      target: "linePlot",
      domain: ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"],
      range: [[1, 0], [4, 2], [2, 1], [1, 1], [1, 2, 4, 2]]
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [946684800000, 1267401600000] })
    .editYScale({ domain: [0, 800] })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "%Y" }
          },
          title: { text: "date", fontSize: 11, fontWeight: 700, offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 200, 400, 600, 800],
            ticks: {},
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "price", fontSize: 11, fontWeight: 700, offset: 33 }
        }
      },
      grid: {
        vertical: {
          values: [946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000],
          color: "#ddd",
          lineWidth: 1
        },
        horizontal: {
          values: [0, 200, 400, 600, 800],
          color: "#ddd",
          lineWidth: 1
        }
      },
      legend: {
        position: "right",
        channels: ["strokeDash"],
        title: "symbol",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "line", lineWidth: 2 }] }
      }
    });
}