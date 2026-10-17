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
    .encodeStroke({ value: "#122b39" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: YEAR_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ format: "%Y", fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Percentage share", fontSize: 11, offset: 33 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({
      horizontal: { scale: "y", values: Y_TICKS },
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}