import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-80198e379a34e5ab

export function buildChart() {
  return chart()
    .createCanvas({ width: 532, height: 387, margin: { left: 53, top: 10, right: 139, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "pointsN", as: "Points_n", expression: { op: "toNumber", operand: { field: "Points" } } })
    .createComputedData({ id: "gdpN", as: "GDP_n", expression: { op: "toNumber", operand: { field: "GDP(PPP, US$ billion)" } } })
    .createComputedData({ id: "popN", as: "Population_n", expression: { op: "toNumber", operand: { field: "Population (millions)" } } })
    .createScatterPlot({
      x: { field: "Points_n", fieldType: "quantitative" },
      y: { field: "GDP_n", fieldType: "quantitative" },
      guides: false
    })
    .encodeSize({ field: "Population_n", fieldType: "quantitative" })
    .editXScale({ domain: [0, 240] })
    .editYScale({ domain: [0, 5000] })
    .editSizeScale({ domain: [0, 145.558], range: [3.141592653589793, 283.52873698647885] })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", opacity: 0.7 })
    .editPointMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { count: 13, ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, flush: true } },
        title: { text: "Points", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { count: 11, ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, labelMap: [ { value: 0, label: "0" }, { value: 500, label: "500" }, { value: 1000, label: "1,000" }, { value: 1500, label: "1,500" }, { value: 2000, label: "2,000" }, { value: 2500, label: "2,500" }, { value: 3000, label: "3,000" }, { value: 3500, label: "3,500" }, { value: 4000, label: "4,000" }, { value: 4500, label: "4,500" }, { value: 5000, label: "5,000" } ] } },
        title: { text: "GDP (PPP, US$ billions)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 44, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } })
    .createLegend({ title: "Population (millions)", titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", values: [0, 20, 40, 60, 80, 100, 120, 140] });
}