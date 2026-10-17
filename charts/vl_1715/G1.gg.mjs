import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-2fcdfbdfb290e440
const X_TICKS = [1293840000000, 1309478400000, 1325376000000, 1341100800000, 1356998400000, 1372636800000, 1388534400000, 1404172800000, 1420070400000, 1435708800000, 1451606400000, 1467331200000];
const X_LABELS = [
  { value: 1293840000000, label: "2011" }, { value: 1309478400000, label: "July" },
  { value: 1325376000000, label: "2012" }, { value: 1341100800000, label: "July" },
  { value: 1356998400000, label: "2013" }, { value: 1372636800000, label: "July" },
  { value: 1388534400000, label: "2014" }, { value: 1404172800000, label: "July" },
  { value: 1420070400000, label: "2015" }, { value: 1435708800000, label: "July" },
  { value: 1451606400000, label: "2016" }, { value: 1467331200000, label: "July" }
];
const Y_TICKS = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 606, height: 247, margin: { left: 58, top: 10, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "monthTs", as: "monthTs", expression: { op: "parseTime", operand: { field: "month" }, format: "auto" } })
    .createComputedData({ id: "reportedCrimesNum", as: "reportedCrimesNum", expression: { op: "toNumber", operand: { field: "reportedCrimes" } } })
    .createScatterPlot({
      x: { field: "monthTs", fieldType: "temporal", scale: { domain: [1293840000000, 1480550400000], nice: false } },
      y: { field: "reportedCrimesNum", fieldType: "quantitative", scale: { domain: [0, 14000], nice: false } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "#4c78a8", stroke: false, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: X_TICKS,
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, labelMap: X_LABELS }
        },
        title: { text: "month", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: Y_TICKS,
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "," }
        },
        title: { text: "Reported crimes", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 49 }
      }
    })
    .createGrid({
      horizontal: { values: Y_TICKS, color: "#ddd" },
      vertical: { values: X_TICKS, color: "#ddd" }
    });
}