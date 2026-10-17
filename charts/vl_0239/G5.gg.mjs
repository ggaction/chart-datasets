// DOCS: doc-e790db38fc2a278a, doc-bc26da5598d35bae, doc-48c72317a1a99e17, doc-7f2c254224fc4908, doc-81f3b4da1bfe0908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 521,
      height: 404,
      margin: { left: 41, top: 67, right: 180, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "xNum",
      as: "npxGX",
      expression: { op: "toNumber", operand: { field: "npxG p90" } }
    })
    .createComputedData({
      id: "yNum",
      as: "GPKY",
      expression: { op: "toNumber", operand: { field: "G-PK p90" } }
    })
    .createScatterPlot({
      x: { field: "npxGX", fieldType: "quantitative" },
      y: { field: "GPKY", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: [0, 1] })
    .encodeSize({ field: "npxGX", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 0.88], range: [Math.PI / 4, 30 * Math.PI] })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "#000080" })
    .createTitle({
      text: "Non-Penalty Goals and Expected Goals\nin Europe's Top 5 Leagues 2021-22",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      offset: -13,
      gap: 3,
      alongOffset: -35.4
    })
    .editTitle({
      subtitle:
        "Non-Penalty xG (x), Non-Penalty Goals (y). size by Non-Penalty xG,\nall stats per 90mins played, min 25 90s played, data: FBref"
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
        title: { text: "npxG p90", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
        title: { text: "G-PK p90", fontSize: 11, fontWeight: 700, offset: 28 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Non-Penalty Expected Goals",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        values: [0, 0.2, 0.4, 0.6, 0.8],
        position: "right"
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "#000080", opacity: 0.7 }
    });
}