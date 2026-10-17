import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-7f2c254224fc4908, doc-99b0513458edff76, doc-81ac3d4bc4ec614b
export function buildChart() {
  return chart()
    .createCanvas({
      width: 343,
      height: 328,
      margin: { left: 53, top: 22, right: 90, bottom: 106 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "team_tournament",
        fieldType: "nominal",
        scale: {
          domain: [
            "2014 Virginia A",
            "2016 Michigan A",
            "2010 Stanford A",
            "2016 Chicago A",
            "2007 Chicago A",
            "2005 Chicago A",
            "2005 Michigan A",
            "2012 Yale A",
            "2017 Maryland A",
            "2014 Yale A"
          ],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: {
        field: "tupg",
        fieldType: "quantitative",
        scale: { domain: [0, 16] }
      },
      guides: false
    })
    .encodeColor({
      field: "team",
      layout: "overlay",
      scale: {
        domain: ["Virginia A", "Chicago A", "Michigan A", "Yale A", "Stanford A", "Maryland A"],
        range: ["#F84C1E", "#8B1F41", "#FFCB05", "#00356B", "#B1040E", "#E03A3E"]
      }
    })
    .encodeBarWidth({ band: 1 })
    .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
    .createTitle({ text: "Highest Playoffs TU/G", offset: -9, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .createGuides({
      axes: {
        x: {
          line: { color: "#023B7F", lineWidth: 1 },
          ticksAndLabels: {
            ticks: { color: "#023B7F", length: 5 },
            labels: {
              color: "#023B7F",
              fontSize: 12,
              fontFamily: "Helvetica Neue",
              rotation: { value: -45, unit: "degrees" },
              offset: 7
            }
          },
          title: {
            text: "Team",
            color: "#023B7F",
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            offset: 98
          }
        },
        y: {
          line: false,
          ticksAndLabels: {
            ticks: { length: 0 },
            labels: {
              color: "#023B7F",
              fontSize: 12,
              fontFamily: "Helvetica Neue",
              offset: 7
            }
          },
          title: {
            text: "Tossups per game",
            color: "#023B7F",
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: "bold",
            offset: 31
          }
        }
      },
      grid: { horizontal: { color: "#023B7F", lineWidth: 1 }, vertical: false },
      legend: {
        title: "Team",
        position: "right",
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11 }
      }
    });
}