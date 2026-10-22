import {chart} from "ggaction";
import data from "./data.json";

export function buildChart(){
  return chart()
    // DOCS: doc-b9261a4b2909a353 (createCanvas plot/margin/plotBorder as canvas context)
    .createCanvas({
      plot: { width: 600, height: 80 },
      margin: { left: 28, right: 9, top: 68, bottom: 23 },
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    // DOCS: doc-b9261a4b2909a353 (applyTextMetrics supplies exact source measured glyph widths)
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0585-original-flush-endpoints",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }
        ]
      }
    })
    // DOCS: doc-b9261a4b2909a353 (createData registers imported raw rows)
    .createData({ values: data })
    // DOCS: doc-b9261a4b2909a353 (createFoldData folds wages/asset1/asset2 with object as aliases)
    .createFoldData({
      id: "folded",
      fields: ["wages", "asset1", "asset2"],
      as: { key: "asset", value: "value" }
    })
    // DOCS: doc-b9261a4b2909a353 (createComputedData toNumber for numeric year)
    .createComputedData({
      id: "numericYear",
      as: "sourceYear",
      expression: { op: "toNumber", operand: { field: "year" } }
    })
    // DOCS: doc-b9261a4b2909a353 (createComputedData if maps empty string to 0 before gt filter)
    .createComputedData({
      id: "numericValue",
      as: "sourceValue",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    // DOCS: doc-b9261a4b2909a353 (filterData predicate gt 0 preserves datum.value>0)
    .filterData({
      id: "originalPositive",
      field: "sourceValue",
      predicate: { op: "gt", value: 0 }
    })
    // DOCS: doc-b9261a4b2909a353 (createLinePlot complete guides with axes/grid/legend:false)
    .createLinePlot({
      x: { field: "sourceYear" },
      y: { field: "sourceValue" },
      guides: false
    })
    // DOCS: doc-b9261a4b2909a353 (editXScale moves x scale out of createLinePlot)
    .editXScale({ domain: [0, 30] })
    // DOCS: doc-b9261a4b2909a353 (editYScale moves y scale out of createLinePlot)
    .editYScale({ zero: true, nice: { count: 10 } })
    // DOCS: doc-b9261a4b2909a353 (createGuides explicit axes/grid/legend payload)
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, color: "black", format: ".0f", flush: true, offset: 6.5, alongOffset: 0.5 }
        },
        title: false
      },
      y: {
        offset: 4,
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, color: "black", format: ".0f", offset: 6.5, alongOffset: 0.890625 }
        },
        title: false
      }
    })
    // DOCS: doc-b9261a4b2909a353 (createGrid horizontal/vertical colors)
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    // DOCS: doc-b9261a4b2909a353 (editLineMark strokeWidth 1)
    .editLineMark({ strokeWidth: 1 })
    // DOCS: doc-b9261a4b2909a353 (encodeColor nominal asset with categorical domain/range)
    .encodeColor({
      field: "asset",
      fieldType: "nominal",
      scale: { domain: ["asset1", "asset2", "wages"], range: ["green", "blue", "rgb(128,0,0)"] }
    })
    // DOCS: doc-b9261a4b2909a353 (createScatterPlot point layer with object x/y and guides:false)
    .createScatterPlot({
      x: { field: "sourceYear" },
      y: { field: "sourceValue" },
      guides: false
    })
    // DOCS: doc-b9261a4b2909a353 (editPointMark stroke:false opacity:1)
    .editPointMark({ stroke: false, opacity: 1 })
    // DOCS: doc-b9261a4b2909a353 (encodeColor on point layer with same categorical scale)
    .encodeColor({
      field: "asset",
      fieldType: "nominal",
      scale: { domain: ["asset1", "asset2", "wages"], range: ["green", "blue", "rgb(128,0,0)"] }
    })
    // DOCS: doc-b9261a4b2909a353 (encodePointRadius constant radius)
    .encodePointRadius({ value: 2.7386127875258306 })
    // DOCS: doc-b9261a4b2909a353 (facet by asset with ordered values on folded data)
    .facet({ field: "asset", data: "folded", values: ["asset1", "asset2", "wages"] })
    // DOCS: doc-b9261a4b2909a353 (editFacetHeaders source typography)
    .editFacetHeaders({ fontSize: 10, fontWeight: 400, color: "black" })
    // DOCS: doc-b9261a4b2909a353 (editFacetGuides outer axes, no legend)
    .editFacetGuides({ axes: "outer", legend: false })
    // DOCS: doc-b9261a4b2909a353 (editCompositionLayout columns/gap/spacing plot)
    .editCompositionLayout({ columns: 1, gap: 45, spacing: "plot" })
    // DOCS: doc-b9261a4b2909a353 (editFacetHeaders content anchor offset)
    .editFacetHeaders({ offset: 9.609375, anchor: "content" })
    // DOCS: doc-b9261a4b2909a353 (editCompositionLayout shared top lane)
    .editCompositionLayout({ topLane: "shared" })
    // DOCS: doc-b9261a4b2909a353 (createTitle with measured alongOffset)
    .createTitle({
      text: "Assets and wages",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -22.123046875
    })
    // DOCS: doc-b9261a4b2909a353 (editTitle measured offset)
    .editTitle({ offset: -2.953125 })
    // DOCS: doc-b9261a4b2909a353 (editTitle adds italic subtitle with measured gap)
    .editTitle({
      subtitle: "Correlation",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    });
}