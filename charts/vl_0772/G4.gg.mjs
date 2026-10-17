// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 603, height: 1584, margin: { left: 204, top: 47, right: 99, bottom: 37 } })
    .createData({ values: data })
    .createSortedData({ id: "sorted", source: "data", sortBy: [{ field: "\uFEFFCountry", order: "ascending" }] })
    .createComputedData({ id: "scored", as: "score", expression: { op: "toNumber", operand: { field: "CAF_2022" } } })
    .createTitle({ text: "World Giving Index Scores 2022 by each country's main religion", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -199 })
    .editTitle({ subtitle: "Sources: CAF and Everycountryintheworld.com", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13 })
    .createBarPlot({
      x: { field: "score", fieldType: "quantitative" },
      y: "\uFEFFCountry",
      guides: false
    })
    .editXScale({ domain: [0, 70] })
    .encodeColor({ field: "2022", layout: "overlay" })
    .editColorScale({
      type: "ordinal",
      domain: ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Shintoism"],
      range: ["rgb(64, 116, 245)", "rgb(37, 205, 207)", "rgb(90, 252, 119)", "rgb(197, 236, 60)", "rgb(255, 162, 35)", "rgb(223, 65, 17)"]
    })
    .encodeBarWidth({ pixels: 6 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: { labels: { fontSize: 10, offset: 7, flush: true } },
          title: { text: "WGI Overall Score", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          ticksAndLabels: { labels: { fontSize: 8, offset: 7 } },
          title: { text: "Country", fontSize: 11, fontWeight: 700, offset: 190 }
        }
      },
      grid: { vertical: true, horizontal: false },
      legend: {
        title: "Main Religion:",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        position: "right"
      }
    })
    .editVerticalGrid({ color: "#EEE" });
}
