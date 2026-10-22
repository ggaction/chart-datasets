import { chart } from "ggaction"; // DOCS: doc-a66e2514a68492d5
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-a66e2514a68492d5 — G1 mandatory birth: standalone canvas with source plot/margins/plotBorder
    .createCanvas({
      plot: { width: 450, height: 300 },
      margin: { left: 39, right: 8, top: 73, bottom: 28 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    // DOCS: doc-a66e2514a68492d5 — single measured 1800 label tuple (unrotated width), before guide creation
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0581-first-flush-only",
        measurements: [
          { text: "1800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    // DOCS: doc-a66e2514a68492d5 — raw imported rows, untouched
    .createData({ values: data })
    // DOCS: doc-a66e2514a68492d5 — fold index/change into var/val, all 446 derived rows retained
    .createFoldData({
      id: "folded",
      fields: ["index", "change"],
      as: { key: "var", value: "val" }
    })
    // DOCS: doc-a66e2514a68492d5 — public alias: empty string becomes numeric 0 (typed if before toNumber)
    .createComputedData({
      id: "numericValue",
      as: "sourceValue",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "val" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "val" } }
      }
    })
    // DOCS: doc-a66e2514a68492d5 — public alias: parseTime year strings; invalid strings become null (gap vertices)
    .createComputedData({
      id: "numericYear",
      as: "sourceYear",
      expression: { op: "parseTime", operand: { field: "year" } }
    })
    // DOCS: doc-a66e2514a68492d5 — line mark with source paint; missing:"break" preserves invalid-year gaps
    .createLineMark({ stroke: "rgb(128,0,0)", missing: "break" })
    // DOCS: doc-a66e2514a68492d5 — temporal x on frozen epoch-millisecond domain
    .encodeX({
      field: "sourceYear",
      fieldType: "temporal"
    })
    // DOCS: doc-a66e2514a68492d5 — quantitative y with source zero/nice(10) independent policy
    .encodeY({
      field: "sourceValue"
    })
    .editXScale({ domain: [-5364662400000, 1325376000000] })
    .editYScale({ zero: true, nice: { count: 10 } })
    // DOCS: doc-a66e2514a68492d5 — complete axes/grid born at birth (both grid directions, no legend)
    .createXAxis({
      offset: 6,
      ticksAndLabels: {
        values: [
          -5364662400000, -4733596800000, -4102444800000, -3471292800000,
          -2840140800000, -2208988800000, -1577923200000, -946771200000,
          -315619200000, 315532800000, 946684800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, format: "%Y", flush: true, offset: 5.5 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        count: 10,
        ticks: { length: 5 },
        labels: { fontSize: 10, format: "ticks", offset: 6.5 }
      },
      title: false
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicks({ color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ color: "#888", alongOffset: 0.5 })
    .editXAxisLabels({ color: "black", alongOffset: 0.5 })
    .editYAxisLabels({ color: "black", alongOffset: 0.890625 })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    // DOCS: doc-a66e2514a68492d5 — native facet on folded data with exact values order
    .facet({ field: "var", data: "folded", values: ["change", "index"] })
    // DOCS: doc-a66e2514a68492d5 — measured facet header typography
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    // DOCS: doc-a66e2514a68492d5 — measured header offset
    .editFacetHeaders({ offset: 14.609375 })
    // DOCS: doc-a66e2514a68492d5 — source independent y resolution
    .editFacetScales({ y: "independent" })
    // DOCS: doc-a66e2514a68492d5 — outer axes, no legend
    .editFacetGuides({ axes: "outer", legend: false })
    // DOCS: doc-a66e2514a68492d5 — measured composition layout (columns/gap/spacing)
    .editCompositionLayout({ columns: 1, gap: 52, spacing: "plot" })
    // DOCS: doc-a66e2514a68492d5 — shared top lane for facet headers/titles
    .editCompositionLayout({ topLane: "shared" })
    // DOCS: doc-a66e2514a68492d5 — chart title with measured styles/alongOffset (subtitle deferred one edit for valid eager layout)
    .createTitle({
      text: "US inflation",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -33.302734375
    })
    // DOCS: doc-a66e2514a68492d5 — measured title offset
    .editTitle({ offset: -2.953125 })
    // DOCS: doc-a66e2514a68492d5 — source subtitle with measured styles and gap (blank second source line preserved in frozen source)
    .editTitle({
      subtitle: "CPI - annual change, with underlying CPI. Source: Minneapolis Fed",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    });
}