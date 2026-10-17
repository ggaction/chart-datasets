import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d

export function buildChart() {
  return chart()
    .createCanvas({ width: 337, height: 370, margin: { left: 32, top: 40, right: 5, bottom: 30 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0.00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "IMF Lending outstanding", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 154.53125 },
          { text: "Credit outstanding to all members, SDRs (billions), Source: IMF", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 282.4560546875 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "yearly", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "measure",
      as: "sourceMeasure",
      expression: { op: "toNumber", operand: { field: "IMF Lending as a % of GDP" } }
    })
    .createBarPlot({ x: { field: "Year", fieldType: "temporal" }, y: "sourceMeasure", guides: false })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(0,47,167)", stroke: false })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ domain: [0, 0.35], nice: false })
    .createTitle({
      text: "IMF Lending outstanding",
      titleStyle: { fontSize: 13 },
      alongOffset: -26.462890625
    })
    .editTitle({ offset: -10.953125, gap: 3.34375, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Credit outstanding to all members, SDRs (billions), Source: IMF",
      subtitleStyle: { fontStyle: "italic", color: "black", fontSize: 10 }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
          values: [473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 0, color: "transparent" },
          labels: {
            fontSize: 10,
            color: "black",
            format: "%Y",
            offset: 2.776214599609375,
            alongOffset: -3.311748504638672,
            rotation: { value: 45, unit: "degrees" }
          }
        },
        title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
          values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 7, format: ".2f" }
        },
        title: false
    })
    ;
}