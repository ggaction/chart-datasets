// DOCS: doc-b11b4627b143730d, doc-dfae58344d5a524e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [
  -5364662400000, -4733596800000, -4102444800000,
  -3471292800000, -2840140800000, -2208988800000,
  -1577923200000, -946771200000, -315619200000,
  315532800000, 946684800000, 1577836800000
];
const yTicks = [-20, -10, 0, 10, 20, 30, 40];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 351,
      height: 377,
      margin: { left: 44, top: 40, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum"
      },
      guides: false
    })
    .editXScale({ domain: [-5364662400000, 1577836800000], nice: false })
    .editYScale({ domain: [-25, 40], zero: false })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createTitle({
      text: "Inflation - since 1800",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -11, gap: 1, alongOffset: -39 })
  .editTitle({ subtitle: 'RPI: long series: annual percentage change ' })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: xTicks,
          ticks: {},
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y", flush: true, labelMap: [{ value: -4733596800000, label: "" }, { value: -3471292800000, label: "" }, { value: -2208988800000, label: "" }, { value: -946771200000, label: "" }, { value: 315532800000, label: "" }, { value: 1577836800000, label: "" }] }
        },
        title: { text: "date", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: yTicks,
          ticks: {},
          labels: { fontSize: 10, offset: 7, color: "black" }
        },
        title: { text: "value", fontSize: 11, fontWeight: 700, offset: 33 }
      }
    })
    .createGrid({
      horizontal: { scale: "y", values: yTicks, color: "#ddd" },
      vertical: { scale: "x", values: xTicks, color: "#ddd" }
    });
}