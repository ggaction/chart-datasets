// DOCS: doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-7a5eff3c73a7e7f9, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const cats = [
    "2006 Jerry Vinokurov", "2010 Andrew Yaphe", "2007 Matt Weiner",
    "2013 John Lawrence", "2017 Jordan Brownstein", "2014 Matt Bollinger",
    "2016 Jordan Brownstein", "2007 Seth Kendall", "2007 Ryan Westbrook",
    "2015 Auroni Gupta"
  ];
  return chart()
    .createCanvas({
      width: 373,
      height: 362,
      margin: { left: 77, top: 28, right: 96, bottom: 134 }
    })
    .createData({ values: data })
    .createBarPlot({ x: "team_tournament", y: "ppg", guides: false })
    .encodeColor({ field: "team", layout: "overlay" })
    .editColorScale({
      target: "barPlot",
      domain: ["Virginia A", "Stanford A", "Maryland A", "VCU A", "Kentucky", "Brown A", "London", "Wayne State", "UCSD A"],
      range: ["#F84C1E", "#B1040E", "#E03A3E", "#000000", "#0033A0", "#4E3629", "#EB302D", "#00594f", "#C69214"]
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: cats, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 100] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 12,
          fontFamily: "Helvetica Neue",
          offset: 6,
          rotation: { value: -45, unit: "degrees" }
        }
      },
      title: { text: "Team", fontSize: 12, fontFamily: "Helvetica Neue", offset: 117 }
    })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 12, fontFamily: "Helvetica Neue", offset: 3 }
      },
      title: { text: "Points per game", fontSize: 12, fontFamily: "Helvetica Neue", offset: 31, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({
      line: { color: "#023B7F" },
      ticksAndLabels: { ticks: { color: "#023B7F" }, labels: { color: "#023B7F" } },
      title: { color: "#023B7F", fontWeight: 700 }
    })
    .editYAxis({
      ticksAndLabels: { labels: { color: "#023B7F" } },
      title: { color: "#023B7F", fontWeight: 700 }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#023B7F", lineWidth: 1 })
    .createLegend({
      title: "Team",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .createTitle({ text: "Highest Tournament PPG", offset: -3, titleStyle: { fontSize: 13 } })
    .editTitle({ titleStyle: { fontWeight: "bold" }, align: "center" });
}