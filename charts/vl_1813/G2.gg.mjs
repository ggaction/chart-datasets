// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 451, margin: { left: 67, top: 11, right: 13, bottom: 140 } })
    .createData({ values: data })
    .createComputedData({
      id: "deriveddata_monthdate",
      as: "deriveddata_monthdate",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" } },
        right: { constant: 252460800000 }
      }
    })
    .createFoldData({
      id: "folded",
      fields: ["recuperadosAcumulados", "mortesAcumuladas"],
      as: { key: "key", value: "value" }
    })
    .createComputedData({
      id: "keyDisp",
      as: "keyDisp",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "recuperadosAcumulados" } },
        then: { constant: "Recuperados acumulados" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "key" }, right: { constant: "mortesAcumuladas" } },
          then: { constant: "Mortes acumuladas" },
          else: { field: "key" }
        }
      }
    }).createComputedData({ id: "num", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "deriveddata_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "deriveddata_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({
      target: "scatterPlot",
      field: "keyDisp",
      scale: { domain: ["Recuperados acumulados", "Mortes acumuladas"], range: ["#1f77b4", "#e60000"] }
    })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [1332028800000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 45000] })
    .encodeColor({
      field: "keyDisp",
      target: "linePlot",
      scale: { domain: ["Recuperados acumulados", "Mortes acumuladas"], range: ["#1f77b4", "#e60000"] }
    })
    .encodeGroup({ field: "keyDisp", target: "linePlot" })
    .editLineMark({ strokeWidth: 2.5, opacity: 0.8 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
          ticks: { color: "#888" },
          labels: { fontSize: 12, offset: 7, format: "%b %d", rotation: { value: -45, unit: "degrees" } }
        },
        title: { text: "Data", fontSize: 14, fontWeight: 700 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000],
          ticks: { color: "#888" },
          labels: { fontSize: 12, offset: 7, format: ",.0f" }
        },
        title: { text: "Número de Casos", fontSize: 14, fontWeight: 700, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
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
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });;
}