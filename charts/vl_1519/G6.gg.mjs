import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-2e6240c00cb297cc, doc-aff0694302d3fc9f

export function buildChart() {
  return chart()
    .createCanvas({
      width: 433,
      height: 266,
      margin: { left: 65, top: 14, right: 168, bottom: 52 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "Position", fieldType: "quantitative" },
      y: { field: "Percentage", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "snp_type",
      fieldType: "nominal"
    })
    .encodeSize({
      field: "size",
      fieldType: "nominal"
    })
    .editXScale({ domain: [0, 1000] })
    .editYScale({ domain: [0, 100] })
    .editColorScale({ domain: ["Background variation", "SNP"], range: ["#ACAFB0", "#133239"] })
    .editSizeScale({ domain: [10, 30], range: [Math.PI, (361 * Math.PI) / 4], unknown: 16 * Math.PI })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 400, 800],
        ticks: { length: 5 },
        labels: { fontSize: 18, offset: 4.5, flush: true }
      },
      title: { text: "Position (bp)", fontSize: 18, offset: 39 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "Helvetica Neue", color: "black" })
    .editXAxisTitle({ fontFamily: "Helvetica Neue", fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 18, offset: 7 }
      },
      title: { text: "Percentage Alt Allele", fontSize: 18, offset: 52 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "Helvetica Neue", color: "black" })
    .editYAxisTitle({ fontFamily: "Helvetica Neue", fontWeight: 700, color: "black" })
    .createLegend({
      channels: ["color"],
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .createLegend({
      channels: ["size"],
      labels: { fontSize: 10 }
    })
    .editLegend({
      target: "scatterPlot",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ target: "scatterPlot", fontWeight: 700, color: "black" })
    .editLegendLabels({ target: "scatterPlot", color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 0, opacity: 0.7 } });
}