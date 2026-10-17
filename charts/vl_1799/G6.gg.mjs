// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 420,
      margin: { left: 58, top: 5, right: 5, bottom: 115 }
    })
    .createData({ id: "source", values: data })
    .createFoldData({ id: "folded", source: "source", fields: ["confirmadosPorDia"] })
    .createComputedData({
      id: "key1",
      as: "key1",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "confirmadosPorDia" } },
        then: { constant: "Confirmados por dia" },
        else: { field: "key" }
      }
    })
    .createComputedData({
      id: "dated",
      as: "data_ts",
      expression: {
        op: "subtract",
        left: { op: "parseTime", operand: { field: "data" } },
        right: { constant: 252460800000 }
      }
    })
    .createComputedData({
      id: "numbered",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createWindowData({
      id: "trend",
      operations: [
        {
          op: "movingMean",
          field: "valueNum",
          as: "media_movel",
          frame: { preceding: 80, following: 0 },
          minPeriods: 1,
          missing: "skip"
        }
      ]
    })
    .createBarPlot({
      x: { field: "data_ts", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1332806400000, 1344211200000], nice: false })
    .editYScale({ domain: [-700, 700], nice: false })
    .encodeBarWidth({ interval: { unit: "day", insetStart: 1, insetEnd: 0 } })
    .encodeColor({
      field: "key1",
      layout: "overlay",
      scale: { domain: ["Confirmados por dia"], range: ["#1f77b4"] }
    })
    .editBarMark({ stroke: false, opacity: 0.8 })
    .createLinePlot({
      x: { field: "data_ts", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "media_movel", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "red" })
    .encodeStrokeWidth({ target: "linePlot", value: 3 })
    .createXAxis({
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 12,
          offset: 7,
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Data", fontSize: 14 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: "%b %d" }
      },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 12,
          offset: 7
        }
      },
      title: { text: "Número de Casos", fontSize: 14 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: {
          labelMap: [
            { value: -600, label: "−600" },
            { value: -400, label: "−400" },
            { value: -200, label: "−200" },
            { value: 0, label: "0" },
            { value: 200, label: "200" },
            { value: 400, label: "400" },
            { value: 600, label: "600" }
          ]
        }
      },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    
    .createLegend({
      position: "bottom",
      title: "Tipos de Casos",
      titleStyle: { fontSize: 14, fontWeight: 700 }
    })
    .editLegend({ labels: { fontSize: 12 }, columns: 1, direction: "horizontal" })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.8 } });
}