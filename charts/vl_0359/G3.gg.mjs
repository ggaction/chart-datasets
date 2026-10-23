import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-cc2a8c2d8050af3b, doc-8a4f6f06e0d37d5e, doc-8e80ee3d1535d44e

export function buildChart() {
  return chart()
    .createCanvas({
      width: 312,
      height: 369,
      margin: { left: 6, top: 47, right: 6, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "issue",
      as: "Aissue",
      expression: {
        op: "datePart",
        part: "year",
        operand: {
          op: "parseTime",
          operand: { op: "concat", operands: [{ field: "issueDate" }, { constant: " UTC" }] }
        }
      }
    })
    .createComputedData({
      id: "redemption",
      as: "redemption",
      expression: {
        op: "datePart",
        part: "year",
        operand: {
          op: "parseTime",
          operand: { op: "concat", operands: [{ field: "redemptionDate" }, { constant: " UTC" }] }
        }
      }
    })
    .createComputedData({
      id: "duration",
      as: "Bduration",
      expression: { op: "subtract", left: { field: "redemption" }, right: { field: "Aissue" } }
    })
    .createComputedData({
      id: "ids",
      as: "id2",
      expression: { op: "toNumber", operand: { field: "id" } }
    })
    .createFoldData({
      id: "folded",
      fields: ["Bduration", "Aissue"],
      as: { key: "measure", value: "value" }
    })
    .createSortedData({
      id: "ordered",
      sortBy: [{ field: "measure", order: "ascending" }]
    })
    .createStackData({ category: "id2", group: "measure", value: "value" })
    .createBarPlot({
      x: {
        lower: "value_start",
        upper: "value_end"
      },
      y: {
        field: "id2",
        fieldType: "ordinal",
        scale: {
          domain: [89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      guides: false
    })
    .editXScale({ domain: [1980, 2080], clamp: true })
    .encodeColor({
      field: "measure",
      layout: "overlay",
      scale: { domain: ["Aissue", "Bduration"], range: ["white", "red"] }
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .createGuides({
      grid: false,
      legend: false,
      axes: {
        x: {
          line: { color: "#888" },
          title: false,
          ticksAndLabels: {
            values: [1980, 1990, 2000, 2010, 2020, 2030, 2040, 2050, 2060, 2070, 2080],
            ticks: { color: "#888", length: 5, alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              format: ".0f",
              flush: true,
              offset: 5.5,
              alongOffset: 0.5,
              labelMap: [
                { value: 1990, label: "" },
                { value: 2010, label: "" },
                { value: 2030, label: "" },
                { value: 2050, label: "" },
                { value: 2070, label: "" }
              ]
            }
          }
        },
        y: {
          line: { color: "#888" },
          title: false,
          ticksAndLabels: false
        }
      }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0359-original-source-font-widths",
        measurements: [
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2080", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createTitle({
      text: "UK bonds - issue and duration dates",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#000" },
      offset: -10.953125
    })
    .editTitle({ alongOffset: -1, gap: 3.34375 })
    .editTitle({
      subtitle: "Source: DMO\n",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "#000" }
    });
}