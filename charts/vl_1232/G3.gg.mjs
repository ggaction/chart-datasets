// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 390, height: 327, margin: { left: 24, top: 35, right: 96, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "tradeBillions",
      as: "tradeValBillions",
      expression: { op: "divide", left: { field: "TradeValue" }, right: { constant: 1000000000 } }
    })
    .createLinePlot({
      x: { field: "periodDesc", fieldType: "temporal" },
      y: { field: "tradeValBillions", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "rgDesc" })
    .editColorScale({
      domain: ["Export", "Import", "Re-Export", "Re-Import"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editLineMark({ strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [725846400000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 55], nice: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888" },
        labels: { format: "%Y", fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({ position: "right", title: false, labels: { fontSize: 10 } })
    .editLegend({ symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .createTitle({
      text: "Trade: UK and France",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Value of trade, all commodities, $ billions. Source: UN Comtrade", gap: 1, offset: -13 })
    .editTitle({ alongOffset: -18.123046875 });
}