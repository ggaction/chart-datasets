// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (createScatterPlot), doc-071c93dff3a5ea2e (line-chart recipe)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 376, height: 377, margin: { left: 64, top: 40, right: 12, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .editLineMark({ curve: "step" })
    .encodeStroke({ target: "linePlot", value: "rgb(0,47,167)" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "red", stroke: false })
    .encodePointRadius({ value: 6.123724356957945 })
    .createRuleMark({ id: "rule", stroke: "black", opacity: 0 })
    .encodeX({ field: "date", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })

    .editXScale({ domain: [-978307200000, 1627776000000], nice: false })
    .editYScale({ domain: [0, 140000], nice: false })
    .createGrid({
      horizontal: { values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000] },
      vertical: { values: [-946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [-946771200000, -631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "date", fontSize: 11, offset: 27.578125 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "value", fontSize: 11, offset: 51.5693359375 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createTitle({
      text: "Services jobs",
      titleStyle: { fontSize: 13 },
      alongOffset: -58.1474609375
    })
    .editTitle({
      offset: -10.953125,
      gap: 3.34375,
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Employment in Service providing jobs. Thousands, SA, (BLS via FRED)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}