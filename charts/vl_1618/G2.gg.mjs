import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-b65059c5600823f2 docs/api/data/summaries-and-shaping.md#createsummarydata-id-source-groupby-aggregates-members
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 105, top: 5, right: 7, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1618-source-fonts",
        measurements: [
          { text: "25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "35", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "45", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "yield", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 25.078125 },
          { text: "Glabron", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "Manchuria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 46.703125 },
          { text: "No. 457", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "No. 462", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "No. 475", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.03125 },
          { text: "Peatland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.484375 },
          { text: "Svansota", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.703125 },
          { text: "Trebi", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.421875 },
          { text: "Velvet", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.25 },
          { text: "Wisconsin No. 38", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 77.8125 },
          { text: "variety", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 35.484375 }
        ]
      }
    })
    .createData({ values: data })
    .createSummaryData({
      id: "intervals",
      groupBy: "variety",
      aggregates: [
        { op: "mean", field: "yield", as: "mean" },
        { op: { op: "ciLower", method: { type: "bootstrap", seed: 1 }, level: 0.95 }, field: "yield", as: "lower" },
        { op: { op: "ciUpper", method: { type: "bootstrap", seed: 1 }, level: 0.95 }, field: "yield", as: "upper" }
      ]
    })
    .createFoldData({
      id: "caps",
      fields: ["lower", "upper"],
      as: { key: "endpointRole", value: "endpoint" }
    })
    .createSortedData({
      id: "orderedCaps",
      sortBy: [{ field: "endpointRole", order: "ascending" }]
    })
    .createComputedData({
      id: "cap-left",
      as: "cap_left",
      expression: { op: "subtract", left: { field: "endpoint" }, right: { constant: 0.055 } }
    })
    .createComputedData({
      id: "cap-right",
      as: "cap_right",
      expression: { op: "add", left: { field: "endpoint" }, right: { constant: 0.055 } }
    })
    .createBarPlot({
      x: {
        lower: "cap_left",
        upper: "cap_right"
      },
      y: {
        field: "variety",
        fieldType: "ordinal",
        scale: {
          type: "band",
          domain: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"],
          paddingInner: 0.25,
          paddingOuter: 0.125
        }
      },
      guides: false
    })
    .editXScale({ domain: [24, 46], nice: false, zero: false })
    .editBarMark({ fill: "#4c78a8", stroke: "blue", opacity: 0.7 })
    .encodeBarWidth({ pixels: 15 })
    .editBarMark({ strokeWidth: 1 })
    .createErrorBar({
      data: "intervals",
      x: { center: "mean", lower: "lower", upper: "upper", scale: { id: "x" } },
      y: { field: "variety", fieldType: "ordinal", scale: { id: "y" } }
    })
    .editErrorBar({ caps: false, stroke: "black", strokeWidth: 1 })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [25, 30, 35, 40, 45],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true }
          },
          title: { text: "yield", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
        },
        y: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: ["Glabron", "Manchuria", "No. 457", "No. 462", "No. 475", "Peatland", "Svansota", "Trebi", "Velvet", "Wisconsin No. 38"],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.390625 }
          },
          title: { text: "variety", fontSize: 11, fontWeight: 700, color: "black", offset: 93.2294921875, alongOffset: 0.5, rotation: -1.5707963267948966 }
        }
      },
      grid: {
        horizontal: false,
        vertical: { values: [25, 30, 35, 40, 45], color: "#ddd" }
      }
    });
}