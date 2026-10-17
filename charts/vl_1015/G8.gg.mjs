// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-a929fd81abd909f8
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 219, height: 242, margin: { left: 29, top: 40, right: 10, bottom: 22 } })
    .createData({ id: "lms", values: data })
    .createComputedData({ id: "dated", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "numbered", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [694224000000, 1609459200000], nice: false })
    .editYScale({ domain: [0, 500], nice: false })
    .editLineMark({ stroke: "#3662f1", strokeWidth: 2, opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .createGrid({ horizontal: { scale: "y" }, vertical: { scale: "x" } })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "ILO Unemployed in London",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10 }
    })
    .editTitle({ subtitle: "Thousands, seasonally adjusted", offset: -13, alongOffset: -23.68 })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontStyle: "italic", fontFamily: "sans-serif", color: "black" } });
}
