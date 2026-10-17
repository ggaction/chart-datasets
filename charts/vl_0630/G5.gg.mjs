import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a

export function buildChart() {
  return chart()
    .createCanvas({ width: 464, height: 397, margin: { left: 58, top: 60, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "growthNum", as: "growthNum", expression: { op: "toNumber", operand: { field: "GrowthLatest" } } })
    .createComputedData({ id: "gdp2022Num", as: "gdp2022Num", expression: { op: "toNumber", operand: { field: "gdp2022" } } })
    .filterData({ id: "p21Only", field: "p21", oneOf: ["1"] })
    .filterData({ id: "growthBelow", field: "growthNum", predicate: { op: "lt", value: 0.1 } })
    .filterData({ id: "growthAbove", field: "growthNum", predicate: { op: "gt", value: -0.05 } })
    .createScatterPlot({
      x: { field: "growthNum", fieldType: "quantitative" },
      y: { field: "gdp2022Num", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "transparent" })
    .encodeStroke({ target: "scatterPlot", value: "rgb(128,0,0)" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(50) / 2 })
    .createTextMark({ id: "isoLabels", fontSize: 11, fontFamily: "sans-serif" })
    .editTextMark({ align: "left", baseline: "middle", dx: 8 })
    .editTextMark({ target: "isoLabels", fill: "black" })
    .encodeText({ target: "isoLabels", field: "ISO" })
    .editXScale({ domain: [-0.04, 0.07] })
    .editYScale({ domain: [0, 65000] })
    .createGrid({
      horizontal: { scale: "y" },
      vertical: { scale: "x" }
    })
    .editGrid({
      horizontal: { color: "white", lineWidth: 0.5 },
      vertical: { color: "white", lineWidth: 0.5 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "measured-minus-labels",
        measurements: [
          { text: "−4%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.296875 },
          { text: "−3%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.296875 },
          { text: "−2%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.296875 },
          { text: "−1%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.296875 }
        ]
      }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [-0.04, -0.03, -0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07],
        labels: {
          format: ".0%",
          flush: true,
          offset: 7,
          fontSize: 10,
          fontFamily: "sans-serif"
        }
      },
      title: { text: "Growth Rate", fontSize: 11, fontFamily: "sans-serif" }
    })
    .editXAxis({
      labels: {
        labelMap: [
          { value: -0.04, label: "−4%" },
          { value: -0.03, label: "−3%" },
          { value: -0.02, label: "−2%" },
          { value: -0.01, label: "−1%" },
          { value: 0, label: "0%" },
          { value: 0.01, label: "1%" },
          { value: 0.02, label: "2%" },
          { value: 0.03, label: "3%" },
          { value: 0.04, label: "4%" },
          { value: 0.05, label: "5%" },
          { value: 0.06, label: "6%" },
          { value: 0.07, label: "7%" }
        ]
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10000, 20000, 30000, 40000, 50000, 60000],
        labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
      },
      title: { text: "GDP per capita", fontSize: 11, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      labels: { format: ",.0f" },
      title: { fontWeight: 700, color: "black" }
    })
    .createTitle({
      text: "Growth: levels and rates",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -10.953125
    })
    .editTitle({
      subtitle: "Growth rate of GDP per capita, 2022 vs 2021. World's 21 most populous countries\nSource: World Bank\n",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, fontFamily: "sans-serif", color: "black" },
      gap: 3.34375
    })
    .editTitle({
      align: "left",
      alongOffset: -52.5859375
    });
}