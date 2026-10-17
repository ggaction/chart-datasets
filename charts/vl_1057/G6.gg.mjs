// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 630,
      height: 347,
      margin: { left: 44, top: 10, right: 86, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dateMs",
      as: "dateMs",
      expression: { op: "parseTime", operand: { field: "date" }, format: "auto" }
    })
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createLinePlot({
      x: {
        field: "dateMs",
        fieldType: "temporal",
        temporalUnit: "timestamp",
      },
      y: {
        field: "priceNum",
        fieldType: "quantitative",
      },
      guides: false
    })
    .editXScale({ domain: [946684800000, 1267401600000] })
    .editYScale({ domain: [0, 800] })
    .encodeColor({ field: "symbol" })
    .editColorScale({
      domain: ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"],
      range: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    })
    .encodeGroup({ field: "symbol" })
    .editLineMark({ strokeWidth: 1, curve: "linear", opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-1057-axis-widths",
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
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "300", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "700", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
          { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }
        ]
      }
    })
    .createXAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Time", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: "%Y" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createYAxis({
      line: { lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Count", fontSize: 11, fontFamily: "sans-serif" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black", fontWeight: 700 }
    })
    .createGrid({
      horizontal: { values: [0, 100, 200, 300, 400, 500, 600, 700, 800] },
      vertical: { values: [946684800000, 978307200000, 1009843200000, 1041379200000, 1072915200000, 1104537600000, 1136073600000, 1167609600000, 1199145600000, 1230768000000, 1262304000000] }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Time Series",
        position: "right",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
      }
    });
}