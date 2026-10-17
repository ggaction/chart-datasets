// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 229,
      height: 201,
      margin: { left: 53, top: 29, right: 26, bottom: 22 }
    })
    .createData({ id: "lms", values: data })
    .createComputedData({
      id: "lmsValue",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [694224000000, 1609459200000] }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [0, 1600], zero: true }
      },
      guides: false
    })
    .editLineMark({
      stroke: "rgb(8,123,102",
      strokeWidth: 2
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [946684800000, 1262304000000, 1577836800000],
            ticks: { color: "#888", length: 3 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 500, 1000, 1500],
            ticks: { color: "#888", length: 3 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", labelMap: [{ value: 0, label: "0" }, { value: 500, label: "500" }, { value: 1000, label: "1,000" }, { value: 1500, label: "1,500" }] }
          },
          title: { text: "000's", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 42, color: "black" }
        }
      },
      grid: false,
      legend: false
    })
    .createTitle({
      text: "Self-employed males - weekly hrs of work: 31 to 45",
      titleStyle: { fontSize: 9, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -47.0244140625
    })
    .editTitle({
      offset: -12
    })
    .editTitle({
      subtitle: "Seasonally Adjusted, Source: ONS",
      subtitleStyle: { fontSize: 8, fontStyle: "italic", fontWeight: 400, fontFamily: "sans-serif", color: "black" },
      gap: 2
    });
}
