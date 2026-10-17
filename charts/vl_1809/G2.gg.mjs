// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-45511418e277de0a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 450, margin: { left: 74, top: 11, right: 13, bottom: 139 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["descartadosAcumulados", "notificacoesSuspeitos"], as: { key: "key", value: "value" } })
    .createComputedData({
      id: "dateEpoch", as: "dateEpoch",
      expression: { op: "subtract", left: { op: "parseTime", operand: { field: "data" }, format: "auto" }, right: { constant: 252460800000 } }
    })
    .createComputedData({
      id: "keyLabel1", as: "keyLabel1",
      expression: { op: "if", condition: { op: "eq", left: { field: "key" }, right: { constant: "descartadosAcumulados" } }, then: { constant: "Descartados acumulados" }, else: { field: "key" } }
    })
    .createComputedData({
      id: "seriesKey", as: "seriesKey",
      expression: { op: "if", condition: { op: "eq", left: { field: "keyLabel1" }, right: { constant: "notificacoesSuspeitos" } }, then: { constant: "Suspeitos Notificados" }, else: { field: "keyLabel1" } }
    })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateEpoch", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "seriesKey2" === "x" ? "seriesKey2" : "seriesKey" })
    .encodeGroup({ field: "seriesKey" })
    .editLineMark({ strokeWidth: 2.5, opacity: 0.8 })
    .createScatterPlot({
      x: { field: "dateEpoch", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ field: "seriesKey" })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editXScale({ domain: [1332028800000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 110000] })
    .editColorScale({ domain: ["Descartados acumulados", "Suspeitos Notificados"], range: ["#1f77b4", "#ff8533"] })
    .editStrokeScale({ target: "scatterPlot", domain: ["Descartados acumulados", "Suspeitos Notificados"], range: ["#1f77b4", "#ff8533"] })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 12, offset: 7, format: "%b %d", rotation: { value: -45, unit: "degrees" } }
          },
          title: { text: "Data", fontSize: 14, fontWeight: 700, offset: 53 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 12, offset: 7, format: ",.0f" }
          },
          title: { text: "Número de Casos", fontSize: 14, fontWeight: 700, offset: 57, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        target: "linePlot", channels: ["color"],
        position: "bottom", columns: 1, direction: "horizontal",
        title: "Tipos de Casos", titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });
}