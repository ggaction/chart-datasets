// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 433, height: 266, margin: { left: 65, top: 14, right: 168, bottom: 52 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "Position", fieldType: "quantitative" },
      y: { field: "Percentage", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 900] })
    .editYScale({ domain: [0, 100] })
    .encodeColor({ field: "snp_type", fieldType: "nominal" })
    .editColorScale({ domain: ["Background variation", "Masked Variant", "SNP"], range: ["#ACAFB0", "#e68781", "#133239"] })
    .encodeSize({ field: "size", fieldType: "nominal", scale: { unknown: Math.PI * 16 } })
    .editSizeScale({ type: "ordinal", domain: [10, 30], range: [Math.PI, (Math.PI * 361) / 4] })
    .editPointMark({ opacity: 0.7 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800],
        ticks: { length: 5 },
        labels: { fontSize: 18, offset: 4.5, flush: true }
      },
      title: { text: "Position (bp)", fontSize: 18, offset: 39 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 18, offset: 7 }
      },
      title: { text: "Percentage Alt Allele", fontSize: 18, offset: 52, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "Helvetica Neue", color: "black" })
    .editXAxisTitle({ fontFamily: "Helvetica Neue", fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "Helvetica Neue", color: "black" })
    .editYAxisTitle({ fontFamily: "Helvetica Neue", fontWeight: 700, color: "black" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createLegend({ channels: ["size"], labels: { fontSize: 10 }, titleStyle: { fontSize: 11 } })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendLabels({ color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "rgba(0,0,0,0.7)", stroke: "transparent", strokeWidth: 0, opacity: 0.7 } });
}
