// DOCS: doc-b11b4627b143730d, doc-f30bfed200b50a98, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 303,
      height: 247,
      margin: { left: 44, top: 10, right: 59, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createCompleteData({
      id: "complete",
      key: "a",
      groupBy: "c"
    })
    .createSortedData({
      id: "sorted",
      source: "complete",
      sortBy: [{ field: "a", order: "ascending" }]
    })
    .createWindowData({
      id: "window",
      partitionBy: "c",
      operations: [
        {
          op: "movingMean",
          field: "b",
          as: "mean_b",
          frame: { preceding: 2, following: 2 },
          missing: "skip"
        }
      ]
    })
    .createComputedData({
      id: "final",
      as: "b_final",
      expression: {
        op: "if",
        condition: { op: "isNull", operand: { field: "b" } },
        then: { field: "mean_b" },
        else: { field: "b" }
      }
    })
    .createLinePlot({
      x: { field: "a", fieldType: "quantitative" },
      y: { field: "b_final", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({
      field: "c"
    })
    .encodeColor({
      field: "c",
      fieldType: "nominal"
    })
    .editXScale({ domain: [0, 5], nice: true })
    .editYScale({ domain: [0, 100] })
    .editColorScale({ domain: [0, 1], range: ["#4c78a8", "#f58518"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "a", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "b", fontSize: 11, offset: 35 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({
      color: "#ddd"
    })
    .editVerticalGrid({
      color: "#ddd"
    })
    .createLegend({
      channels: ["color"],
      title: "c",
      labels: { fontSize: 10 }
    })
}