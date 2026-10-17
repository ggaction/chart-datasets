import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2bd5de4bd99e314a, doc-2fcdfbdfb290e440

export function buildChart() {
  return chart()
    .createCanvas({ width: 338, height: 374, margin: { left: 32, top: 52, right: 6, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "incomeNum", as: "medIncome_num", expression: { op: "toNumber", operand: { field: "medIncome" } } })
    .createComputedData({ id: "deathsNum", as: "FirearmDeaths_num", expression: { op: "toNumber", operand: { field: "FirearmDeaths" } } })
    .createScatterPlot({
      x: { field: "medIncome_num", fieldType: "quantitative", scale: { domain: [40000, 80000], nice: false } },
      y: { field: "FirearmDeaths_num", fieldType: "quantitative", scale: { domain: [0, 0.24] } },
      guides: false
    })
    .encodePointRadius({ value: 6.123724356957945 })
    .editPointMark({ fill: "rgb(0,67,167)", opacity: 0.6 })
    .createTitle({
      text: "Gun deaths and income - US states",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      alongOffset: -26.462890625
    })
    .editTitle({
      subtitle: "Median income (x), and firearm deaths per 100k population (y)",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black", fontFamily: "sans-serif" },
      gap: 3
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [40000, 50000, 60000, 70000, 80000],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7, flush: true, labelMap: [
  { value: 40000, label: "40,000" },
  { value: 50000, label: "50,000" },
  { value: 60000, label: "60,000" },
  { value: 70000, label: "70,000" },
  { value: 80000, label: "80,000" }
] }
          },
          title: false
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", fontWeight: 400, color: "black", offset: 7, format: ".2f" }
          },
          title: false
        }
      },
      grid: {
        horizontal: {
          values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
          color: "#ddd", lineWidth: 1
        },
        vertical: {
          values: [40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000],
          color: "#ddd", lineWidth: 1
        }
      }
    });
}
