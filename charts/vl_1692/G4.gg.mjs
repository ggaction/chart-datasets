// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Source outer canvas 241x102, frozen margins (left 35, top 5, right 6, bottom 37)
    .createCanvas({
      width: 241,
      height: 102,
      margin: { left: 34, top: 5, right: 7, bottom: 37 }
    })
    // Raw immutable dataset; no schema invented
    .createData({ id: "gantt", values: data })
    // Ranged (Gantt) bars: x lower/upper interval, y ordinal task; guides disabled at facade
    .createBarPlot({
      x: { lower: "start", upper: "end", fieldType: "quantitative" },
      y: "task",
      guides: false
    })
    // Source band scale: step 20, bandwidth 18 => band fraction 1
    .encodeBarWidth({ band: 1 })
    // Pin resolved x linear domain [0,10]
    .editXScale({ domain: [0, 10] })
    // Pin resolved y band scale: exact category order and padding
    .editYScale({
      domain: ["A", "B", "C"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Source hidden grid-only x axis: vertical grid lines only, no domain/ticks/labels styling
    .createVerticalGrid({ scale: "x", color: "#ddd" })
    // X axis: ticks/labels and title per source typography (10px labels offset 7, 11px bold title offset 21)
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "start, end",
        fontSize: 11,
        offset: 28
      }
    })
    // Whole-axis paint split into focused line / ticks / labels / title component editors
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: "bold" })
    // Y axis: categorical labels offset 7, title "task" cleared past longest label
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "task",
        fontSize: 11,
        offset: 24
      }
    })
    // Y whole-axis paint split into matching focused component editors
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: "bold" });
}
