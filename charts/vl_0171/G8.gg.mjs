import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({
      width: 352,
      height: 395,
      margin: { left: 47, top: 8, right: 5, bottom: 87 }
    })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .createData({ id: "raw", values: data })
    .createErrorBar({
      x: { field: "datamations_x", fieldType: "quantitative", scale: { domain: [0.5, 2.5], nice: false } },
      y: { field: "datamations_y_raw", extent: "stderr", scale: { domain: [0.223196949351363, 0.310874609783295], nice: false } }
    })
    .editErrorBar({ caps: false, stroke: "black", strokeWidth: 1 })
    .createScatterPlot({ data: "raw", x: "datamations_x", y: "datamations_y", guides: false })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "0171-source-fonts",
        measurements: [
          { text: "David Justice", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 59.46875 },
          { text: "Derek Jeter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.6875 },
          { text: "player", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.421875 },
          { text: "0.23", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.24", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.25", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.26", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.27", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.28", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.29", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.30", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "0.31", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.46875 },
          { text: "mean(is_hit)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 64.796875 }
        ]
      }
    })
    .createHorizontalGrid({
      values: [0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31]
    })
    .createVerticalGrid({
      values: [1, 2]
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [1, 2],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7.5,
          alongOffset: 0.5,
          rotation: -1.5707963267948966
        }
      },
      title: { text: "player", fontSize: 11, offset: 77.0458984375 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({
      color: "black",
      labelMap: [
        { value: 1, label: "David Justice" },
        { value: 2, label: "Derek Jeter" }
      ]
    })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "mean(is_hit)", fontSize: 11, offset: 34.884765625, rotation: -1.5707963267948966 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".2f" })
    .editYAxisTitle({ color: "black", fontWeight: 700 });
}