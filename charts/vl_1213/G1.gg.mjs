// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 444, height: 342, margin: { left: 138, top: 5, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numYear", as: "year", expression: { op: "toNumber", operand: { field: "Period" } } })
    .createComputedData({ id: "numValue", as: "Value_num", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "filtered", field: "year", predicate: { op: "gte", value: 2021 } })
    .createComputedData({ id: "yearValue", as: "value", expression: { field: "year" } })
    .createBarPlot({ x: "Value_num", y: "Region", guides: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 20000] })
    .editYScale({ domain: ["Africa", "Asia & Oceania", "Central & South America", "Europe", "North America"], paddingInner: 0.1, paddingOuter: 0.05 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: ",.0f",
          flush: true,
          labelMap: [
            { value: 0, label: "0" },
            { value: 2000, label: "" },
            { value: 4000, label: "4,000" },
            { value: 6000, label: "" },
            { value: 8000, label: "8,000" },
            { value: 10000, label: "" },
            { value: 12000, label: "12,000" },
            { value: 14000, label: "" },
            { value: 16000, label: "16,000" },
            { value: 18000, label: "" },
            { value: 20000, label: "20,000" }
          ]
        }
      },
      title: { text: "Value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-region-labels",
        measurements: [
          { text: "Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.5625 },
          { text: "Asia & Oceania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 68.9375 },
          { text: "Central & South America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 109.515625 },
          { text: "Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 },
          { text: "North America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.359375 }
        ]
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Region", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 123, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } });
}