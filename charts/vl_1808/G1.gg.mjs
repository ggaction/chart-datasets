// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 427,
      margin: { left: 67, top: 11, right: 13, bottom: 116 }
    })
    .createData({ id: "raw", values: data })
    .createFoldData({
      id: "folded",
      fields: ["confirmadosAcumulados"],
      as: { key: "key", value: "value" }
    })
    .createComputedData({
      id: "keyed",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "confirmadosAcumulados" } },
        then: { constant: "Confirmados acumulados" },
        else: { field: "key" }
      }
    })
    .createComputedData({
      id: "num",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "deriveddata_monthdate",
      as: "dataTimestamp",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "auto" },
        right: { constant: 252460800000 }
      }
    })
    .createLinePlot({
      x: { field: "dataTimestamp", fieldType: "temporal", temporalUnit: "timestamp", scale: { domain: [1332028800000, 1344124800000] } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 90000] } },
      guides: false
    })
    .editLineMark({ strokeWidth: 2.5, opacity: 0.8 })
    .encodeColor({
      field: "keyLabel",
      scale: { domain: ["Confirmados acumulados"], range: ["#ff8533"] }
    })
    .createScatterPlot({
      x: { field: "dataTimestamp", fieldType: "temporal", temporalUnit: "timestamp", scale: { domain: [1332028800000, 1344124800000] } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 90000] } },
      guides: false
    })
    .encodeStroke({
      target: "scatterPlot",
      field: "keyLabel",
      scale: { domain: ["Confirmados acumulados"], range: ["#ff8533"] }
    })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              1332028800000, 1332633600000, 1333238400000, 1333843200000,
              1334448000000, 1335052800000, 1335657600000, 1336262400000,
              1336867200000, 1337472000000, 1338076800000, 1338681600000,
              1339286400000, 1339891200000, 1340496000000, 1341100800000,
              1341705600000, 1342310400000, 1342915200000, 1343520000000,
              1344124800000
            ],
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 12,
              offset: 7,
              rotation: { value: -45, unit: "degrees" },
              format: "%b %d"
            }
          },
          title: { text: "Data", fontSize: 14, fontWeight: 700 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 12, offset: 7, format: ",.0f" }
          },
          title: { text: "Número de Casos", fontSize: 14, fontWeight: 700 }
        }
      },
      grid: {
        horizontal: { color: "#ddd" },
        vertical: { color: "#ddd" }
      },
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom",
        align: "left",
        columns: 1,
        direction: "horizontal",
        title: "Tipos de Casos",
        titleStyle: { fontSize: 14, fontWeight: 700 },
        labels: { fontSize: 12 },
        symbol: {
          layers: [{ type: "point", shape: "circle", size: 5, fill: "none", stroke: "#ff8533", strokeWidth: 1.5 }]
        }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });
}