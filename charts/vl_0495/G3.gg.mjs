// DOCS: doc-b11b4627b143730d (createLinePlot), doc-dfae58344d5a524e (createCanvas), doc-8a4f6f06e0d37d5e (line chart)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 661, height: 390, margin: { left: 58, top: 53, right: 103, bottom: 37 } })
    .createData({ id: "population", values: data })
    .createFoldData({ id: "folded", fields: ["New York", "California"], as: { key: "State", value: "Value" } })
    .createComputedData({ id: "foldedNum", as: "Population", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createTitle({ text: "New York vs California", titleStyle: { fontSize: 12, fontWeight: 700, fontFamily: "sans-serif" } })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }, offset: -12, gap: 1 })
    .editTitle({ subtitle: "Population, 1900-2021\n", align: "center" })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Population", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-2208988800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 40000] })
    .encodeColor({ field: "State" })
    .editColorScale({ domain: ["California", "New York"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodeGroup({ field: "State" })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-2208988800000, -1893456000000, -1577923200000, -1262304000000, -946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 46.5859375 }
      }
    })
    .createGrid({
      horizontal: { values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000], color: "#ddd", lineWidth: 1 },
      vertical: { values: [-2208988800000, -1893456000000, -1577923200000, -1262304000000, -946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000], color: "#ddd", lineWidth: 1 }
    })
    .createLegend({ channels: ["color"], position: "right", title: "State" })
    .editLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    });
}