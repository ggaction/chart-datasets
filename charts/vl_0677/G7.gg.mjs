// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 475,
      height: 374,
      margin: { left: 18, top: 52, right: 7, bottom: 22 }
    })
    .editCanvas({
      background: "#122b39"
    })
    .createData({ id: "rates", values: data })
    .filterData({ id: "ratesFiltered", field: "date", predicate: { op: "gte", value: "2005-01-01" } })
    .createComputedData({
      id: "ratesFinal",
      as: "BankRateNum",
      expression: { op: "toNumber", operand: { field: "BankRate" } }
    })
    .createTitle({
      text: "Bank of England interest rates (1975-2022)",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Bank Rate (%). Source: BoE.",
      offset: -13,
      alongOffset: -12.56
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "#cbc7cf" },
      subtitleStyle: { color: "#cbc7cf" }
    })
    .createLinePlot({
      guides: false,
      x: { field: "date", fieldType: "temporal" },
      y: { field: "BankRateNum", fieldType: "quantitative" }
    })
    .editLineMark({ curve: "step" }).encodeStroke({ target: "linePlot", value: "#ff9a00" }).encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({ domain: [1123113600000, 1663804800000], nice: false })
    .editYScale({ domain: [0, 6], nice: false, zero: true })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .editXAxisLabels({ color: "#cbc7cf", fontFamily: "sans-serif" })
    .editYAxisLabels({ color: "#cbc7cf", fontFamily: "sans-serif" });
}