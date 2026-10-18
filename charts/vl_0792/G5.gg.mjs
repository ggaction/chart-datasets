import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b9261a4b2909a353, doc-76573a465e2b6a33, doc-203db321ccc2e60f

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 374,
      margin: { left: 41, top: 52, right: 15, bottom: 22 }
    })
    .editCanvas({ background: "#afd1e7" })
    .createData({ values: data })
    .createComputedData({
      id: "timestamp",
      as: "timestamp",
      expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" }
    })
    .filterData({
      id: "rateRange",
      field: "timestamp",
      range: { min: 1293840000000, max: 1704067200000, maxInclusive: false }
    })
    .createComputedData({
      id: "rates",
      as: "rate",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "timestamp",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "rate",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1293840000000, 1672876800000], nice: false })
    .editYScale({ domain: [0, 4.5], nice: false })
    .editLineMark({ stroke: "#023549", strokeWidth: 2, curve: "step" })
    .createXAxis({
      ticksAndLabels: {
        values: [
          1293840000000, 1301616000000, 1309478400000, 1317427200000,
          1325376000000, 1333238400000, 1341100800000, 1349049600000,
          1356998400000, 1364774400000, 1372636800000, 1380585600000,
          1388534400000, 1396310400000, 1404172800000, 1412121600000,
          1420070400000, 1427846400000, 1435708800000, 1443657600000,
          1451606400000, 1459468800000, 1467331200000, 1475280000000,
          1483228800000, 1491004800000, 1498867200000, 1506816000000,
          1514764800000, 1522540800000, 1530403200000, 1538352000000,
          1546300800000, 1554076800000, 1561939200000, 1569888000000,
          1577836800000, 1585699200000, 1593561600000, 1601510400000,
          1609459200000, 1617235200000, 1625097600000, 1633046400000,
          1640995200000, 1648771200000, 1656633600000, 1664582400000,
          1672531200000
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 5.5,
          alongOffset: 0.5,
          flush: true,
          labelMap: [
            { value: 1293840000000, label: "2011" },
            { value: 1301616000000, label: "" },
            { value: 1309478400000, label: "July" },
            { value: 1317427200000, label: "" },
            { value: 1325376000000, label: "2012" },
            { value: 1333238400000, label: "" },
            { value: 1341100800000, label: "July" },
            { value: 1349049600000, label: "" },
            { value: 1356998400000, label: "2013" },
            { value: 1364774400000, label: "" },
            { value: 1372636800000, label: "July" },
            { value: 1380585600000, label: "" },
            { value: 1388534400000, label: "2014" },
            { value: 1396310400000, label: "" },
            { value: 1404172800000, label: "July" },
            { value: 1412121600000, label: "" },
            { value: 1420070400000, label: "2015" },
            { value: 1427846400000, label: "" },
            { value: 1435708800000, label: "July" },
            { value: 1443657600000, label: "" },
            { value: 1451606400000, label: "2016" },
            { value: 1459468800000, label: "" },
            { value: 1467331200000, label: "July" },
            { value: 1475280000000, label: "" },
            { value: 1483228800000, label: "2017" },
            { value: 1491004800000, label: "" },
            { value: 1498867200000, label: "July" },
            { value: 1506816000000, label: "" },
            { value: 1514764800000, label: "2018" },
            { value: 1522540800000, label: "" },
            { value: 1530403200000, label: "July" },
            { value: 1538352000000, label: "" },
            { value: 1546300800000, label: "2019" },
            { value: 1554076800000, label: "" },
            { value: 1561939200000, label: "July" },
            { value: 1569888000000, label: "" },
            { value: 1577836800000, label: "2020" },
            { value: 1585699200000, label: "" },
            { value: 1593561600000, label: "July" },
            { value: 1601510400000, label: "" },
            { value: 1609459200000, label: "2021" },
            { value: 1617235200000, label: "" },
            { value: 1625097600000, label: "July" },
            { value: 1633046400000, label: "" },
            { value: 1640995200000, label: "2022" },
            { value: 1648771200000, label: "" },
            { value: 1656633600000, label: "July" },
            { value: 1664582400000, label: "" },
            { value: 1672531200000, label: "2023" }
          ]
        }
      },
      title: false
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 6.5,
          alongOffset: 0.890625
        }
      },
      title: {
        text: "Federal Reserve Effective Funds Rate(%)",
        fontSize: 11,
        rotation: { value: -90, unit: "degrees" },
        offset: 29.3232421875,
        alongOffset: 0.5
      }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black", format: ".1f" }
    })
    .editYAxisTitle({
      color: "black",
      fontWeight: 700
    })
    .createTitle({
      text: "Federal reserve Effective Funds Rate (2010-2022)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -10.953125, alongOffset: -35.9013671875, gap: 3.34375 })
    .editTitle({ subtitle: "Source: FRED.\n" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0792-original-source-font-widths",
        measurements: [
          { text: "2011", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.515625 },
          { text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.796875 },
          { text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2013", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2017", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2019", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2023", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "2.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "2.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "3.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "4.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "4.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "Federal Reserve Effective Funds Rate(%)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 213.96875 },
          { text: "Federal reserve Effective Funds Rate (2010-2022)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 302.765625 },
          { text: "Source: FRED.", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 67.25 }
        ]
      }
    });
}