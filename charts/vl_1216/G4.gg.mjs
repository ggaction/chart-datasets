// DOCS: doc-6c2c08869091f6a0, doc-333a87e52954985d, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 337,
      height: 240,
      margin: { left: 41, top: 5, right: 56.00000000000003, bottom: 35 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "category", fieldType: "nominal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "group", fieldType: "nominal", layout: "group" })
    .encodeXOffset({ field: "group", paddingInner: 0, paddingOuter: 0 })
    .encodeBarWidth({ band: 1 })
    .editColorScale({ target: "barPlot", range: ["blue", "orange", "green"] })
    .editXScale({ target: "barPlot", paddingInner: 0.2, paddingOuter: 0.2 })
    .editYScale({ target: "barPlot", domain: [0, 1.1] })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "category", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "value", fontSize: 11, offset: 28 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createLegend({
      position: "right",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}
