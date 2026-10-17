// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 353, height: 360, margin: { left: 38, top: 10, right: 15, bottom: 50 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "Emissions", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1800,1810,1820,1830,1840,1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2010,2020], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 35] })
    .encodeBarWidth({ pixels: 11.73913043478261 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { rotation: { value: 45, unit: "degrees" }, offset: 4, fontSize: 10, fontFamily: "sans-serif", color: "black", overlap: "allow" }
      },
      title: { text: "Year", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 35 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888", lineWidth: 1 },
        labels: { offset: 8, fontSize: 10, fontFamily: "sans-serif", color: "black" }
      },
      title: { text: "Emissions", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", color: "black", offset: 26 }
    })
    .createGrid({
      horizontal: true
    })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 }
    });
}
