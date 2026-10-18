import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-76573a465e2b6a33, doc-b9261a4b2909a353, doc-d9ca5de321ee55a7

export function buildChart() {
  return chart()
    .createCanvas({ width: 845, height: 247, margin: { left: 39, top: 10, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1773-original-source-font-widths",
        measurements: [
          { text: "Apr 01, 2010 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.078125 },
          { text: "Jul 01, 2010 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 82.296875 },
          { text: "Oct 01, 2010 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.078125 },
          { text: "Jan 01, 2011 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 84.90625 },
          { text: "Apr 01, 2011 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 84.34375 },
          { text: "Jul 01, 2011 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 81.5625 },
          { text: "Oct 01, 2011 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 84.328125 },
          { text: "Jan 01, 2012 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.640625 },
          { text: "Apr 01, 2012 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.078125 },
          { text: "Jul 01, 2012 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 82.296875 },
          { text: "Oct 01, 2012 00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.078125 },
          { text: "date (year-month-date-hours)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 153.40625 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "70", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Mean of temperature", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 108.203125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "timestamp",
      as: "timestamp",
      expression: {
        op: "parseTime",
        format: "auto",
        operand: {
          op: "concat",
          operands: [
            {
              op: "replaceLiteral",
              search: " ",
              replacement: "T",
              operand: {
                op: "replaceLiteral",
                search: "/",
                replacement: "-",
                operand: {
                  op: "replaceLiteral",
                  search: "/",
                  replacement: "-",
                  operand: { field: "date" }
                }
              }
            },
            { constant: "Z" }
          ]
        }
      }
    })
    .createComputedData({
      id: "tempN",
      as: "tempN",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createTimeUnitData({ id: "tsHour", field: "timestamp", unit: "hour" })
    .createLinePlot({
      x: {
        field: "timestamp_hour",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: {
        field: "tempN",
        aggregate: "mean"
      },
      guides: false
    })
    .editXScale({ domain: [1262307600000, 1356991200000], nice: false })
    .editYScale({ domain: [35, 80], nice: false, zero: false })
    .editLineMark({ strokeWidth: 0.2 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [1270080000000, 1277942400000, 1285891200000, 1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            fontFamily: "sans-serif",
            offset: 5.5,
            alongOffset: 0.5,
            flush: true,
            labelMap: [
              { value: 1270080000000, label: "Apr 01, 2010 00:00" },
              { value: 1277942400000, label: "" },
              { value: 1285891200000, label: "Oct 01, 2010 00:00" },
              { value: 1293840000000, label: "" },
              { value: 1301616000000, label: "Apr 01, 2011 00:00" },
              { value: 1309478400000, label: "" },
              { value: 1317427200000, label: "Oct 01, 2011 00:00" },
              { value: 1325376000000, label: "" },
              { value: 1333238400000, label: "Apr 01, 2012 00:00" },
              { value: 1341100800000, label: "" },
              { value: 1349049600000, label: "Oct 01, 2012 00:00" }
            ]
          }
        },
        title: {
          text: "date (year-month-date-hours)",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          fontFamily: "sans-serif",
          offset: 27.578125,
          alongOffset: 0.5
        }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [40, 50, 60, 70, 80],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            fontFamily: "sans-serif",
            offset: 6.5,
            alongOffset: 0.890625
          }
        },
        title: {
          text: "Mean of temperature",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          fontFamily: "sans-serif",
          offset: 26.544921875,
          alongOffset: 0.5,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({
      horizontal: { values: [40, 50, 60, 70, 80], color: "#ddd", lineWidth: 1 },
      vertical: {
        values: [1270080000000, 1277942400000, 1285891200000, 1293840000000, 1301616000000, 1309478400000, 1317427200000, 1325376000000, 1333238400000, 1341100800000, 1349049600000],
        color: "#ddd",
        lineWidth: 1
      }
    });
}