import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-76573a465e2b6a33
const CONFEDERATIONS = ["AFC", "CAF", "CONCACAF", "CONMEBOL", "OFC", "UEFA", "defunct"];
const CONF_COLORS = [
  "rgb(217, 73, 75)",
  "rgb(246, 142, 87)",
  "rgb(254, 209, 131)",
  "rgb(251, 248, 176)",
  "rgb(210, 238, 161)",
  "rgb(137, 205, 166)",
  "rgb(76, 149, 178)"
];
const MINUS = "\u2212";

export function buildChart() {
  return chart()
    .createCanvas({ width: 536, height: 447, margin: { left: 39, top: 10, right: 97, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "dimension1Num",
      as: "Dimension1Num",
      expression: { op: "toNumber", operand: { field: "Reduced Dimension 1" } }
    })
    .createComputedData({
      id: "dimension2Num",
      as: "Dimension2Num",
      expression: { op: "toNumber", operand: { field: "Reduced Dimension 2" } }
    })
    .createScatterPlot({
      x: { field: "Dimension1Num", fieldType: "quantitative" },
      y: { field: "Dimension2Num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ zero: false, domain: [-4, 7] })
    .editYScale({ zero: false, domain: [-3, 8] })
    .encodeStroke({
      field: "confederation",
      fieldType: "ordinal",
      scale: { domain: CONFEDERATIONS, range: CONF_COLORS }
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: -4, label: "\u22124" },
            { value: -3, label: "\u22123" },
            { value: -2, label: "\u22122" },
            { value: -1, label: "\u22121" },
            { value: 0, label: "0" },
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
            { value: 6, label: "6" },
            { value: 7, label: "7" }
          ]
        }
      },
      title: { text: "Reduced Dimension 1", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: -3, label: "\u22123" },
            { value: -2, label: "\u22122" },
            { value: -1, label: "\u22121" },
            { value: 0, label: "0" },
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
            { value: 6, label: "6" },
            { value: 7, label: "7" },
            { value: 8, label: "8" }
          ]
        }
      },
      title: { text: "Reduced Dimension 2", fontSize: 11, fontWeight: 700, offset: 26 }
    })
    .createLegend({ channels: ["stroke"], title: false })
    .editLegend({
      position: "right",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }] }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } });
}
