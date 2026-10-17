// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-e5ab8d04c2bbca16, doc-333a87e52954985d, doc-03a2b0935e71ba1f
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 348, height: 338, margin: { left: 53, top: 28, right: 95, bottom: 110 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "team_tournament", fieldType: "nominal", scale: { domain: ["2014 Virginia A", "2016 Michigan A", "2016 Chicago A", "2015 Virginia A", "2014 Penn A", "2015 Penn A", "2010 Stanford A", "2012 Yale A", "2017 Maryland A", "2010 Minnesota A"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "ppg", fieldType: "quantitative", scale: { domain: [0, 500] } },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .encodeColor({
      field: "team",
      layout: "overlay",
      scale: {
        domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Stanford A", "Maryland A", "Minnesota A"],
        range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#B1040E", "#E03A3E", "#7A0019"]
      }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#023B7F", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { color: "#023B7F", lineWidth: 1 },
            labels: {
              fontSize: 12,
              fontFamily: "Helvetica Neue",
              color: "#023B7F",
              offset: 7,
              rotation: { value: -45, unit: "degrees" }
            }
          },
          title: { text: "Team", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 100 }
        },
        y: {
          line: false,
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500],
            ticks: { length: 0 },
            labels: { fontSize: 12, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 7 }
          },
          title: { text: "Points per game", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 39, rotation: { value: -90, unit: "degrees" } }
        }
      },
      grid: { horizontal: { color: "#023B7F", lineWidth: 1 } },
      legend: {
        title: "Team",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .createTitle({ text: "Highest Tournament PPG", offset: -13, titleStyle: { fontSize: 13, fontWeight: 700 } });
}