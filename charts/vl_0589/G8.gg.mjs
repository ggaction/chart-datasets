import { chart } from "ggaction"; // DOCS: doc-b9261a4b2909a353 createLinePlot facade chain
import data from "./data.json"; // DOCS: doc-8a4f6f06e0d37d5e line chart program pattern

export function buildChart() {
  return chart()
    // DOCS: doc-b9261a4b2909a353 canvas/data prerequisites
    .createCanvas({
      plot: { width: 200, height: 300 },
      margin: { left: 22, right: 9, top: 71, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    // DOCS: doc-b9261a4b2909a353 measured endpoint font widths before guides
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0589-original-flush-endpoint-fonts",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    // DOCS: doc-b9261a4b2909a353 raw dataset context (93 rows)
    .createData({ values: data })
    // DOCS: doc-b9261a4b2909a353 fold bond1/bond2/bond3 into asset/value
    .createFoldData({ id: "folded", fields: ["bond1", "bond2", "bond3"], as: { key: "asset", value: "value" } })
    // DOCS: doc-b9261a4b2909a353 source filter riskFreeRate 0.01
    .filterData({ id: "originalRisk", field: "riskFreeRate", oneOf: ["0.01"] })
    // DOCS: doc-b9261a4b2909a353 numeric alias for year
    .createComputedData({ id: "numericYear", as: "sourceYear", expression: { op: "toNumber", operand: { field: "year" } } })
    // DOCS: doc-b9261a4b2909a353 numeric alias for value
    .createComputedData({ id: "numericValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "value" } } })
    // DOCS: doc-b9261a4b2909a353 complete line facade with full axes/grid guides
    .createLineMark({ id: "linePlot" })
    // DOCS: doc-b9261a4b2909a353 x encoding with quantitative type
    .encodeX({ field: "sourceYear", fieldType: "quantitative" })
    // DOCS: doc-b9261a4b2909a353 y encoding with quantitative type
    .encodeY({ field: "sourceValue", fieldType: "quantitative" })
    // DOCS: doc-b9261a4b2909a353 moved x scale domain out of facade
    .editXScale({ domain: [0, 30] })
    // DOCS: doc-b9261a4b2909a353 moved y scale zero/nice out of facade
    .editYScale({ zero: true, nice: { count: 10 } })
    // DOCS: doc-b9261a4b2909a353 explicit complete guides identical to facade payload
    .createXAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, color: "black", format: ".0f", flush: true, offset: 6.5, alongOffset: 0.5 }
      },
      title: false
    })
    // DOCS: doc-b9261a4b2909a353 complete y axis birth with shared offset
    .createYAxis({
      offset: 4,
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5 },
        labels: { fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625 }
      },
      title: false
    })
    // DOCS: doc-b9261a4b2909a353 focused x axis line editor
    .editXAxis({ line: { color: "#888" } })
    // DOCS: doc-b9261a4b2909a353 focused y axis line editor
    .editYAxis({ line: { color: "#888" } })
    // DOCS: doc-b9261a4b2909a353 moved x tick paint out of complete birth
    .editXAxisTicks({ color: "#888", alongOffset: 0.5 })
    // DOCS: doc-b9261a4b2909a353 moved y tick paint out of complete birth
    .editYAxisTicks({ color: "#888", alongOffset: 0.5 })
    // DOCS: doc-b9261a4b2909a353 source grid paint
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    // DOCS: doc-b9261a4b2909a353 source line paint
    .editLineMark({ stroke: "rgb(128,0,0)", strokeWidth: 1 })
    // DOCS: doc-76573a465e2b6a33 point layer for filled circles, no guides
    .createScatterPlot({ x: { field: "sourceYear" }, y: { field: "sourceValue" }, guides: false })
    // DOCS: doc-76573a465e2b6a33 source point appearance
    .editPointMark({ fill: "rgb(128,0,0)", stroke: false, opacity: 1 })
    // DOCS: doc-76573a465e2b6a33 measured circle radius
    .encodePointRadius({ value: 2.7386127875258306 })
    // DOCS: doc-b9261a4b2909a353 facet by asset over folded data
    .facet({ field: "asset", data: "folded", values: ["bond1", "bond2", "bond3"] })
    // DOCS: doc-b9261a4b2909a353 facet header typography
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    // DOCS: doc-b9261a4b2909a353 outer shared axes, no legend
    .editFacetGuides({ axes: "outer", legend: false })
    // DOCS: doc-b9261a4b2909a353 three columns, plot spacing
    .editCompositionLayout({ columns: 3, gap: 28, spacing: "plot" })
    // DOCS: doc-b9261a4b2909a353 content-anchored header offset
    .editFacetHeaders({ offset: 9.609375, anchor: "content" })
    // DOCS: doc-b9261a4b2909a353 shared top lane
    .editCompositionLayout({ topLane: "shared" })
    // DOCS: doc-b9261a4b2909a353 chart title
    .createTitle({ text: "Three assets", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, alongOffset: -16.5615234375 })
    // DOCS: doc-b9261a4b2909a353 title vertical offset
    .editTitle({ offset: -2.6917343139648438 })
    // DOCS: doc-b9261a4b2909a353 italic caption from first source subtitle string
    .editTitle({ subtitle: "Payoffs over time", subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 });
}