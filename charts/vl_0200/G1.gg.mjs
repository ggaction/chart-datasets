// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-6947deb65f00e732
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 327, height: 248, margin: { left: 5, top: 5, right: 122, bottom: 43 } })
    .createData({ values: data })
    .createComputedData({ id: "budgetNum", as: "budgetNum", expression: { op: "toNumber", operand: { field: "Production Budget" } } })
    .createPiePlot({ category: "Genre", value: "budgetNum", guides: false })
    .editThetaScale({ domain: ["Action", "Adventure", "Black Comedy", "Comedy", "Concert", "Documentary", "Drama", "Horror", "Musical", "Romantic Comedy", "Thriller", "Western"] })
    .editArcMark({ stroke: false })
    .encodeColor({
      field: "Genre",
      scale: {
        domain: ["Action", "Adventure", "Black Comedy", "Comedy", "Concert", "Documentary", "Drama", "Horror", "Musical", "Romantic Comedy", "Thriller", "Western"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 100 } } })
    .createLegend({
      title: "Genre",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}