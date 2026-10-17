// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5488e292a83e78ba
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 363,
      height: 356,
      margin: { left: 73, top: 22, right: 90, bottom: 134 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "team_tournament",
        fieldType: "nominal"
      },
      y: {
        field: "ppg",
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
        "2010 Andrew Yaphe",
        "2017 Jordan Brownstein",
        "2014 Matt Bollinger",
        "2007 Matt Weiner",
        "2016 Jordan Brownstein",
        "2012 Eric Mukherjee",
        "2013 Matt Bollinger",
        "2010 Eric Mukherjee",
        "2018 Jacob Reed",
        "2015 Matt Bollinger"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 110], zero: true, nice: false })
    .editColorScale({
      domain: ["Virginia A", "Penn A", "Yale A", "Stanford A", "Maryland A", "VCU A"],
      range: ["#F84C1E", "#045ea7", "#00356B", "#B1040E", "#E03A3E", "#000000"]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 12, fontFamily: "Helvetica Neue", offset: 7, rotation: { value: -45, unit: "degrees" } } },
      title: { text: "Team", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", offset: 126 }
    })
    .editXAxis({
      line: { color: "#023B7F", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#023B7F", lineWidth: 1 }, labels: { color: "#023B7F" } },
      title: { color: "#023B7F" }
    })
    .createYAxis({
      line: false,
      ticksAndLabels: { count: 6, ticks: { length: 0 }, labels: { fontSize: 12, fontFamily: "Helvetica Neue", offset: 7 } },
      title: { text: "Points per game", fontSize: 12, fontWeight: 700, fontFamily: "Helvetica Neue", offset: 39 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { color: "#023B7F" } },
      title: { color: "#023B7F" }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#023B7F", lineWidth: 1 })
    .createLegend({
      title: "Team",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .createTitle({
      text: "Highest Playoffs PPG",
      offset: -13,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}