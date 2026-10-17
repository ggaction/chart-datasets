// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e, doc-e8d8c6aef74192f0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 343,
      height: 334,
      margin: { left: 53, top: 28, right: 90, bottom: 106 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Highest Prelims PPG",
      offset: -3,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: {
        field: "team_tournament",
        fieldType: "nominal"
      },
      y: {
        field: "ppg",
        fieldType: "quantitative",
      },
      guides: false
    })
    .encodeColor({
      field: "team",
      layout: "overlay",
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: [
        "2014 Virginia A",
        "2016 Chicago A",
        "2015 Virginia A",
        "2014 Penn A",
        "2015 Penn A",
        "2016 Michigan A",
        "2012 Yale A",
        "2017 Maryland A",
        "2013 Virginia A",
        "2013 Illinois A"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 500] })
    .editColorScale({
      domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Maryland A", "Illinois A"],
      range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#E03A3E", "#13294B"]
    })
    .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
    .createAxes({
      x: {
          line: { color: "#023B7F", lineWidth: 1 },
          ticksAndLabels: {
            values: [
              "2014 Virginia A",
              "2016 Chicago A",
              "2015 Virginia A",
              "2014 Penn A",
              "2015 Penn A",
              "2016 Michigan A",
              "2012 Yale A",
              "2017 Maryland A",
              "2013 Virginia A",
              "2013 Illinois A"
            ],
            ticks: { length: 4, color: "#023B7F" },
            labels: {
              fontSize: 12,
              fontFamily: "Helvetica Neue",
              color: "#023B7F",
              rotation: { value: -45, unit: "degrees" },
              offset: 6
            }
          },
          title: {
            text: "Team",
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            color: "#023B7F",
            offset: 98
          }
        },
        y: {
          line: false,
          ticksAndLabels: {
            values: [0, 100, 200, 300, 400, 500],
            ticks: { length: 0 },
            labels: {
              fontSize: 12,
              fontFamily: "Helvetica Neue",
              color: "#023B7F",
              offset: 7
            }
          },
          title: {
            text: "Points per game",
            fontSize: 12,
            fontFamily: "Helvetica Neue",
            fontWeight: 700,
            color: "#023B7F",
            offset: 35
          }
        }
    })
    .createGrid({ horizontal: { color: "#023B7F", lineWidth: 1 } })
    .createLegend({ title: "Team", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 } });
}