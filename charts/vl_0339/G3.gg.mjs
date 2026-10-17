// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 355,
      height: 357,
      margin: { top: 40, right: 12, bottom: 17, left: 43 }
    })
    .createData({ id: "gdp", values: data })
    .createComputedData({
      id: "gdpParsed",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "gdpNumeric",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-725846400000, 1617235200000], nice: false })
    .editYScale({ domain: [0, 60000], zero: true })
    .editLineMark({ curve: "monotone" })
    .encodeStroke({ value: "blue" })
    .encodeStrokeWidth({ value: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 0 }, values: [-631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000], labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2, color: "black", format: "%Y" } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 10000, 20000, 30000, 40000, 50000, 60000], labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: ",.0f" } },
      title: false
    })
    .createTitle({
      text: "Real GDP - per capita",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      offset: -13,
      alongOffset: -37.6,
      gap: 1
    })
    .editTitle({
      subtitle: "Chained 2012 Dollars, Seasonally Adjusted Annual Rate (BEA via FRED)"
    });
}
