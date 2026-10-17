// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 426, margin: { left: 44, top: 11, right: 5, bottom: 115 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data, id: "raw" })
    .createComputedData({ id: "dated", as: "dataTs", expression: { op: "parseTime", operand: { field: "data" }, format: "%Y-%m-%d" } })
    
    .createFoldData({ id: "folded", fields: ["obitosPorDia"] })
    .createComputedData({ id: "key1", as: "key1", expression: { op: "if", condition: { op: "eq", left: { field: "key" }, right: { constant: "obitosPorDia" } }, then: { constant: "Mortes por dia" }, else: { field: "key" } } })
    .createComputedData({ id: "key2", as: "key2", expression: { op: "if", condition: { op: "eq", left: { field: "key1" }, right: { constant: "Mortes por dia" } }, then: { constant: "Mortes por dia" }, else: { field: "key1" } } })
    .createComputedData({ id: "key3", as: "key3", expression: { op: "if", condition: { op: "eq", left: { field: "key2" }, right: { constant: "Mortes por dia" } }, then: { constant: "Mortes por dia" }, else: { field: "key2" } } })
    .createComputedData({ id: "valued", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    
    .createComputedData({ id: "dateX", as: "dataX", expression: { op: "subtract", left: { field: "dataTs" }, right: { constant: 252460800000 } } })
    .createWindowData({ id: "windowed", operations: [{ op: "movingMean", field: "valueNum", as: "media_movel", frame: { preceding: 80, following: 0 }, minPeriods: 1, missing: "skip" }] })
    .createBarPlot({ x: { field: "dataX", fieldType: "temporal", temporalUnit: "timestamp" }, y: "valueNum", guides: false })
    .encodeColor({ field: "key3", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["Mortes por dia"], range: ["#e60000"] })
    .encodeBarWidth({ interval: { unit: "day", insetStart: 1, insetEnd: 0 } })
    .editBarMark({ stroke: false, opacity: 0.8 })
    .createLinePlot({ x: { field: "dataX", fieldType: "temporal", temporalUnit: "timestamp" }, y: "media_movel", guides: false })
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ target: "linePlot", value: 4 })
    .editXScale({ domain: [1332806400000, 1344211200000], nice: false })
    .editYScale({ domain: [0, 12] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" }, format: "%b %d" }
      },
      title: { text: "Data", fontSize: 14 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 2, 4, 6, 8, 10, 12],
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      position: "bottom",
      title: "Tipos de Casos",
      titleStyle: { fontSize: 14, fontWeight: 700 }
    })
    .editLegend({ columns: 1, direction: "horizontal", labels: { fontSize: 12 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.8 } });
}