// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

// NOTE: createTitle requires measured text, offset:-13, alongOffset:-36 and full source
// titleStyle simultaneously (4-key measured requirement); no authoringBudget was supplied.

const xTicks = [
  1420070400000, 1427846400000, 1435708800000, 1443571200000,
  1451606400000, 1459468800000, 1467331200000, 1475280000000,
  1483228800000, 1491004800000, 1498867200000, 1506729600000,
  1514764800000, 1522540800000, 1530403200000, 1538265600000,
  1546300800000, 1554076800000, 1561939200000, 1569801600000,
  1577836800000, 1585699200000, 1593561600000, 1601424000000,
  1609459200000, 1617235200000, 1625097600000, 1632960000000,
  1640995200000, 1648771200000, 1656633600000, 1664496000000
];
const xLabels = [
  { value: 1420070400000, label: "2015" }, { value: 1427846400000, label: "April" }, { value: 1435708800000, label: "July" }, { value: 1443571200000, label: "October" },
  { value: 1451606400000, label: "2016" }, { value: 1459468800000, label: "April" }, { value: 1467331200000, label: "July" }, { value: 1475280000000, label: "October" },
  { value: 1483228800000, label: "2017" }, { value: 1491004800000, label: "April" }, { value: 1498867200000, label: "July" }, { value: 1506729600000, label: "October" },
  { value: 1514764800000, label: "2018" }, { value: 1522540800000, label: "April" }, { value: 1530403200000, label: "July" }, { value: 1538265600000, label: "October" },
  { value: 1546300800000, label: "2019" }, { value: 1554076800000, label: "April" }, { value: 1561939200000, label: "July" }, { value: 1569801600000, label: "October" },
  { value: 1577836800000, label: "2020" }, { value: 1585699200000, label: "April" }, { value: 1593561600000, label: "July" }, { value: 1601424000000, label: "October" },
  { value: 1609459200000, label: "2021" }, { value: 1617235200000, label: "April" }, { value: 1625097600000, label: "July" }, { value: 1632960000000, label: "October" },
  { value: 1640995200000, label: "2022" }, { value: 1648771200000, label: "April" }, { value: 1656633600000, label: "July" }, { value: 1664496000000, label: "October" }
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 374,
      margin: { left: 41, top: 52, right: 9, bottom: 22 }
    })
    .editCanvas({ background: "#afd1e7" })
    .createData({ values: data })
    .filterData({
      id: "rates2015",
      field: "date",
      range: { min: "2015-01-01", max: "2023-12-31" }
    })
    .createComputedData({
      id: "withDate2",
      as: "date2",
      expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" }
    })
    .createComputedData({
      id: "withValueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date2", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1420070400000, 1667260800000], nice: false })
    .editYScale({ domain: [0, 4.5] })
    .editLineMark({ curve: "step" })
    .encodeStroke({ value: "#023549" })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: xTicks,
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, labelMap: xLabels }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "10 Year Treasury bond Yields",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 29
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisLabels({ format: ".1f" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createTitle({
      text: "Bank of England interest rates (1975-2022)",
      offset: -13,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ alongOffset: -36, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Bank Rate (%). Source: BoE.\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" },
      gap: 3
    });
}