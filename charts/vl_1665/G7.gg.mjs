import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-9bb354f4e2d46693, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({
      width: 477,
      height: 247,
      margin: { left: 44, top: 10, right: 83, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createComputedData({
      id: "dateMs",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "timestamp",
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1267401600000], nice: false })
    .editYScale({ domain: [0, 800], zero: true })
    .encodeStrokeDash({
      field: "symbol",
      fieldType: "nominal",
    })
    .editStrokeDashScale({ domain: ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"], range: [[1, 0], [3, 1], [2, 3], [4, 4], [5, 6]] })
    .editLineMark({ strokeWidth: 1, opacity: 0.6 })
        .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif" })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    })
    .createGuides({
        axes: false,
        legend: {
            position: "right",
            channels: ["strokeDash"],
            title: "symbol",
            symbol: { layers: [{ type: "line", lineWidth: 1 }] },
            labels: { fontSize: 10, fontFamily: "sans-serif" },
            titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
        }
    });
}