// DOCS: doc-8a4f6f06e0d37d5e doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 213, margin: { left: 39, top: 41, right: 61, bottom: 22 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "typedValue", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    
    .filterData({ id: "minYearFiltered", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "maxYearFiltered", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [599616000000, 1638316800000], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 12] } },
      guides: false
    })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: { color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: false }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 2, 4, 6, 8, 10, 12],
            ticks: { color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "CPI(%)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: false
    })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "cpi-title-measurements", measurements: [{ text: "Monthly CPI for Housing Services", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 208.765625 }, { text: "The follwoing data was taken from an ONS API", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", width: 250.140625 }] } })
    .createTitle({
      text: "Monthly CPI for Housing Services",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({
      subtitle: "The follwoing data was taken from an ONS API",
      subtitleStyle: { fontSize: 12, fontWeight: 400, fontFamily: "sans-serif", color: "black" },
      offset: -13
    });
}
