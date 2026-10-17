// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 346, height: 367, margin: { left: 39, top: 40, right: 7, bottom: 37 } })
    .createData({ id: "cpi", values: data })
    .createComputedData({
      id: "tsData",
      as: "ts",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" },
    })
    .createComputedData({
      id: "numData",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } },
    })
    .createLinePlot({
      x: { field: "ts", fieldType: "temporal", scale: { domain: [599616000000, 1667260800000], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 14] } },
      guides: false,
    })
    .editLineMark({ stroke: "#002199", strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y", flush: true },
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 26 },
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 },
        },
        title: {
          text: "Inflation",
          fontSize: 11,
          fontWeight: 700,
          fontFamily: "sans-serif",
          color: "black",
          offset: 26,
          rotation: { value: -90, unit: "degrees" },
        },
      },
    })
    .createTitle({
      text: "CPI 12mth: Travel & transport services (S) 2015=100",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -33.12,
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 1,
      offset: -13,
    })
    .editTitle({ subtitle: "(£million, Source: ONS)" });
}
