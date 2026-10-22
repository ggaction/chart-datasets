import { chart } from "ggaction";
// DOCS: doc-792e9b0c40be93c0 createComputedData; doc-e7f2fa9f88cd79b5 Action Reference
import data from "./data.json";
import line from "./line-data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createCanvas)
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 44, right: 44, top: 27, bottom: 37 },
      plotBorder: {}
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (applyTextMetrics)
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1534-source-fit-necessary-font-widths",
        measurements: [
          { text: "−25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "−10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "120", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }
        ]
      }
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createData)
    .createData({ values: data })
    // DOCS: doc-792e9b0c40be93c0 createComputedData; doc-9a0229bbad941514 Expressions and Normalization; doc-e87e58de22887895 ComputedExpression
    .createComputedData({
      id: "oilDates",
      as: "sharedDate",
      expression: { op: "parseTime", operand: { field: "dt" } }
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createBarPlot)
    .createBarPlot({
      x: { field: "sharedDate", fieldType: "temporal" },
      y: { field: "Crude Oil" },
      guides: false
    })
    .editXScale({ domain: [1352645169230, 1687079630769] })
    .editYScale({ domain: [-25, 15] })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (encodeBarWidth)
    .encodeBarWidth({ pixels: 5 })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (editBarMark)
    .editBarMark({ fill: "#4c78a8", stroke: false })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (selectMarks)
    .selectMarks({ field: "Crude Oil", op: "lt", value: 0 })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (highlightMarks)
    .highlightMarks({ fill: "darkred", bringToFront: false })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createData)
    .createData({ id: "price", values: line })
    // DOCS: doc-792e9b0c40be93c0 createComputedData; doc-9a0229bbad941514 Expressions and Normalization
    .createComputedData({
      id: "priceDates",
      as: "sharedDate",
      expression: { op: "parseTime", operand: { field: "Date" } }
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createLinePlot)
    .createLinePlot({
      x: { field: "sharedDate", fieldType: "temporal", scale: { id: "x" } },
      y: { field: "Close-Nominal", scale: { id: "priceY" } },
      guides: false
    })
    .editYScale({ domain: [0, 120] })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (editLineMark)
    .editLineMark({ stroke: "black" })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (encodeStrokeDash)
    .encodeStrokeDash({ value: [4, 2] })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createGuides)
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "#000", format: "%Y", offset: 5.5, alongOffset: 0.5 }
          },
          title: { text: "dt, Date", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 }
        },
        y: [
          {
            id: "y",
            scale: "y",
            line: { color: "#888" },
            ticksAndLabels: {
              values: [-25, -20, -15, -10, -5, 0, 5, 10, 15],
              ticks: { length: 5, color: "#888", alongOffset: 0.5 },
              labels: {
                fontSize: 10,
                color: "#000",
                offset: 6.5,
                alongOffset: 0.890625,
                labelMap: [
                  { value: -25, label: "−25" },
                  { value: -20, label: "−20" },
                  { value: -15, label: "−15" },
                  { value: -10, label: "−10" },
                  { value: -5, label: "−5" }
                ]
              }
            },
            title: {
              text: "Year-over-year Change [%]",
              fontSize: 11,
              fontWeight: 700,
              color: "#000",
              offset: 32.384765625,
              alongOffset: 0.5,
              rotation: { value: -90, unit: "degrees" }
            }
          },
          {
            id: "priceAxis",
            scale: "priceY",
            position: "right",
            line: { color: "#888" },
            ticksAndLabels: {
              values: [0, 20, 40, 60, 80, 100, 120],
              ticks: { length: 5, color: "#888", alongOffset: 0.5 },
              labels: { fontSize: 10, color: "#000", offset: 7.5, alongOffset: 0.890625 }
            },
            title: {
              text: "Oil Price (black) [USD/barrel]",
              fontSize: 11,
              fontWeight: 700,
              color: "#000",
              offset: 33.1064453125,
              alongOffset: 0.5,
              rotation: { value: 90, unit: "degrees" }
            }
          }
        ]
      },
      grid: {
        vertical: {
          scale: "x",
          values: [1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
          color: "#ddd"
        },
        horizontal: {
          scale: "y",
          values: [-25, -20, -15, -10, -5, 0, 5, 10, 15],
          color: "#ddd"
        }
      }
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (createTitle)
    .createTitle({
      text: "Year over Year change in Crude Oil stock",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.046875
    })
    // DOCS: doc-e7f2fa9f88cd79b5 Action Reference (editTitle)
    .editTitle({ align: "center" });
}