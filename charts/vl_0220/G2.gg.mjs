// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 337, height: 370, margin: { left: 32, top: 40, right: 5, bottom: 30 } })
    .createData({ values: data })
    .createComputedData({
      id: "ratio",
      as: "loan_to_gdp_ratio",
      expression: {
        op: "multiply",
        left: {
          op: "divide",
          left: { op: "toNumber", operand: { field: "TOTAL_BILLION" } },
          right: { op: "toNumber", operand: { field: "global_gdp_billion" } },
        },
        right: { constant: 100 },
      },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0220",
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
          { text: "IMF LENDING OUTSTANDING", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 182.484375 },
          { text: "LOAN_TO_GDP_RATIO,(%),Source:IMF", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 183.1494140625 },
        ],
      },
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createBarPlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "loan_to_gdp_ratio" },
      guides: false,
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "rgb(153,206,58)", stroke: "transparent", strokeWidth: 0 })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false })
    .editYScale({ domain: [0, 0.35], nice: false })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000,
        ],
        ticks: { length: 0, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 2.776214599609375,
          alongOffset: -3.311748504638672,
          color: "black",
          format: "%Y",
          rotation: { value: 45, unit: "degrees" },
        },
      },
      title: false,
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, color: "black", format: ".2f" },
      },
      title: false,
    })
    .createTitle({
      text: "IMF LENDING OUTSTANDING",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125,
    })
    .editTitle({
      subtitle: "LOAN_TO_GDP_RATIO,(%),Source:IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      alongOffset: -26.462890625,
    })
    .editTitle({ gap: 3.34375 });
}