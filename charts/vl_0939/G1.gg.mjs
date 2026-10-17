// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 349, height: 385, margin: { left: 44, top: 40, right: 5, bottom: 45 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "usd", as: "Totals_USD_num", expression: { op: "toNumber", operand: { field: "Totals_USD" } } })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", scale: { type: "time", domain: [421086786206, 1661671613793], nice: false } },
      y: { field: "Totals_USD_num", fieldType: "quantitative", scale: { type: "linear", domain: [0, 160] } },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "darkgreen" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { count: 8, ticks: { length: 0 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2, format: "%Y", rotation: { value: 45, unit: "degrees" } } },
        title: { text: "Year", fontSize: 11, fontWeight: "bold", offset: 34.8 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { count: 8, ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
        title: { text: "Total $bn", fontSize: 11, fontWeight: "bold", offset: 32.7 }
      }
    })
    .createTitle({ text: "IMF Lending Outstanding", titleStyle: { fontSize: 13, fontWeight: "bold" }, subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .editTitle({ align: "left", offset: -13, alongOffset: -38.68 })
    .editTitle({ subtitle: "Loans issued to all members, 1984-2022. Source: IMF", gap: 1 });
}