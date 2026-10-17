import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({ width: 500, height: 435, margin: { left: 54, top: 40, right: 6, bottom: 55 } })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createComputedData({
      id: "eng_num",
      as: "eng_num",
      expression: { op: "toNumber", operand: { field: "eng_mean" } }
    })
    .createComputedData({
      id: "gdp_num",
      as: "gdp_num",
      expression: { op: "toNumber", operand: { field: "gdp_mean" } }
    })
    .createComputedData({
      id: "growth_group",
      as: "Growth Group",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Cluster" }, right: { constant: "1" } },
        then: { constant: "High gorwth" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "Cluster" }, right: { constant: "2" } },
          then: { constant: "Moderate less effecient growth" },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "Cluster" }, right: { constant: "0" } },
            then: { constant: "Low growth" },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "Cluster" }, right: { constant: "3" } },
              then: { constant: "China" },
              else: { constant: "Moderate growth" }
            }
          }
        }
      }
    })
    .createScatterPlot({ x: "eng_num", y: "gdp_num", guides: false })
    .encodeStroke({ field: "Growth Group" })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .editStrokeScale({ target: "scatterPlot", domain: ["High gorwth", "Low growth", "Moderate less effecient growth"], range: ["red", "black", "purple", "orange", "darkblue"] })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .filterData({ id: "china", field: "Country", predicate: { op: "eq", value: "China" } })
    .createTextMark({ id: "chinaText", data: "china", align: "center" })
    .encodeX({ target: "chinaText", field: "eng_num", fieldType: "quantitative" })
    .encodeY({ target: "chinaText", field: "gdp_num", fieldType: "quantitative" })
    .encodeText({ target: "chinaText", field: "Country" })
    .editTextMark({ baseline: "middle", dx: -10, dy: -8 })
    .editTextMark({ fill: "darkred", fontSize: 10, fontWeight: 400 })
    .editXScale({ domain: [-1, 9] })
    .editYScale({ domain: [0, 10] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0901_titles",
        measurements: [
          {
            text: "China and Everyone Else: 40 Years of Energy and GDP Growth",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "normal",
            width: 386.78125
          },
          {
            text: "Source World Bank & BP",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 111.546875
          }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Mean Rate of % Change in Energy Consumption", fontSize: 11, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Mean Rate of % Change in GDP Growth", fontSize: 11, offset: 23.623046875 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        at: { x: -49, y: 359 },
        direction: "horizontal",
        title: "Growth Group",
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "none", strokeWidth: 1.5 }] },
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, align: "left" }
      }
    })
    .editLegendTitle({ fontWeight: 700, color: "black" })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } })
    .createTitle({ text: "China and Everyone Else: 40 Years of Energy and GDP Growth", titleStyle: { fontSize: 13 }, subtitleStyle: { fontSize: 10 } })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { fontWeight: 400, color: "black" } })
    .editTitle({ align: "left", alongOffset: -49 })
    .editTitle({ subtitle: "Source World Bank & BP", gap: 3.34375, offset: -10.953125 });
}