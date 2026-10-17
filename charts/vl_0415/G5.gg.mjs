// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 329, height: 389, margin: { left: 24, top: 52, right: 5, bottom: 37 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["rlp50"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "withSize", as: "sizeNum", expression: { op: "toNumber", operand: { field: "Size" } } })
    .createComputedData({ id: "plot", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createScatterPlot({
      x: { field: "sizeNum", fieldType: "quantitative" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 26] })
    .editYScale({ domain: [0, 90] })
    .encodeStroke({
      field: "Year", fieldType: "nominal"
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["2000", "2010", "2020"], range: ["rgb(87, 16, 109)", "rgb(187, 55, 85)", "rgb(250, 141, 11)"]
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createTitle({
      text: "Productivity: median firm, by size",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      subtitle: "Estimated median, turnover £k per employee",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" },
      alongOffset: -18.1
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: { text: "Employees", fontSize: 11, fontWeight: "bold", offset: 28, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: false,
        channels: ["stroke"],
        position: "bottom-right",
        columns: 5,
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      }
    });
}