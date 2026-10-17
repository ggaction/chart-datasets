// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 630,
      height: 347,
      margin: { left: 44, top: 10, right: 86, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .createComputedData({
      id: "googNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1091318400000, 1267401600000] })
    .editYScale({ domain: [0, 800] })
    .encodeColor({ field: "symbol" })
    .editColorScale({ domain: ["GOOG"], range: ["#1f77b4"] })
    .editLineMark({ strokeWidth: 1, curve: "linear", opacity: 1 })
    
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-1055-axis-widths", measurements: [{ text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.578125 }, { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 20.015625 }, { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 }, { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2009", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "700", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }, { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }] } })
    .createXAxis({
      ticksAndLabels: {
        values: [
          1096588800000, 1112313600000, 1128124800000, 1143868800000,
          1159680000000, 1175424000000, 1191225600000, 1206969600000,
          1222790400000, 1238534400000, 1254355200000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1096588800000, label: "October" },
            { value: 1112313600000, label: "April" },
            { value: 1128124800000, label: "October" },
            { value: 1143868800000, label: "April" },
            { value: 1159680000000, label: "October" },
            { value: 1175424000000, label: "April" },
            { value: 1191225600000, label: "October" },
            { value: 1206969600000, label: "April" },
            { value: 1222790400000, label: "October" },
            { value: 1238534400000, label: "April" },
            { value: 1254355200000, label: "October" }
          ]
        }
      },
      title: {
        text: "Time",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7
        }
      },
      title: {
        text: "Count",
        fontSize: 11,
        fontFamily: "sans-serif",
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { fontWeight: 700, color: "black" }
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
        position: "right",
        title: "Time Series",
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        symbol: {
          layers: [
            { type: "point", shape: "circle", size: 5, fill: "none", stroke: "#1f77b4", strokeWidth: 1.5 }
          ]
        },
        border: { background: "#ffffff" }
      }
    });
}