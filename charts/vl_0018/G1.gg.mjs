// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 420, height: 242, margin: { left: 64, top: 5, right: 156, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({ x: "Task Duration (ns)", y: "Eager (Thread Pool)", guides: false })
    .encodeColor({
      field: "l1",
      fieldType: "nominal",
      scale: {
        domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createLinePlot({ id: "line1", x: "Task Duration (ns)", y: "Deferred (Thread Pool)", guides: false })
    .encodeColor({
      field: "l2",
      fieldType: "nominal",
      scale: {
        domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createLinePlot({ id: "line2", x: "Task Duration (ns)", y: "Deferred (Inline Executor)", guides: false })
    .encodeColor({
      field: "l3",
      fieldType: "nominal",
      scale: {
        domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createLinePlot({ id: "line3", x: "Task Duration (ns)", y: "Execute (Inline Executor)", guides: false })
    .encodeColor({
      field: "l4",
      fieldType: "nominal",
      scale: {
        domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    .createLinePlot({ id: "line4", x: "Task Duration (ns)", y: "Direct Invoke", guides: false })
    .encodeColor({
      field: "l5",
      fieldType: "nominal",
      scale: {
        domain: ["Deferred (Inline Executor)", "Deferred (Thread Pool)", "Direct Invoke", "Eager (Thread Pool)", "Execute (Inline Executor)"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
      }
    })
    
    .editXScale({ domain: [0, 100000], nice: false })
    .editYScale({ domain: [0, 180000], nice: false })
    .createGrid({
      horizontal: { values: [0, 50000, 100000, 150000], color: "#ddd" },
      vertical: { values: [0, 20000, 40000, 60000, 80000, 100000], color: "#ddd" }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000, 100000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f", flush: true, labelMap: [{ value: 0, label: "0" }, { value: 20000, label: "" }, { value: 40000, label: "40,000" }, { value: 60000, label: "" }, { value: 80000, label: "80,000" }, { value: 100000, label: "" }] }
        },
        title: { text: "Task Duration (ns)", fontSize: 11, fontWeight: 700, color: "black" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 50000, 100000, 150000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Execution Time (ns)", fontSize: 11, fontWeight: 700, color: "black", rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        title: "Execution",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { length: 10, lineWidth: 1.5 }
      }
    });
}