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
    .encodeStroke({ target: "scatterPlot", field: "keyDisp" })
    .editStrokeScale({ target: "scatterPlot", domain: ["Recuperados acumulados", "Mortes acumuladas"], range: ["#1f77b4", "#e60000"] })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [1332028800000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 45000] })
    .encodeColor({ field: "keyDisp", target: "linePlot" })
    .editColorScale({ target: "linePlot", domain: ["Recuperados acumulados", "Mortes acumuladas"], range: ["#1f77b4", "#e60000"] })
    .encodeGroup({ field: "keyDisp", target: "linePlot" })
    .encodeStrokeWidth({ value: 2.5, target: "linePlot" })
    .encodeOpacity({ value: 0.8, target: "linePlot" })
    .createXAxis({
      ticksAndLabels: {
        values: [1332028800000, 1332633600000, 1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000, 1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000, 1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000, 1342310400000, 1342915200000, 1343520000000, 1344124800000],
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000],
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { format: "%b %d" } })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { format: ",.0f" } })
    .editYAxisTitle({ fontWeight: 700 })
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