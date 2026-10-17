// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-efb03835af4d2e1b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 953, height: 284, margin: { left: 53, top: 5, right: 60, bottom: 79 } })
    .createData({ values: data })
    .createComputedData({ id: "numbers", as: "countNum", expression: { op: "toNumber", operand: { field: "COUNT" } } })
    .createComputedData({ id: "female", as: "femaleCount", expression: { op: "if", condition: { op: "eq", left: { field: "gender" }, right: { constant: "F" } }, then: { field: "countNum" }, else: { constant: 0 } } })
    .createComputedData({ id: "male", as: "maleCount", expression: { op: "if", condition: { op: "eq", left: { field: "gender" }, right: { constant: "M" } }, then: { field: "countNum" }, else: { constant: 0 } } })
    .createSummaryData({ id: "pairs", groupBy: ["DATE"], aggregates: [{ op: "sum", field: "femaleCount", as: "femaleSum" }, { op: "sum", field: "maleCount", as: "maleSum" }] })
    .createFoldData({ id: "fold", fields: ["femaleSum", "maleSum"], as: { key: "key", value: "value" } })
    .createComputedData({ id: "gender", as: "gender", expression: { op: "if", condition: { op: "eq", left: { field: "key" }, right: { constant: "femaleSum" } }, then: { constant: "F" }, else: { constant: "M" } } })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "gender", order: "descending" }] })
    .createStackData({ category: "DATE", group: "gender", value: "value" })
    .createAreaPlot({ x: { field: "DATE", fieldType: "nominal" }, y: { lower: "value_end", upper: "value_start" }, guides: false })    .encodeGroup({ field: "gender" })
    .encodeColor({ field: "gender", scale: { type: "ordinal", domain: ["F", "M"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editAreaMark({ opacity: 1, curve: "linear" })
    .editXScale({ type: "point", domain: ["11-05-2018", "11-06-2018", "11-07-2018", "11-08-2018", "11-09-2018", "11-10-2018", "11-11-2018", "11-12-2018", "11-13-2018", "11-14-2018", "11-15-2018", "11-16-2018", "11-17-2018", "11-18-2018", "11-19-2018", "11-20-2018", "11-21-2018", "11-22-2018", "11-23-2018", "11-24-2018", "11-25-2018", "11-26-2018", "11-27-2018", "11-28-2018", "11-29-2018", "11-30-2018", "12-01-2018", "12-02-2018", "12-03-2018", "12-04-2018", "12-05-2018", "12-06-2018", "12-07-2018", "12-08-2018", "12-10-2018", "12-11-2018", "12-12-2018", "12-13-2018", "12-14-2018", "12-15-2018", "12-16-2018", "12-17-2018"], padding: 0.5 })
    .editYScale({ domain: [0, 6500] })
    .createXAxis({ line: { color: "#888" }, ticksAndLabels: { values: ["11-05-2018", "11-06-2018", "11-07-2018", "11-08-2018", "11-09-2018", "11-10-2018", "11-11-2018", "11-12-2018", "11-13-2018", "11-14-2018", "11-15-2018", "11-16-2018", "11-17-2018", "11-18-2018", "11-19-2018", "11-20-2018", "11-21-2018", "11-22-2018", "11-23-2018", "11-24-2018", "11-25-2018", "11-26-2018", "11-27-2018", "11-28-2018", "11-29-2018", "11-30-2018", "12-01-2018", "12-02-2018", "12-03-2018", "12-04-2018", "12-05-2018", "12-06-2018", "12-07-2018", "12-10-2018", "12-11-2018", "12-12-2018", "12-13-2018", "12-14-2018", "12-15-2018", "12-16-2018", "12-17-2018"], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } } }, title: { text: "DATE", fontSize: 11, fontWeight: 700, color: "black" } })
    .createYAxis({ line: { color: "#888" }, ticksAndLabels: { values: [0, 1000, 2000, 3000, 4000, 5000, 6000], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" } }, title: { text: "Sum of COUNT", fontSize: 11, fontWeight: 700, color: "black" } })
    .createGrid({ horizontal: { values: [0, 1000, 2000, 3000, 4000, 5000, 6000], color: "#ddd", }, vertical: false })
    .createGuides({ axes: false, grid: false, legend: { title: "gender", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } } });
}