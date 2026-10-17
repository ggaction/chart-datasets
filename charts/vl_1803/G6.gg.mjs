// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const xTicks = [
    1333238400000, 1333843200000, 1334448000000, 1335052800000, 1335657600000,
    1336262400000, 1336867200000, 1337472000000, 1338076800000, 1338681600000,
    1339286400000, 1339891200000, 1340496000000, 1341100800000, 1341705600000,
    1342310400000, 1342915200000, 1343520000000, 1344124800000
  ];
  const colorScale = {
    domain: ["Recuperados acumulados", "Mortes acumuladas"],
    range: ["#1f77b4", "#e60000"]
  };
  return chart()
    .createCanvas({ width: 1280, height: 451, margin: { left: 67, top: 11, right: 13, bottom: 140 } })
    .createData({ id: "raw", values: data })
    .createFoldData({
      id: "folded",
      fields: ["recuperadosAcumulados", "ObitosAcumulados"],
      as: { key: "key", value: "value" }
    })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createComputedData({
      id: "keyed",
      as: "key2",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "key" }, right: { constant: "recuperadosAcumulados" } },
        then: { constant: "Recuperados acumulados" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "key" }, right: { constant: "ObitosAcumulados" } },
          then: { constant: "Mortes acumuladas" },
          else: { field: "key" }
        }
      }
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
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [1332806400000, 1344124800000], nice: false })
    .editYScale({ domain: [0, 11000] })
    .encodeGroup({ target: "linePlot", field: "key2" })
    .encodeColor({ target: "linePlot", field: "key2", scale: colorScale })
    .createScatterPlot({
      x: { field: "data_monthdate", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", field: "key2", scale: colorScale })
    .encodeStrokeWidth({ target: "linePlot", value: 2.5 })
    .encodeOpacity({ target: "linePlot", value: 0.8 })
    .editPointMark({ fill: "white", strokeWidth: 2, opacity: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createXAxis({
      ticksAndLabels: {
        values: xTicks,
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7, rotation: { value: -45, unit: "degrees" } }
      },
      title: { text: "Data", fontSize: 14 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%b %d" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "Número de Casos", fontSize: 14, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
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