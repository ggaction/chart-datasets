// DOCS: doc-dfae58344d5a524e, doc-76573a465e2b6a33, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 605,
      height: 247,
      margin: { left: 58, top: 10, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "monthMs",
      as: "monthMs",
      expression: { op: "parseTime", operand: { field: "month" }, format: "auto" }
    })
    .createComputedData({
      id: "crimes",
      as: "crimes",
      expression: { op: "toNumber", operand: { field: "reportedCrimes" } }
    })
    .createLinePlot({
      x: {
        field: "monthMs",
        fieldType: "temporal",
      },
      y: { field: "crimes", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1293840000000, 1480550400000], nice: false })
    .editYScale({ domain: [0, 14000], zero: true })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          1293840000000, 1301616000000, 1309478400000, 1317427200000,
          1325376000000, 1333238400000, 1341100800000, 1349049600000,
          1356998400000, 1364774400000, 1372636800000, 1380585600000,
          1388534400000, 1396310400000, 1404172800000, 1412121600000,
          1420070400000, 1427846400000, 1435708800000, 1443657600000,
          1451606400000, 1459468800000, 1467331200000, 1475280000000
        ],
          labels: {
          fontSize: 10,
          offset: 7,
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
            { value: 1475280000000, label: "" }
          ]
        }
      },
      title: { text: "month", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000],
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 2000, label: "2,000" },
            { value: 4000, label: "4,000" },
            { value: 6000, label: "6,000" },
            { value: 8000, label: "8,000" },
            { value: 10000, label: "10,000" },
            { value: 12000, label: "12,000" },
            { value: 14000, label: "14,000" }
          ]
        }
      },
      title: { text: "Reported crimes", fontSize: 11, offset: 46 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]
      },
      vertical: {
        values: [
          1293840000000, 1301616000000, 1309478400000, 1317427200000,
          1325376000000, 1333238400000, 1341100800000, 1349049600000,
          1356998400000, 1364774400000, 1372636800000, 1380585600000,
          1388534400000, 1396310400000, 1404172800000, 1412121600000,
          1420070400000, 1427846400000, 1435708800000, 1443657600000,
          1451606400000, 1459468800000, 1467331200000, 1475280000000
        ]
      }
    })
    .editGrid({
      horizontal: { color: "#ddd", lineWidth: 1 },
      vertical: { color: "#ddd", lineWidth: 1 }
    });
}