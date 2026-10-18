import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-4e183c1ba7f7e20b, doc-ce14eb4532f7cec7, doc-e8f87cc635604afc

const method = { type: "bootstrap", seed: 1 };

const xTicks = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400];
const yTicks = [-500, 0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500];

export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 800, height: 400 }, margin: { left: 53, top: 10, right: 60, bottom: 37 }, plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1259-original-source-font-widths", measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "1,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "Iteration", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 43.40625 },
      { text: "−500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
      { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
      { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "4,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "5,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "6,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
      { text: "Return (95% CIs)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 88.03125 },
      { text: "SAC", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.5625 },
      { text: "Agent", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 31.171875 }
    ] } })
    .createData({ values: data })
    .createSummaryData({ id: "intervals", groupBy: ["Iteration", "Agent"], aggregates: [
      { field: "Value", op: "mean", as: "meanValue" },
      { field: "Value", op: { op: "ciLower", method }, as: "ciLower" },
      { field: "Value", op: { op: "ciUpper", method }, as: "ciUpper" }
    ] })
    .createAreaPlot({
      x: { field: "Iteration" },
      y: { lower: "ciLower", upper: "ciUpper" },
      guides: false
    })
    .editXScale({ domain: [0, 3500] })
    .editYScale({ domain: [-500, 6500] })
    .encodeColor({ field: "Agent", scale: { palette: "tableau10" } })
    .editAreaMark({ opacity: 0.3 })
    .createLinePlot({
      x: "Iteration",
      y: "meanValue",
      guides: false
    })
    .encodeColor({ field: "Agent" })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: xTicks,
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true }
        },
        title: { text: "Iteration", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5 }
      },
      y: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createAxes({
      x: false,
      y: {
        ticksAndLabels: {
          values: yTicks,
          ticks: { length: 5, alongOffset: -0.5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625, format: ",.0f", labelMap: [{ value: -500, label: "−500" }] }
        },
        title: { text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", offset: 40.4462890625, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .createGrid({
      vertical: { values: xTicks, color: "#ddd" },
      horizontal: { values: yTicks, color: "#ddd" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "areaPlot",
        titleStyle: { fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", stroke: "#4c78a8", strokeWidth: 1.5, opacity: 0.3 }] }
      }
    });
}