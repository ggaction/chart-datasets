// DOCS: actual delivered doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-3b660fabf78cdd08, doc-82e309a0b6ac0052
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 367, height: 883, margin: { left: 97, top: 6, right: 100, bottom: 67 } })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "sample_id", fieldType: "nominal" },
      y: { field: "metabolite", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "flux", fieldType: "quantitative" })
    .editColorScale({
      type: "log",
      domain: [0.000001, 0.1000008447],
      palette: "viridis"
    })
    .editRectMark({ stroke: "none", strokeWidth: 0 })
    
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-glyphs", measurements: [
      { text: "Cancer7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Cancer2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Cancer3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Cancer1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Cancer5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Cancer6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Healthy2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Cancer4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Healthy5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "Cancer8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.8125 },
      { text: "Healthy3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.46875 },
      { text: "sample ID", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 51.96875 },
      { text: "metsox_S_L_m", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 69.484375 },
      { text: "amylose300_m", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 67.8125 },
      { text: "galmannan_m", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.375 },
      { text: "starch1200_m", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.375 },
      { text: "metabolite", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 55.015625 }
    ] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "sample ID", fontSize: 11, fontFamily: "sans-serif", offset: 54 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "metabolite", fontSize: 11, fontFamily: "sans-serif", offset: 84 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createLegend({
      gradient: { length: 200 },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    });
}