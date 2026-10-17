import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-bc26da5598d35bae, doc-08d24a62ced0d1b8

export function buildChart() {
  return chart()
    .createCanvas({
      width: 653,
      height: 547,
      margin: { left: 44, top: 10, right: 109, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "eventStaticMissing",
      as: "EVENT_staticMissing",
      expression: { constant: "undefined" }
    })
    .filterData({
      id: "eventNotSciencefest2019",
      field: "EVENT_staticMissing",
      predicate: { op: "neq", value: "Sciencefest 2019" }
    })
    .filterData({
      id: "timeDefined",
      field: "Time (seconds)",
      predicate: { op: "neq", value: "" }
    })
    .createComputedData({
      id: "timeNum",
      as: "timeNum",
      expression: { op: "toNumber", operand: { field: "Time (seconds)" } }
    })
    .createComputedData({
      id: "heightNum",
      as: "heightNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Height" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Height" } }
      }
    })
    .filterData({
      id: "heightUnder100",
      field: "heightNum",
      predicate: { op: "lt", value: 100 }
    })
    .createComputedData({
      id: "displayTime",
      as: "displayTime",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Favorite Activity" }, right: { constant: "Sports" } },
        then: { op: "subtract", left: { field: "timeNum" }, right: { constant: 0.09 } },
        else: { field: "timeNum" }
      }
    })
    .createComputedData({
      id: "displayHeight",
      as: "displayHeight",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Favorite Activity" }, right: { constant: "Cooking" } },
        then: { op: "subtract", left: { field: "heightNum" }, right: { constant: 0.5 } },
        else: { field: "heightNum" }
      }
    })
    .createScatterPlot({
      x: { field: "displayTime", fieldType: "quantitative" },
      y: { field: "displayHeight", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 18] })
    .editYScale({ domain: [0, 100] })
    .encodeStroke({ field: "EVENT_staticMissing", fieldType: "nominal" })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["undefined"],
      range: ["#4c78a8"]
    })
    .encodeShape({ field: "Favorite Activity", fieldType: "nominal" })
    .editShapeScale({
      target: "scatterPlot",
      domain: ["", "Art", "Cooking", "Gaming", "Other", "Sports"],
      range: ["circle", "square", "triangle-up", "plus", "diamond", "triangle-right"]
    })
    .encodeSize({ field: "Favorite Activity", fieldType: "nominal" })
    .editSizeScale({
      target: "scatterPlot",
      domain: ["", "Art", "Cooking", "Gaming", "Other", "Sports"],
      range: [75 * Math.PI, 300, 75 * Math.sqrt(3), 161.28, 150, 75 * Math.sqrt(3)]
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "Time (seconds)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "Height", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 33 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        title: "EVENT",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: {
          layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }]
        }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["shape"],
        title: "Favorite Activity",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          color: "black"
        },

        symbol: {
          layers: [{ type: "point", size: 5, fill: "transparent", stroke: "#888", strokeWidth: 1.5 }]
        }
      }
    })
  .editLegendBlock({ target: "scatterPlot", channel: "shape", labelMap: [{ value: "", label: "" }]});
}