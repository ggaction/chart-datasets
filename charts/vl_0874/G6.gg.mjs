// DOCS: actual delivered doc-* IDs: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot), doc-e8d8c6aef74192f0 (createCanvas/createData/editTitle)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 338,
      height: 382,
      margin: { left: 39, top: 59, right: 29, bottom: 123 }
    })
    .createData({ id: "survey", values: data })
    .createBarPlot({
      guides: false,
      x: {
        field: "Responce",
        fieldType: "nominal"
      },
      y: {
        field: "Percentage of Responces",
        fieldType: "quantitative"
      }
    })
    .editYScale({ domain: [0, 18] })
    .editXScale({
      domain: [
        "0 - Much Less Comfortable",
        "1",
        "10 - Much More comfortable",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Don't know"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeBarWidth({ pixels: 20.25 })
    .editBarMark({ fill: "#4c78a8" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: Math.PI / 4 }
      },
      title: { text: "Responce", fontSize: 11, offset: 110 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {"color":"#888"},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: { text: "Percentage of Responces", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: "bold" })
    .editYAxisTitle({ fontWeight: "bold" })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createTitle({
      text: "Comfortability of data being shared",
      titleStyle: { fontSize: 13, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle:
        "A survey showing the comfortability of data being shared with government\ngiven clear explanations of use.\nSource: Delta Poll Survey Results",
      align: "center",
      offset: -13.8
    });
}