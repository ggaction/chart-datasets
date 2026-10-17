// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 565, height: 384, margin: { left: 58, top: 47, right: 7, bottom: 37 } })
    .createData({ id: "gdp", values: data })
    .createFoldData({ id: "folded", fields: ["GDP", "lnGDP", "gGDP", "gGDP_5y"], as: { key: "measure", value: "value" } })
    .createComputedData({
      id: "numValue",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "null" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createComputedData({
      id: "missingFlag",
      as: "missing",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "null" } },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "segmented",
      operations: [{ op: "cumulativeSum", field: "missing", as: "segment" }]
    })
    .filterData({
      id: "visibleSegments",
      field: "missing",
      predicate: { op: "eq", value: 0 }
    })
    .createLinePlot({
      x: { field: "DATE", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-725846400000, 1656633600000] })
    .editYScale({ domain: [-2000, 26000] })
    .encodeGroup({ field: "segment", fieldType: "nominal" })
    .editLineMark({ stroke: "rgb(128,0,0)", strokeWidth: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-gdp-labels", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "15,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "25,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }] } })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { ticks: {}, values: [-631152000000, -473385600000, -315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], labels: { fontSize: 10, offset: 7, format: "%Y", flush: true } },
        title: { text: "DATE", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: {},
        ticksAndLabels: { ticks: {}, values: [0, 5000, 10000, 15000, 20000, 25000], labels: { fontSize: 10, offset: 7, format: ",.0f" } },
        title: { text: "value", fontSize: 11, fontWeight: 700, offset: 45 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "GDP - different perspectives",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -52.59 })
    .editTitle({ subtitle: "US nominal GDP, log, growth rate. Source: FRED\n" });
}