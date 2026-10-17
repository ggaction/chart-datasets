// DOCS: doc-b30469a9489ccd34, doc-8a4f6f06e0d37d5e, doc-ec7ceb42f049fe69
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 335, height: 357, margin: { left: 24, top: 40, right: 11, bottom: 17 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createTitle({
      text: "Unemployment",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -12
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-694310400000, 1625097600000], nice: false })
    .editYScale({ domain: [0, 16] })
    .editLineMark({ stroke: "blue", strokeWidth: 2, curve: "monotone" })
    .editTitle({
      subtitle: "Number unemployed as % of labor force (FRED: UNRATE)",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      alongOffset: -18
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-631152000000, -315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 4, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        labels: { fontSize: 10, offset: 6, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { labels: { color: "black" } } })
    .editYAxis({ ticksAndLabels: { labels: { color: "black" } } });
}