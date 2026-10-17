// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a, doc-8a4f6f06e0d37d5e, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 339, height: 401, margin: { left: 48, top: 64, right: 11, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "date", expression: { op: "parseTime", operand: { field: "dateUTC" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "valued", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editYScale({ target: "linePlot", domain: [0, 0.16] })
    .editYScale({ target: "scatterPlot", domain: [0, 0.16] })
    .encodeColor({ target: "linePlot", field: "employees", scale: { palette: "set2" } })
    .encodeColor({ target: "scatterPlot", field: "employees" })
    .editColorScale({
      target: "linePlot",
      domain: ["0-9", "10-49", "100-249", "250+", "50-99", "All firms"]
    })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editLineMark({ target: "linePlot", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1609459200000, 1617235200000, 1625097600000, 1633046400000],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 1609459200000, label: "2021" },
            { value: 1617235200000, label: "April" },
            { value: 1625097600000, label: "July" },
            { value: 1633046400000, label: "October" }
          ]
        }
      },
      title: { text: "dateUTC", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "top-right",
        columns: 1,
        title: "Employees:",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    })
    .createTitle({
      text: "At risk: select firm size",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      subtitle: "Proportion of firms deemed 'At Risk' of failure\nSource: ONS (2021), Van Reenen and Lambert (2021)\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      gap: 1
    });
}