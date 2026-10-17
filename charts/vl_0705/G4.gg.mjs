// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

const SPEEDS = ["5","6","7","8","10","15","20","30","40","50","60","70","80","90","100","120","130","142"];
const RAMP = [
  "rgb(198, 220, 239)","rgb(189, 215, 236)","rgb(177, 210, 232)","rgb(165, 205, 228)",
  "rgb(152, 198, 225)","rgb(139, 191, 221)","rgb(125, 183, 217)","rgb(111, 175, 213)",
  "rgb(98, 167, 209)","rgb(85, 159, 205)","rgb(74, 150, 200)","rgb(63, 141, 195)",
  "rgb(52, 132, 190)","rgb(43, 122, 185)","rgb(34, 113, 179)","rgb(26, 103, 172)",
  "rgb(19, 93, 165)","rgb(14, 83, 155)"
];
const X_TICKS = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
const Y_TICKS = [0,1000,2000,3000,4000,5000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 361, margin: { left: 53, top: 10, right: 58, bottom: 151 } })
    .createData({ values: data })
    .createComputedData({ id: "numX", as: "x_num", expression: { op: "toNumber", operand: { field: "x" } } })
    .createComputedData({ id: "numPred", as: "pred_num", expression: { op: "toNumber", operand: { field: "pred" } } })
    .createLinePlot({
      x: { field: "x_num", fieldType: "quantitative" },
      y: { field: "pred_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 5000] })
    .encodeColor({ field: "speed" })
    .editColorScale({ domain: SPEEDS, range: RAMP })
    .encodeGroup({ field: "speed" })
    .editLineMark({ target: "linePlot", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Share of ACVs", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Flow capacity [veh/h]", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 41.0244140625, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        title: "speed",
        position: "right",
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    });
}