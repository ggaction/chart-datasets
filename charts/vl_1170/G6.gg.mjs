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
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, lineWidth: 1 },
        labels: { rotation: { value: 45, unit: "degrees" }, offset: 4, fontSize: 10, fontFamily: "sans-serif", overlap: "allow" }
      },
      title: { text: "Year", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 35 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        ticks: { length: 5, lineWidth: 1 },
        labels: { offset: 8, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "Emissions", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 26 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      horizontal: true
    })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 }
    });
}
