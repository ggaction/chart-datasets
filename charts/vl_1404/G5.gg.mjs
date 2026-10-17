// DOCS: doc-fb3b01cca895bdad, doc-b7f1bdfb89789cd6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 360,
      height: 354,
      margin: { top: 72, right: 76, bottom: 82, left: 84 }
    })
    .createData({ id: "donations", values: data })
    .createBarPlot({
      x: { field: "Amount" },
      y: { field: "count" },
      guides: false
    })
    .encodeBarWidth({ pixels: 70 })
    .editXScale({ domain: [0, 200] })
    .editBarMark({ fill: "#4c78a8" })
    .createTitle({
      text: "Angry Democrats Donations (\u003c\u0024\u0032\u0030\u0030\u0029",
      titleStyle: { fontSize: 13 },
      offset: -3
    })
    .createXAxis({
      line: {},
      title: { text: "Amount", fontSize: 11, offset: 28 },
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } }
    })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({
      line: {},
      title: { text: "# Donations", fontSize: 11, offset: 28 },
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } }
    })
    .editYAxisTitle({ fontWeight: "bold" })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}