// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69, doc-058d6465fed4f186
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 414, height: 242, margin: { left: 72, top: 5, right: 142, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "YearsMs",
      expression: { op: "parseTime", operand: { field: "Years" }, format: "%m/%d/%Y" }
    })
    .createAreaPlot({
      x: { field: "YearsMs", fieldType: "temporal" },
      y: { field: "Real GDP Data" },
      guides: false
    })
    .editXScale({ domain: [157766400000, 1578355200000], nice: false })
    .editYScale({ domain: [0, 1100000], zero: true })
    .encodeGroup({
      field: "Country Identifier"
    })
    .encodeColor({
      field: "Country Identifier",
      layout: "stack"
    })
    .editColorScale({ target: "areaPlot", domain: ["France Real GDP Data", "UK Real GDP Data"], range: ["#4c78a8", "#f58518"] })
    .editAreaMark({ opacity: 1 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Years", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000", format: "%Y" })
    .editXAxisTitle({ color: "#000", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 200000, 400000, 600000, 800000, 1000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Real GDP Data", fontSize: 11, fontFamily: "sans-serif", offset: 57, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000", format: ",.0f" })
    .editYAxisTitle({ color: "#000", fontWeight: 700 })
    .createLegend({
      title: "Country Identifier",
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendTitle({ color: "#000", fontWeight: 700 })
    .editLegendLabels({ color: "#000" });
}