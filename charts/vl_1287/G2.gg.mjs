// DOCS: doc-fc11e9fb291905d1, doc-414ef4fe23e07d75
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 343, height: 328, margin: { left: 53, top: 22, right: 90, bottom: 106 } })
    .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
    .createData({ id: "data", values: data })
    .createSortedData({ id: "sorted", source: "data", sortBy: [{ field: "ppg", order: "descending" }] })
    .createBarPlot({
      guides: false,
      x: { field: "team_tournament", fieldType: "nominal" },
      y: { field: "ppg", fieldType: "quantitative" }
    })
    .editXScale({ domain: ["2014 Virginia A", "2016 Michigan A", "2016 Chicago A", "2010 Stanford A", "2017 Michigan A", "2017 Maryland A", "2012 Yale A", "2018 Yale A", "2014 Penn A", "2015 Virginia A"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 450], zero: true })
    .encodeColor({ field: "team", layout: "overlay" })
    .editColorScale({ domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Stanford A", "Maryland A"], range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#B1040E", "#E03A3E"] })
    .encodeBarWidth({ band: 1 })
    .createTitle({ text: "Highest Playoffs PPG", offset: -9, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .editTitle({ align: "center" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#023B7F", lineWidth: 1 },
          ticksAndLabels: { ticks: { color: "#023B7F", length: 5 }, labels: { fontSize: 12, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 7, rotation: { value: -45, unit: "degrees" } } },
          title: { text: "Team", fontSize: 12, fontFamily: "Helvetica Neue", fontWeight: 700, color: "#023B7F", offset: 90 }
        },
        y: {
          line: false,
          ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 12, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 7 }, values: [0, 100, 200, 300, 400] },
          title: { text: "Points per game", fontSize: 12, fontFamily: "Helvetica Neue", fontWeight: 700, color: "#023B7F", offset: 44 }
        }
      },
      grid: { horizontal: { color: "#023B7F", lineWidth: 1, values: [0, 100, 200, 300, 400] }, vertical: false },
      legend: { position: "right", title: "Team", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } }
    });
}