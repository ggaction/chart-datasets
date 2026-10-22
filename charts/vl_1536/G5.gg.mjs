import { chart } from "ggaction";
import data from "./data.json";
import line from "./line-data.json";

// DOCS: doc-76573a465e2b6a33 docs/api/basic-charts.md — createLinePlot facade (x, y, guides)
// DOCS: doc-8f7efd41b2186a84 npm/knowledge/action-cards.json — createBarPlot facade wraps encodeBarWidth, createGuides
// DOCS: doc-b9261a4b2909a353 npm/knowledge/action-cards.json — createLinePlot wraps encodeStrokeDash, createGuides
// DOCS: doc-9a0229bbad941514 docs/api/data/expressions-and-normalization.md — createComputedData with parseTime expression

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 44, right: 33, top: 27, bottom: 37 },
      plotBorder: {}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1536-source-fit-unchanged-five",
        measurements: [
          { text: "2011", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.515625 },
          { text: "−60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "oilDates",
      as: "sharedDate",
      expression: { op: "parseTime", operand: { field: "dt" } }
    })
    .createBarPlot({
      x: {
        field: "sharedDate",
        fieldType: "temporal"
      },
      y: {
        field: "Lower48"
      },
      guides: false
    })
    .editXScale({ domain: [1288764553846, 1687888246153] })
    .editYScale({ domain: [-60, 100] })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#4c78a8", stroke: false })
    .selectMarks({ field: "Lower48", op: "lt", value: 0 })
    .highlightMarks({ fill: "darkred", bringToFront: false })
    .createData({ id: "price", values: line })
    .createComputedData({
      id: "priceDates",
      as: "sharedDate",
      expression: { op: "parseTime", operand: { field: "Date" } }
    })
    .createLinePlot({
      x: {
        field: "sharedDate",
        fieldType: "temporal",
        scale: { id: "x" }
      },
      y: {
        field: "Close-Nominal",
        scale: { id: "priceY" }
      },
      guides: false
    })
    .editYScale({ domain: [0, 9] })
    .editLineMark({ stroke: "black" })
    .encodeStrokeDash({ value: [4, 2] })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, format: "%Y", offset: 5.5, alongOffset: 0.5 }
        },
        title: { text: "dt, Date", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
      },
      y: [
        {
          id: "y",
          scale: "y",
          ticksAndLabels: {
            values: [-60, -40, -20, 0, 20, 40, 60, 80, 100],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              offset: 6.5,
              alongOffset: 0.890625,
              labelMap: [
                { value: -60, label: "−60" },
                { value: -40, label: "−40" },
                { value: -20, label: "−20" }
              ]
            }
          },
          title: {
            text: "Year-over-year Change [%]",
            fontSize: 11,
            offset: 32.384765625,
            alongOffset: 0.5,
            rotation: { value: -90, unit: "degrees" }
          }
        },
        {
          id: "priceAxis",
          scale: "priceY",
          position: "right",
          ticksAndLabels: {
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            ticks: { length: 5, alongOffset: 0.5 },
            labels: { fontSize: 10, offset: 7.5, alongOffset: 0.890625 }
          },
          title: {
            text: "Natural Gas Price (black) [USD/MMBtu]",
            fontSize: 11,
            offset: 21.9833984375,
            alongOffset: 0.5,
            rotation: { value: 90, unit: "degrees" }
          }
        }
      ]
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisTitle({ fontWeight: 700, color: "#000" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ fontWeight: 700, color: "#000" })
    .editYAxisLine({ target: "priceAxis", color: "#888" })
    .editYAxisTicks({ target: "priceAxis", color: "#888" })
    .editYAxisLabels({ target: "priceAxis", color: "#000" })
    .editYAxisTitle({ target: "priceAxis", fontWeight: 700, color: "#000" })
    .createGrid({
      vertical: { color: "#ddd" },
      horizontal: { scale: "y", color: "#ddd" }
    })
    .createTitle({
      text: "Year over Year change in Lower48 Natural Gas storage",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    .editTitle({ align: "center" });
}