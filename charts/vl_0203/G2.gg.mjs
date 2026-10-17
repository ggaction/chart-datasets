// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-2e8ae49a2e6e5e17, doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 372, height: 259, margin: { left: 91, top: 27, right: 81, bottom: 32 } })
    .createData({ values: data })
    .filterData({ id: "validRows", field: "coalConsumption", predicate: { op: "neq", value: "NA" } })
    .createComputedData({ id: "numCoal", as: "coalNum", expression: { op: "toNumber", operand: { field: "coalConsumption" } } })
    .createSummaryData({ id: "totals", groupBy: ["region", "year"], aggregates: [{ field: "coalNum", op: "sum", as: "total" }] })
    .createSortedData({ id: "sourceSeries", sortBy: [{ field: "region", order: "descending" }] })
    .createStackData({ category: "year", group: "region", value: "total" })
    .createWindowData({ id: "yearTotals", partitionBy: ["year"], operations: [{ op: "movingSum", field: "total", as: "yearTotal", frame: { preceding: 3, following: 3 } }] })
    .createSortedData({ id: "totalsDescending", sortBy: [{ field: "yearTotal", order: "descending" }] })
    .createWindowData({ id: "globalIndices", operations: [{ op: "rowNumber", as: "globalIndex" }] })
    .createComputedData({ id: "maxSeed", as: "maxSeed", expression: { op: "if", condition: { op: "eq", left: { field: "globalIndex" }, right: { constant: 1 } }, then: { field: "yearTotal" }, else: { constant: 0 } } })
    .createWindowData({ id: "globalMaximum", operations: [{ op: "cumulativeSum", field: "maxSeed", as: "globalMaxTotal" }] })
    .createComputedData({ id: "silhouette_start", as: "silhouette_start", expression: { op: "add", left: { field: "total_start" }, right: { op: "divide", left: { op: "subtract", left: { field: "globalMaxTotal" }, right: { field: "yearTotal" } }, right: { constant: 2 } } } })
    .createComputedData({ id: "silhouette_end", as: "silhouette_end", expression: { op: "add", left: { field: "total_end" }, right: { op: "divide", left: { op: "subtract", left: { field: "globalMaxTotal" }, right: { field: "yearTotal" } }, right: { constant: 2 } } } })
    .createSortedData({ id: "sourcePaintOrder", sortBy: [{ field: "year", order: "ascending" }, { field: "region", order: "ascending" }] })
    .createAreaPlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { lower: "silhouette_start", upper: "silhouette_end" },
      guides: false
    })
    .editXScale({ domain: [-157766400000, 1451606400000], nice: false })
    .editYScale({ domain: [0, 4000000000] })
    .encodeGroup({ field: "region" })
    .encodeColor({ field: "region", fieldType: "nominal", scale: { domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] } })
    .editAreaMark({ opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-coal-axis-glyphs",
        measurements: [
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.24999237060547 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "1,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "2,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "3,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "4,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 }
        ]
      }
    })
    .createAxes({
      x: {
        line: false,
        ticksAndLabels: { values: [0, 315532800000, 631152000000, 946684800000, 1262304000000], ticks: { length: 0 }, labels: { format: "%Y", fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 2 } },
        title: { text: "year (year)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 22.578125 }
      },
      y: {
        line: {},
        ticksAndLabels: { count: 5, labels: { format: ",.0f", fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, offset: 7 } },
        title: { text: "total", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 79.37109375, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .createTitle({ text: "Total coal consumption by region, 1965-2016", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, offset: -11 })
    .editTitle({ align: "center" });
}