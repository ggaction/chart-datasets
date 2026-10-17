// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 794,
      height: 418,
      margin: { top: 33, right: 100, bottom: 85, left: 44 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Sidewalks Smoothness Condition",
      titleStyle: { fontSize: 24, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -10.375
    })
    .editTitle({ align: "center" })
    .createBarPlot({
      x: {
        field: "smoothness type",
        fieldType: "nominal"
      },
      y: {
        field: "length(km)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: ["?", "good", "intermediate", "bad", "excellent", "very_bad", "very_horrible", "impassable", "horrible"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 260], zero: true })
    .encodeColor({
      field: "feature count",
      fieldType: "quantitative",
      aggregate: "mean"
    })
    .editColorScale({
      domain: [4, 6573],
      range: { palette: "blues" },
      interpolate: "hcl"
    })    .encodeBarWidth({ band: 1 })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "smoothness type", fontSize: 11, offset: 75 }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888", lineWidth: 1 },
      labels: { fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createYAxis({
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "length(km)", fontSize: 11, offset: 33 }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888", lineWidth: 1 },
      labels: { fontFamily: "sans-serif" }
    })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createLegend({
      title: "feature count",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendSymbols({ gradient: { length: 200 } });
}