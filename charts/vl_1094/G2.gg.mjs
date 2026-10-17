import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-24d00033f9fc3095, doc-5488e292a83e78ba, doc-fb3b01cca895bdad

export function buildChart() {
  return chart()
    .createCanvas({ width: 452, height: 479, margin: { left: 39, top: 40, right: 113, bottom: 139 } })
    .createData({ values: data })
    .createComputedData({ id: "yearAlias", as: "year", expression: { constant: "2021" } })
    .createComputedData({ id: "valueAlias", as: "value", expression: { field: "2021" } })
    .createComputedData({
      id: "per1000",
      as: "per 1000",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "value" } }, right: { constant: 1000 } }
    })
    .createSortedData({ id: "sortedData", sortBy: [{ field: "HE provider", order: "ascending" }] })
    .createBarPlot({ x: "HE provider", y: "per 1000", guides: false })
    .editBarMark({ fill: "#238a6d", stroke: false })
    .encodeBarWidth({ band: 1 })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 50] })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          labelMap: [
            { value: "Coventry University", label: "Coventry University" },
            { value: "King's College London", label: "King's College London" },
            { value: "The Nottingham Trent University", label: "The Nottingham Trent University" },
            { value: "The University of Bristol", label: "The University of Bristol" },
            { value: "The University of Edinburgh", label: "The University of Edinburgh" },
            { value: "The University of Glasgow", label: "The University of Glasgow" },
            { value: "The University of Manchester", label: "The University of Manchester" },
            { value: "University College London", label: "University College London" },
            { value: "University of the West of England, Bristol", label: "University of the West of England, Bri…" }
          ],
          rotation: { value: 45, unit: "degrees" },
          fontSize: 10,
          offset: 7
        }
      },
      title: false
    })
    .editXAxis({ ticks: false, line: { color: "#888" }, labels: { color: "black" } })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Number of students (per 1000)", fontSize: 11, fontWeight: 700, color: "black" }
    })
    .editYAxis({ line: { color: "#888" }, ticks: { color: "#888" }, labels: { color: "black" } })
    .createTitle({
      text: "Number of students at selected UK universities 2015-2021",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -33.123046875 })
    .editTitle({ subtitle: "per 1000 students. Source: HESA" });
}