// DOCS: doc-2bd5de4bd99e314a (Basic Charts — createScatterPlot facade), doc-e790db38fc2a278a (createScatterPlot card), doc-48c72317a1a99e17 (guides)
import { chart, hconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const child0 = chart()
    // DOCS: doc-e790db38fc2a278a
    .createCanvas({ width: 256, height: 249, margin: { top: 11, right: 11, bottom: 38, left: 45 } })
    .editCanvas({ plot: { width: 200, height: 200 }, plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-0022-fonts",
        measurements: [
          { text: ":01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":03", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":04", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: "date (seconds)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 77.62841796875 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.29150390625 },
          { text: "00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "date (minutes)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.173828125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dateStamp0",
      as: "dateStamp0",
      expression: { op: "parseTime", operand: { op: "concat", operands: [{ field: "date" }, { constant: " UTC" }] } }
    })
    .createTimeUnitData({ id: "minuteStarts0", field: "dateStamp0", unit: "minute" })
    .createComputedData({
      id: "sourceX0",
      as: "sourceX0",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: { op: "subtract", left: { field: "dateStamp0" }, right: { field: "dateStamp0_minute" } }
      }
    })
    .createScatterPlot({
      x: { field: "sourceX0", fieldType: "temporal", temporalUnit: "timestamp" },
      y: "price",
      guides: false
    })
    .editXScale({ domain: [1325376001000, 1325376005000] })
    .editYScale({ domain: [0, 200] })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [1325376001000, 1325376002000, 1325376003000, 1325376004000, 1325376005000],
          ticks: { color: "#888", lineWidth: 1, length: 5 },
          labels: {
            labelMap: [
              { value: 1325376001000, label: ":01" },
              { value: 1325376002000, label: ":02" },
              { value: 1325376003000, label: ":03" },
              { value: 1325376004000, label: ":04" },
              { value: 1325376005000, label: ":05" }
            ],
            color: "black", fontSize: 10, fontFamily: "sans-serif",
            offset: 5.5, alongOffset: 0.5, flush: true
          }
        },
        title: { text: "date (seconds)", color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 27.578125 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { color: "#888", lineWidth: 1, length: 5 },
          labels: {
            labelMap: [
              { value: 0, label: "0" },
              { value: 50, label: "50" },
              { value: 100, label: "100" },
              { value: 150, label: "150" },
              { value: 200, label: "200" }
            ],
            color: "black", fontSize: 10, fontFamily: "sans-serif",
            offset: 6.5, alongOffset: 0.890625
          }
        },
        title: { text: "price", color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 32.1064453125, rotation: -1.5707963267948966 }
      }
    })
    .createGrid({
      horizontal: { values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 },
      vertical: { values: [1325376001000, 1325376002000, 1325376003000, 1325376004000, 1325376005000], color: "#ddd", lineWidth: 1 }
    });

  const child1 = chart()
    // DOCS: doc-e790db38fc2a278a
    .createCanvas({ width: 256, height: 249, margin: { top: 11, right: 11, bottom: 38, left: 45 } })
    .editCanvas({ plot: { width: 200, height: 200 }, plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-0022-fonts",
        measurements: [
          { text: ":01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":03", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":04", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: ":05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.9013671875 },
          { text: "date (seconds)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 77.62841796875 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "price", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 26.29150390625 },
          { text: "00:00", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:15", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "00:40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0244140625 },
          { text: "date (minutes)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 75.173828125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "dateStamp1",
      as: "dateStamp1",
      expression: { op: "parseTime", operand: { op: "concat", operands: [{ field: "date" }, { constant: " UTC" }] } }
    })
    .createTimeUnitData({ id: "minuteStarts1", field: "dateStamp1", unit: "minute" })
    .createTimeUnitData({ id: "hourStarts1", field: "dateStamp1", unit: "hour" })
    .createComputedData({
      id: "sourceX1",
      as: "sourceX1",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: { op: "subtract", left: { field: "dateStamp1_minute" }, right: { field: "dateStamp1_hour" } }
      }
    })
    .createScatterPlot({
      x: { field: "sourceX1", fieldType: "temporal", temporalUnit: "timestamp" },
      y: "price",
      guides: false
    })
    .editXScale({ domain: [1325376000000, 1325378400000] })
    .editYScale({ domain: [0, 200] })
    .encodeStroke({ value: "#4c78a8" })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .createAxes({
      x: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [1325376000000, 1325376300000, 1325376600000, 1325376900000, 1325377200000, 1325377500000, 1325377800000, 1325378100000, 1325378400000],
          ticks: { color: "#888", lineWidth: 1, length: 5 },
          labels: {
            labelMap: [
              { value: 1325376000000, label: "00:00" },
              { value: 1325376300000, label: "" },
              { value: 1325376600000, label: "00:10" },
              { value: 1325376900000, label: "" },
              { value: 1325377200000, label: "00:20" },
              { value: 1325377500000, label: "" },
              { value: 1325377800000, label: "00:30" },
              { value: 1325378100000, label: "" },
              { value: 1325378400000, label: "00:40" }
            ],
            color: "black", fontSize: 10, fontFamily: "sans-serif",
            offset: 5.5, alongOffset: 0.5, flush: true
          }
        },
        title: { text: "date (minutes)", color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 27.578125 }
      },
      y: {
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: { color: "#888", lineWidth: 1, length: 5 },
          labels: {
            labelMap: [
              { value: 0, label: "0" },
              { value: 50, label: "50" },
              { value: 100, label: "100" },
              { value: 150, label: "150" },
              { value: 200, label: "200" }
            ],
            color: "black", fontSize: 10, fontFamily: "sans-serif",
            offset: 6.5, alongOffset: 0.890625
          }
        },
        title: { text: "price", color: "black", fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, offset: 32.1064453125, rotation: -1.5707963267948966 }
      }
    })
    .createGrid({
      horizontal: { values: [0, 50, 100, 150, 200], color: "#ddd", lineWidth: 1 },
      vertical: { values: [1325376000000, 1325376300000, 1325376600000, 1325376900000, 1325377200000, 1325377500000, 1325377800000, 1325378100000, 1325378400000], color: "#ddd", lineWidth: 1 }
    });

  return hconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 10,
    align: "start"
  });
}