import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71, doc-8a4f6f06e0d37d5e, doc-1740a98a3616e322

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 361,
      margin: { left: 53, top: 10, right: 58, bottom: 151 }
    })
    .createData({ values: data })
    .createComputedData({ id: "xNum", as: "xNum", expression: { op: "toNumber", operand: { field: "x" } } })
    .createComputedData({ id: "predNum", as: "predNum", expression: { op: "toNumber", operand: { field: "pred" } } })
    .createLinePlot({
      x: { field: "xNum", fieldType: "quantitative", },
      y: { field: "predNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: [0, 5000] })
    .encodeColor({
      field: "speed",
      fieldType: "ordinal",
    })
    .editColorScale({
      domain: ["5", "6", "7", "8", "10", "15", "20", "30", "40", "50", "60", "70", "80", "90", "100", "120", "130", "142"],
      palette: { name: "blues", count: 18, extent: [1 / 19, 18 / 19] }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7, flush: true }
      },
      title: { text: "Share of AVs", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000],
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7, format: ",.0f" }
      },
      title: { text: "Flow capacity [veh/h]", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 41, rotation: { value: -90, unit: "degrees" } }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "right",
        title: "speed",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    });
}
