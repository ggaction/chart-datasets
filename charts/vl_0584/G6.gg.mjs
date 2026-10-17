// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 334,
      height: 224,
      margin: { top: 52, right: 5, bottom: 22, left: 29 }
    })
    .createData({ values: data })
    .filterData({
      id: "roaringRange",
      field: "DATE",
      range: { min: "1914-01-01", max: "1927-10-01" }
    })
    .createComputedData({
      id: "djiaNum",
      as: "DJIA_num",
      expression: { op: "toNumber", operand: { field: "DJIA" } }
    })
    .createLinePlot({
      x: {
        field: "DATE",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        field: "DJIA_num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-1767225600000, -1238716800000], nice: false })
    .editYScale({ domain: [0, 200], nice: false })
    .encodeStroke({ value: "rgb(128,0,0)" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "The Roaring Twenties",
      titleStyle: {
        fontSize: 13,
        fontFamily: "sans-serif"
      },
      subtitleStyle: {
        fontSize: 10,
        fontStyle: "italic",
        fontFamily: "sans-serif"
      }
    })
    .editTitle({
      subtitle: "Dow Jones Industrial Average. Source: FRED\n",
      gap: 1,
      titleStyle: { fontWeight: 700, color: "rgb(0,0,0)" }
    })
    .editTitle({
      offset: -13,
      alongOffset: -23.7,
      subtitleStyle: { color: "rgb(0,0,0)" }
    })
    .applyTextMetrics({
      profile: {
        id: "source-year-glyphs",
        schemaVersion: 1,
        measurements: [
          { text: "1914", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1916", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1918", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1920", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1922", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1924", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1926", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1928", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1930", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }
        ]
      }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          -1767225600000, -1704153600000, -1640995200000, -1577923200000,
          -1514764800000, -1451692800000, -1388534400000, -1325462400000,
          -1262304000000
        ],
        ticks: { length: 5, color: "#888" },
        labels: { format: "%Y", fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createGrid({
      horizontal: { lineWidth: 1 },
      vertical: { lineWidth: 1 }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}