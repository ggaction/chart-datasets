// DOCS: doc-333a87e52954985d, doc-fb3b01cca895bdad — bar facade + complete axes/legend/typography
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 342,
      height: 327,
      margin: { left: 53, top: 22, right: 89, bottom: 105 }
    })
    .editCanvas({ plotBorder: { color: "#4279C1", lineWidth: 1 } })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "team_tournament",
        fieldType: "nominal"
      },
      y: {
        field: "tupg",
        fieldType: "quantitative"
      },
      guides: false
    })
    .encodeColor({
      field: "team",
      layout: "overlay"
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: [
        "2014 Virginia A", "2016 Chicago A", "2014 Penn A",
        "2015 Virginia A", "2015 Penn A", "2013 Illinois A",
        "2016 Michigan A", "2012 Yale A", "2017 Chicago A",
        "2015 Chicago A"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 16] })
    .editColorScale({
      domain: ["Virginia A", "Chicago A", "Michigan A", "Penn A", "Yale A", "Illinois A"],
      range: ["#F84C1E", "#8B1F41", "#FFCB05", "#045ea7", "#00356B", "#13294B"]
    })
    .createGrid({ horizontal: true })
    .editGrid({ horizontal: { color: "#023B7F", lineWidth: 1 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 12,
          fontFamily: "Helvetica Neue",
          rotation: { value: -45, unit: "degrees" },
          offset: 7
        }
      },
      title: {
        text: "Team",
        fontSize: 12,
        fontFamily: "Helvetica Neue",
        offset: 94
      }
    })
    .editXAxis({
      line: { color: "#023B7F", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#023B7F" },
        labels: { color: "#023B7F" }
      },
      title: { color: "#023B7F", fontWeight: 700 }
    })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 12, fontFamily: "Helvetica Neue", offset: 7 }
      },
      title: {
        text: "Tossups per game",
        fontSize: 12,
        fontFamily: "Helvetica Neue",
        offset: 40
      }
    })
    .editYAxis({
      ticksAndLabels: {
        labels: { color: "#023B7F" }
      },
      title: { color: "#023B7F", fontWeight: 700 }
    })
    .createLegend({
      position: "right",
      title: "Team",
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendLabels({ fontSize: 10 })
    .createTitle({
      text: "Highest Prelims TU/G",
      offset: -9,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } });
}