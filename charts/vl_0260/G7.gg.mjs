// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69
// Layout override: source-right legend with default 18px item pitch needs outer height 280 (bottom margin enlarged +75 equally); plot 300x200 and other margins frozen to contract.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 469, height: 284, margin: { left: 6, top: 5, right: 163, bottom: 79 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "monthly", field: "date", unit: "month" })
    .createSummaryData({ id: "agg", groupBy: ["date_month", "series"], aggregates: [{ field: "count", op: "sum", as: "sum_count" }] })
    .createSortedData({ id: "sorted", sortBy: [{ field: "series", order: "descending" }] })
    .createStackData({ category: "date_month", group: "series", value: "sum_count" })
    .createWindowData({ id: "windowed", partitionBy: ["date_month"], operations: [{ op: "movingSum", field: "sum_count", as: "monthlyTotal", frame: { preceding: 13, following: 13 } }] })
    .createSortedData({ id: "sortedTotal", sortBy: [{ field: "monthlyTotal", order: "descending" }] })
    .createWindowData({ id: "globalRow", operations: [{ op: "rowNumber", as: "globalIndex" }] })
    .createComputedData({ id: "maxSeed", as: "maxSeed", expression: { op: "if", condition: { op: "eq", left: { field: "globalIndex" }, right: { constant: 1 } }, then: { field: "monthlyTotal" }, else: { constant: 0 } } })
    .createWindowData({ id: "globalMax", operations: [{ op: "cumulativeSum", field: "maxSeed", as: "globalMaxTotal" }] })
    .createComputedData({ id: "lowerCalc", as: "derivedLower", expression: { op: "add", left: { field: "sum_count_start" }, right: { op: "divide", left: { op: "subtract", left: { field: "globalMaxTotal" }, right: { field: "monthlyTotal" } }, right: { constant: 2 } } } })
    .createComputedData({ id: "upperCalc", as: "derivedUpper", expression: { op: "add", left: { field: "sum_count_end" }, right: { op: "divide", left: { op: "subtract", left: { field: "globalMaxTotal" }, right: { field: "monthlyTotal" } }, right: { constant: 2 } } } })
    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "derivedLower", upper: "derivedUpper" },
      guides: false
    })
    .encodeGroup({ field: "series" })
    .encodeColor({ field: "series" })
    .editColorScale({ domain: ["Agriculture", "Business services", "Construction", "Education and Health", "Finance", "Government", "Information", "Leisure and hospitality", "Manufacturing", "Mining and Extraction", "Other", "Self-employed", "Transportation and Utilities", "Wholesale and Retail Trade"], palette: "category20b" })
    .editAreaMark({ opacity: 1 })
    .editXScale({ type: "time", domain: [946684800000, 1264982400000] })
    .editYScale({ domain: [0, 16000] })
    .createXAxis({
      line: false,
      ticksAndLabels: {
        values: [946684800000, 978307200000, 1009843200000, 1041292800000, 1072828800000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000],
        ticks: { length: 0 },
        labels: {
          format: "%Y",
          fontSize: 10,
          offset: 2,
          flush: true,
          labelMap: [
            { value: 978307200000, label: "" },
            { value: 1041292800000, label: "" },
            { value: 1104537600000, label: "" },
            { value: 1167609600000, label: "" },
            { value: 1230768000000, label: "" }
          ]
        }
      },
      title: { text: "date (year-month)", fontSize: 11, offset: 23 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: {
        horizontal: false,
        vertical: {
          color: "#ddd",
          lineWidth: 1,
          values: [946684800000, 978307200000, 1009843200000, 1041292800000, 1072828800000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000]
        }
      },
      legend: false
    })
    .createLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    });
}