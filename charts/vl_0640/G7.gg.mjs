import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e

export function buildChart() {
  return chart()
    .createCanvas({
      width: 550,
      height: 369,
      margin: { left: 43, top: 47, right: 7, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "gdpNum",
      as: "GDPNum",
      expression: { op: "toNumber", operand: { field: "GDP" } }
    })
    .filterData({
      id: "from1948",
      field: "DATE",
      predicate: { op: "gte", value: "1948-01-01" }
    })
    .filterData({
      id: "before2022",
      field: "DATE",
      predicate: { op: "lt", value: "2022-01-01" }
    })
    .createLinePlot({
      x: {
        field: "DATE",
        fieldType: "temporal"
      },
      y: {
        field: "GDPNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [-694310400000, 1633046400000]
    })
    .editYScale({
      domain: [0, 26000]
    })
    .encodeStroke({ value: "rgb(128,0,0)" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -631152000000, -473385600000, -315619200000, -157766400000,
          0, 157766400000, 315532800000, 473385600000, 631152000000,
          788918400000, 946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLabels({ format: "," })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "US GDP - interactive",
      titleStyle: { fontSize: 13, fontWeight: "700", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      gap: 1,
      offset: -13,
      alongOffset: -37.6845703125
    })
    .editTitle({
      subtitle: "GDP, USD billions. Source: BEA (via FRED)\n"
    });
}
