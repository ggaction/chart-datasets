// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 209, margin: { left: 39, top: 37, right: 61, bottom: 22 } })
    .createData({ id: "cpi", values: data })
    .filterData({ id: "minYearOk", field: "year", predicate: { op: "gt", value: "1980" } })
    .filterData({ id: "maxYearOk", field: "year", predicate: { op: "lt", value: "2022" } })
    
    .createComputedData({
      id: "valueNum",
      as: "valueN",
      expression: { op: "toNumber", operand: { field: "value" } },
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [599616000000, 1638316800000] },
      },
      y: { field: "valueN", fieldType: "quantitative", scale: { domain: [0, 14] } },
      guides: false,
    })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: {},
            labels: { fontSize: 10, offset: 7, format: "%Y", flush: false },
          },
          title: false,
        },
        y: {
          line: {},
          ticksAndLabels: { values: [0, 5, 10], ticks: {}, labels: { fontSize: 10, offset: 7 } },
          title: { text: "CPI(%)", fontSize: 11, fontWeight: 700, offset: 30 },
        },
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-title-profile",
        measurements: [
          {
            text: "Monthly CPI for Travel & Transport Services",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 270.9375,
          },
          {
            text: "The follwoing data was taken from an ONS API",
            fontFamily: "sans-serif",
            fontSize: 12,
            fontWeight: 400,
            fontStyle: "normal",
            width: 250.140625,
          },
        ],
      },
    })
    .createTitle({
      text: "Monthly CPI for Travel & Transport Services",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875,
    })
    .editTitle({
      subtitle: "The follwoing data was taken from an ONS API",
      subtitleStyle: { fontSize: 12, fontWeight: 400, color: "black" },
      offset: -13,
    });
}