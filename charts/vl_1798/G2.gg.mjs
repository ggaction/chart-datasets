// DOCS: doc-76573a465e2b6a33, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000];
const yTicks = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000];

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
      id: "labeled",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: {
          op: "eq",
          left: { field: "key" },
          right: { constant: "confirmadosAcumulados" }
        },
        then: { constant: "Confirmados acumulados" },
        else: { field: "key" }
      }
    })
    .createComputedData({
      id: "typed",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "mdates",
      as: "data_monthdate",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" }, format: "auto" },
        right: { constant: 252460800000 }
      }
    })
    .createLinePlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "keyLabel",
      fieldType: "nominal"
    })
    .editLineMark({ strokeWidth: 2.5, opacity: 0.8 })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1332806400000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 11000] })
    .editColorScale({
      domain: ["Confirmados acumulados"],
      range: ["#ff8533"]
    })
    .encodeStroke({
      field: "keyLabel"
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["Confirmados acumulados"],
      range: ["#ff8533"]
    })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: xTicks,
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 12,
            fontFamily: "sans-serif",
            offset: 7,
            rotation: -Math.PI / 4,
            format: "%b %d"
          }
        },
        title: {
          text: "Data",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "sans-serif"
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: yTicks,
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 12,
            fontFamily: "sans-serif",
            offset: 7,
            format: ",.0f"
          }
        },
        title: {
          text: "Número de Casos",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "sans-serif",
          rotation: -Math.PI / 2
        }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", values: yTicks },
      vertical: { color: "#ddd", values: xTicks }
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
        titleStyle: { fontSize: 14, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 12, fontFamily: "sans-serif" },
        symbol: {
          layers: [
            {
              type: "point",
              shape: "circle",
              size: 5,
              fill: "none",
              strokeWidth: 1.5
            }
          ]
        }
      }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      symbol: { opacity: 0.8 }
    });
}