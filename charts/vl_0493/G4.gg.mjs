// DOCS: doc-fc11e9fb291905d1, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 563, height: 445, margin: { left: 58, top: 53, right: 5, bottom: 92 } })
    .createData({ values: data })
    .createComputedData({ id: "sourceYearS", as: "yearS", expression: { constant: 2015 } })
    .filterData({ id: "year2015", field: "Year", predicate: { op: "eq", value: "2015" } })
    .createFoldData({
      id: "folded",
      fields: ["New York", "California", "Florida", "Texas", "Alabama", "North Carolina", "Illinois"],
      as: { key: "State", value: "Value" }
    })
    .createComputedData({
      id: "bars",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createBarPlot({
      x: {
        field: "State",
        fieldType: "nominal"
      },
      y: { field: "ValueNum" },
      guides: false
    })
    .editXScale({ domain: ["Alabama", "California", "Florida", "Illinois", "New York", "North Carolina", "Texas"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 40000] })
    .editBarMark({ fill: "rgb(0,67,167)" })
    .encodeBarWidth({ band: 1 })
    .createTitle({
      text: "US States - Population",
      titleStyle: { fontSize: 12, fontWeight: 700, fontStyle: "normal", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ align: "center", offset: -12, gap: 1 })
    .editTitle({ subtitle: "Population, 1900-2021\n" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-population-labels", measurements: [{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":5.5625},{"text":"5,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":25.03125},{"text":"10,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"15,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"20,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"25,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"30,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"35,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375},{"text":"40,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"width":30.59375}] } })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "State", fontSize: 11, fontWeight: 700, offset: 82 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, format: "," }
      },
      title: { text: "Value", fontSize: 11, fontWeight: 700, offset: 45 }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" });
}