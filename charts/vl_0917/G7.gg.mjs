// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-80198e379a34e5ab, doc-76573a465e2b6a33, doc-48c72317a1a99e17, doc-7184b02978bdf5d1, doc-7f2c254224fc4908, doc-192cf39d411b64ec
import { chart } from "ggaction";
import data from "./data.json";

const X_DOMAIN = [788918400000, 1641600000000];
const X_TICKS = [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
const Y_TICKS = [0, 50000, 100000, 150000, 200000, 250000, 300000, 350000, 400000, 450000, 500000, 550000];
const REGION_DOMAIN = ["London", "South East", "East of England", "South West", "West Midlands", "East Midlands", "North West", "Yorkshire and the Humber", "North East"];
const REGION_RANGE = ["rgb(23, 12, 59)", "rgb(66, 10, 104)", "rgb(107, 23, 110)", "rgb(147, 38, 103)", "rgb(187, 55, 85)", "rgb(221, 81, 58)", "rgb(243, 119, 26)", "rgb(252, 165, 10)", "rgb(246, 214, 69)"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 517, height: 377, margin: { left: 64, top: 40, right: 153, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "dateMs", as: "DateMs", expression: { op: "parseTime", operand: { field: "Date" }, format: "%m/%d/%Y" } })
    .createComputedData({ id: "priceNum", as: "Price", expression: { op: "toNumber", operand: { field: "Average Price" } } })
    .createComputedData({
      id: "sourceRegionOrder",
      as: "SourceRegionOrder",
      expression: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "North East" } }, then: { constant: 0 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "Yorkshire and The Humber" } }, then: { constant: 1 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "North West" } }, then: { constant: 2 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "East Midlands" } }, then: { constant: 3 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "West Midlands" } }, then: { constant: 4 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "South West" } }, then: { constant: 5 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "East of England" } }, then: { constant: 6 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "South East" } }, then: { constant: 7 }, else: { op: "if", condition: { op: "eq", left: { field: "Region" }, right: { constant: "London" } }, then: { constant: 8 }, else: { constant: 9 } } } } } } } } } }
    })
    .createSortedData({ id: "sourcePainterOrder", sortBy: [{ field: "SourceRegionOrder", order: "ascending" }] })
    .createScatterPlot({
      x: { field: "DateMs", fieldType: "temporal" },
      y: { field: "Price", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "time", domain: X_DOMAIN, nice: false })
    .editYScale({ domain: [0, 550000] })
    .encodeColor({ field: "Region", fieldType: "nominal" })
    .editColorScale({ target: "scatterPlot", domain: REGION_DOMAIN, range: REGION_RANGE })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editPointMark({ opacity: 0.7 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-glyphs", measurements: [{ text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "350,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "450,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "550,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 }, { text: "London", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 33.375 }, { text: "South East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 48.921875 }, { text: "East of England", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 70.609375 }, { text: "South West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.515625 }, { text: "West Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 65.40625 }, { text: "East Midlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.8125 }, { text: "North West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 49.84375 }, { text: "Yorkshire and the Humber", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 115.8125 }, { text: "North East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.25 }, { text: "Region", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 37.28125 }, { text: "Average house prices across England", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 235.0625 }, { text: "Average price and volume of all property types for each region in England. Source: HM Land Registery", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 454.951171875 }] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Average Price", fontSize: 11, offset: 49 }
    })
    .editXAxisLabels({ format: "%Y" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["color"],
        position: "right",
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: Math.sqrt(40) / 2 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.7 } })
    .createTitle({
      text: "Average house prices across England",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ alongOffset: -58.15 })
    .editTitle({ subtitle: "Average price and volume of all property types for each region in England. Source: HM Land Registery", gap: 1, offset: -4 });
}