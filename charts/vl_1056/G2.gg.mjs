// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71
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
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createComputedData({
      id: "predicted",
      as: "predicted",
      expression: {
        op: "gte",
        left: { op: "parseTime", operand: { field: "date" } },
        right: { constant: 1230768000000 }
      }
    })
    .filterData({ id: "goog", field: "symbol", oneOf: ["GOOG"] })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [1091318400000, 1267401600000] }
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative",
        scale: { domain: [0, 800] }
      },
      guides: false
    })
    .encodeGroup({
      field: "predicted"
    })
    .encodeStroke({
      field: "symbol",
      scale: { domain: ["GOOG"], range: ["#1f77b4"] }
    })
    .encodeStrokeDash({
      field: "predicted",
      fieldType: "nominal",
      scale: { domain: [false, true], range: [[1, 0], [4, 2]] }
    })
    .editLineMark({ curve: "monotone", strokeWidth: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-1056-axis-widths",
        measurements: [
          { text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.578125 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 20.015625 },
          { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2009", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "700", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }
        ]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888888" },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
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
          },
          values: [
            1096588800000,
            1112313600000,
            1128124800000,
            1143868800000,
            1159680000000,
            1175424000000,
            1191225600000,
            1206969600000,
            1222790400000,
            1238534400000,
            1254355200000
          ]
        },
        title: { text: "Time", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: { color: "#888888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800]
        },
        title: { text: "Count", fontSize: 11, fontWeight: 700 }
      }
    })
    .createGuides({
      axes: false,
      grid: {
        horizontal: {
          color: "#dddddd",
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800]
        },
        vertical: {
          color: "#dddddd",
          values: [
            1096588800000,
            1112313600000,
            1128124800000,
            1143868800000,
            1159680000000,
            1175424000000,
            1191225600000,
            1206969600000,
            1222790400000,
            1238534400000,
            1254355200000
          ]
        }
      },
      legend: {
        channels: ["stroke"],
        position: "right",
        title: "Time Series",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: {
          layers: [
            { type: "point", shape: "circle", size: 5, fill: "none", stroke: "#1f77b4", strokeWidth: 1.5 }
          ]
        }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["strokeDash"],
        position: "right",
        title: "predicted",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: {
          layers: [{ type: "line", length: 10, lineWidth: 1.5 }]
        }
      }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "strokeDash",
      symbol: { stroke: "#888888" }
    });
}