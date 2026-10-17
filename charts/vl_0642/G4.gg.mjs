// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 474, height: 369, margin: { left: 79, top: 47, right: 95, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "gdp", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "Number", oneOf: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "17", "18"] })
  .createBarPlot({
      x: { field: "ValueNum", fieldType: "quantitative" },
      y: { field: "shortName", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "privatePublic", layout: "overlay" })
    .editColorScale({ domain: ["Government", "Private"], range: ["rgb(118,118,118)", "rgb(128,0,0)"] })
    .editXScale({ domain: [0, 5500] })
    .editYScale({ domain: ["Agriculture", "Mining", "Utilities", "Construction", "Manufacturing", "Wholesale", "Reail", "Transport", "IT", "Finance", "Professional", "Education", "Recreation", "Federal", "State and local"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "US GVA by sector",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "2022 Q3, Source: BEA", offset: -4, alongOffset: -73 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: "," }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createLegend({ position: "right", title: false, labels: { fontSize: 10, fontFamily: "sans-serif" } });
}