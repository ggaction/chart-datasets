import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71, doc-cbebf93910cdde5e

export function buildChart() {
  const xBinding = {
    field: "date_day",
    fieldType: "ordinal",
    scale: {
      type: "point",
      domain: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000]
    }
  };
  const yBinding = {
    field: "value",
    fieldType: "quantitative",
    scale: { domain: [0, 5] }
  };
  const colorBinding = {
    field: "symbol",
    fieldType: "nominal",
    scale: {
      type: "ordinal",
      domain: ["Boredom", "Compassion", "Emptiness", "Irritability", "Pride", "Self respect", "Social Anxiety", "Worthlessness"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    }
  };
  return chart()
    .createCanvas({ width: 481, height: 576, margin: { left: 36, top: 28, right: 5, bottom: 324 } })
    .createData({ id: "emotions", values: data })
    .createTimeUnitData({ id: "emotions_days", field: "date", unit: "day" })
    .createTitle({ text: "Emotions", offset: -4, titleStyle: { fontSize: 13, fontWeight: 700, color: "rgb(0, 0, 0)" } })
    .createLinePlot({
      x: xBinding,
      y: yBinding,
      guides: false
    })
    .encodeColor({ field: "symbol", fieldType: "nominal" })
    .editColorScale({
      target: "linePlot",
      domain: ["Boredom", "Compassion", "Emptiness", "Irritability", "Pride", "Self respect", "Social Anxiety", "Worthlessness"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editLineMark({ strokeWidth: 2.7, curve: "cardinal" })
    .editLineMark({ tension: 0.9, opacity: 1 })
    .createScatterPlot({
      x: xBinding,
      y: yBinding,
      guides: false
    })
    .encodeColor({ field: "symbol" })
    .editColorScale({
      target: "scatterPlot",
      domain: ["Boredom", "Compassion", "Emptiness", "Irritability", "Pride", "Self respect", "Social Anxiety", "Worthlessness"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editPointMark({ opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createAxes({
      x: {
        title: false,
        ticksAndLabels: {
          values: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000],
          ticks: { length: 0 },
          labels: {
            offset: 32,
            color: "rgba(0, 0, 0, 0.4)",
            fontSize: 12,
            fontFamily: "Inter",
            fontWeight: 500,
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
        }
      },
      y: {
        title: { text: "Intensity", fontSize: 11, fontWeight: 700, color: "rgb(0, 0, 0)", offset: 28 },
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5],
          ticks: { length: 0 },
          labels: { offset: 10, color: "rgba(0, 0, 0, 0.4)", fontSize: 12, fontFamily: "Inter", fontWeight: 500 }
        }
      }
    })
    .createLegend({
      position: "bottom",
      columns: 2,
      offset: 100
    })
    .editLegend({
      labels: { fontSize: 14, fontFamily: "Inter", fontWeight: 600, color: "rgba(0, 0, 0, 0.75)" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 6.123724356957945 }] }
    });
}