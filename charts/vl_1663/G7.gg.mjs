// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1, doc-2bd5de4bd99e314a, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 241,
      height: 222,
      margin: { left: 30, top: 5, right: 11, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "b", fieldType: "quantitative" },
      y: { field: "a", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({ domain: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ cornerRadiusTopRight: 4, cornerRadiusBottomRight: 4 })
    .encodeBarWidth({ pixels: 18 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 8 }
      },
      title: { text: "b", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 8 }
      },
      title: { text: "a", fontSize: 11, fontWeight: "bold", offset: 23 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({
      vertical: true,
      horizontal: false
    })
    .editGrid({
      vertical: { color: "#ddd" }
    });
}
