// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 451, height: 392, margin: { left: 39, top: 55, right: 12, bottom: 37 } })
    .createData({ id: "wageRaw", values: data })
    .createComputedData({
      id: "wage",
      as: "MinWageNum",
      expression: { op: "toNumber", operand: { field: "MinWage" } }
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "MinWageNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
    .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .createRuleMark({ id: "rule", data: "wage", stroke: "black" })
    .encodeX({ target: "rule", field: "Year", fieldType: "temporal" })
    
    .createPointMark({ id: "points", data: "wage", fill: "white" })
    .encodeStroke({ target: "points", value: "#4c78a8" })
    .editPointMark({ target: "points", strokeWidth: 2 })
    .encodeX({ target: "points", field: "Year", fieldType: "temporal" })
    .encodeY({ target: "points", field: "MinWageNum", fieldType: "quantitative" })
    .encodePointRadius({ target: "points", value: 5 })
    .editXScale({ domain: [915148800000, 1640995200000], nice: false })
    .editYScale({ domain: [0, 10] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-wage-year-glyphs",
        measurements: [
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createGuides({
      grid: {
        horizontal: { color: "#ddd" },
        vertical: { color: "#ddd" }
      },
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              946684800000, 1009843200000, 1072915200000, 1136073600000,
              1199145600000, 1262304000000, 1325376000000, 1388505600000,
              1451606400000, 1514764800000, 1577836800000, 1640995200000
            ],
            ticks: { color: "#888", length: 5 },
            labels: { format: "%Y", fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 27.578125 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ticks: { color: "#888", length: 5 },
            labels: { format: ".0f", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "Minimum Wage (£)", fontSize: 11, fontWeight: 700, rotation: { value: -90, unit: "degrees" }, offset: 27.123046875 }
        }
      }
    })
    .createTitle({
      text: "UK National Minimum Wage, 1995-2021",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 12, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Using rates for oldest age group\nSource: Gov.uk", align: "left", offset: -13 })
    .editTitle({ alongOffset: -33.123046875, gap: 1 });
}