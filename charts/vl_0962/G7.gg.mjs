import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-1b461e89762eb091, doc-60b61133ba03bf60, doc-0408a7975bd52e06

export function buildChart() {
  return chart()
    .createCanvas({
      width: 374,
      height: 256,
      margin: { left: 66, top: 40, right: 158, bottom: 66 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0962-original-source-font-widths",
        measurements: [
          { text: "1.000", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.627", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.686", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.598", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.628", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.667", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.584", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.636", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.556", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.606", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.637", fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", width: 27.53125 },
          { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "PP Score", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.109375 },
          { text: "PP score matrix", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 98.046875 },
          { text: "Predictive power score matrix", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 131.15625 },
          { text: "Solar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 23.359375 },
          { text: "Solar LCOE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.359375 },
          { text: "log_LCOE", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.140625 },
          { text: "log_solar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 40.59375 },
          { text: "", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 0 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "scores",
      as: "ScoreN",
      expression: { op: "toNumber", operand: { field: "ppscore" } }
    })
    .createHeatmap({
      x: "y",
      y: "x",
      guides: false
    })
    .editXScale({
      domain: ["Solar", "Solar LCOE", "log_LCOE", "log_solar"]
    })
    .editYScale({
      domain: ["Solar", "Solar LCOE", "log_LCOE", "log_solar"]
    })
    .encodeColor({
      field: "ScoreN",
      fieldType: "quantitative"
    })
    .editColorScale({
      palette: { name: "yellowgreenblue", count: 11 },
      interpolate: "rgb"
    })
    .editRectMark({ stroke: false })
    .createMarkLabels({ field: "ScoreN", format: ".3f", fontSize: 11 })
    .editTextMark({ fill: "black" })
    .createScale({ id: "boundaryX", domain: [0, 4] })
    .createScale({ id: "boundaryY", domain: [0, 4], reverse: true })
    .createAxes({
      x: {
        scale: "boundaryX",
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            offset: 7.5,
            alongOffset: 19.640625,
            rotation: { value: -90, unit: "degrees" },
            align: "right",
            labelMap: [
              { value: 0, label: "Solar" },
              { value: 1, label: "Solar LCOE" },
              { value: 2, label: "log_LCOE" },
              { value: 3, label: "log_solar" },
              { value: 4, label: "" }
            ]
          }
        },
        title: false
      },
      y: false
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicks({
      color: "#888"
    })
    .editXAxisLabels({
      color: "black"
    })
    .createAxes({
      x: false,
      y: {
        scale: "boundaryY",
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10,
            offset: 6.5,
            alongOffset: 19.640625,
            labelMap: [
              { value: 0, label: "Solar" },
              { value: 1, label: "Solar LCOE" },
              { value: 2, label: "log_LCOE" },
              { value: 3, label: "log_solar" },
              { value: 4, label: "" }
            ]
          }
        },
        title: false
      }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTicks({
      color: "#888"
    })
    .editYAxisLabels({
      color: "black"
    })
    .createGrid({
      horizontal: { scale: "y", bandPosition: "boundary", color: "#ddd", lineWidth: 1, zIndex: 1, alongOffset: 0.5 },
      vertical: { scale: "x", bandPosition: "boundary", color: "#ddd", lineWidth: 1, zIndex: 1, alongOffset: 0.5 }
    })
    .createTitle({
      text: "PP score matrix",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }
    })
    .editTitle({ align: "left", offset: -10.953125 })
    .editTitle({ subtitle: "Predictive power score matrix", gap: 3.34375, alongOffset: -60.3544921875 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        title: "PP Score",
        direction: "horizontal",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        gradient: { length: 120 }
      }
    })
    .editLegend({ titleStyle: { color: "black" }, labels: { color: "black" } });
}