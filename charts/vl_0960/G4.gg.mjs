import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-04fa8d3ace4022d6

const yDomain = [
  "Advanced nuclear",
  "Battery storage power",
  "Coal (with SO2 and NOx controls)",
  "Conventional hydropower",
  "Fuel cells",
  "Gas/oil combined cycle power plant",
  "Geothermal",
  "Offshore wind",
  "Onshore wind",
  "Solar PV (fixed)",
  "Solar PV (tracking)"
];

const colorRange = [
  "rgb(43, 69, 95)",
  "rgb(31, 82, 135)",
  "rgb(28, 104, 138)",
  "rgb(25, 125, 140)",
  "rgb(33, 147, 123)",
  "rgb(41, 168, 105)",
  "rgb(95, 187, 84)",
  "rgb(149, 206, 63)",
  "rgb(202, 219, 32)",
  "rgb(255, 232, 0)",
  "rgb(255, 244, 128)"
];

const xLabelMap = [
  { value: 0, label: "0" },
  { value: 1000, label: "" },
  { value: 2000, label: "2,000" },
  { value: 3000, label: "" },
  { value: 4000, label: "4,000" },
  { value: 5000, label: "" },
  { value: 6000, label: "6,000" },
  { value: 7000, label: "" },
  { value: 8000, label: "8,000" }
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 476,
      height: 374,
      margin: { top: 37, right: 6, bottom: 37, left: 170 }
    })
    .createData({ values: data })
       .createComputedData({
      id: "costNum",
      as: "CostNum",
      expression: { op: "toNumber", operand: { field: "Cost" } }
    })
    .createWindowData({
      id: "joinedCost",
      operations: [{ op: "movingMean", field: "CostNum", as: "AverageCost", frame: { preceding: 11, following: 11 } }]
    })
    .createTitle({
      text: "Capital costs",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ gap: 1, offset: -12, alongOffset: -164 })
    .editTitle({
      subtitle: "Estimated overnight capital costs in $/kW, Source: Wikipedia",
      titleStyle: { fontWeight: 700 },
      subtitleStyle: { fontWeight: 400 }
    })
    .createBarPlot({
      x: { field: "CostNum", fieldType: "quantitative" },
      y: { field: "Energy", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 8000] })
    .editYScale({ domain: yDomain, paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "Energy", layout: "overlay" })
    .editColorScale({ domain: yDomain, range: colorRange })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: xLabelMap }
      },
      title: { text: "Cost ($/kW)", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createSummaryData({
      id: "meanRuleData",
      aggregates: [{ op: "mean", field: "AverageCost", as: "AverageCost_mean" }]
    })
    .createRuleMark({ id: "meanRule", stroke: "red", strokeWidth: 1.5 })
    .encodeX({ target: "meanRule", field: "AverageCost_mean", fieldType: "quantitative" });
}