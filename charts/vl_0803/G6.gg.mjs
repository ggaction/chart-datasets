// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-76573a465e2b6a33, doc-bc26da5598d35bae, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 314, margin: { left: 44, top: 27, right: 6, bottom: 37 } })
    .editCanvas({ background: "rgba(255,255,255,0)" })
    .createData({ values: data })
    .createComputedData({ id: "heightN", as: "HeightN", expression: { op: "toNumber", operand: { field: "Height" } } })
    .createComputedData({ id: "weightN", as: "WeightN", expression: { op: "toNumber", operand: { field: "Weight" } } })
    .createWindowData({ id: "indexed", operations: [{ op: "rowNumber", as: "sourceRow" }] })
    .filterData({ id: "firstPoints", field: "sourceRow", range: { min: 1, max: 10000 } })
    .createScatterPlot({
      x: { field: "HeightN", fieldType: "quantitative" },
      y: { field: "WeightN", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386 })
    .encodeStroke({ value: "#F4AB2F" })
    .editPointMark({ fill: "none", strokeWidth: 2, opacity: 0.7 })
    .filterData({ id: "lastPoints", source: "indexed", field: "sourceRow", range: { min: 10001, max: 15352 } })
    .createScatterPlot({
      id: "remainingPoints",
      x: { field: "HeightN", fieldType: "quantitative" },
      y: { field: "WeightN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 250] })
    .editYScale({ domain: [0, 250] })
    .encodePointRadius({ value: 2.7386 })
    .encodeStroke({ value: "#F4AB2F" })
    .editPointMark({ fill: "none", strokeWidth: 2, opacity: 0.7 })
    .createXAxis({
      line: { color: "#F4AB2F" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5, color: "#F4AB2F" },
        labels: { fontSize: 10, offset: 7, color: "#F4AB2F", flush: true }
      },
      title: { text: "Height", fontSize: 11, fontWeight: "bold", color: "#F4AB2F", offset: 28 }
    })
    .createYAxis({
      line: { color: "#F4AB2F" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5, color: "#F4AB2F" },
        labels: { fontSize: 10, offset: 7, color: "#F4AB2F" }
      },
      title: { text: "Weight", fontSize: 11, fontWeight: "bold", color: "#F4AB2F", offset: 32 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#eadac1" })
    .editVerticalGrid({ color: "#eadac1" })
    .createTitle({
      text: "Asia",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#F4AB2F" },
      offset: -4
    })
    .editTitle({ align: "center" });
}