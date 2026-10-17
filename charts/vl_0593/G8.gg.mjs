// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2fca4b1128a16241
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 440, height: 396, margin: { left: 84, top: 59, right: 6, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "Time", predicate: { op: "eq", value: "2000" } })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createBarPlot({
      x: { field: "valueNum", aggregate: "sum", fieldType: "quantitative" },
      y: { field: "Country", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [0, 100] })
    .editYScale({
      domain: ["T\u00fcrkiye", "Colombia", "Korea", "Lithuania", "France", "United States", "OECD - Total", "United Kingdom", "Norway", "Finland", "Denmark", "Sweden", "Iceland"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({ field: "Country", layout: "overlay" })
    .editColorScale({
      domain: ["Colombia", "Denmark", "Iceland", "Korea", "OECD - Total", "Sweden", "T\u00fcrkiye", "United Kingdom", "United States", "Finland", "Lithuania", "Norway", "France"],
      range: ["darkred"]
    })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "Unionisation Rates",
      offset: -12,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 1,
      alongOffset: -78
    })
    .editTitle({
      titleStyle: { color: "black", fontWeight: 700 },
      subtitle: "Most and least unionised (top 5), plus US, UK, OECD\nSource: OECD\n"
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "% Of Work Force In Labour Union", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } }
    })
    .createGrid({ horizontal: false, vertical: true })
    .editGrid({ vertical: { color: "#ddd" } });
}