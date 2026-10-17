import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-f30bfed200b50a98
export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 367, margin: { left: 39, top: 40, right: 7, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "cpi", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#002199", strokeWidth: 2 })
    .editXScale({ domain: [599616000000, 1667260800000], nice: false })
    .editYScale({ domain: [-4, 8], zero: false, nice: false })
    .createXAxis({
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 7, flush: true, format: "%Y" }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-4, -2, 0, 2, 4, 6, 8],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Inflation", fontSize: 11, fontWeight: 700, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({ line: { color: "#888" }, ticks: { color: "#888" } })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" } })
    .createTitle({
      text: "CPI 12mth: Non-energy industrial goods (G) 2015=100",
      titleStyle: { fontSize: 13 },
      alongOffset: -33.4013671875
    })
    .editTitle({ offset: -13, titleStyle: { fontWeight: 700 } })
    .editTitle({
      subtitle: "(£million, Source: ONS)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      gap: 3
    });
}
