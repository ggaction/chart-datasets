// DOCS: doc-6c2c08869091f6a0, doc-b257fb08998617a5, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

const teams = ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A"];
const teamColors = ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B"];
const xDomain = [
  "2014 Virginia A (R3)", "2015 Virginia A (R1)", "2014 Virginia A (R8)",
  "2016 Chicago A (R7)", "2016 Michigan A (R7)", "2016 Chicago A (R4)",
  "2015 Penn A (R2)", "2015 Virginia A (R5)", "2016 Michigan A (R5)",
  "2016 Michigan A (R14)", "2013 Yale A (R7)"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 435, height: 355, margin: { left: 70, top: 28, right: 145, bottom: 127 } })
  .editCanvas({ plotBorder: { color: '#4279C1', lineWidth: 1 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "axis_label", fieldType: "nominal" },
      y: { field: "pf", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "team", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: teams, range: teamColors })
    .editXScale({ target: "barPlot", domain: xDomain })
    .editXScale({ target: "barPlot", paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ target: "barPlot", domain: [0, 700] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 12, offset: 7, alongOffset: 4,
          fontFamily: "Helvetica Neue",
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Team", fontSize: 12, offset: 120 }
    })
    .editXAxisLine({
      color: "#023B7F"
    })
    .editXAxisTicks({
      color: "#023B7F"
    })
    .editXAxisLabels({
      color: "#023B7F"
    })
    .editXAxisTitle({
      fontWeight: 700,
      color: "#023B7F"
    })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 12, offset: 7, fontFamily: "Helvetica Neue" }
      },
      title: { text: "Points scored", fontSize: 12, offset: 39 }
    })
    .editYAxisLabels({
      color: "#023B7F"
    })
    .editYAxisTitle({
      fontWeight: 700,
      color: "#023B7F"
    })
    .createGrid({
      horizontal: { color: "#023B7F", lineWidth: 1 }
    })
    .createLegend({
      title: "Team",
      titleStyle: { fontSize: 20, fontWeight: 700, color: "#023B7F", fontFamily: "Helvetica Neue" },
      labels: { fontSize: 16, color: "#023B7F", fontFamily: "Helvetica Neue" }
    })
    .createTitle({
      text: "Most Points in a Win",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({ align: "center" });
}