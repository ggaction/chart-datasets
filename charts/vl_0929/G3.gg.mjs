// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71 (createLinePlot facade + createTitle/editTitle ownership)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 224, height: 272, margin: { left: 18, top: 40, right: 6, bottom: 32 } })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "plot",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [702086400000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 8] })
    .editLineMark({ stroke: "#A3B18A", strokeWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createTitle({
      text: "Total population aged 35-49 ",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .editTitle({ subtitle: "Unemployment rate (%), 1992-2022 ", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 3 })
    .editTitle({ titleStyle: { fontWeight: 700 }, alongOffset: -12.56 });
}