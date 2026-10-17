import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 482, margin: { left: 67, top: 11, right: 13, bottom: 171 } })
    .createData({ values: data })
    .createComputedData({
      id: "data_monthdate", as: "data_monthdate",
      expression: { op: "subtract", left: { op: "parseTime", operand: { field: "data" } }, right: { constant: 252460800000 } }
    })
    .createFoldData({ id: "folded", fields: ["confirmadosPorDia", "confirmadosAcumulados", "mortesAcumuladas"], as: { key: "k0", value: "v0" } })
    .createComputedData({
      id: "key1", as: "key1",
      expression: { op: "if", condition: { op: "eq", left: { field: "k0" }, right: { constant: "confirmadosPorDia" } }, then: { constant: "Confirmados por dia" }, else: { field: "k0" } }
    })
    .createComputedData({
      id: "key2", as: "key2",
      expression: { op: "if", condition: { op: "eq", left: { field: "key1" }, right: { constant: "confirmadosAcumulados" } }, then: { constant: "Confirmados acumulados" }, else: { field: "key1" } }
    })
    .createComputedData({
      id: "key3", as: "key3",
      expression: { op: "if", condition: { op: "eq", left: { field: "key2" }, right: { constant: "mortesAcumuladas" } }, then: { constant: "Mortes acumuladas" }, else: { field: "key2" } }
    })
    .createComputedData({ id: "num", as: "valueNum", expression: { op: "toNumber", operand: { field: "v0" } } })
    .createLinePlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "key3", })
    .editColorScale({ domain: ["Confirmados acumulados", "Confirmados por dia", "Mortes acumuladas"], range: ["#ff8533", "#1f77b4", "#e60000"] })
    .encodeGroup({ field: "key3" })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1332028800000, 1344124800000] })
    .editYScale({ domain: [0, 90000] })
    .encodeStroke({ target: "scatterPlot", field: "key3", })
    .editStrokeScale({ target: "scatterPlot", domain: ["Confirmados acumulados", "Confirmados por dia", "Mortes acumuladas"], range: ["#ff8533", "#1f77b4", "#e60000"] })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ fill: "#ffffff", strokeWidth: 2, opacity: 1 })
    .encodeStrokeWidth({ target: "linePlot", value: 2.5 })
    .encodeOpacity({ target: "linePlot", value: 0.8 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, format: "%b %d", rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14, offset: 53 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, format: ",.0f" }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({ axes: false, grid: false, legend: { target: "linePlot", channels: ["color"], position: "bottom", title: "Tipos de Casos", columns: 1, direction: "horizontal", titleStyle: { fontSize: 14, fontWeight: 700 }, labels: { fontSize: 12 } } })
    .editLegendSymbols({ target: "linePlot", symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] } })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });
}