import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-76573a465e2b6a33 (basic-charts.md, createScatterPlot/createLinePlot), doc-2b2e3149e57e859d (action-cards.json createScatterPlot), doc-ef5a28c0c3f3c920 (axes/complete.md, underlay), doc-fc16465e900ecb05 (examples/README.md color/legend transitions)

export function buildChart() {
  return chart()
    .createCanvas({ width: 712, height: 446, margin: { left: 64, top: 9, right: 48, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1181-original-svg-text", measurements: [
      { text: "−0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 19.75 },
      { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 }
    ] } })
    .createData({ values: data })
    .createComputedData({ id: "typedX", as: "sourceX", expression: { op: "toNumber", operand: { field: "r2_test" } } })
    .createComputedData({ id: "typedY", as: "sourceY", expression: { op: "toNumber", operand: { field: "training time (s)" } } })
    .createLinePlot({
      x: { field: "sourceX", scale: { domain: [-0.6, 1] } },
      y: { field: "sourceY", scale: { type: "symlog", domain: [0, 220000], constant: 1 } },
      guides: false
    }).createXAxis({
      ticksAndLabels: {
        values: [-0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: {
          fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".1f", offset: 5.5, alongOffset: 0.5, flush: true,
          labelMap: [
            { value: -0.6, label: "−0.6" },
            { value: -0.5, label: "−0.5" },
            { value: -0.4, label: "−0.4" },
            { value: -0.3, label: "−0.3" },
            { value: -0.2, label: "−0.2" },
            { value: -0.1, label: "−0.1" }
          ]
        }
      },
      title: { text: "r2_test", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000],
        ticks: { length: 5, alongOffset: 0.5 },
        labels: {
          fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625,
          labelMap: [
            { value: 80000, label: "" },
            { value: 120000, label: "" },
            { value: 160000, label: "" },
            { value: 180000, label: "" },
            { value: 220000, label: "" }
          ]
        }
      },
      title: { text: "training time (s)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 51.5693359375, alongOffset: 0.5 }
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicks({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createHorizontalGrid({ color: "#ddd", values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000, 200000, 220000] })
    .createVerticalGrid({ color: "#ddd", values: [-0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] })
    .editLineMark({ curve: "monotone-steffen", strokeWidth: 2 })
    .encodeColor({ field: "g2", scale: { domain: ["-1", "0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"] } })
    .createScatterPlot({
      x: { field: "sourceX", scale: { domain: [-0.6, 1] } },
      y: { field: "sourceY", scale: { type: "symlog", domain: [0, 220000], constant: 1 } },
      guides: false
    })
    .editPointMark({ fill: "transparent", opacity: 1 })
    .encodePointRadius({ value: 4.47213595499958 })
    .encodeStroke({ field: "g2", scale: { domain: ["-1", "0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"] } })
    .editPointMark({ strokeWidth: 2 })
    .createTextMark({
      id: "textPlot",
      data: "typedY"
    })
    .encodeX({
      field: "sourceX",
      scale: { domain: [-0.6, 1] }
    })
    .encodeY({
      field: "sourceY",
      scale: { type: "symlog", domain: [0, 220000], constant: 1 }
    })
    .encodeText({
      field: "algorithm"
    })
    .editTextMark({ fontFamily: "sans-serif", fontSize: 7, align: "left" })
    .editTextMark({ dx: 4, dy: 4.171875, baseline: "middle" })
    .encodeColor({ field: "g2", scale: { domain: ["-1", "0", "1", "2", "3", "4"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b"] } })
    .createLegend({ target: "textPlot", channels: ["color"], title: "g2" })
    .editLegend({
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
      titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "point", size: 5.75 }] }
    });
}