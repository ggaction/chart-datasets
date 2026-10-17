// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440, doc-8aa16ed3796df7b3, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 372, height: 402, margin: { left: 66, top: 52, right: 6, bottom: 50 } })
    .createData({ id: "base", values: data })
    .createComputedData({ id: "gii", as: "GII", expression: { op: "toNumber", operand: { field: "Gender Inequality Index" } } })
    .createComputedData({ id: "pts", as: "WomensPts", expression: { op: "toNumber", operand: { field: "Womens Points" } } })
    .createComputedData({ id: "pop", as: "Population", expression: { op: "toNumber", operand: { field: "YR2021" } } })
    .createScatterPlot({
      x: { field: "GII", fieldType: "quantitative" },
      y: { field: "WomensPts", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 0.8], nice: false })
    .editYScale({ domain: [300, 2200], nice: false })
    .encodeSize({ field: "Population", fieldType: "quantitative" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1412360000], range: [10 * Math.PI / 4, 800 * Math.PI / 4] })
    .editPointMark({ fill: "#000080" })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .createTitle({
      text: "Women's Team Performance vs Gender Equality",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -60.5244140625
    })
    .editTitle({
      offset: -13,
      gap: 1,
      titleStyle: { color: "black", fontWeight: 700 }
    })
    .editTitle({
      subtitle: "UN Gender Inequality Index (x), Women's FIFA Ranking Points (y).\n2021 data, size by population",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: {
        text: "\u27F5 \u27F6\nMore Equal Less Equal",
        fontSize: 11, fontFamily: "sans-serif", offset: 33.5
      }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        ticks: {},
        labels: {
          fontSize: 10, fontFamily: "sans-serif", offset: 7,
          labelMap: [
            { value: 400, label: "400" },
            { value: 600, label: "600" },
            { value: 800, label: "800" },
            { value: 1000, label: "1,000" },
            { value: 1200, label: "1,200" },
            { value: 1400, label: "1,400" },
            { value: 1600, label: "1,600" },
            { value: 1800, label: "1,800" },
            { value: 2000, label: "2,000" },
            { value: 2200, label: "2,200" }
          ]
        }
      },
      title: {
        text: "Worse Team Better Team\n\u27F5 \u27F6",
        fontSize: 11, fontFamily: "sans-serif", offset: 48, rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: ".1f" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
  .editYAxis({ title: { offset: 48 } })
;
}
