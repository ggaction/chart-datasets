// DOCS: doc-8a4f6f06e0d37d5e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

const yTicks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000,
  100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
  1000000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000,
  10000000
];
const yLabelMap = [
  { value: 2, label: "" },
  { value: 3, label: "" },
  { value: 4, label: "" },
  { value: 5, label: "" },
  { value: 6, label: "" },
  { value: 7, label: "" },
  { value: 8, label: "" },
  { value: 9, label: "" },
  { value: 20, label: "" },
  { value: 30, label: "" },
  { value: 40, label: "" },
  { value: 50, label: "" },
  { value: 60, label: "" },
  { value: 70, label: "" },
  { value: 80, label: "" },
  { value: 90, label: "" },
  { value: 200, label: "" },
  { value: 300, label: "" },
  { value: 400, label: "" },
  { value: 500, label: "" },
  { value: 600, label: "" },
  { value: 700, label: "" },
  { value: 800, label: "" },
  { value: 900, label: "" },
  { value: 2000, label: "" },
  { value: 3000, label: "" },
  { value: 4000, label: "" },
  { value: 5000, label: "" },
  { value: 6000, label: "" },
  { value: 7000, label: "" },
  { value: 8000, label: "" },
  { value: 9000, label: "" },
  { value: 20000, label: "" },
  { value: 30000, label: "" },
  { value: 40000, label: "" },
  { value: 50000, label: "" },
  { value: 60000, label: "" },
  { value: 70000, label: "" },
  { value: 80000, label: "" },
  { value: 90000, label: "" },
  { value: 200000, label: "" },
  { value: 300000, label: "" },
  { value: 400000, label: "" },
  { value: 500000, label: "" },
  { value: 600000, label: "" },
  { value: 700000, label: "" },
  { value: 800000, label: "" },
  { value: 900000, label: "" },
  { value: 2000000, label: "" },
  { value: 3000000, label: "" },
  { value: 4000000, label: "" },
  { value: 5000000, label: "" },
  { value: 6000000, label: "" },
  { value: 7000000, label: "" },
  { value: 8000000, label: "" },
  { value: 9000000, label: "" }
];

const xTicks = [
  -6626966400000, -5995814400000, -5364662400000, -4733596800000,
  -4102444800000, -3471292800000, -2840140800000, -2208988800000,
  -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 485, height: 347, margin: { top: 10, right: 7, bottom: 37, left: 78 } })
    .createData({ values: data })
    .createSummaryData({
      id: "sourceMissing",
      groupBy: ["Year Acquired", "Statistic"],
      aggregates: [{ op: "min", field: "stat", as: "stat" }],
      empty: "null"
    })
    .createSortedData({
      id: "yearSorted",
      sortBy: [{ field: "Year Acquired", order: "ascending" }]
    })
    .createComputedData({
      id: "missingFlag",
      as: "missingFlag",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "stat" }, right: { constant: null } },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createWindowData({
      id: "sourceRuns",
      operations: [{ op: "cumulativeSum", field: "missingFlag", as: "sourceSegment" }]
    })
    .filterData({ id: "paintedStat", field: "missingFlag", oneOf: [0] })
    .createLinePlot({
      x: { field: "Year Acquired", fieldType: "temporal" },
      y: { field: "stat", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "sourceSegment", fieldType: "nominal" })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [-6847804800000, 1546300800000] })
    .editYScale({ type: "log", domain: [1, 10000000] })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: xTicks,
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
        },
        title: { text: "Year Acquired", fontSize: 11, fontWeight: 700, offset: 27 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: yTicks,
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 6.5, labelMap: yLabelMap }
        },
        title: { text: "stat", fontSize: 11, fontWeight: 700, offset: 60, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}