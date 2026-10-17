// DOCS: doc-eb6e59db232dc6c0, doc-3558b809b504c100, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 250,
      height: 219,
      margin: { left: 55, top: 39, right: 70, bottom: 55 }
    })
    .createData({ id: "data", values: data })
    .createComputedData({
      id: "numeric",
      as: "ppscoreNumber",
      expression: { op: "toNumber", operand: { field: "ppscore" } }
    })
    .createHeatmap({
      x: { field: "y", fieldType: "nominal" },
      y: { field: "x", fieldType: "nominal" },
      guides: false
    })
    .editRectMark({ stroke: false })
    .editXScale({
      domain: ["Solar", "Solar LCOE", "log_LCOE", "log_solar"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: ["Solar", "Solar LCOE", "log_LCOE", "log_solar"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({ field: "ppscoreNumber", fieldType: "quantitative" })
    .editColorScale({
      target: "heatmap",
      domain: [0.5557560785688251, 1],
      palette: "yellowgreenblue"
    })
    .editColorScale({ target: "heatmap", interpolate: "hcl" })
    .createGrid({
      vertical: { bandPosition: "boundary" },
      horizontal: { bandPosition: "boundary" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 8,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 8, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    
    
    .createTitle({
      text: "PP score matrix",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontStyle: "normal" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Predictive power score matrix",
      align: "left",
      offset: -13
    })
    .editTitle({ alongOffset: -49.68359375, gap: 1 })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "rgb(0, 0, 0)" },
      subtitleStyle: { fontWeight: 400, color: "rgb(0, 0, 0)" }
    })
    .createLegend({
      title: "PP Score",
      labels: {
        fontSize: 8,
        format: ".1f",
        fontFamily: "sans-serif"
      },
      titleStyle: { fontSize: 9, fontFamily: "sans-serif" }
    })
    .editLegendSymbols({ gradient: { length: 125 } })
    .editLegendTitle({ fontWeight: 700 })
    .createTextMark({
      id: "text",
      data: "numeric",
      fontSize: 11
    })
    .editTextMark({ fill: "black", fontFamily: "sans-serif", align: "center" })
    .editTextMark({ baseline: "middle" })
    .encodeX({ target: "text", field: "y", fieldType: "nominal" })
    .encodeY({ target: "text", field: "x", fieldType: "nominal" })
    .encodeText({ target: "text", field: "ppscoreNumber", format: ".2f" });
}