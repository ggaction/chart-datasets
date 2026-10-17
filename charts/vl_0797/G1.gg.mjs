// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 299, height: 208, margin: { left: 44, top: 36, right: 55, bottom: 22 } })
    .createData({ values: data })
    .filterData({
      id: "yearRange",
      field: "year",
      range: { min: "1980", max: "2022", minInclusive: false, maxInclusive: false }
    })

    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [599616000000, 1638316800000], nice: false }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [-10, 12] }
      },
      guides: false
    })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: false }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-10, -5, 0, 5, 10],
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "CPI(%)", fontSize: 11, fontWeight: "bold", offset: 27 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "Annual CPI for Communication Goods",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 12 }
    })
    .editTitle({ alongOffset: -38.96, offset: -13, gap: 1 })
    .editTitle({ subtitle: "The follwoing data was taken from an ONS API" });
}