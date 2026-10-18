// DOCS: doc-76573a465e2b6a33, doc-b9261a4b2909a353, doc-d9ca5de321ee55a7
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 650, height: 589, margin: { left: 72, top: 52, right: 78, bottom: 37 } })
    .editCanvas({ background: "#FeFeF8" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1355-original-source-font-widths",
        measurements: [
          { text: "1996", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.265625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "600,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "700,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "800,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "900,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "Total Houses Sold England", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 141.59375 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "8,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "12,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "14,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "16,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "18,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "20,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "22,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "24,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "26,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "28,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "30,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "32,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "34,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "36,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "38,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "40,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "Total Household Goods sold", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 148.921875 },
          { text: "Sales of Houses vs Household Goods", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 234.0625 },
          { text: "Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 58.921875 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "YearEpoch", expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" } })
    .createComputedData({ id: "houses", as: "Houses", expression: { op: "toNumber", operand: { field: "Total Houses Sold England" } } })
    .createComputedData({ id: "goods", as: "Goods", expression: { op: "toNumber", operand: { field: "Total Household Goods sold" } } })
    .createLinePlot({
      x: { field: "YearEpoch", fieldType: "temporal" },
      y: { field: "Houses" },
      guides: false
    })
    .editYScale({ domain: [0, 1500000] })
    .editLineMark({ stroke: "green", opacity: 0.5 })
    .createLineMark({ id: "goods" })
    .editLineMark({ stroke: "blue" })
    .encodeX({ field: "YearEpoch", fieldType: "temporal" })
    .encodeY({ field: "Goods", scale: { id: "goodsY" } })
    .editYScale({ domain: [0, 40000000] })
    .createGrid({
      horizontal: { scale: "y", values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000], color: "#ddd" },
      vertical: { scale: "x", values: [820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000], color: "#ddd" }
    })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [820454400000, 883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, flush: true, format: "%Y" }
        },
        title: { text: "Year", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5 }
      },
      y: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAxes({
      x: false,
      y: [
        {
          id: "yAxis",
          scale: "y",
          position: "left",
          ticksAndLabels: {
            values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000, 1400000, 1500000],
            ticks: { length: 5, alongOffset: -0.5 },
            labels: {
              fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625,
              labelMap: [
                { value: 0, label: "0" },
                { value: 100000, label: "100,000" },
                { value: 200000, label: "200,000" },
                { value: 300000, label: "300,000" },
                { value: 400000, label: "400,000" },
                { value: 500000, label: "500,000" },
                { value: 600000, label: "600,000" },
                { value: 700000, label: "700,000" },
                { value: 800000, label: "800,000" },
                { value: 900000, label: "900,000" },
                { value: 1000000, label: "1,000,000" },
                { value: 1100000, label: "1,100,000" },
                { value: 1200000, label: "1,200,000" },
                { value: 1300000, label: "1,300,000" },
                { value: 1400000, label: "1,400,000" },
                { value: 1500000, label: "1,500,000" }
              ]
            }
          },
          title: { text: "Total Houses Sold England", fontSize: 11, fontFamily: "sans-serif", offset: 59.9091796875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
        }
      ]
    })
    .editYAxisLine({ target: "yAxis", color: "#888" })
    .editYAxisTicks({ target: "yAxis", color: "#888" })
    .editYAxisLabels({ target: "yAxis", color: "black" })
    .editYAxisTitle({ target: "yAxis", color: "green", fontWeight: 700 })
    .createAxes({
      x: false,
      y: [
        {
          id: "goodsAxis",
          scale: "goodsY",
          position: "right",
          ticksAndLabels: {
            values: [0, 2000000, 4000000, 6000000, 8000000, 10000000, 12000000, 14000000, 16000000, 18000000, 20000000, 22000000, 24000000, 26000000, 28000000, 30000000, 32000000, 34000000, 36000000, 38000000, 40000000],
            ticks: { length: 5, alongOffset: -0.5 },
            labels: {
              fontSize: 10, fontFamily: "sans-serif", offset: 7.5, alongOffset: 0.890625,
              labelMap: [
                { value: 0, label: "0" },
                { value: 2000000, label: "2,000,000" },
                { value: 4000000, label: "4,000,000" },
                { value: 6000000, label: "6,000,000" },
                { value: 8000000, label: "8,000,000" },
                { value: 10000000, label: "10,000,000" },
                { value: 12000000, label: "12,000,000" },
                { value: 14000000, label: "14,000,000" },
                { value: 16000000, label: "16,000,000" },
                { value: 18000000, label: "18,000,000" },
                { value: 20000000, label: "20,000,000" },
                { value: 22000000, label: "22,000,000" },
                { value: 24000000, label: "24,000,000" },
                { value: 26000000, label: "26,000,000" },
                { value: 28000000, label: "28,000,000" },
                { value: 30000000, label: "30,000,000" },
                { value: 32000000, label: "32,000,000" },
                { value: 34000000, label: "34,000,000" },
                { value: 36000000, label: "36,000,000" },
                { value: 38000000, label: "38,000,000" },
                { value: 40000000, label: "40,000,000" }
              ]
            }
          },
          title: { text: "Total Household Goods sold", fontSize: 11, fontFamily: "sans-serif", offset: 66.470703125, alongOffset: 0.5, rotation: { value: 90, unit: "degrees" } }
        }
      ]
    })
    .editYAxisLine({ target: "goodsAxis", color: "#888" })
    .editYAxisTicks({ target: "goodsAxis", color: "#888" })
    .editYAxisLabels({ target: "goodsAxis", color: "black" })
    .editYAxisTitle({ target: "goodsAxis", color: "blue", fontWeight: 700 })
    .createTitle({
      text: "Sales of Houses vs Household Goods",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ align: "center", offset: -10.953125 })
    .editTitle({ subtitle: "\nSource: ONS", gap: 3.34375 });
}