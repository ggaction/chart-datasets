// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 253,
      height: 247,
      margin: { top: 10, right: 7, bottom: 37, left: 46 }
    })
    .createData({ id: "cars", values: data })
    .createComputedData({
      id: "weightNum",
      as: "WeightNum",
      expression: { op: "toNumber", operand: { field: "Weight" } }
    })
    
    .createSummaryData({
      id: "byYear",
      groupBy: "Year",
      aggregates: [{ field: "WeightNum", op: "mean", as: "mean_Weight" }]
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "mean_Weight", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 378691200000] })
    .editYScale({ domain: [0, 3500], zero: true })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({
      horizontal: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500]
      },
      vertical: {
        values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000]
      }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "y-axis-glyph-profile",
        measurements: [
          { text: "0.0k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "0.5k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "1.0k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "1.5k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "2.0k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "2.5k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "3.0k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 },
          { text: "3.5k", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.90625 }
        ]
      }
    }).createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 63072000000, 126230400000, 189302400000, 252460800000, 315532800000, 378691200000],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          format: "%Y",
          flush: true,
          labelMap: [
            { value: 0, label: "1970" },
            { value: 63072000000, label: "" },
            { value: 126230400000, label: "1974" },
            { value: 189302400000, label: "" },
            { value: 252460800000, label: "1978" },
            { value: 315532800000, label: "" },
            { value: 378691200000, label: "1982" }
          ]
        }
      },
      title: { text: "Year", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0.0k" },
            { value: 500, label: "0.5k" },
            { value: 1000, label: "1.0k" },
            { value: 1500, label: "1.5k" },
            { value: 2000, label: "2.0k" },
            { value: 2500, label: "2.5k" },
            { value: 3000, label: "3.0k" },
            { value: 3500, label: "3.5k" }
          ]
        }
      },
      title: { text: "Mean of Weight", fontSize: 11, offset: 35, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } });
}