import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
export function buildChart() {
  return chart()
    .createCanvas({ width: 708, height: 388, margin: { left: 53, top: 38, right: 5, bottom: 50 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Year of Survey type", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["?", "2019", "2020", "2021"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 2400], zero: true })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "Year of Survey Image (kerbs)",
      offset: -6,
      titleStyle: { fontSize: 24 }
    })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Year of Survey type", fontSize: 11, offset: 44 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "rgb(0, 0, 0)", fontFamily: "sans-serif", fontWeight: 400 })
    .editXAxisTitle({ color: "rgb(0, 0, 0)", fontWeight: 700, fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 37, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "rgb(0, 0, 0)", fontFamily: "sans-serif", fontWeight: 400 })
    .editYAxisTitle({ color: "rgb(0, 0, 0)", fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false });
}
