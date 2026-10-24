import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-d9ca5de321ee55a7, doc-b8b39a4b56776839, doc-28f99e104c0a984e, doc-6236790019770315
export function buildChart() {
  return chart()
    // DOCS: doc-d9ca5de321ee55a7, doc-b8b39a4b56776839, doc-ebc56ee730691844, doc-e7f2fa9f88cd79b5
    .createCanvas({ width: 709, height: 449, margin: { left: 64, top: 12, right: 45, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1182-original-svg-text", measurements: [
      { text: "−0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 }
    ] } })
    // DOCS: doc-28f99e104c0a984e
    .createData({ values: data })
    .createComputedData({ id: "typedX", as: "sourceX", expression: { op: "toNumber", operand: { field: "r2_test" } } })
    .createComputedData({ id: "typedY", as: "sourceY", expression: { op: "toNumber", operand: { field: "model_size" } } })
    // DOCS: doc-9bb354f4e2d46693, doc-76573a465e2b6a33, doc-a7cf09790a5bad6e
    .createLinePlot({
      x: { field: "sourceX", scale: { domain: [-0.6, 1] } },
      y: { field: "sourceY", scale: { type: "symlog", domain: [0, 130000], constant: 1 } },
      guides: false
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: {
            fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".1f",
            offset: 5.5, alongOffset: 0.5, flush: true,
            labelMap: [
              { value: -0.6, label: "−0.6" }, { value: -0.5, label: "−0.5" },
              { value: -0.4, label: "−0.4" }, { value: -0.3, label: "−0.3" },
              { value: -0.2, label: "−0.2" }, { value: -0.1, label: "−0.1" }
            ]
          }
        },
        title: { text: "r2_test", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: {
            fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f",
            offset: 6.5, alongOffset: 0.890625,
            labelMap: [
              { value: 40000, label: "" }, { value: 60000, label: "" }, { value: 80000, label: "" },
              { value: 90000, label: "" }, { value: 110000, label: "" }, { value: 120000, label: "" },
              { value: 130000, label: "" }
            ]
          }
        },
        title: { text: "model_size", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 51.5693359375, alongOffset: 0.5 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 130000] },
      vertical: { color: "#ddd", values: [-0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    })
    .editLineMark({ curve: "monotone-steffen", strokeWidth: 2 })
    .encodeColor({ field: "g1", scale: { domain: ["0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"] } })
    // DOCS: doc-2b2e3149e57e859d, doc-76573a465e2b6a33, doc-a7e245c04b6a2ed2
    .createScatterPlot({
      x: { field: "sourceX", scale: { domain: [-0.6, 1] } },
      y: { field: "sourceY", scale: { type: "symlog", domain: [0, 130000], constant: 1 } },
      guides: false
    })
    .editPointMark({ fill: "transparent", opacity: 1 })
    .encodePointRadius({ value: 4.47213595499958 })
    .encodeStroke({ field: "g1", scale: { domain: ["0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"] } })
    .editPointMark({ strokeWidth: 2 })
    .createTextPlot({
      x: { field: "sourceX", scale: { domain: [-0.6, 1] } },
      y: { field: "sourceY", scale: { type: "symlog", domain: [0, 130000], constant: 1 } },
      text: { field: "algorithm" }
    })
    .editTextMark({ fontFamily: "sans-serif", fontSize: 7, align: "left" })
    .editTextMark({ dx: 4, dy: 4.171875, baseline: "middle" })
    .encodeColor({ field: "g1", scale: { domain: ["0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"] } })
    .createLegend({ target: "textPlot", channels: ["color"], title: "g1" })
    .editLegend({
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
      titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "point", size: 5.75 }] }
    });
}