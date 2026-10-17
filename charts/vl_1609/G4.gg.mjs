// DOCS: doc-f9bdba511759fd0a, doc-c13dce37065883df, doc-1986f3cb5e43d63b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 463, height: 249, margin: { left: 78, top: 10, right: 5, bottom: 39 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-full28-fonts",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "55", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "65", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "75", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "85", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "90", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "age", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 18.96875 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "8,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "12,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "people, Population, Population", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 161.328125 }
        ]
      }
    })
    .createData({ values: data })
    .createBoxPlot({
      x: { field: "age", fieldType: "ordinal", scale: { domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90], paddingInner: 0, paddingOuter: 0 } },
      y: { field: "people", fieldType: "quantitative", scale: { domain: [0, 12000000] } },
      whisker: { type: "tukey", factor: 0.5, caps: true, capSize: 8, stroke: "black", strokeWidth: 0.4 }
    })
    .editBoxPlot({
      box: { fill: "firebrick", stroke: "transparent", strokeWidth: 0 },
      median: { stroke: "black", strokeWidth: 1, width: { pixels: 18 } },
      outlier: { shape: 'circle', radius: 1.5811388300841898 }
    })
    .encodeStroke({ target: 'boxPlotOutliers', value: 'black' })
    .encodeOpacity({ target: 'boxPlotOutliers', value: 0.7 })
    .editPointMark({ target: 'boxPlotOutliers', fill: 'transparent' })
    .editPointMark({ target: 'boxPlotOutliers', strokeWidth: 0.3 })
    .editRuleMark({ target: "boxPlotWhiskerLowerCap", strokeWidth: 1 })
    .editRuleMark({ target: "boxPlotWhiskerUpperCap", strokeWidth: 1 })
    .encodeOpacity({ value: 0.7, target: "boxPlotMedian" })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "age", offset: 30, fontSize: 11, fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, format: ",.0f", color: "black" }
      },
      title: { text: "people, Population, Population", offset: 66, rotation: { value: -90, unit: "degrees" }, fontSize: 11, fontWeight: 700, color: "black" }
    });
}