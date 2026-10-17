// DOCS: doc-b785fcba5a7e78ae doc-76573a465e2b6a33 doc-fa74f8dc4aeb7499 doc-919ecfba273140a0 doc-bec45a32448971cd
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 421, margin: { left: 67, top: 5, right: 13, bottom: 116 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["testesAcumulados"], as: { key: "key", value: "value" } })
    .createComputedData({
      id: "keyLabel",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "testesAcumulados" } },
        then: { constant: "Testes acumulados" },
        else: { field: "key" }
      }
    })
    .createComputedData({
      id: "valueNum",
      as: "valueN",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "md",
      as: "data_monthdate",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "auto" },
        right: { constant: 252460800000 }
      }
    })
    .createLinePlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1332806400000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 26000] })
    .encodeColor({ target: "linePlot", field: "keyLabel" })
    .encodeStroke({ target: "scatterPlot", field: "keyLabel" })
    .editColorScale({ target: "linePlot", domain: ["Testes acumulados"], range: ["#ff8533"] })
    .editStrokeScale({ target: "scatterPlot", domain: ["Testes acumulados"], range: ["#ff8533"] })
    .encodeStrokeWidth({ target: "linePlot", value: 2.5 })
    .encodeOpacity({ target: "linePlot", value: 0.8 })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        ticks: { color: "#888" },
        labels: { fontSize: 12, fontFamily: "sans-serif", offset: 6, format: "%b %d", rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14, fontWeight: 700, offset: 50 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: { color: "#888" },
        labels: { fontSize: 12, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Número de Testes de covid-19", fontSize: 14, fontWeight: 700, offset: 54, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        columns: 1,
        title: "Testes de covid-19",
        titleStyle: { fontSize: 14, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 12, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });
}