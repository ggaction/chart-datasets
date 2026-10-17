// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 426, margin: { left: 61, top: 11, right: 5, bottom: 115 } })
    .editCanvas({ background: "transparent" })
    .createData({ id: "d0", values: data })
    .createFoldData({ id: "folded", fields: ["testesPorDia"] })
    .createComputedData({
      id: "keyed",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "testesPorDia" } },
        then: { constant: "Testes por dia" },
        else: { field: "key" }
      }
    })
    .createComputedData({ id: "numbered", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({
      id: "dated",
      as: "dataMs",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "%Y-%m-%d" },
        right: { constant: 252460800000 }
      }
    })
    .createWindowData({
      id: "d4",
      operations: [{ op: "movingMean", field: "valueNum", as: "media_movel", frame: { preceding: 80, following: 0 }, minPeriods: 1, missing: "skip" }]
    })
    .createBarPlot({
      x: { field: "dataMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeColor({ field: "keyLabel", layout: "overlay" })
    .editColorScale({ domain: ["Testes por dia"], range: ["#1f77b4"] })
    .encodeBarWidth({ interval: { unit: "day", insetStart: 1, insetEnd: 0 } })
    .editBarMark({ stroke: false, opacity: 0.8 })
    .createLinePlot({
      x: { field: "dataMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "media_movel" },
      guides: false
    })
    .encodeStroke({ value: "red" })
    .encodeStrokeWidth({ value: 3 })
    .editXScale({ domain: [1332806400000, 1344211200000], nice: false })
    .editYScale({ domain: [0, 1600] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000,
          1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000,
          1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000,
          1344124800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 12, fontWeight: 400, offset: 7, rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%b %d" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600],
        ticks: { length: 5 },
        labels: { fontSize: 12, fontWeight: 400, offset: 7 }
      },
      title: { text: "Número de Testes de covid-19", fontSize: 14 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600] },
      vertical: {
        values: [
          1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000,
          1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000,
          1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000,
          1344124800000
        ]
      }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "barPlot",
        position: "bottom",
        direction: "horizontal",
        columns: 1,
        title: "Testes de covid-19",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.8 } });
}