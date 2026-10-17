// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 333,
      height: 374,
      margin: { left: 26, top: 52, right: 7, bottom: 22 }
    })
    .createData({ id: "boe", values: data })
    .filterData({ id: "y2022", field: "Date", range: { min: "2015-01-01", max: "2022-12-31", inclusive: true } })
    .createComputedData({ id: "rates", as: "RateNum", expression: { op: "toNumber", operand: { field: "Rate" } } })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "RateNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ curve: "step", stroke: "#400099", strokeWidth: 2 })
    .editXScale({ target: "linePlot", domain: [1470268800000, 1667433600000] })
    .editYScale({ target: "linePlot", domain: [0, 3] })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7, color: "black", format: "%Y", flush: true } },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, offset: 7, color: "black" } },
        title: false
      }
    })
    .createTitle({
      text: "Bank of England interest rates (1988-2022)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({ subtitle: "Bank Rate (%). Source: BoE.", subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }, gap: 3 })
    .editTitle({ alongOffset: -20.9013671875, align: "left" });
}
