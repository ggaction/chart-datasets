// DOCS: doc-76573a465e2b6a33, doc-2c912465a1515bd5
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 298, height: 312, margin: { left: 38, top: 40, right: 10, bottom: 22 } })
    .createData({ values: data })
.applyTextMetrics({
  profile: {
    schemaVersion: 1,
    id: "source0233years",
    measurements: [
      { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }
    ]
  }
})
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      guides: false,
      x: { field: "date", fieldType: "temporal", temporalUnit: "auto" },
      y: { field: "valueNum" }
    })
    .editLineMark({ stroke: "darkturquoise", strokeWidth: 2, opacity: 1 })
    .editXScale({ domain: [988675200000, 1659312000000], nice: false })
    .editYScale({ domain: [0, 1200] })
    .createTitle({
      text: "Job Vacancies",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({ subtitle: "Thousands, data: ONS", alongOffset: -32 })
    .editTitle({ titleStyle: { color: "black", fontWeight: 700 }, subtitleStyle: { color: "black" } })
    .createXAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editXAxis({
      labels: { format: "%Y" }
    })
    .createYAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        count: 7,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .editYAxis({
      labels: { format: "," }
    })
    .createGrid({
      horizontal: { count: 7 },
      vertical: { values: [1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000] }
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}