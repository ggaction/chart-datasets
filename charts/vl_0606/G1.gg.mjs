// DOCS: retrieved action-card and API documentation documents:
// DOCS:   doc-0fe8832416a93c5f (npm/knowledge/action-cards.json /cards/35, editFoldData)
// DOCS:   doc-0f3d1ec60f4215da (npm/knowledge/action-cards.json /cards/17, createFoldData)
// DOCS:   doc-32c63273ec3e7981 (docs/api/data/time-units.md, Time-Unit Data Transforms)
// DOCS:   doc-dd4a5f585ff65fb2 (docs/api/data/source-and-derived.md, createSortedData / createComputedData)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-dd4a5f585ff65fb2 — createData materializes the complete frozen import without sampling.
    .createCanvas({
      margin: { left: 26, top: 40, right: 7, bottom: 22 },
      plot: { width: 400, height: 400 },
      plotBorder: { underlay: true }
    })
    .createData({ values: data })
    .createComputedData({
      id: "numericX",
      as: "numeric_people",
      expression: { op: "toNumber", operand: { field: "cumSharePeople" } }
    })
    .createComputedData({
      id: "numericIncome",
      as: "numeric_income",
      expression: { op: "toNumber", operand: { field: "cumShareIncome" } }
    })
    .createLinePlot({
      x: { field: "numeric_people", scale: { domain: [0, 1] } },
      y: { field: "numeric_income", scale: { domain: [0, 1] } },
      guides: false
    })
    .editLineMark({ stroke: "seagreen" })
    .createLinePlot({
      id: "equality",
      x: "numeric_people",
      y: "numeric_people",
      guides: false
    })
    .editLineMark({ stroke: "grey" })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              format: ".1f",
              offset: 5.5,
              alongOffset: 0.5,
              flush: true
            }
          },
          title: false
        },
        y: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              format: ".1f",
              offset: 6.5,
              alongOffset: 0.890625
            }
          },
          title: false
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } }
    })
    .createTitle({
      text: "Chicago Salaries - Lorenz curve and equality line",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -7.390625
    })
    .editTitle({
      alongOffset: -20.9013671875,
      gap: 3.34375,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Public Sector Salary Workers" });
}