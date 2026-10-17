// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 372,
      height: 334,
      margin: { left: 64, top: 47, right: 58, bottom: 37 }
    })
    .createData({ id: "covid", values: data })
    .createComputedData({
      id: "covidTs",
      as: "ts",
      expression: { op: "parseTime", operand: { field: "date" } }
    })
    .createLinePlot({
      x: {
        field: "ts",
        fieldType: "temporal"
      },
      y: {
        field: "newCasesBySpecimenDate",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1580342400000, 1665532800000], nice: false })
    .editYScale({ domain: [0, 240000] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ value: 1585699200000, label: "April" }, { value: 1593561600000, label: "" }, { value: 1601510400000, label: "October" }, { value: 1609459200000, label: "" }, { value: 1617235200000, label: "April" }, { value: 1625097600000, label: "" }, { value: 1633046400000, label: "October" }, { value: 1640995200000, label: "" }, { value: 1648771200000, label: "April" }, { value: 1656633600000, label: "" }, { value: 1664582400000, label: "October" }] },
            values: [
              1585699200000,
              1593561600000,
              1601510400000,
              1609459200000,
              1617235200000,
              1625097600000,
              1633046400000,
              1640995200000,
              1648771200000,
              1656633600000,
              1664582400000
            ]
          },
          title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, labelMap: [{ value: 0, label: "0" }, { value: 50000, label: "50,000" }, { value: 100000, label: "100,000" }, { value: 150000, label: "150,000" }, { value: 200000, label: "200,000" }] },
            values: [0, 50000, 100000, 150000, 200000]
          },
          title: { text: "New Cases Recorded", fontSize: 11, fontWeight: 700, offset: 52 }
        }
      },
      grid: {
        horizontal: { color: "#ddd", values: [0, 50000, 100000, 150000, 200000] },
        vertical: { color: "#ddd", values: [1585699200000, 1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000] }
      }
    })
    .createTitle({
      text: "UK COVID-19 Cases",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    })
    // Measured requirement: subtitle text plus offset/gap/alongOffset are all
    // geometrically essential; source title block sits at
    // y=3 (offset = 47-16-28 = 3, gap 1) and x=5.85 vs plotleft 64.
    .editTitle({ offset: 3, alongOffset: -58 })
    .editTitle({
      subtitle: "COVID-19 cases recorded daily since beginning of the pandemic. Source: Gov.uk ",
      gap: 1
    });
}