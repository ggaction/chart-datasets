// DOCS: doc-2e6240c00cb297cc, doc-99b0513458edff76, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 90,
      height: 138,
      margin: { left: 5, top: 5, right: 5, bottom: 33 },
    })
    .createData({ values: data })
    .createWindowData({
      id: "ranked",
      partitionBy: "data",
      operations: [{ op: "rowNumber", as: "id" }],
    })
    .createScatterPlot({
      x: { field: "data", fieldType: "ordinal" },
      y: { field: "id", fieldType: "ordinal" },
      guides: false,
    })
    .editPointMark({ fill: "#4c78a8", opacity: 1, stroke: "none" })
    .encodePointRadius({ value: 2.7386 })
    .editXScale({ type: "point", domain: [1, 2, 3, 4], padding: 0.5 })
    .editYScale({ type: "point", domain: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontWeight: "400", rotation: -Math.PI / 2 },
      },
      title: { text: "data", fontSize: 11, offset: 24 },
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } },
      title: { color: "#000", fontWeight: "bold" },
    });
}