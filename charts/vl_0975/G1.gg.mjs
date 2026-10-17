import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 244, height: 272, margin: { left: 36, top: 40, right: 8, bottom: 32 } })
    .createData({ id: "rents", values: data })
    .createComputedData({ id: "rentsN", as: "RatioN", expression: { op: "toNumber", operand: { field: "Ratio" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", scale: { domain: [631152000000, 1577836800000] } },
      y: { field: "RatioN", fieldType: "quantitative", scale: { domain: [2, 4], zero: false, nice: false } },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", scale: { domain: [631152000000, 1577836800000] } },
      y: { field: "RatioN", fieldType: "quantitative", scale: { domain: [2, 4], zero: false, nice: false } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 1, flush: true }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 22 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [2, 2.5, 3, 3.5, 4],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 1, format: ".1f" }
      },
      title: { text: "Ratio (oil:gas)", fontSize: 11, fontWeight: 700, offset: 24, rotation: { value: -90, unit: "degrees" } }
    })
    .createTitle({
      text: "Ratio of rents",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -31
    })
    .editTitle({ subtitle: "Rent % of GDP ratio (oil:gas) , Source: World Bank", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 });
}
