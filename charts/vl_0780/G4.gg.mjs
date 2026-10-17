import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "header-metrics",
        measurements: [
          {
            text: "Investment Grade Corporate Bonds Yields vs Fed Funds Rate",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 380
          },
          {
            text: "Relationship between Corporate Bond Yields and Fed Funds Rate",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "italic",
            width: 292.666015625
          }
        ]
      }
    })
    .createCanvas({
      width: 398,
      height: 396,
      margin: { left: 42, top: 59, right: 6, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "typedX",
      as: "xNum",
      expression: { op: "toNumber", operand: { field: "Fed Funds Rate" } }
    })
    .createComputedData({
      id: "typedY",
      as: "yNum",
      expression: { op: "toNumber", operand: { field: "Corporate Yields" } }
    })
    .createScatterPlot({
      x: { field: "xNum", fieldType: "quantitative" },
      y: { field: "yNum", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "#1f11ddf4", stroke: false })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(60) / 2 })
    .editXScale({ domain: [0, 0.04] })
    .editYScale({ domain: [0, 0.06] })
    .createRegressionData({ id: "fit", x: "xNum", y: "yNum" })
    .editRegressionData({
      target: "fit",
      predict: { domain: [0.000793548, 0.038925], steps: 2 }
    })
    .createLinePlot({
      x: { field: "xNum", fieldType: "quantitative" },
      y: { field: "yNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "#674439f2" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createSummaryData({
      id: "one",
      source: "typedY",
      aggregates: [{ op: "count", as: "N" }]
    })
    .createComputedData({
      id: "display",
      as: "R2",
      expression: { constant: "R²: 0.81" }
    })
    .createTextMark({ id: "text", data: "display", fontSize: 11 })
    .encodeText({ target: "text", field: "R2" })
    .encodeX({ target: "text", datum: 0.04 })
    .encodeY({ target: "text", datum: 0.06 })
    .editTextMark({ target: "text", align: "right", baseline: "middle" })
    .editTextMark({ target: "text", fill: "black", dy: -6 })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, flush: true, format: ".1%" }
      },
      title: {
        text: "Monthly Fed Funds Rate",
        fontSize: 11,
        fontWeight: 700,
        offset: 27
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: {
        text: "Monthly IG Corporate Bond Yields",
        fontSize: 11,
        fontWeight: 700,
        rotation: { value: -90, unit: "degrees" },
        offset: 30
      }
    })
    .createTitle({
      text: "Investment Grade Corporate Bonds Yields vs Fed Funds Rate",
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "sans-serif",
        color: "black"
      },
      alongOffset: -36.453125
    })
    .editTitle({
      subtitleStyle: {
        fontSize: 10,
        fontWeight: 400,
        fontStyle: "italic",
        fontFamily: "sans-serif",
        color: "black"
      },
      offset: -13,
      gap: 3
    })
    .editTitle({
      subtitle: "Relationship between Corporate Bond Yields and Fed Funds Rate\n"
    });
}