// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 534,
      height: 524,
      margin: { left: 29, top: 52, right: 5, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    
    .filterData({
      id: "roaring",
      field: "DATE",
      range: { min: "1914-01-01", max: "1929-10-01" }
    })
    .createComputedData({
      id: "djia",
      as: "DJIA_num",
      expression: { op: "toNumber", operand: { field: "DJIA" } }
    })
    .createLinePlot({
      x: {
        field: "DATE",
        fieldType: "temporal"
      },
      y: {
        field: "DJIA_num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-1767225600000, -1238716800000], nice: false })
    .editYScale({ domain: [0, 400] })
    .editLineMark({ stroke: "rgb(128,0,0)", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            -1767225600000, -1704153600000, -1640995200000,
            -1577923200000, -1514764800000, -1451692800000,
            -1388534400000, -1325462400000, -1262304000000
          ],
          ticks: {},
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200, 250, 300, 350, 400],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "The Roaring Twenties",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Dow Jones Industrial Average. Source: FRED\n", offset: -13, gap: 1 })
    .editTitle({ alongOffset: -23.68 });
}