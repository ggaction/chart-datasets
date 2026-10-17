import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 460,
      height: 377,
      margin: { left: 53, top: 55, right: 7, bottom: 22 }
    })
    .createData({ id: "raw", values: data })
    .filterData({ id: "totalOnly", field: "datype", oneOf: ["Total"] })
    .filterData({ id: "zh", field: "type", noneOf: ["total"] })
    .createTitle({
      text: "Zero Hours Contracts",
      align: "left",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Thousands. Source: ONS",
      subtitleStyle: { fontSize: 12, fontFamily: "sans-serif" },
      gap: 1
    })
    .editTitle({ offset: -10, titleStyle: { fontWeight: 700 } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "Value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "type",
      fieldType: "nominal"
    })
    .editColorScale({ domain: ["zh"], range: ["#a12800"] })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [946684800000, 1640995200000] })
    .editYScale({ domain: [0, 1100], zero: true })
    .createGrid({
      horizontal: { scale: "y" },
      vertical: { scale: "x", values: [946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000, 1640995200000] }
    })
    .editGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-year-label-metrics",
        measurements: [
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          946684800000, 1009843200000, 1072915200000, 1136073600000,
          1199145600000, 1262304000000, 1325376000000, 1388534400000,
          1451606400000, 1514764800000, 1577836800000, 1640995200000
        ],
        ticks: { length: 3, color: "#888" },
        labels: { format: "%Y", fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
        ticks: { length: 3, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Zero Hour Contracts",
        fontSize: 11,
        fontWeight: 700,
        offset: 44
      }
    });
}
