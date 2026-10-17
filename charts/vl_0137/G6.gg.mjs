// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 270, margin: { left: 59, top: 33, right: 7, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "skorea", field: "country", oneOf: ["South Korea"] })
    .createComputedData({ id: "numIU", as: "iu", expression: { op: "toNumber", operand: { field: "internetUsers" } } })
    .filterData({ id: "validIU", field: "iu", noneOf: [null] })
    .createAreaPlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "iu" },
      guides: false
    })
    .editAreaMark({
      fill: { type: "linear-gradient", from: { x: 1, y: 1 }, to: { x: 1, y: 0 }, stops: [{ offset: 0, color: "white" }, { offset: 1, color: "#fc6721" }] },
      opacity: 0.7,
      stroke: false
    })
    .createLinePlot({
      x: { field: "year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "iu", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1451606400000], nice: false })
    .editYScale({ domain: [0, 1] })
    .encodeStroke({ value: "#fc6721" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1, target: "linePlot" })
    .createTitle({
      text: "Share of people using the Internet in South Korea, 1990-2016",
      offset: -10.953125,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({
      align: "center"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" } },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" } },
      title: { text: "Internet users", fontSize: 11, fontWeight: 700, offset: 48 }
    })
    .createHorizontalGrid({ color: "#ddd", lineWidth: 1 });
}
