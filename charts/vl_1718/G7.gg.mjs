// DOCS: actual delivered doc-* IDs: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-c668cbfb4a5019c7, doc-7f2c254224fc4908, doc-7184b02978bdf5d1, doc-81f3b4da1bfe0908
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [
  1293840000000, 1301616000000, 1309478400000, 1317427200000,
  1325376000000, 1333238400000, 1341100800000, 1349049600000,
  1356998400000, 1364774400000, 1372636800000, 1380585600000,
  1388534400000, 1396310400000, 1404172800000, 1412121600000,
  1420070400000, 1427846400000, 1435708800000, 1443657600000,
  1451606400000, 1459468800000, 1467331200000, 1475280000000
];
const X_LABELS = ["2011","April","July","October","2012","April","July","October","2013","April","July","October","2014","April","July","October","2015","April","July","October","2016","April","July","October"];
const Y_TICKS = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000];
const Y_LABELS = ["0","2,000","4,000","6,000","8,000","10,000","12,000","14,000"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 606, height: 247, margin: { left: 58, top: 10, right: 8, bottom: 37 } })
    .createData({ id: "crimes", values: data })
    .createComputedData({ id: "crimesNum", as: "reportedCrimesNum", expression: { op: "toNumber", operand: { field: "reportedCrimes" } } })
    .createScatterPlot({
      x: { field: "month", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "reportedCrimesNum", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "#4c78a8" })
    .editXScale({ type: "time", domain: [1293840000000, 1480550400000], nice: false })
    .editYScale({ domain: [0, 14000], nice: false, zero: true })
    .createXAxis({
      ticksAndLabels: {
        values: X_TICKS,
        labels: {
          fontSize: 10, offset: 7, flush: true,
          labelMap: [{ value: 1293840000000, label: "2011" }, { value: 1301616000000, label: "" }, { value: 1309478400000, label: "July" }, { value: 1317427200000, label: "" }, { value: 1325376000000, label: "2012" }, { value: 1333238400000, label: "" }, { value: 1341100800000, label: "July" }, { value: 1349049600000, label: "" }, { value: 1356998400000, label: "2013" }, { value: 1364774400000, label: "" }, { value: 1372636800000, label: "July" }, { value: 1380585600000, label: "" }, { value: 1388534400000, label: "2014" }, { value: 1396310400000, label: "" }, { value: 1404172800000, label: "July" }, { value: 1412121600000, label: "" }, { value: 1420070400000, label: "2015" }, { value: 1427846400000, label: "" }, { value: 1435708800000, label: "July" }, { value: 1443657600000, label: "" }, { value: 1451606400000, label: "2016" }, { value: 1459468800000, label: "" }, { value: 1467331200000, label: "July" }, { value: 1475280000000, label: "" }]
        }
      },
      title: { text: "month", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: Y_TICKS,
        labels: {
          fontSize: 10, offset: 7,
          labelMap: [{ value: 0, label: "0" }, { value: 2000, label: "2,000" }, { value: 4000, label: "4,000" }, { value: 6000, label: "6,000" }, { value: 8000, label: "8,000" }, { value: 10000, label: "10,000" }, { value: 12000, label: "12,000" }, { value: 14000, label: "14,000" }]
        }
      },
      title: { text: "Reported crimes", fontSize: 11, offset: 46 }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { values: Y_TICKS },
      vertical: { values: X_TICKS }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}