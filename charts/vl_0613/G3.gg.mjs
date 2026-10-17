// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 390, height: 433, margin: { left: 84, top: 46, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "rdNumber",
      as: "rd",
      expression: { op: "toNumber", operand: { field: "R&D Expenditure (% of GDP)" } }
    })
    .filterData({ id: "gt15", field: "rd", predicate: { op: "gt", value: 1.5 } })
    .createSortedData({ id: "sortedRd", sortBy: [{ field: "rd", order: "descending" }] })
    .createBarPlot({
      x: { field: "rd", fieldType: "quantitative" },
      y: {
        field: "Country",
      },
      guides: false
    })
    .editXScale({ domain: [0, 5.5] })
    .editYScale({
      domain: [
        "Israel", "South Korea", "Sweden", "Belgium", "United States", "Japan",
        "Austria", "Switzerland", "Germany", "Denmark", "Finland", "Iceland",
        "China", "France", "Netherlands", "Norway", "Slovenia", "Czech Republic",
        "Singapore", "Australia", "Estonia", "United Kingdom", "Canada",
        "Portugal", "Hungary", "Italy"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .encodeBarWidth({ pixels: 11 })
    .createTitle({
      text: "Research & Development",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 9, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -11, alongOffset: -78, gap: 3.5 })
    .editTitle({ subtitle: "Expenditure as a percentage of GDP, source: UNESCO UIS\n" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".1f", flush: true }
      },
      title: { text: "R&D Expenditure (% of GDP)", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } });
}
