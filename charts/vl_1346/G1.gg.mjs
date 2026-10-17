import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-e790db38fc2a278a, doc-e8d8c6aef74192f0
    .createCanvas({
      width: 640,
      height: 480,
      margin: { left: 44, top: 27, right: 10, bottom: 37 }
    })
    // DOCS: doc-2e6240c00cb297cc
    .createData({ id: "source", values: data })
    // Value arrives as numeric strings; derive a numeric field first.
    .createComputedData({
      id: "ValueNum",
      as: "ValueNum",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    // DOCS: doc-e790db38fc2a278a, doc-76573a465e2b6a33
    .createScatterPlot({
      x: { field: "Timestamp", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    // Resolved source scale domains (finite epoch ms / numeric).
    .editXScale({ domain: [1549152000000, 1549324800000] })
    .editYScale({ domain: [-10, 90] })
    // Unfilled circles: transparent fill, constant stroke, source opacity.
    .editPointMark({ fill: "none", stroke: "#4c78a8", opacity: 0.7 })
    // Stroke is now active; apply source stroke width.
    .editPointMark({ strokeWidth: 2 })
    // Source size 30 (area) => radius sqrt(30)/2.
    .encodePointRadius({ value: 2.738612787505166 })
    // DOCS: doc-48c72317a1a99e17
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            1549152000000,
            1549173600000,
            1549195200000,
            1549216800000,
            1549238400000,
            1549260000000,
            1549281600000,
            1549303200000,
            1549324800000
          ],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            labelMap: [
              { value: 1549152000000, label: "Feb 03" },
              { value: 1549173600000, label: "06 AM" },
              { value: 1549195200000, label: "12 PM" },
              { value: 1549216800000, label: "06 PM" },
              { value: 1549238400000, label: "Mon 04" },
              { value: 1549260000000, label: "06 AM" },
              { value: 1549281600000, label: "12 PM" },
              { value: 1549303200000, label: "06 PM" },
              { value: 1549324800000, label: "Tue 05" }
            ]
          }
        },
        title: { text: "Timestamp", fontSize: 11, fontWeight: "bold", offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          labels: { fontSize: 10, offset: 7 },
          ticks: { length: 5 }
        },
        title: { text: "Value", fontSize: 11, fontWeight: "bold", offset: 33 }
      }
    })
    // Restore all 17 source ticks while keeping the 9 visible labels.
    .editXAxisTicks({
      values: [
        1549152000000,
        1549162800000, 1549173600000, 1549184400000, 1549195200000,
        1549206000000, 1549216800000, 1549227600000, 1549238400000,
        1549249200000, 1549260000000, 1549270800000, 1549281600000,
        1549292400000, 1549303200000, 1549314000000, 1549324800000
      ]
    })
    // Source paints #ddd grid lines on both axes.
    .createGrid({
      horizontal: {
        color: "#ddd",
        values: [-10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
      },
      vertical: {
        color: "#ddd",
        values: [
          1549152000000,
          1549162800000, 1549173600000, 1549184400000, 1549195200000,
          1549206000000, 1549216800000, 1549227600000, 1549238400000,
          1549249200000, 1549260000000, 1549270800000, 1549281600000,
          1549292400000, 1549303200000, 1549314000000, 1549324800000
        ]
      }
    })
    // Title: tight top margin 27 -> offset = 27 - 16 - 13 = -2 (use -3 per example layout).
    .createTitle({ text: "New Widget", offset: -3, titleStyle: { fontSize: 13 } });
}