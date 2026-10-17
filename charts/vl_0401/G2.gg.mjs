// DOCS: doc-2bd5de4bd99e314a, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 352, height: 389, margin: { left: 44, top: 52, right: 8, bottom: 37 } })
    .createData({ values: data })
    .createFoldData({ id: "fold", fields: ["1", "3", "5", "7", "9"], as: { key: "size", value: "value" } })
    .filterData({ id: "numericAgeRows", field: "Age", noneOf: ["11-20", "21-50"] })
    .createComputedData({ id: "ageN", as: "AgeN", expression: { op: "toNumber", operand: { field: "Age" } } })
    .createComputedData({ id: "valueN", as: "valueN", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .filterData({ id: "rlp", field: "Measure", predicate: { op: "eq", value: "RLP" } })
    .filterData({ id: "pos", field: "valueN", predicate: { op: "gt", value: 0 } })
    .createLinePlot({
      x: { field: "AgeN", fieldType: "quantitative" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1, 10] })
    .editYScale({ target: "linePlot", domain: [0, 200] })
    .createScatterPlot({
      x: { field: "AgeN", fieldType: "quantitative" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [1, 10] })
    .editYScale({ target: "scatterPlot", domain: [0, 200] })
    .encodeColor({ field: "size", target: "linePlot", scale: { type: "ordinal", domain: ["1", "3", "5", "7", "9"], range: ["rgb(68,58,131)", "rgb(49,104,142)", "rgb(33,145,141)", "rgb(53,183,121)", "rgb(143,215,68)"] } })
    .encodeColor({ field: "size", target: "scatterPlot", scale: { type: "ordinal", domain: ["1", "3", "5", "7", "9"], range: ["rgb(68,58,131)", "rgb(49,104,142)", "rgb(33,145,141)", "rgb(53,183,121)", "rgb(143,215,68)"] } })
    .editLineMark({ target: "linePlot", strokeWidth: 1 })
    .editPointMark({ target: "scatterPlot", opacity: 1, stroke: false })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            labels: { fontSize: 10, offset: 7, format: ".0f" }
          },
          title: { text: "Age", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
            labels: { fontSize: 10, offset: 7, format: ".0f" }
          },
          title: { text: "Productivity", fontSize: 11, fontWeight: 700, offset: 35 }
        }
      },
      grid: false,
      legend: {
        position: "top-left",
        title: "Size",
        columns: 1,
        symbol: { layers: [ { type: "point", shape: "circle", size: 5 } ] },
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({
      text: "Age, Size and Productivity",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      subtitle: "RLP for firms by age and size (n employees).",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      gap: 3
    })
    .editTitle({ alongOffset: -38.7 });
}