// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a, doc-9a0f2eeed4bc9b31
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 246, height: 212, margin: { left: 24, top: 40, right: 72, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ value: "#7aa1b8" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .editXScale({ domain: [883612800000, 1577836800000], nice: false })
    .editYScale({ domain: [0, 80] })
    .createXAxis({
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: "%Y" })
    
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    
    
    .editVerticalGrid({ color: "#ddd" })
    
    .createTitle({
      text: "Investment Trusts Mutiple Ownership.",
      titleStyle: { fontSize: 13 },
      alongOffset: -18.123
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    })
    .editTitle({
      subtitle: "Source: ONS",
      offset: -6,
      titleStyle: { fontWeight: 700, color: "black" }
    });
}