// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot stacked/range geometry), doc-76573a465e2b6a33 (guides/point facades)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 449,
      height: 249,
      margin: { left: 53, top: 10, right: 73, bottom: 39 }
    })
    .createData({ values: data })
    .filterData({ id: "year2000", field: "year", predicate: { op: "eq", value: 2000 } })
    .createComputedData({
      id: "population",
      as: "gender",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "sex" }, right: { constant: 2 } },
        then: { constant: "Female" },
        else: { constant: "Male" }
      }
    })
    .createBarPlot({
      x: { field: "age", fieldType: "ordinal" },
      y: { field: "people", aggregate: "sum", stack: "normalize" },
      guides: false
    })
    .editXScale({
      domain: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 1], nice: false, zero: false })
    .encodeColor({
      field: "gender",
      layout: "fill"
    })
    .editColorScale({ domain: ["Female", "Male"], range: ["#EA98D2", "#659CCA"] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "age", fontSize: 11, offset: 30 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 6,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Population", fontSize: 11, offset: 42 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ".0%" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "gender",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ fontWeight: 700 });
}