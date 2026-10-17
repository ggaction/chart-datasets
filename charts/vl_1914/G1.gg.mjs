// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 399, height: 417, margin: { left: 39, top: 40, right: 15, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "rateNum", as: "Rate_n", expression: { op: "toNumber", operand: { field: "Rate" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Rate_n", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ curve: "step", stroke: "red", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Rate_n", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({ fill: "red", opacity: 0.7, stroke: false })
    .createRuleMark({ id: "rule", stroke: "black", opacity: 0 })
    .encodeX({ target: "rule", field: "Date", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .editXScale({ domain: [159408000000, 1584576000000], nice: false })
    .editYScale({ domain: [0, 18], nice: false })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd", values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18] },
      vertical: { scale: "x", color: "#ddd", values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000] }
    })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "Number of Prices", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({ text: "Bank Rate", alongOffset: -33.123046875, titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({ subtitle: "Bank of England's main policy rate. Source: BoE", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}