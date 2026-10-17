// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 420, height: 242, margin: { left: 64, top: 5, right: 156, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({ x: "Task Duration (ns)", y: "Eager (Thread Pool)", guides: false })
    .encodeColor({ field: "l1", fieldType: "nominal" })
    .createLinePlot({ id: "line1", x: "Task Duration (ns)", y: "Deferred (Thread Pool)", guides: false })
    .encodeColor({ field: "l2", fieldType: "nominal" })
    .createLinePlot({ id: "line2", x: "Task Duration (ns)", y: "Deferred (Inline Executor)", guides: false })
    .encodeColor({ field: "l3", fieldType: "nominal" })
    .createLinePlot({ id: "line3", x: "Task Duration (ns)", y: "Execute (Inline Executor)", guides: false })
    .encodeColor({ field: "l4", fieldType: "nominal" })
    .createLinePlot({ id: "line4", x: "Task Duration (ns)", y: "Direct Invoke", guides: false })
    .encodeColor({ field: "l5", fieldType: "nominal" })
    
    .editColorScale({
      target: "linePlot",
      domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editColorScale({
      target: "line1",
      domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editColorScale({
      target: "line2",
      domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editColorScale({
      target: "line3",
      domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editColorScale({
      target: "line4",
      domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editXScale({ domain: [0, 100000], nice: false })
    .editYScale({ domain: [0, 180000], nice: false })
    .createGrid({
      horizontal: { values: [0, 50000, 100000, 150000] },
      vertical: { values: [0, 20000, 40000, 60000, 80000, 100000] }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ value: 0, label: "0" }, { value: 20000, label: "" }, { value: 40000, label: "40,000" }, { value: 60000, label: "" }, { value: 80000, label: "80,000" }, { value: 100000, label: "" }] }
      },
      title: { text: "Task Duration (ns)", fontSize: 11 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ",.0f" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50000, 100000, 150000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Execution Time (ns)", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ",.0f" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createLegend({
      target: "linePlot",
      labels: { fontSize: 10, color: "black" },
      symbol: { length: 10, lineWidth: 1.5 }
    })
    .editLegend({
      title: "Execution",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" }
    });
}