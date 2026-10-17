// DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 546,
      height: 372,
      margin: { left: 41, top: 35, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Non-Penalty Expected Goals + Expected Assists per 90", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [1628646171428, 1653949028571], nice: false, range: [41, 541] })
    .editYScale({ domain: [0, 2.8], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: { count: 13, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Date", fontSize: 11, offset: 30, fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 8, labels: { fontSize: 10, offset: 7, format: ".1f" } },
      title: { text: "Non-Penalty Expected Goals + Expected Assists per 90", fontSize: 11, offset: 34, fontWeight: 700 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "Mohamed Salah Game Log 2021-22 ",
      align: "left",
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      offset: -12,
      alongOffset: -36,
      gap: 8
    })
    .editTitle({
      subtitle: "Data from: FBref",
      titleStyle: { fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}
