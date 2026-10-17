// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

const SERIES = [
  "Agriculture", "Business services", "Construction", "Education and Health",
  "Finance", "Government", "Information", "Leisure and hospitality",
  "Manufacturing", "Mining and Extraction", "Other", "Self-employed",
  "Transportation and Utilities", "Wholesale and Retail Trade"
];

const COLORS = [
  "#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252",
  "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94",
  "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194",
  "#ce6dbd", "#de9ed6"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 707, height: 447, margin: { left: 44, top: 10, right: 163, bottom: 37 } })
    .createData({ id: "data", values: data })
    .createTimeUnitData({ id: "months", field: "date", unit: "month" })
    .createSummaryData({
      id: "summary",
      groupBy: ["date_month", "series"],
      aggregates: [{ op: "sum", field: "count", as: "sum_count" }]
    })
    .createSortedData({
      id: "sorted",
      sortBy: [{ field: "series", order: "descending" }]
    })
    .createStackData({ category: "date_month", group: "series", value: "sum_count", mode: "fill" })
    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "sum_count_start", upper: "sum_count_end" },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1264982400000] })
    .editYScale({ domain: [0, 1] })
    .encodeGroup({ field: "series" })
    .encodeColor({ field: "series" })
    .editColorScale({ target: "areaPlot", domain: SERIES, range: COLORS })
    .editAreaMark({ opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "date (year-month)", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y" } }, title: { fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Sum of count", fontSize: 11, fontFamily: "sans-serif", offset: 32 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: {
          labelMap: [
            { value: 0, label: "0" }, { value: 0.1, label: "10" }, { value: 0.2, label: "20" },
            { value: 0.3, label: "30" }, { value: 0.4, label: "40" }, { value: 0.5, label: "50" },
            { value: 0.6, label: "60" }, { value: 0.7, label: "70" }, { value: 0.8, label: "80" },
            { value: 0.9, label: "90" }, { value: 1, label: "100" }
          ]
        }
      },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Series",
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" }
    })
    .editLegend({
      titleStyle: { fontWeight: 700 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
      border: { background: "#ffffff", lineWidth: 0 }
    });
}