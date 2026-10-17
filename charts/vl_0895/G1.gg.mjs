// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 399,
      height: 435,
      margin: { left: 44, top: 40, right: 5, bottom: 45 }
    })
    .editCanvas({
      background: "#fff0d8"
    })
    .createData({ id: "imf", values: data })
    .filterData({ id: "validYears", field: "Year", noneOf: ["", null] })
    .createComputedData({
      id: "imfBillions",
      as: "billions",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "Totals" } },
        right: { constant: 1000000000 }
      }
    })
    .createComputedData({
      id: "imfDated",
      as: "dateMs",
      expression: {
        op: "parseTime",
        operand: { field: "Year" },
        format: "auto"
      }
    })
    .createBarPlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        scale: { domain: [424127435294, 1658630964705], range: [44, 394], nice: false }
      },
      y: { field: "billions", scale: { domain: [0, 110] } },
      guides: false
    })
    .editBarMark({ fill: "#fe921f" })
    .encodeBarWidth({ pixels: 5 })
    .createTitle({
      text: "IMF Lending outsanding ",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      alongOffset: -38.6845703125
    })
    .editTitle({
      subtitle: "Inflation adjusted  credit outstanding to all members of the IMF in USD: source (IMF)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      gap: 3
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 2,
          fontFamily: "sans-serif",
          color: "black",
          rotation: { value: 45, unit: "degrees" }
        },
        values: [
          473385600000, 631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000, 1577836800000
        ]
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 35, color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" },
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]
      },
      title: { text: "Billions of USD", fontSize: 11, fontWeight: 700, offset: 28, color: "black" }
    });
}
