// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

const CATEGORY10 = ["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"];
const X_TICKS = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
const Y_TICKS = [0,2,4,6,8,10,12,14,16,18];

export function buildChart() {
  return chart()
    .createCanvas({ width: 531, height: 374, margin: { left: 24, top: 52, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "returns", as: "return", expression: { op: "divide", left: { constant: 1 }, right: { op: "toNumber", operand: { field: "discountFactor" } } } })
    .createLinePlot({
      x: { field: "yearNum", fieldType: "quantitative" },
      y: { field: "return", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 30] })
    .editYScale({ domain: [0, 18] })
    .encodeColor({ field: "riskFreeRate" })
    .editColorScale({ domain: ["0.01", "0.03", "0.1"], range: CATEGORY10 })
    .editLineMark({ strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: X_TICKS,
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: Y_TICKS,
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { scale: "y", values: Y_TICKS, color: "#ddd" },
      vertical: { scale: "x", values: X_TICKS, color: "#ddd" }
    })
    .createLegend({
      position: "top-left",
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editLegend({
      title: "RF Rate",
      border: { color: "rgb(128,0,0)", lineWidth: 1, padding: 5, background: "white" }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      labelMap: [
        { value: "0.01", label: "1%" },
        { value: "0.03", label: "3%" },
        { value: "0.1", label: "10%" }
      ]
    })
    .createTitle({
      text: "Compound returns",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontStyle: "italic", fontSize: 10, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Returns from $1 invested today", gap: 1, offset: -13 })
    .editTitle({ alongOffset: -18.123 });
}