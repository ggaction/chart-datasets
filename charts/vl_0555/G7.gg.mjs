// DOCS: doc-8f7efd41b2186a84, doc-bedf05337affd6f4, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 549, height: 457, margin: { left: 44, top: 72, right: 5, bottom: 35 } })
    .editCanvas({ background: "white" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0555-original-source-font-widths",
        measurements: [
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2001", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2002", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2003", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2004", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2005", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2006", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2007", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2008", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2009", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2010", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2011", width: 21.515625 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2012", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2013", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2014", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2015", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2016", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2017", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2018", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2019", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2020", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2021", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2022", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "0", width: 5.5625 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "10", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "20", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "30", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "40", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "50", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "60", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "70", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "80", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "90", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "100", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "110", width: 15.953125 },
          { fontFamily: "sans-serif", fontSize: 11, fontWeight: 400, fontStyle: "normal", text: "Billions USD", width: 61.140625 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "26", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "27", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "28", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "29", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "16", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "19", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "46", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "64", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "84", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "73", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "95", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "94", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "70", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "58", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "53", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "52", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 200, fontStyle: "normal", text: "50", width: 11.125 },
          { fontFamily: "sans-serif", fontSize: 16, fontWeight: 700, fontStyle: "normal", text: "Nokia's Decline", width: 117.640625 },
          { fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", text: "Revenue, Billions of USD, 2022 Prices", width: 204.78125 },
          { fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", text: "Data: Nokia", width: 62.703125 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "revenue_real", field: "Series", oneOf: ["Real_Revenue"] })
    .createComputedData({
      id: "revenue_billion",
      as: "divRevenue",
      expression: { op: "divide", left: { field: "Revenue" }, right: { constant: 1000000000 } }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "divRevenue" },
      guides: false
    })
    .editXScale({ domain: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022], paddingInner: 0.09, paddingOuter: 0 })
    .editYScale({ domain: [0, 110] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .createBarMark({ id: "layer_1", fill: "rgb(128,0,0)" })
    .encodeBarWidth({ target: "layer_1", band: 1 })
    .createTextMark({ id: "layer_2", source: "layer_1", fontSize: 10 })
    .encodeText({ target: "layer_2", field: "divRevenue", format: ".0f" })
    .editTextMark({ target: "layer_2", fontWeight: 200 })
    .editTextMark({ target: "layer_2", fill: "rgb(100,0,0)", dy: -10 })
    .editTextMark({ target: "layer_2", align: "center", baseline: "middle" })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        values: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 90, unit: "degrees" },
          align: "left",
          alongOffset: -0.5
        }
      }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 6.5,
          alongOffset: 0.890625,
          labelMap: [
            { value: 0, label: " 0" },
            { value: 10, label: "10" },
            { value: 20, label: "20" },
            { value: 30, label: "30" },
            { value: 40, label: "40" },
            { value: 50, label: "50" },
            { value: 60, label: "60" },
            { value: 70, label: "70" },
            { value: 80, label: "80" },
            { value: 90, label: "90" },
            { value: 100, label: "100" },
            { value: 110, label: "110" }
          ]
        }
      },
      title: {
        text: "Billions USD",
        fontSize: 11,
        fontWeight: 400,
        offset: 32.1064453125,
        alongOffset: 0.5,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createTitle({ text: "Nokia's Decline", titleStyle: { fontSize: 16, fontWeight: 700 }, subtitleStyle: { fontSize: 12, fontStyle: "italic" } })
    .editTitle({ titleStyle: { color: "black" }, subtitleStyle: { color: "black" } })
    .editTitle({ offset: -10.25, alongOffset: -38.6845703125, gap: 2.109375 })
    .editTitle({ subtitle: "Revenue, Billions of USD, 2022 Prices\nData: Nokia\n" });
}