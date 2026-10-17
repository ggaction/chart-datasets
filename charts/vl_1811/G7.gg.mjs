// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 427,
      margin: { left: 61, top: 11, right: 13, bottom: 116 }
    })
    .createData({ id: "raw", values: data })
    .createFoldData({
      id: "folded",
      fields: ["mortesAcumuladas"],
      as: { key: "key", value: "value" }
    })
    .createComputedData({
      id: "keyLabeled",
      as: "keyLabeled",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "mortesAcumuladas" } },
        then: { constant: "Mortes acumuladas" },
        else: { field: "key" }
      }
    })
    .createComputedData({
      id: "plotRows",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "deriveddata_monthdate",
      as: "data_monthdate",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" } },
        right: { constant: 252460800000 }
      }
    })
    .createLinePlot({
      x: {
        field: "data_monthdate",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1332028800000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 2000] })
    .encodeColor({ target: "linePlot", field: "keyLabeled" })
    .editColorScale({ target: "linePlot", domain: ["Mortes acumuladas"], range: ["#e60000"] })
    .encodeGroup({ field: "keyLabeled", target: "linePlot" })
    .encodeStrokeWidth({ target: "linePlot", value: 2.5 })
    .encodeOpacity({ target: "linePlot", value: 0.8 })
    .createScatterPlot({
      x: {
        field: "data_monthdate",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", field: "keyLabeled" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Mortes acumuladas"], range: ["#e60000"] })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "scatterPlot" })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1332028800000, 1332633600000, 1333238400000, 1333843200000,
          1334448000000, 1335052800000, 1335657600000, 1336262400000,
          1336867200000, 1337472000000, 1338076800000, 1338681600000,
          1339286400000, 1339891200000, 1340496000000, 1341100800000,
          1341705600000, 1342310400000, 1342915200000, 1343520000000,
          1344124800000
        ],
        ticks: {},
        labels: {
          format: "%b %d",
          fontSize: 12,
          offset: 7,
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Data", fontSize: 14, offset: 58 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: {} },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
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
        title: "Tipos de Casos",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: {
          layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }]
        }
      }
    }).editLegendBlock({
      target: "linePlot",
      channel: "color",
      symbol: { opacity: 0.8 }
    });;
}