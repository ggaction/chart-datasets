// DOCS: doc-cab171754586a24c, doc-5d5de64290b11111
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 443,
      height: 119,
      margin: { left: 65, top: 54, right: 138, bottom: 5 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1314-original-source-font-widths",
        measurements: [
          { text: "−9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.40625 },
          { text: "9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "Value Change", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 72.140625 },
          { text: "Average temperature change in °C between 1990 and 1991", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 359.484375 },
          { text: "01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "03", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "04", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "06", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "07", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "08", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "09", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "11", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 10.390625 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "Month", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 32.984375 },
          { text: "Munich", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.25 },
          { text: "Oslo", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.5625 },
          { text: "Tallinn", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "City", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 20.78125 }
        ]
      }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "b", fieldType: "ordinal" },
      y: "a",
      guides: false
    })
    .encodeColor({
      field: "c",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [-9, 9],
      range: ["#4682b4", "#FDFDFD", "#D2B48C"]
    })
    .editColorScale({
      interpolate: "lab",
      whitePoint: "d50"
    })
    .editRectMark({ stroke: false })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1, zIndex: 1, alongOffset: -9.5, values: ["Munich", "Oslo", "Tallinn"] },
      vertical: { color: "#ddd", lineWidth: 1, zIndex: 1, alongOffset: -9.5, values: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"] }
    })
    .createXAxis({
      position: "top",
      ticksAndLabels: {
        values: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        ticks: { length: 5, alongOffset: -9.5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0 }
      },
      title: { text: "Month", fontSize: 11, fontWeight: 700, offset: 25.421875, alongOffset: 0.5 }
    })
    .editXAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editXAxisTicks({
      color: "white"
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: ["Munich", "Oslo", "Tallinn"],
        ticks: { length: 5, alongOffset: -9.5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.390625 }
      },
      title: { text: "City", fontSize: 11, fontWeight: 700, offset: 47.658203125, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({
      color: "#888",
      lineWidth: 1
    })
    .editYAxisTicks({
      color: "white"
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({ color: "black" })
    .createTitle({
      text: "Average temperature change in °C between 1990 and 1991",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125
    })
    .editTitle({ align: "center" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        title: "Value Change",
        direction: "horizontal",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        gradient: { length: 100 }
      }
    })
    .editLegendTitle({
      color: "black"
    })
    .editLegendLabels({
      color: "black"
    });
}