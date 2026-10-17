// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 348, height: 332, margin: { left: 53, top: 22, right: 95, bottom: 110 } })
  .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
  
    .createData({ values: data })
    .createBarPlot({
      x: { field: "team_tournament", fieldType: "nominal", scale: { type: "band", domain: ["2014 Virginia A", "2016 Michigan A", "2016 Chicago A", "2015 Virginia A", "2010 Stanford A", "2007 Chicago A", "2014 Penn A", "2015 Penn A", "2010 Minnesota A", "2012 Yale A"], paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "tupg", fieldType: "quantitative", scale: { domain: [0, 16], zero: true } },
      guides: false
    })
    .encodeColor({ field: "team", layout: "overlay", scale: { domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Stanford A", "Minnesota A"], range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#B1040E", "#7A0019"] } })
    .encodeBarWidth({ band: 1 })
    .createTitle({ text: "Highest Tournament TU/G", offset: -9, titleStyle: { fontSize: 13, fontWeight: 700 } })
  .editTitle({ align: "center" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#023B7F", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { color: "#023B7F", lineWidth: 1, length: 5 },
            labels: { fontSize: 12, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 6, rotation: { value: -45, unit: "degrees" } }
          },
          title: { text: "Team", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 100 }
        },
        y: {
          line: false,
          ticksAndLabels: {
            ticks: { length: 0 },
            labels: { fontSize: 12, fontFamily: "Helvetica Neue", color: "#023B7F", offset: 2 },
            values: [0, 5, 10, 15]
          },
          title: { text: "Tossups per game", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", color: "#023B7F", rotation: { value: -90, unit: "degrees" }, offset: 28 }
        }
      },
      grid: { horizontal: { color: "#023B7F", lineWidth: 1, values: [0, 5, 10, 15] } },
      legend: {
        position: "right",
        title: "Team",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    });
}