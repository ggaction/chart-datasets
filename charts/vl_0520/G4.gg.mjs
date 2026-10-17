// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 317,
      height: 369,
      margin: { left: 29, top: 47, right: 8, bottom: 22 }
    })
    .createData({ id: "fdiRaw", values: data })
    .createComputedData({
      id: "fdi",
      as: "billions",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "value" } },
        right: { constant: 1000 }
      }
    })
    .createLinePlot({
      x: {
        field: "year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "billions",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [536457600000, 1609459200000] })
    .editYScale({ domain: [-20, 260] })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, flush: true, format: "%Y" },
        values: [
          631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ]
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 },
        values: [0, 50, 100, 150, 200, 250]
      },
      title: false
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createTitle({
      text: "Foreign Direct Investment - inward",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black", fontStyle: "normal" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontFamily: "sans-serif", color: "black", fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Total FDI in the UK (\u00A3, billions). [ONS, PB-N2SA]",
      offset: -11,
      alongOffset: -23.7
    });
}