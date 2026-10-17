// DOCS: doc-8a4f6f06e0d37d5e, doc-129f8d895c4aca94
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 399,
      height: 242,
      margin: { left: 39, top: 5, right: 160, bottom: 37 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ id: "apple", values: data })
    .createFoldData({
      id: "folded",
      fields: ["Market Share", "Gross profit (% of revenue)"],
      as: { key: "series", value: "value" }
    })
    .createComputedData({
      id: "foldNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        scale: { domain: [1167609600000, 1640995200000], nice: false }
      },
      y: {
        field: "valueNum",
        scale: { domain: [0, 45] }
      },
      guides: false
    })
    .encodeColor({
      field: "series",
      scale: {
        domain: ["Market Share", "Gross profit (% of revenue)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              1199145600000, 1262304000000, 1325376000000, 1388534400000,
              1451606400000, 1514764800000, 1577836800000, 1640995200000
            ],
            ticks: { color: "#888", length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              color: "black",
              labelMap: [
                { value: 1199145600000, label: "2008" },
                { value: 1262304000000, label: "" },
                { value: 1325376000000, label: "2012" },
                { value: 1388534400000, label: "" },
                { value: 1451606400000, label: "2016" },
                { value: 1514764800000, label: "" },
                { value: 1577836800000, label: "2020" },
                { value: 1640995200000, label: "" }
              ]
            }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 28 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
          },
          title: {
            text: "Market Share/Gross profit (%)",
            fontSize: 11,
            fontWeight: 700,
            color: "black",
            offset: 28
          }
        }
      },
      grid: {
        vertical: {
          values: [1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
          color: "#ddd"
        },
        horizontal: {
          values: [0, 10, 20, 30, 40],
          color: "#ddd"
        }
      },
      legend: {
        title: false,
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    });
}
