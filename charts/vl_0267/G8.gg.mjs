// DOCS: doc-76573a465e2b6a33, doc-b11b4627b143730d, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

const X_DOMAIN = [946684800000, 1262304000000];
const YEAR_TICKS = [
  946684800000, 1009843200000, 1072915200000,
  1136073600000, 1199145600000, 1262304000000
];
const SYMBOLS = ["AAPL", "AMZN", "GOOG", "IBM", "MSFT"];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 317,
      height: 245,
      margin: { left: 44, top: 8, right: 73, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "priceNum",
      as: "priceNum",
      expression: { op: "toNumber", operand: { field: "price" } }
    })
    .createTimeUnitData({
      id: "yearly",
      field: "date",
      unit: "year"
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["symbol", "date_year"],
      aggregates: [{ field: "priceNum", op: "mean", as: "mean_price" }]
    })
    .createLinePlot({
      x: { field: "date_year", fieldType: "temporal" },
      y: { field: "mean_price", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: X_DOMAIN })
    .editYScale({ target: "linePlot", domain: [0, 550] })
    .encodeColor({ target: "linePlot", field: "symbol" })
    .editColorScale({ target: "linePlot", domain: SYMBOLS, palette: "tableau10" })
    .createScatterPlot({
      x: { field: "date_year", fieldType: "temporal" },
      y: { field: "mean_price", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: X_DOMAIN })
    .editYScale({ target: "scatterPlot", domain: [0, 550] })
    .encodeColor({ target: "scatterPlot", field: "symbol" })
    .editColorScale({ target: "scatterPlot", domain: SYMBOLS, palette: "tableau10" })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: YEAR_TICKS,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          flush: true
        }
      },
      title: {
        text: "date (year)",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: "%Y" }
      },
      title: { fontWeight: 700, color: "black" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Mean of price",
        fontSize: 11,
        offset: 32.6845703125
      }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700, color: "black" }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegendTitle({ fontWeight: 700 });
}