// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69, doc-058d6465fed4f186
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 414, height: 242, margin: { left: 72, top: 5, right: 142, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "dated",
      as: "YearsMs",
      expression: { op: "parseTime", operand: { field: "Years" }, format: "%m/%d/%Y" }
    })
    .createAreaPlot({
      x: { field: "YearsMs", fieldType: "temporal" },
      y: { field: "Real GDP Data" },
      guides: false
    })
    .editXScale({ domain: [157766400000, 1578355200000], nice: false })
    .editYScale({ domain: [0, 1100000], zero: true })
    .encodeGroup({
      field: "Country Identifier"
    })
    .encodeColor({
      field: "Country Identifier",
      layout: "stack",
      scale: { domain: ["France Real GDP Data", "UK Real GDP Data"], range: ["#4c78a8", "#f58518"] }
    })
    .editAreaMark({ opacity: 1 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true, color: "#000" }
        },
        title: { text: "Years", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28, color: "#000" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 200000, 400000, 600000, 800000, 1000000],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f", color: "#000" }
        },
        title: { text: "Real GDP Data", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 57, rotation: { value: -90, unit: "degrees" }, color: "#000" }
      }
    })
    .createLegend({
      title: "Country Identifier",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "#000" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "#000" }
    });
}