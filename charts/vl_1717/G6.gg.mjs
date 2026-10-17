// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 606, height: 247, margin: { left: 58, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "crimesNumeric",
      as: "rc",
      expression: { op: "toNumber", operand: { field: "reportedCrimes" } }
    })
    .createScatterPlot({
      x: { field: "month", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "rc" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editXScale({ domain: [1293840000000, 1480550400000] })
    .editYScale({ domain: [0, 14000], zero: true })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000, 1356998400000, 1364774400000, 1372636800000, 1380585600000, 1388534400000, 1396310400000, 1404172800000, 1412121600000, 1420070400000, 1427846400000, 1435708800000, 1443657600000, 1451606400000, 1459468800000, 1467331200000, 1475280000000],
        ticks: {},
        labels: {
          fontSize: 10, offset: 7, flush: true,
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
      title: { text: "month", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ",.0f", overlap: "allow" }
      },
      title: { text: "Reported crimes", fontSize: 11, offset: 46, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000] }, vertical: { values: [1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000, 1356998400000, 1364774400000, 1372636800000, 1380585600000, 1388534400000, 1396310400000, 1404172800000, 1412121600000, 1420070400000, 1427846400000, 1435708800000, 1443657600000, 1451606400000, 1459468800000, 1467331200000, 1475280000000] } })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}