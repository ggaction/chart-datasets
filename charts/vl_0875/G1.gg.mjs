// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 374, height: 264, margin: { left: 5, top: 59, right: 169, bottom: 5 } })
    .createData({ values: data })
    .createSortedData({ id: "sorted", sortBy: [{ field: "Responce", order: "ascending" }] })
    .createPiePlot({ category: "Responce", value: "value", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 50 }, stroke: false })
    .encodeColor({
      field: "Responce",
      fieldType: "nominal",
      scale: { domain: ["Don\u2019t know", "It could definitely be used", "It could definitely not be used", "It could probably be used", "It could probably not be used"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"] }
    })
    .createTitle({ text: "Does Data Sharing Provide Benefits to the UK Economy?", align: "left", titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .editTitle({
      subtitle: "A survey showing responce in percentages of whether they believe data\nsharing benefits the UK Economy.\nSource: Delta Poll Survey Results",
      offset: -13
    })
    .createLegend({ title: "Responce", labels: { fontSize: 10, fontFamily: "sans-serif" }, titleStyle: { fontSize: 11, fontWeight: 700 } });
}
