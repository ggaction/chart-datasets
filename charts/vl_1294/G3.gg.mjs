// DOCS: doc-fc11e9fb291905d1, doc-dd4a5f585ff65fb2, doc-450851980d5ca1dc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 358,
      height: 362,
      margin: { left: 68, top: 28, right: 90, bottom: 134 }
    })
    .editCanvas({
      plotBorder: { color: "#4279C1", lineWidth: 1 }
    })
    .createData({ id: "raw", values: data })
    .createSortedData({
      id: "sorted",
      source: "raw",
      sortBy: [{ field: "ppg", order: "descending" }]
    })
    .createTitle({ text: "Highest Prelims PPG", titleStyle: { fontSize: 13, fontWeight: 700 }, offset: -13 })
    .editTitle({ align: "center" })
    .createBarPlot({
      guides: false,
      x: {
        field: "team_tournament",
        fieldType: "nominal"
      },
      y: {
        field: "ppg",
        fieldType: "quantitative"
      }
    })
    .editXScale({
      domain: ["2015 Auroni Gupta", "2005 Matt Weiner", "2007 Matt Weiner", "2017 Jordan Brownstein", "2013 John Lawrence", "2010 Andrew Yaphe", "2007 Mike Sorice", "2014 Matt Bollinger", "2016 Jordan Brownstein", "2012 Ike Jose"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 100] })
    .encodeColor({
      field: "team",
      layout: "overlay"
    })
    .editColorScale({
      domain: ["Virginia A", "Stanford A", "Maryland A", "Illinois A", "VCU A", "London", "UCSD A"],
      range: ["#F84C1E", "#B1040E", "#E03A3E", "#13294B", "#000000", "#EB302D", "#C69214"]
    })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: { color: "#023B7F", lineWidth: 1 },
        ticksAndLabels: {
          ticks: { color: "#023B7F" },
          labels: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            color: "#023B7F",
            offset: 6,
            rotation: { value: -45, unit: "degrees" }
          }
        },
        title: {
          text: "Team",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "Helvetica Neue",
          color: "#023B7F",
          offset: 124
        }
      },
      y: {
        line: false,
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 0 },
          labels: {
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            color: "#023B7F",
            offset: 2
          }
        },
        title: {
          text: "Points per game",
          fontSize: 12,
          fontWeight: 700,
          fontFamily: "Helvetica Neue",
          color: "#023B7F",
          offset: 46,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({ horizontal: { color: "#023B7F", lineWidth: 1 }, vertical: false })
    .createLegend({
      title: "Team",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}