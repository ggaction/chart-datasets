// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 500, height: 223, margin: { left: 180, top: 36, right: 120, bottom: 37 } })
    .createTitle({
      text: "Geekbench Vulkan Benchmark",
      offset: -10,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: "none" }
    })
    .editTitle({
      gap: 1,
      subtitle: "more is better",
      subtitleStyle: { fontSize: 12, fontStyle: "italic", fontFamily: "'JetBrains Mono', monospace", color: "none" }
    })
    .createData({ id: "data_0", values: data })
    .createSortedData({ id: "sorted", source: "data_0", sortBy: [{ field: "name", order: "ascending" }] })
    .createBarPlot({
      x: "score",
      y: "name",
      guides: false
    })
    .encodeColor({
      field: "score",
      fieldType: "quantitative"
    })
    .editColorScale({ target: "barPlot", domain: [0, 4406], palette: "blues" })
    .encodeBarWidth({ band: 1, target: "barPlot" })
    .editBarMark({ target: "barPlot", stroke: false })
    .editXScale({ domain: [0, 4500], nice: false })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .createGrid({ vertical: true, horizontal: false })
    .editVerticalGrid({ color: "none" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000],
        ticks: {},
        labels: { format: ",.0f", offset: 7, fontSize: 10 }
      },
      title: { text: "score", fontSize: 11 }
    })
    .editXAxis({
      ticksAndLabels: { labels: { color: "none", fontFamily: "'JetBrains Mono', monospace" } },
      title: { color: "none", fontFamily: "'JetBrains Mono', monospace", fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { offset: 8, fontSize: 11 }
      },
      title: { text: "name", fontSize: 11 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { color: "none", fontFamily: "'JetBrains Mono', monospace", fontWeight: "bold" } },
      title: { color: "none", fontFamily: "'JetBrains Mono', monospace", fontWeight: "bold" }
    })
    .editYAxis({ ticks: false })
    .createLegend({
      gradient: { length: 100, thickness: 16 },
      labels: { offset: 10, format: ",.0f", fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: "none" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: "none" }
    })
    .editLegendTitle({ title: "Score" })
    .filterData({ id: "textSmallData", field: "score", predicate: { op: "lt", value: 1500 } })
    .createTextMark({ id: "textSmall", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" })
    .encodeX({ target: "textSmall", field: "score", fieldType: "quantitative" })
    .encodeY({ target: "textSmall", field: "name", fieldType: "nominal" })
    .encodeText({ target: "textSmall", field: "score" })
    .editTextMark({ align: "left", baseline: "middle", dx: 4 })
    .editTextMark({ target: "textSmall", fill: "black" })
    .filterData({ id: "textLargeData", source: "sorted", field: "score", predicate: { op: "gte", value: 1500 } })
    .createTextMark({ id: "textLarge", fontSize: 11, fontFamily: "'JetBrains Mono', monospace" })
    .encodeX({ target: "textLarge", field: "score", fieldType: "quantitative" })
    .encodeY({ target: "textLarge", field: "name", fieldType: "nominal" })
    .encodeText({ target: "textLarge", field: "score" })
    .editTextMark({ align: "right", baseline: "middle", dx: -4 })
    .editTextMark({ target: "textLarge", fill: "white" });
}