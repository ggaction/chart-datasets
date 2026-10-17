// DOCS: doc-2e6240c00cb297cc, doc-00859dfc99a640de
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 606, height: 247, margin: { top: 10, right: 8, bottom: 37, left: 58 } })
    .createData({ values: data })
    .createComputedData({
      id: "crimesParsed",
      as: "monthDate",
      expression: {
        op: "parseTime",
        operand: { op: "concat", operands: [{ field: "month" }, { constant: "-01" }] },
        format: "%Y-%m-%d"
      }
    })
    .createComputedData({
      id: "crimesNum",
      as: "reportedCrimesNum",
      expression: { op: "toNumber", operand: { field: "reportedCrimes" } }
    })
    .createScatterPlot({
      x: { field: "monthDate", fieldType: "temporal", scale: { domain: [1293840000000, 1480550400000], nice: false } },
      y: { field: "reportedCrimesNum", fieldType: "quantitative", scale: { domain: [0, 14000] } },
      guides: { axes: false, grid: false, legend: false }
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ fill: "#4c78a8", opacity: 1 })
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: {
            values: [1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000, 1356998400000, 1364774400000, 1372636800000, 1380585600000, 1388534400000, 1396310400000, 1404172800000, 1412121600000, 1420070400000, 1427846400000, 1435708800000, 1443657600000, 1451606400000, 1459468800000, 1467331200000, 1475280000000],
            ticks: { length: 5 },
            labels: {
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
              ],
              fontSize: 10,
              offset: 7
            }
          },
          title: { text: "month", fontSize: 11, fontWeight: 700, offset: 27 }
        },
        y: {
          ticksAndLabels: {
            values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000],
            ticks: { length: 5 },
            labels: {
              labelMap: [
                { value: 0, label: "0" },
                { value: 2000, label: "2,000" },
                { value: 4000, label: "4,000" },
                { value: 6000, label: "6,000" },
                { value: 8000, label: "8,000" },
                { value: 10000, label: "10,000" },
                { value: 12000, label: "12,000" },
                { value: 14000, label: "14,000" }
              ],
              fontSize: 10,
              offset: 7
            }
          },
          title: { text: "Reported crimes", fontSize: 11, fontWeight: 700, offset: 46 }
        }
      },
      grid: {
        horizontal: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000], color: "#ddd", lineWidth: 1 },
        vertical: { values: [1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000, 1356998400000, 1364774400000, 1372636800000, 1380585600000, 1388534400000, 1396310400000, 1404172800000, 1412121600000, 1420070400000, 1427846400000, 1435708800000, 1443657600000, 1451606400000, 1459468800000, 1467331200000, 1475280000000], color: "#ddd", lineWidth: 1 }
      },
      legend: false
    });

}
