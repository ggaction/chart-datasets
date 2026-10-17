// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 348, height: 332, margin: { left: 53, top: 22, right: 95, bottom: 110 } })
  .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
  
    .createData({ values: data })
    .createBarPlot({
      x: { field: "team_tournament", fieldType: "nominal" },
      y: { field: "tupg", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["2014 Virginia A", "2016 Michigan A", "2016 Chicago A", "2015 Virginia A", "2010 Stanford A", "2007 Chicago A", "2014 Penn A", "2015 Penn A", "2010 Minnesota A", "2012 Yale A"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 16], zero: true })
    .encodeColor({ field: "team", layout: "overlay" })
    .editColorScale({ domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Stanford A", "Minnesota A"], range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#B1040E", "#7A0019"] })
    .encodeBarWidth({ band: 1 })
    .createTitle({ text: "Highest Tournament TU/G", offset: -9, titleStyle: { fontSize: 13 } })
  .editTitle({ align: "center", titleStyle: { fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 12, offset: 6, rotation: { value: -45, unit: "degrees" }, fontFamily: "Helvetica Neue" }
      },
      title: { text: "Team", fontSize: 12, offset: 100, fontFamily: "Helvetica Neue" }
    })
    .editXAxisLine({ color: "#023B7F", lineWidth: 1 })
    .editXAxisTicks({ color: "#023B7F", lineWidth: 1 })
    .editXAxisLabels({ color: "#023B7F" })
    .editXAxisTitle({ color: "#023B7F", fontWeight: 700 })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 12, offset: 2, fontFamily: "Helvetica Neue" },
        values: [0, 5, 10, 15]
      },
      title: { text: "Tossups per game", fontSize: 12, rotation: { value: -90, unit: "degrees" }, offset: 28, fontFamily: "Helvetica Neue" }
    })
    .editYAxisLabels({ color: "#023B7F" })
    .editYAxisTitle({ color: "#023B7F", fontWeight: 700 })
    .createGrid({ horizontal: { values: [0, 5, 10, 15] } })
    .editHorizontalGrid({ color: "#023B7F", lineWidth: 1 })
    .createLegend({
      title: "Team",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}