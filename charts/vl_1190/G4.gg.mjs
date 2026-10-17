import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d

export function buildChart() {
  return chart()
    .createCanvas({ width: 289, height: 237, margin: { left: 53, top: 35, right: 36, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1609459200000] })
    .editYScale({ domain: [0, 1600] })
    .encodeStroke({ value: "darkblue" })
    .encodeStrokeWidth({ value: 2 })
    .createTitle({
      text: "LFS: In Employment: Info & communication",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -47
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 3,
      offset: -12
    })
    .editTitle({
      subtitle: "UK: People: Aged 16 and over: Thousands: NSA, Source ONS"
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888" },
        labels: { format: "%Y", fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 500, 1000, 1500],
        ticks: { color: "#888" },
        labels: { format: ",.0f", fontSize: 10, offset: 7 }
      },
      title: { text: "Economically Inactive (%)", fontSize: 11, fontWeight: 700, offset: 44 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}