import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-f9bdba511759fd0a, doc-55bc813b8b74dd08, doc-471cb9289c01f96c

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 249,
      margin: { left: 69, top: 27, right: 5, bottom: 22 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0194-all12",
        measurements: [
          { text: "Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.5625 },
          { text: "Americas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.6875 },
          { text: "Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.453125 },
          { text: "Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.25 },
          { text: "$0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "$20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "$40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "$60,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "$80,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "$100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.71875 },
          { text: "GDP per capita", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 78.671875 },
          { text: "Income distributions by region, 2017", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 226.109375 }
        ]
      }
    })
    .createData({ values: data })
    .filterData({ id: "year2017", field: "year", predicate: { op: "eq", value: "2017" } })
    .createComputedData({
      id: "numericGDP",
      as: "numericGDP",
      expression: { op: "toNumber", operand: { field: "gdpPercap" } }
    })
    .createSummaryData({
      id: "boxSummary",
      groupBy: ["region"],
      aggregates: [
        { op: "q1", field: "numericGDP", as: "q1" },
        { op: "median", field: "numericGDP", as: "median" },
        { op: "q3", field: "numericGDP", as: "q3" },
        { op: { op: "first", orderBy: "gdpPercap" }, field: "numericGDP", as: "lexMin" },
        { op: { op: "last", orderBy: "gdpPercap" }, field: "numericGDP", as: "lexMax" }
      ]
    })
    .createComputedData({
      id: "boxSummaryMin",
      as: "visibleMin",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "lexMin" }, right: { field: "q1" } },
        then: { field: "lexMin" },
        else: { field: "q1" }
      }
    })
    .createComputedData({
      id: "boxSummaryMax",
      as: "visibleMax",
      expression: {
        op: "if",
        condition: { op: "gt", left: { field: "lexMax" }, right: { field: "q3" } },
        then: { field: "lexMax" },
        else: { field: "q3" }
      }
    })
    .createBoxPlot({
      x: {
        field: "region",
        fieldType: "nominal",
        scale: { type: "band", domain: ["Africa", "Americas", "Asia", "Europe"], paddingInner: 0, paddingOuter: 0 }
      },
      summary: {
        min: "visibleMin",
        q1: "q1",
        median: "median",
        q3: "q3",
        max: "visibleMax"
      },
      whisker: { type: "minmax", caps: false, stroke: "black", strokeWidth: 1 }
    })
    .editBoxPlot({ width: { pixels: 80 }, box: { stroke: "transparent", strokeWidth: 0 }, median: { stroke: "white", strokeWidth: 1, width: { pixels: 80 } } })
    .encodeOpacity({ target: "boxPlotMedian", value: 0.7 })
    .encodeColor({
      field: "region",
      layout: "overlay",
      scale: { domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] }
    })
    .editYScale({ domain: [0, 100000], nice: false })
    .createAxes({
      x: {
        line: false,
        ticksAndLabels: {
          values: ["Africa", "Americas", "Asia", "Europe"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 5.5 }
        },
        title: false
      },
      y: {
        line: false,
        ticksAndLabels: {
          values: [0, 20000, 40000, 60000, 80000, 100000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 6.5,
            alongOffset: 0.890625,
            labelMap: [
              { value: 0, label: "$0" },
              { value: 20000, label: "$20,000" },
              { value: 40000, label: "$40,000" },
              { value: 60000, label: "$60,000" },
              { value: 80000, label: "$80,000" },
              { value: 100000, label: "$100,000" }
            ]
          }
        },
        title: {
          text: "GDP per capita",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 57.130859375,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({
      horizontal: {
        values: [0, 20000, 40000, 60000, 80000, 100000],
        color: "#ddd",
        lineWidth: 1
      }
    })
    .createTitle({
      text: "Income distributions by region, 2017",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    })
    .editTitle({ align: "center" });
}