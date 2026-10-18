// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
// Capability gap: rule-layer source tooltip encodings (Date %B, %Y; nDP ,.0f) have no public tooltip action in the installed API and are not reproduced.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 368, height: 377, margin: { left: 53, top: 40, right: 10, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
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
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "4,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "5,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "6,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "7,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Net domestic product", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 133.625 },
          { text: "Per capita. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 110.1416015625 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "valueNumber",
      as: "ValueNumber",
      expression: { op: "toNumber", operand: { field: "Value" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNumber", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [852076800000, 1593561600000], nice: false })
    .editYScale({ domain: [3000, 7000], nice: false })
    .editLineMark({ stroke: "goldenrod", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNumber", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ id: "rule", stroke: "black", opacity: 0.1 })
    .editRuleMark({ strokeWidth: 1 })
    .encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: "%Y" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 40.4462890625, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createTitle({
      text: "Net domestic product",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -47.0244140625
    })
    .editTitle({ offset: -10.953125, gap: 3.34375 })
    .editTitle({
      subtitle: "Per capita. Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}