// DOCS: doc-5d974e8fdcb4f774
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 721, height: 447, margin: { left: 58, top: 10, right: 163, bottom: 37 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "month", field: "date", unit: "month" })
    .createSummaryData({
      id: "summary_month",
      groupBy: ["date_month", "series"],
      aggregates: [{ field: "count", op: "sum", as: "sum_count" }]
    })
    .createSortedData({ id: "seriesStackOrder", sortBy: [{ field: "series", order: "descending" }] })    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal" },
      y: { field: "sum_count" },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1264982400000], nice: false })
    .editYScale({ domain: [0, 16000] })
    .encodeGroup({ field: "series" })
    .encodeColor({
      field: "series",
      layout: "stack"
    })
    .editColorScale({ domain: ["Agriculture", "Business services", "Construction", "Education and Health", "Finance", "Government", "Information", "Leisure and hospitality", "Manufacturing", "Mining and Extraction", "Other", "Self-employed", "Transportation and Utilities", "Wholesale and Retail Trade"], range: ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"] })
    .editAreaMark({ opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y", flush: true }
        },
        title: { text: "date (year-month)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: ",.0f" }
        },
        title: { text: "Sum of count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 46 }
      }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        title: "Series",
        position: "right",
        direction: "vertical",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        border: { background: "#ffffff" }
      }
    });
}