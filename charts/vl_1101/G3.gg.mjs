// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

const YEAR_TICKS = [
  -5364662400000, // 1800-01-01 UTC
  -4733596800000, // 1820-01-01 UTC
  -4102444800000, // 1840-01-01 UTC
  -3471292800000, // 1860-01-01 UTC
  -2840140800000, // 1880-01-01 UTC
  -2208988800000, // 1900-01-01 UTC
  -1577923200000, // 1920-01-01 UTC
  -946771200000, // 1940-01-01 UTC
  -315619200000, // 1960-01-01 UTC
  315532800000, // 1980-01-01 UTC
  946684800000, // 2000-01-01 UTC
];
const Y_TICKS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 451,
      height: 332,
      margin: { left: 44, top: 10, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: {
        field: "\uFEFFTime",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "ValueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-5364662400000, 1136073600000] })
    .editYScale({ domain: [0, 100] })
    .editLineMark({ stroke: "#122b39", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: YEAR_TICKS,
        ticks: { length: 5, color: "#888" },
        labels: { format: "%Y", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Percentage share", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 33 }
    })
    .createGrid({
      horizontal: { scale: "y", values: Y_TICKS, color: "#ddd", lineWidth: 1 },
      vertical: false
    });
}