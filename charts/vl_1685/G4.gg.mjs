// DOCS: doc-5d974e8fdcb4f774 doc-9f1e9ae3b82a4178 doc-2e8ae49a2e6e5e17 doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 372, height: 242, margin: { left: 58, top: 5, right: 14, bottom: 37 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "monthly", field: "date", unit: "month" })
    .createSummaryData({ id: "agg", groupBy: "date_month", aggregates: [{ field: "count", op: "sum", as: "sum_count" }] })
    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal" },
      y: { field: "sum_count" },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1264982400000], nice: false })
    .editYScale({ domain: [0, 16000] })
    .editAreaMark({ fill: "#4c78a8", opacity: 1 })
    .createXAxis({
        line: { color: "#888" },
        ticksAndLabels: {
          values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true,
            labelMap: [
              { value: 946684800000, label: "2000" },
              { value: 978307200000, label: "" },
              { value: 1009843200000, label: "2002" },
              { value: 1041379200000, label: "" },
              { value: 1072915200000, label: "2004" },
              { value: 1104537600000, label: "" },
              { value: 1136073600000, label: "2006" },
              { value: 1167609600000, label: "" },
              { value: 1199145600000, label: "2008" },
              { value: 1230768000000, label: "" },
              { value: 1262304000000, label: "2010" }
            ]
          }
        },
        title: { text: "date (year-month)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      })
    .createYAxis({
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "," }
        },
        title: { text: "Count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 48 }
      })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}