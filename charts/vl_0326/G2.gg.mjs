// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 372, margin: { left: 32, top: 40, right: 19, bottom: 32 } })
    .createData({ id: "rows", values: data })
    .filterData({ id: "validYears", field: "Year", predicate: { op: "neq", value: "" } })
    .createComputedData({ id: "TotalsPct", as: "TotalsPct", expression: { op: "toNumber", operand: { field: "Totals%ofGDP" } } })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "TotalsPct", fieldType: "quantitative" },
      guides: false
    })
    .editYScale({ domain: [0, 0.35] })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false, range: [32, 332] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#13667a" })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          count: 8,
          ticks: { length: 0 },
          labels: { fontSize: 10, offset: 7, rotation: { value: 35, unit: "degrees" } }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7, format: ".2f" } },
        title: false
      }
    })
    .createTitle({
      text: "IMF Lending Outstaning (% of World GDP)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({ alongOffset: -26.46 })
    .editTitle({
      subtitle: "credit outstanding to all members as a percentage of World GDP, source IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 3
    });
}
