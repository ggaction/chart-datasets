// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const WEEK = 604800000;
const X0 = 1332028800000;
const X_TICKS = [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000];
const Y_TICKS = [0, 50000, 100000, 150000, 200000, 250000];
const COLOR_SCALE = { domain: ["Testes acumulados"], range: ["#ff8533"] };

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 421, margin: { left: 74, top: 5, right: 13, bottom: 116 } })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "md",
      as: "data_monthdate",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "auto" },
        right: { constant: 252460800000 }
      }
    })
    .createFoldData({ id: "folded", fields: ["testesAcumulados"] })
    .createComputedData({
      id: "series",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "testesAcumulados" } },
        then: { constant: "Testes acumulados" },
        else: { field: "key" }
      }
    })
    .createComputedData({ id: "num", as: "numValue", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "numValue", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "keyLabel", scale: COLOR_SCALE })
    .encodeGroup({ field: "keyLabel" })
    .editLineMark({ strokeWidth: 2.5, opacity: 0.8 })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "numValue", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", field: "keyLabel", scale: COLOR_SCALE })
    .editPointMark({ fill: "#ffffff", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .editXScale({ domain: [1332028800000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 260000] })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { color: "#888" },
        labels: { fontSize: 12, offset: 7, format: "%b %d", rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14, fontWeight: 700 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { color: "#888" },
        labels: { fontSize: 12, offset: 7, format: ",.0f" }
      },
      title: { text: "Número de Testes de covid-19", fontSize: 14, fontWeight: 700 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom",
        columns: 1,
        direction: "horizontal",
        title: "Testes de covid-19",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } })
    .createGrid({
      horizontal: { color: "#ddd", values: Y_TICKS },
      vertical: { color: "#ddd", values: X_TICKS }
    });
}