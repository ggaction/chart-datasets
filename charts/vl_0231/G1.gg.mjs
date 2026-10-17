// DOCS: doc-ef5a28c0c3f3c920 doc-b10d8291c442e77a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 373, height: 414, margin: { left: 66, top: 64, right: 7, bottom: 50 } })
    .editCanvas({ background: "white" })
    .createData({ values: data })
    .createComputedData({ id: "hdiRow", as: "hdi", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({ id: "pointsRow", as: "womensPoints", expression: { op: "toNumber", operand: { field: "Womens Points" } } })
    .createComputedData({ id: "populationRow", as: "population", expression: { op: "toNumber", operand: { field: "Population" } } })
    .createScatterPlot({
      x: { field: "hdi", fieldType: "quantitative", scale: { domain: [0.3, 1] } },
      y: { field: "womensPoints", fieldType: "quantitative", scale: { domain: [300, 2200] } },
      guides: false
    })
    .encodeSize({ field: "population", fieldType: "quantitative", scale: { type: "linear", domain: [0, 1412360000], range: [10 * Math.PI / 4, 800 * Math.PI / 4] } })
    .editPointMark({ fill: "#3D76E0", opacity: 0.8, stroke: "none" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ".1f", flush: true }
        },
        title: { text: "⟵                                                                   ⟶\nLess Developed                                            More Developed", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Worse Team                                                   Better Team\n⟵                                                                     ⟶", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "Women's Team Performance vs Economic Development", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -60.0244140625 })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13, gap: 1 })
    .editTitle({ subtitle: "Human Development Index (x), FIFA ranking points (y). 2021 data\nSize of points based on popluation\n" });
}