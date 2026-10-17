// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 286,
      height: 374,
      margin: { left: 26, top: 52, right: 10, bottom: 22 }
    })
    .createData({ id: "cpi", values: data })
    .createComputedData({
      id: "cpiDollar",
      as: "dollarValue",
      expression: {
        op: "divide",
        left: { constant: 100 },
        right: { op: "toNumber", operand: { field: "index" } }
      }
    })
    .createComputedData({
      id: "cpiYearTime",
      as: "yearTime",
      expression: { op: "parseTime", operand: { field: "year" }, format: "auto" }
    })
    .filterData({
      id: "cpiPost1940",
      field: "yearTime",
      predicate: { op: "gte", value: -915148800000 }
    })
    .createLinePlot({
      x: {
        field: "yearTime",
        fieldType: "temporal"
      },
      y: {
        field: "dollarValue",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-915148800000, 1325376000000], nice: false })
    .editYScale({ domain: [0, 2.4] })
    .encodeStroke({ value: "rgb(128,0,0)" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          -631152000000, -315619200000, 0, 315532800000,
          631152000000, 946684800000, 1262304000000
        ],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ".1f" }
      },
      title: false
    })
    .createTitle({
      text: "Dollar value: down and down",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "$100 / Consumer Prices Index. Source: Minneapolis Fed",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -20.9, gap: 1 });
}