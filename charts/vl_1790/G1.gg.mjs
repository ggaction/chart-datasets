// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 498, height: 223, margin: { left: 180, top: 36, right: 118, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createSortedData({ id: "sorted", source: "raw", sortBy: [{ field: "name", order: "ascending" }] })
    .createBarPlot({
      guides: false,
      x: "score",
      y: "name"
    })
    .encodeColor({
      field: "score",
      fieldType: "quantitative",
      scale: {
        domain: [0, 80755],
        palette: "blues"
      }
    })
    .encodeBarWidth({ band: 1, target: "barPlot" })
    .editBarMark({ target: "barPlot", stroke: false })
    .editXScale({ domain: [0, 90000], nice: false })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .createAxes({
      x: {
        position: "bottom",
        line: {},
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000],
          ticks: {},
          labels: {
            format: ",.0f",
            fontSize: 10,
            color: "none",
            fontFamily: "'JetBrains Mono', monospace",
            offset: 7
          }
        },
        title: { text: "score", fontSize: 11, color: "none", fontFamily: "'JetBrains Mono', monospace" }
      },
      y: {
        position: "left",
        line: {},
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            offset: 8,
            fontWeight: "bold",
            fontSize: 11,
            color: "none",
            fontFamily: "'JetBrains Mono', monospace"
          }
        },
        title: { text: "name", fontSize: 11, color: "none", fontFamily: "'JetBrains Mono', monospace" }
      }
    })
    .editYAxis({ ticks: false })
    .createGrid({ horizontal: false, vertical: { color: "none" } })
    .filterData({ id: "textSmallData", field: "score", predicate: { op: "lt", value: 30000 } })
    .createTextMark({
      id: "textSmall",
      fontSize: 11,
      fontFamily: "'JetBrains Mono', monospace"
    })
    .encodeX({ target: "textSmall", field: "score", fieldType: "quantitative" })
    .encodeY({ target: "textSmall", field: "name", fieldType: "nominal" })
    .encodeText({ target: "textSmall", field: "score" })
    .editTextMark({ align: "left", baseline: "middle", dx: 4 })
    .editTextMark({ target: "textSmall", fill: "black" })
    .filterData({ id: "textLargeData", source: "sorted", field: "score", predicate: { op: "gte", value: 30000 } })
    .createTextMark({
      id: "textLarge",
      fontSize: 11,
      fontFamily: "'JetBrains Mono', monospace"
    })
    .encodeX({ target: "textLarge", field: "score", fieldType: "quantitative" })
    .encodeY({ target: "textLarge", field: "name", fieldType: "nominal" })
    .encodeText({ target: "textLarge", field: "score" })
    .editTextMark({ align: "right", baseline: "middle", dx: -4 })
    .editTextMark({ target: "textLarge", fill: "white" })
    .createLegend({
      gradient: { length: 100, thickness: 16 },
      labels: {
        offset: 10,
        format: ",.0f",
        fontSize: 10,
        fontFamily: "'JetBrains Mono', monospace",
        color: "none"
      },
      titleStyle: {
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        color: "none"
      }
    })
    .editLegendTitle({ title: "Score" })
    .createTitle({
      text: "3DMark Ice Storm GPU Benchmark",
      offset: -10,
      titleStyle: {
        fontSize: 13,
        fontWeight: 700,
        fontFamily: "'JetBrains Mono', monospace",
        color: "none"
      }
    })
    .editTitle({
      subtitle: "more is better",
      subtitleStyle: {
        fontSize: 12,
        fontStyle: "italic",
        fontFamily: "'JetBrains Mono', monospace",
        color: "none"
      },
      gap: 1
    });
}