// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2fcdfbdfb290e440, doc-bc26da5598d35bae, doc-5b80d9e7442172a5, doc-5ed1730e8ee53abc, doc-7f2c254224fc4908, doc-7184b02978bdf5d1, doc-b30469a9489ccd34, doc-0a1e48878a814143, doc-36558ee3175924e3, doc-16c583350443cc93
import { chart } from "ggaction";
import data from "./data.json";

const xTickValues = [0, 20000000, 40000000, 60000000, 80000000, 100000000];
const yTickValues = [0, 10, 20, 30, 40, 50, 60, 70];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 249,
      height: 247,
      margin: { left: 39, top: 10, right: 10, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "salaryNum",
      as: "SalaryNum",
      expression: { op: "toNumber", operand: { field: "Salary" } }
    })
    .createComputedData({
      id: "goalsNum",
      as: "GoalsNum",
      expression: { op: "toNumber", operand: { field: "Goals" } }
    })
    .createScatterPlot({
      x: { field: "SalaryNum", fieldType: "quantitative" },
      y: { field: "GoalsNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 110000000] })
    .editYScale({ domain: [0, 70] })
    .encodePointRadius({ value: 2.7386 })
    .encodeStroke({ value: "#4c78a8" })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: xTickValues,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0M" },
            { value: 20000000, label: "20M" },
            { value: 40000000, label: "40M" },
            { value: 60000000, label: "60M" },
            { value: 80000000, label: "80M" },
            { value: 100000000, label: "100M" }
          ]
        }
      },
      title: { text: "Salary", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: yTickValues,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Goals", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" }
      },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { values: yTickValues },
      vertical: { values: xTickValues }
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}