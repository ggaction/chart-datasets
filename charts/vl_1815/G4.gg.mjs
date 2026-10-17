// DOCS: doc-0085e034df0302e4, doc-b7f1bdfb89789cd6, doc-129f8d895c4aca94

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1283, height: 424, margin: { left: 70, top: 5, right: 5, bottom: 119 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "t_day", field: "data", unit: "day" })
    .createComputedData({ id: "t_epoch", as: "x_data", expression: { op: "subtract", left: { field: "data_day" }, right: { constant: 252460800000 } } })
    .createComputedData({ id: "key_c", as: "key", expression: { constant: "Testes por dia" } })
    .createComputedData({ id: "value_end_c", as: "value_end", expression: { op: "toNumber", operand: { field: "testesPorDia" } } })
    .createComputedData({ id: "value_start_c", as: "value_start", expression: { constant: 0 } })
    .createComputedData({ id: "taxa_c", as: "taxa_letalidade", expression: { op: "divide", left: { op: "toNumber", operand: { field: "mortesAcumuladas" } }, right: { op: "toNumber", operand: { field: "confirmadosAcumulados" } } } })
    .createWindowData({ id: "media", operations: [{ op: "movingMean", field: "value_end", as: "media_movel", frame: { preceding: 141, following: 0 }, minPeriods: 1, missing: "skip" }] })
    .createBarPlot({
      x: { field: "x_data", fieldType: "temporal", temporalUnit: "timestamp" },
      y: "value_end",
      guides: false
    })
    .encodeColor({ field: "key", fieldType: "nominal", layout: "overlay" })
    .encodeBarWidth({ interval: { unit: "day", insetStart: 1, insetEnd: 0 } })
    .editBarMark({ opacity: 0.8, stroke: false })
    
    .editColorScale({ domain: ["Testes por dia"], range: ["#1f77b4"] })
    .createLinePlot({
      x: { field: "x_data", fieldType: "temporal", temporalUnit: "timestamp" },
      y: "media_movel",
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "red" })
    .encodeStrokeWidth({ target: "linePlot", value: 3 })
    .editXScale({ domain: [1332028800000, 1344211200000], nice: false })
    .editYScale({ domain: [-2000, 26000] })
    .createXAxis({
      ticksAndLabels: {
        values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        labels: { format: "%b %d", fontSize: 12, rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14, fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: { values: [0, 5000, 10000, 15000, 20000, 25000], labels: { format: ",.0f", fontSize: 12 } },
      title: { text: "Número de Testes de covid-19", fontSize: 14, fontWeight: 700 }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        columns: 1,
        direction: "horizontal",
        title: "Testes de covid-19",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "#1f77b4", stroke: "none" }] }
      }
    });
}