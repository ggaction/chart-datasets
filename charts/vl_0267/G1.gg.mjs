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
      x: {
        field: "date_year",
        fieldType: "temporal",
        scale: { domain: X_DOMAIN }
      },
      y: {
        field: "mean_price",
        fieldType: "quantitative",
        scale: { domain: [0, 550] }
      },
      guides: false
    })
    .encodeColor({
      target: "linePlot",
      field: "symbol",
      scale: { domain: SYMBOLS, palette: "tableau10" }
    })
    .createScatterPlot({
      x: {
        field: "date_year",
        fieldType: "temporal",
        scale: { domain: X_DOMAIN }
      },
      y: {
        field: "mean_price",
        fieldType: "quantitative",
        scale: { domain: [0, 550] }
      },
      guides: false
    })
    .encodeColor({
      target: "scatterPlot",
      field: "symbol",
      scale: { domain: SYMBOLS, palette: "tableau10" }
    })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: YEAR_TICKS,
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: "%Y",
              flush: true
            }
          },
          title: {
            text: "date (year)",
            fontSize: 11,
            fontWeight: 700,
            offset: 28,
            color: "black"
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: {
            text: "Mean of price",
            fontSize: 11,
            fontWeight: 700,
            offset: 32.6845703125,
            color: "black"
          }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        position: "right",
        title: "symbol",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        channels: ["color"]
      }
    });
}