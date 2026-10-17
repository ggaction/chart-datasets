import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33 doc-8a4f6f06e0d37d5e
// Source-tooltips (%b-%Y Date / ,.0f Jobs (k) on the transparent rule layer) have no
// delivered public tooltip action in the installed API — reported capability gap, not invented.

export function buildChart() {
  return chart()
    .createCanvas({ width: 370, height: 377, margin: { left: 58, top: 40, right: 12, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "value_num", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: { field: "date", fieldType: "temporal" }, y: "value_num", guides: false })
    .encodeStroke({ value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ value: 2 })
    .editLineMark({ curve: "step" })
    .createScatterPlot({ x: { field: "date", fieldType: "temporal" }, y: "value_num", guides: false })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "red", stroke: false })
    .encodePointRadius({ value: Math.sqrt(150) / 2 })
    .createRuleMark({ id: "rule", stroke: "black", opacity: 0 })
    .encodeX({ field: "date", fieldType: "temporal", target: "rule" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [-978307200000, 1627776000000], nice: false })
    .editYScale({ domain: [0, 20000], nice: false })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [-946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
      },
      title: { text: "date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" }, offset: 46.0078125 }
    })
    .createGrid({
      horizontal: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000], color: "#ddd", lineWidth: 1 },
      vertical: { values: [-946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000], color: "#ddd", lineWidth: 1 }
    })
    .createTitle({ text: "Manufacturing jobs", titleStyle: { fontSize: 13 }, alongOffset: -52.5859375 })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Employment in Manufacturing. Thousands, SA, (BLS via FRED)", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}