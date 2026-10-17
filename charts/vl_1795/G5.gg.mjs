// DOCS: doc-74fc341a49e892f8, doc-b30469a9489ccd34, doc-0a1e48878a814143
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 481, height: 576, margin: { left: 36, top: 28, right: 5, bottom: 324 } })
    .createData({ id: "src", values: data })
    .createComputedData({ id: "ts", as: "ts", expression: { op: "parseTime", operand: { field: "date" } } })
    .createLinePlot({
      x: { field: "ts", fieldType: "nominal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", type: "point", domain: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000] })
    .editYScale({ target: "linePlot", type: "linear", domain: [0, 5] })
    .encodeColor({ field: "symbol", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: ["Binging", "Compare self to others", "Punching self", "Self-harm / cutting", "Substance abuse", "Verbal assualts to others", "Violence towards others"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .editLineMark({ strokeWidth: 2.7, curve: "cardinal", tension: 0.9 })
    .createScatterPlot({
      x: { field: "ts", fieldType: "nominal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", type: "point", domain: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000] })
    .editYScale({ target: "scatterPlot", type: "linear", domain: [0, 5] })
    .encodeColor({ target: "scatterPlot", field: "symbol" })
    .editColorScale({ target: "scatterPlot", domain: ["Binging", "Compare self to others", "Punching self", "Self-harm / cutting", "Substance abuse", "Verbal assualts to others", "Violence towards others"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1, stroke: false })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          offset: 32,
          fontSize: 12,
          rotation: { value: 65, unit: "degrees" },
          labelMap: [
            { value: 1600560000000, label: "Sep 20 Su" },
            { value: 1600646400000, label: "Sep 21 Mo" },
            { value: 1600732800000, label: "Sep 22 Tu" },
            { value: 1600819200000, label: "Sep 23 We" },
            { value: 1600905600000, label: "Sep 24 Th" },
            { value: 1600992000000, label: "Sep 25 Fr" },
            { value: 1601078400000, label: "Sep 26 Sa" }
          ]
        }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5],
        ticks: { length: 0 },
        labels: { offset: 10, fontSize: 12 }
      },
      title: { text: "Intensity", fontSize: 11, offset: 27 }
    })
    .editXAxisLabels({ color: "rgba(0, 0, 0, 0.4)", fontFamily: "Inter", fontWeight: 500 })
    .editYAxisLabels({ color: "rgba(0, 0, 0, 0.4)", fontFamily: "Inter", fontWeight: 500 })
    .editYAxisTitle({ color: "rgb(0, 0, 0)", fontWeight: 700 })
    .createLegend({
      position: "bottom",
      offset: 100,
      columns: 2
    })
    .editLegend({ labels: { fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: "rgba(0, 0, 0, 0.75)" }, titleStyle: { fontSize: 11, fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .createTitle({
      text: "Urges (Ineffective)",
      offset: -3,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" }
    });
}