// DOCS: doc-ffe86c29c7aa628b — createGuides requires the encoded axis/grid/legend resources to exist first; this G1 module builds exactly those prerequisites in order.
// DOCS: doc-8a4f6f06e0d37d5e — module structure follows the tutorial pattern: chart() chained actions with data imported locally.

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 210,
      height: 210,
      margin: { left: 5, right: 5, top: 5, bottom: 5 }
    })
    .editCanvas({
      plotBorder: { underlay: true }
    })
    .createData({
      values: data
    })
    .createComputedData({
      id: "glyphAreas",
      as: "sourceGlyphArea",
      expression: {
        op: "multiply",
        left: {
          op: "add",
          left: { constant: 4 },
          right: {
            op: "multiply",
            left: { constant: 39.666666666666664 },
            right: { field: "valC" }
          }
        },
        right: {
          op: "if",
          condition: { op: "eq", left: { field: "valD" }, right: { constant: "A" } },
          then: { constant: 0.7853981633974483 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "valD" }, right: { constant: "C" } },
            then: { constant: 0.4330127018922193 },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "valD" }, right: { constant: "D" } },
              then: { constant: 0.5376 },
              else: { constant: 1 }
            }
          }
        }
      }
    })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valA" },
      guides: false
    })
    .editYScale({ domain: [0, 40] })
    .encodeColor({
      field: "valB",
      fieldType: "nominal",
      scale: {
        domain: [0, 1, 4, 5, 6, 8],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"]
      }
    })
    .encodeSize({
      field: "sourceGlyphArea",
      scale: { domain: [0, 361], range: [0, 361] }
    })
    .encodeShape({
      field: "valD",
      scale: {
        domain: ["A", "B", "C", "D"],
        range: ["circle", "square", "triangle-up", "plus"]
      }
    })
    .editPointMark({
      stroke: false
    })
    .encodeOpacity({
      value: 0.7
    })
    .createXAxis({
      ticksAndLabels: {
        values: [978307200000, 978393600000, 978480000000, 978566400000, 978652800000, 978739200000, 978825600000, 978912000000],
        ticks: { length: 4.5, alongOffset: 0.5 },
        labels: {
          labelMap: [
            { value: 978307200000, label: "" },
            { value: 978393600000, label: "" },
            { value: 978480000000, label: "" },
            { value: 978566400000, label: "" },
            { value: 978652800000, label: "" },
            { value: 978739200000, label: "" },
            { value: 978825600000, label: "" },
            { value: 978912000000, label: "" }
          ]
        }
      },
      title: false,
      underlay: true
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { length: 4.5, alongOffset: 0.5 },
        labels: {
          labelMap: [
            { value: 0, label: "" },
            { value: 10, label: "" },
            { value: 20, label: "" },
            { value: 30, label: "" },
            { value: 40, label: "" }
          ]
        }
      },
      title: false,
      underlay: true
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({
      vertical: {
        values: [978307200000, 978393600000, 978480000000, 978566400000, 978652800000, 978739200000, 978825600000, 978912000000],
        color: "#ddd",
        alongOffset: 0.5
      },
      horizontal: {
        values: [0, 10, 20, 30, 40],
        color: "#ddd",
        alongOffset: 0.5
      }
    });
}