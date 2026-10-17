// DOCS: doc-b11b4627b143730d doc-8a4f6f06e0d37d5e doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 305,
      height: 374,
      margin: { left: 18, top: 52, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "ts",
      expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" }
    })
    .createComputedData({
      id: "rated",
      as: "rate",
      expression: { op: "toNumber", operand: { field: "BankRate" } }
    })
    .filterData({
      id: "plot",
      field: "ts",
      range: {
        min: 1104537600000,
        max: 1672531200000,
        minInclusive: true,
        maxInclusive: false
      }
    })
    .createLinePlot({
      x: { field: "ts", fieldType: "temporal" },
      y: { field: "rate", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#ff9a00", strokeWidth: 2, curve: "step" })
    .editXScale({ domain: [1123113600000, 1663804800000], nice: false })
    .editYScale({ domain: [0, 6], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1136073600000, 1199145600000, 1262304000000, 1325376000000,
          1388534400000, 1451606400000, 1514764800000, 1577836800000,
          1640995200000
        ],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLabels({
      color: "#cbc7cf",
      format: "%Y"
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLabels({
      color: "#cbc7cf"
    })
    .createTitle({
      text: "Bank of England interest rates (1975-2022)",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "Bank Rate (%). Source: BoE.",
      gap: 1,
      offset: -13
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "#cbc7cf" },
      subtitleStyle: { color: "#cbc7cf" }
    });
}