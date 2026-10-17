import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-4218dc37ed9c42ec, doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 459, height: 477, margin: { left: 53, top: 40, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "salNum",
      as: "Annual Salary_n",
      expression: { op: "toNumber", operand: { field: "Annual Salary" } }
    })
    .createHistogram({ field: "Annual Salary_n", binStep: 5000, guides: false })
    .editXScale({ domain: [20000, 280000] })
    .editYScale({ domain: [0, 4000] })
    .editBarMark({ fill: "rgb(128,0,0)", stroke: false })
        .createXAxis({
        line: {},
        ticksAndLabels: {
          values: [20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000, 125000, 130000, 135000, 140000, 145000, 150000, 155000, 160000, 165000, 170000, 175000, 180000, 185000, 190000, 195000, 200000, 205000, 210000, 215000, 220000, 225000, 230000, 235000, 240000, 245000, 250000, 255000, 260000, 265000, 270000, 275000, 280000],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            labelMap: [
              { value: 25000, label: "" },
              { value: 30000, label: "" },
              { value: 35000, label: "" },
              { value: 40000, label: "" },
              { value: 45000, label: "" },
              { value: 50000, label: "" },
              { value: 55000, label: "" },
              { value: 65000, label: "" },
              { value: 70000, label: "" },
              { value: 75000, label: "" },
              { value: 80000, label: "" },
              { value: 85000, label: "" },
              { value: 90000, label: "" },
              { value: 95000, label: "" },
              { value: 105000, label: "" },
              { value: 110000, label: "" },
              { value: 115000, label: "" },
              { value: 120000, label: "" },
              { value: 125000, label: "" },
              { value: 130000, label: "" },
              { value: 135000, label: "" },
              { value: 145000, label: "" },
              { value: 150000, label: "" },
              { value: 155000, label: "" },
              { value: 160000, label: "" },
              { value: 165000, label: "" },
              { value: 170000, label: "" },
              { value: 175000, label: "" },
              { value: 185000, label: "" },
              { value: 190000, label: "" },
              { value: 195000, label: "" },
              { value: 200000, label: "" },
              { value: 205000, label: "" },
              { value: 210000, label: "" },
              { value: 215000, label: "" },
              { value: 225000, label: "" },
              { value: 230000, label: "" },
              { value: 235000, label: "" },
              { value: 240000, label: "" },
              { value: 245000, label: "" },
              { value: 250000, label: "" },
              { value: 255000, label: "" },
              { value: 265000, label: "" },
              { value: 270000, label: "" },
              { value: 275000, label: "" },
              { value: 280000, label: "" }
            ]
          }
        },
        title: { text: "Annual Salary (binned)", fontSize: 11 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } } })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
        line: {},
        ticksAndLabels: {
          values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Count of Records", fontSize: 11, rotation: { value: -90, unit: "degrees" } }
      })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black", format: ",.0f" } } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createTitle({
      text: "Chicago Salaries - Distribution",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -47.0244140625
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "Public Sector Salary Workers",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}