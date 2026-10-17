import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
export function buildChart() {
  const xDomain = [1332806400000, 1344124800000];
  const yDomain = [0, 240];
  const xTicks = [
    1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000,
    1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000,
    1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000,
    1342310400000, 1342915200000, 1343520000000, 1344124800000
  ];
  const yTicks = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240];
  return chart()
    .createCanvas({ width: 1280, height: 427, margin: { left: 51, top: 11, right: 13, bottom: 116 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["ObitosAcumulados"] })
    .createComputedData({
      id: "keyed",
      as: "keyLabel",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "ObitosAcumulados" } },
        then: { constant: "Mortes acumuladas" },
        else: { field: "key" }
      }
    })
    .createComputedData({ id: "num", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
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
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "keyLabel", fieldType: "nominal" })
    .encodeStrokeWidth({ value: 2.5, target: "linePlot" })
    .encodeOpacity({ value: 0.8, target: "linePlot" })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: xDomain, nice: false })
    .editYScale({ domain: yDomain })
    .encodeStroke({ target: "scatterPlot", field: "keyLabel" })
    .editColorScale({ target: "linePlot", domain: ["Mortes acumuladas"], range: ["#e60000"] })
    .editStrokeScale({ target: "scatterPlot", domain: ["Mortes acumuladas"], range: ["#e60000"] })
    .editPointMark({ fill: "#ffffff", opacity: 1, strokeWidth: 2 })
    .encodePointRadius({ value: 2.738612787483533, target: "scatterPlot" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: xTicks,
        ticks: { color: "#888" },
        labels: {
          fontSize: 12,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%b %d",
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Data", fontSize: 14, fontWeight: 700 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: yTicks,
        ticks: { color: "#888" },
        labels: { fontSize: 12, fontFamily: "sans-serif", offset: 6 }
      },
      title: { text: "Número de Casos", fontSize: 14, fontWeight: 700, offset: 40.5 }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        target: "linePlot",
        position: "bottom",
        title: "Tipos de Casos",
        titleStyle: { fontSize: 14, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 12, fontFamily: "sans-serif" },
        columns: 1,
        direction: "horizontal",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", symbol: { opacity: 0.8 } });
}