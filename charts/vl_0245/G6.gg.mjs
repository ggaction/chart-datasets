// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e — createLinePlot facade, line chart recipe
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 281,
      height: 312,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "hoursNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [702086400000, 1656633600000] })
    .editYScale({ domain: [0, 35] })
    .encodeStroke({ value: "turquoise" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({
      ticksAndLabels: { labels: { color: "black", format: "%Y" } }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editYAxis({
      ticksAndLabels: { labels: { color: "black" } }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Weekly hours worked",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({
      subtitle: "Average for all workers, data: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      alongOffset: -18
    })
    .editTitle({ gap: 1, titleStyle: { fontWeight: 700 } });
}
