// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 420,
      height: 386,
      margin: { left: 24, top: 64, right: 96, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "tradeBillions",
      as: "tradeValBillions",
      expression: {
        op: "divide",
        left: { field: "TradeValue" },
        right: { constant: 1000000000 }
      }
    })
    .createLinePlot({
      x: {
        field: "periodDesc",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [725846400000, 1577836800000] }
      },
      y: {
        field: "tradeValBillions",
        fieldType: "quantitative",
        scale: { domain: [0, 55] }
      },
      guides: false
    })
    .encodeColor({
      field: "rgDesc",
      target: "linePlot",
      scale: {
        domain: ["Export", "Import", "Re-Export", "Re-Import"],
        range: [
          "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
          "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
        ]
      }
    })
    .editLineMark({ strokeWidth: 2 })
    .createTitle({
      text: "Trade: UK and France",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Value of trade, all commodities, $ billions\nSource: UN Comtrade\n",
      gap: 3,
      offset: -13
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            788918400000, 946684800000, 1104537600000,
            1262304000000, 1420070400000, 1577836800000
          ],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd", lineWidth: 1 },
      vertical: { scale: "x", color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      position: "right",
      title: false,
      labels: { fontSize: 10 }
    })
    .editLegend({
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    });
}