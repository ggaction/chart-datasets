// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 570, height: 447, margin: { left: 58, top: 10, right: 12, bottom: 37 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "ym", field: "date", unit: "month" })
    .createSummaryData({
      id: "agg",
      groupBy: "date_month",
      aggregates: [{ field: "count", op: "sum", as: "sum_count" }]
    })
    .createAreaPlot({
      x: { field: "date_month", fieldType: "temporal" },
      y: { field: "sum_count" },
      guides: false
    })
    .editXScale({ target: "areaPlot", type: "time", domain: [946684800000, 1264982400000] })
    .editYScale({ target: "areaPlot", domain: [0, 16000] })
    .editAreaMark({ fill: "#4c78a8", opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-1069-axis-widths",
        measurements: [
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2001", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2003", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2009", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
          { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "14,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 },
          { text: "16,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, flush: true }, values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000] },
      title: { text: "date (year-month)", fontSize: 11, offset: 28 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y", color: "black" } }, title: { fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 }, values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000] },
      title: { text: "count", fontSize: 11 }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f", color: "black" } }, title: { fontWeight: 700 } })
    .createGrid({
      horizontal: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000] },
      vertical: { values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000] }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}