// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 485, height: 222, margin: { left: 79, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Decision Tree MAE", fieldType: "quantitative" },
      y: { field: "Crop", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 80] })
    .editYScale({ domain: ["Asparagus", "Cabbage", "Carrots", "Cucumbers", "Onions", "Peppers", "Pumpkins", "Squash", "Tomatoes"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "MAE", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Crop", fontSize: 11, fontFamily: "sans-serif", offset: 68, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } });
}
