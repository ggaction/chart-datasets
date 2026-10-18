// DOCS: doc-b9261a4b2909a353, doc-76573a465e2b6a33, doc-203db321ccc2e60f
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 254,
      height: 352,
      margin: { left: 44, top: 55, right: 10, bottom: 37 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0009-original-source-font-widths",
        measurements: [
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2005", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2010", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2015", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "2020", width: 22.25 },
          { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", text: "Year", width: 23.265625 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "300", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "350", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "400", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "450", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "500", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "550", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "600", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", text: "650", width: 16.6875 },
          { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", text: "Average wage, £", width: 85.8125 },
          { fontFamily: "sans-serif", fontSize: 12.5, fontWeight: 400, fontStyle: "normal", text: "Private Sector", width: 78.515625 },
          { fontFamily: "sans-serif", fontSize: 12.5, fontWeight: 400, fontStyle: "normal", text: "Public Sector", width: 73.65625 },
          { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", text: "Type", width: 24.875 },
          { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", text: "Seasonally Adjusted Total Pay", width: 187.125 },
          { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", text: "Excluding Arrears, Source: ONS", width: 142.84375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "wagesClean",
      as: "DateClean",
      expression: {
        op: "parseTime",
        operand: {
          op: "concat",
          operands: [
            {
                  op: "replaceLiteral",
                  operand: {
                    op: "replaceLiteral",
                    operand: {
                      op: "replaceLiteral",
                      operand: {
                        op: "replaceLiteral",
                        operand: {
                          op: "replaceLiteral",
                          operand: {
                            op: "replaceLiteral",
                            operand: {
                              op: "replaceLiteral",
                              operand: {
                                op: "replaceLiteral",
                                operand: {
                                  op: "replaceLiteral",
                                  operand: {
                                    op: "replaceLiteral",
                                    operand: {
                                      op: "replaceLiteral",
                                      operand: {
                                        op: "replaceLiteral",
                                        operand: { field: "Date" },
                                        search: " JAN",
                                        replacement: "-01"
                                      },
                                      search: " FEB",
                                      replacement: "-02"
                                    },
                                    search: " MAR",
                                    replacement: "-03"
                                  },
                                  search: " APR",
                                  replacement: "-04"
                                },
                                search: " MAY",
                                replacement: "-05"
                              },
                              search: " JUN",
                              replacement: "-06"
                            },
                            search: " JUL",
                            replacement: "-07"
                          },
                          search: " AUG",
                          replacement: "-08"
                        },
                        search: " SEP",
                        replacement: "-09"
                      },
                      search: " OCT",
                      replacement: "-10"
                    },
                    search: " NOV",
                    replacement: "-11"
                  },
                  search: " DEC",
                  replacement: "-12"
                },
            { constant: "-01" }
          ]
        },
        format: "%Y-%m-%d"
      }
    })
    .createLinePlot({
      x: {
        field: "DateClean",
        fieldType: "temporal"
      },
      y: {
        field: "Value"
      },
      guides: false
    })
    .editXScale({ domain: [978307200000, 1661990400000], nice: false })
    .editYScale({ domain: [300, 650], nice: false })
    .encodeColor({
      field: "Type",
      fieldType: "nominal",
      scale: {
        domain: ["Private Sector", "Public Sector"],
        range: ["rgb(25, 125, 140)", "rgb(149, 206, 63)"]
      }
    })
    .editLineMark({ curve: "basis" })
    .createPointMark({ id: "invisiblePoint", data: "wagesClean" })
    .encodeX({
      field: "DateClean",
      fieldType: "temporal",
      scale: { domain: [978307200000, 1661990400000], nice: false }
    })
    .encodeY({ datum: 475, scale: { domain: [300, 650], nice: false } })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .encodeOpacity({ value: 0 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createPointMark({ id: "visiblePoint", data: "wagesClean" })
    .encodeX({
      field: "DateClean",
      fieldType: "temporal",
      scale: { domain: [978307200000, 1661990400000], nice: false }
    })
    .encodeY({ field: "Value", scale: { domain: [300, 650], nice: false } })
    .encodeStroke({
      field: "Type",
      fieldType: "nominal",
      scale: {
        domain: ["Private Sector", "Public Sector"],
        range: ["rgb(25, 125, 140)", "rgb(149, 206, 63)"]
      }
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 1 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createRuleMark({ id: "typeRule", data: "wagesClean", stroke: "gray" })
    .editRuleMark({ target: "typeRule", strokeWidth: 1 })
    .encodeX({
      field: "DateClean",
      fieldType: "temporal",
      scale: { domain: [978307200000, 1661990400000], nice: false }
    })
    .createTextMark({ id: "typeText", source: "visiblePoint", inheritColor: "stroke" })
    .editTextMark({ fontSize: 15, fontWeight: 700 })
    .editTextMark({ align: "right", baseline: "middle" })
    .editTextMark({ dx: 5, dy: -30 })
    .createTitle({
      text: "Seasonally Adjusted Total Pay",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -10.124553680419922, alongOffset: -38.6845703125 })
    .editTitle({ subtitle: "Excluding Arrears, Source: ONS", gap: 3.34375 })
    .createGrid({
      horizontal: {
        values: [300, 350, 400, 450, 500, 550, 600, 650],
        color: "#ddd",
        lineWidth: 1
      },
      vertical: {
        values: [1104537600000, 1262304000000, 1420070400000, 1577836800000],
        color: "#ddd",
        lineWidth: 1
      }
    })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 5.5,
            alongOffset: 0.5,
            format: "%Y",
            flush: true
          }
        },
        title: {
          text: "Year",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 27.578125,
          alongOffset: 0.5
        }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [300, 350, 400, 450, 500, 550, 600, 650],
          ticks: { length: 5, color: "#888", lineWidth: 1 },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 6.5,
            align: "right",
            alongOffset: 0.890625,
            format: ".0f"
          }
        },
        title: {
          text: "Average wage, £",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 32.1064453125,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom-right",
        columns: 1,
        title: "Type",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 12.5, color: "black" },
        symbol: {
          layers: [
            {
              type: "point",
              size: 7,
              stroke: "none",
              strokeWidth: 0,
              opacity: 1
            }
          ]
        }
      }
    });
}