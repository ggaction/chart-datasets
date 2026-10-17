import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 426, margin: { left: 44, top: 11, right: 5, bottom: 115 } })
    .editCanvas({ background: "transparent" })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "taxa", as: "taxa_letalidade", expression: { op: "divide", left: { op: "toNumber", operand: { field: "mortesAcumuladas" } }, right: { op: "toNumber", operand: { field: "confirmadosAcumulados" } } } })
    .createComputedData({ id: "dated", as: "dateMs", expression: { op: "subtract", left: { op: "parseTime", operand: { field: "data" }, format: "auto" }, right: { constant: 252460800000 } } })
    .createFoldData({ id: "folded", fields: ["mortesPorDia"] })
    .createComputedData({ id: "keyed1", as: "key1", expression: { op: "replaceLiteral", operand: { field: "key" }, search: "mortesPorDia", replacement: "mortesPorDia" } })
    .createComputedData({ id: "keyed2", as: "key2", expression: { op: "replaceLiteral", operand: { field: "key1" }, search: "mortesPorDia", replacement: "Mortes por dia" } })
    .createComputedData({ id: "keyed3", as: "key3", expression: { op: "replaceLiteral", operand: { field: "key2" }, search: "Mortes por dia", replacement: "Mortes por dia" } })
    .createComputedData({ id: "valued", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createWindowData({ id: "windowed", operations: [{ op: "movingMean", field: "valueNum", as: "media_movel", frame: { preceding: 140, following: 0 }, minPeriods: 1, missing: "skip" }] })
    .createBarPlot({ x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" }, y: "valueNum", guides: false })
    .editXScale({ domain: [1332028800000, 1344211200000], nice: false })
    .editYScale({ domain: [0, 50] })
    .encodeColor({ field: "key3", layout: "overlay" })
    .editColorScale({ domain: ["Mortes por dia"], range: ["#e60000"] })
    .encodeBarWidth({ interval: { unit: "day", insetStart: 1, insetEnd: 0 } })
    .editBarMark({ stroke: false, opacity: 0.8 })
    .createLinePlot({ x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" }, y: "media_movel", guides: false })
    .encodeStroke({ target: "linePlot", value: "black" })
    .encodeStrokeWidth({ target: "linePlot", value: 4 })
    .createXAxis({ ticksAndLabels: { values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000], labels: { format: "%b %d", rotation: { value: -45, unit: "degrees" }, fontSize: 12, fontFamily: "sans-serif", offset: 7 } }, title: { text: "Data", fontSize: 14, fontFamily: "sans-serif" } })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({ ticksAndLabels: { values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50], labels: { fontSize: 12, fontFamily: "sans-serif", offset: 7 } }, title: { text: "Número de Casos", fontSize: 14, fontFamily: "sans-serif" } })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({ axes: false, grid: false, legend: { target: "barPlot", position: "bottom", columns: 1, direction: "horizontal", title: "Tipos de Casos", titleStyle: { fontSize: 14, fontWeight: 700 }, labels: { fontSize: 12 }, symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } } })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.8 } });
}