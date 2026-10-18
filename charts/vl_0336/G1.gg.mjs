import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    .createCanvas({ width: 274, height: 212, margin: { top: 74, right: 10, bottom: 38, left: 64 } }) // doc-6c2c08869091f6a0
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "selectedBlock", field: "block", oneOf: ["name"] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0336-panel-0-original-font-widths",
        measurements: [
          { text: "block", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.734375 },
          { text: "Model 1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Model 2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Model 3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Model 4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Model 5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Model name", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 63.578125 },
          { text: "name", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.015625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Number of iterations", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 107.578125 },
          { text: "Number of iterations before convergence", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 254.28125 }
        ]
      }
    })
    .createBarPlot({
      x: { field: "Number of iterations", fieldType: "quantitative", scale: { domain: [0, 14] } },
      y: { field: "Model name", fieldType: "nominal", scale: { domain: ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5"] } },
      guides: false
    })
    .encodeColor({ field: "block", fieldType: "nominal", scale: { domain: ["name", "postcode+dob"], range: ["#4c78a8", "#f58518"] } })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { offset: 6.5, alongOffset: 0.5, flush: true, color: "black", fontSize: 10, fontFamily: "sans-serif" } },
        title: { text: "Number of iterations", offset: 28.578125, color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { values: ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5"], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { offset: 7.5, alongOffset: 0.390625, color: "black", fontSize: 10, fontFamily: "sans-serif" } },
        title: { text: "Model name", offset: 51.998046875, color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700 }
      }
    })
    .createVerticalGrid({ values: [0, 2, 4, 6, 8, 10, 12, 14], color: "#ddd" })
    .createTitle({ text: "name", titleStyle: { fontSize: 10, fontWeight: 400, color: "black" }, offset: 37.390625 })
    .editTitle({ align: "center" })
    .createAnnotation({ text: "Number of iterations before convergence", anchor: "plot-center", fontSize: 13 })
    .editTextMark({ fontWeight: 700, align: "left", fill: "black" })
    .editTextMark({ dx: -158.576171875, dy: -109, baseline: "alphabetic" })
    .createAnnotation({ id: "sourceColumnCaption", text: "block", anchor: "plot-center", fontSize: 11 })
    .editTextMark({ target: "sourceColumnCaption", fontWeight: 700, fill: "black" })
    .editTextMark({ target: "sourceColumnCaption", dx: 111, dy: -93 })
    .editTextMark({ target: "sourceColumnCaption", baseline: "alphabetic", align: "center" });
  const child1 = chart()
    .createCanvas({ width: 316, height: 212, margin: { top: 74, right: 104, bottom: 38, left: 12 } })
    .editCanvas({ background: "transparent", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .filterData({ id: "selectedBlock", field: "block", oneOf: ["postcode+dob"] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0336-panel-1-original-font-widths",
        measurements: [
          { text: "postcode+dob", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.125 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Number of iterations", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 107.578125 },
          { text: "name", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.015625 },
          { text: "block", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.734375 }
        ]
      }
    })
    .createBarPlot({
      x: { field: "Number of iterations", fieldType: "quantitative", scale: { domain: [0, 14] } },
      y: { field: "Model name", fieldType: "nominal", scale: { domain: ["Model 1", "Model 2", "Model 3", "Model 4", "Model 5"] } },
      guides: false
    })
    .encodeColor({ field: "block", fieldType: "nominal", scale: { domain: ["name", "postcode+dob"], range: ["#4c78a8", "#f58518"] } })
    .encodeBarWidth({ band: 1 })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ stroke: false, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: { values: [0, 2, 4, 6, 8, 10, 12, 14], ticks: { length: 5, color: "#888", lineWidth: 1 }, labels: { offset: 6.5, alongOffset: 0.5, flush: true, color: "black", fontSize: 10, fontFamily: "sans-serif" } },
        title: { text: "Number of iterations", offset: 28.578125, color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700 }
      },
      y: false
    })
    .createVerticalGrid({ values: [0, 2, 4, 6, 8, 10, 12, 14], color: "#ddd" })
    .createLegend({
      labels: { fontSize: 10, color: "black" },
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }] }
    })
    .createTitle({ text: "postcode+dob", titleStyle: { fontSize: 10, fontWeight: 400, color: "black" }, offset: 37.390625 })
    .editTitle({ align: "center" });
  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0,
    align: "start"
  });
}