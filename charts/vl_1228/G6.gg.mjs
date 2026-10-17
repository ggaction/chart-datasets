import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
export function buildChart() {
  return chart()
    .createCanvas({ width: 194, height: 212, margin: { left: 29, top: 35, right: 10, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valuesNum", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "value_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 650] })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({ line: {}, ticksAndLabels: { count: 5, ticks: {}, labels: { fontSize: 10, offset: 7 } }, title: false })
    .createYAxis({ line: {}, ticksAndLabels: { count: 4, ticks: {}, labels: { fontSize: 10, offset: 7 } }, title: false })
    .createTitle({ text: "Exprtorts to World: Media", titleStyle: { fontSize: 13, fontWeight: 700 }, alongOffset: -23.7 })
    .editTitle({ offset: -12, gap: 3, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "Data source: ONS (2022)", titleStyle: { color: "black" } });
}
