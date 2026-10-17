// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 356,
      height: 269,
      margin: { left: 49, top: 47, right: 7, bottom: 22 }
    })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "pusf", values: data })
    .createComputedData({
      id: "pusfValue",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-headline",
        measurements: [
          {
            text: "Net Borrowing (including public sector banks)",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            width: 285.296875
          },
          {
            text: "1995",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25
          },
          {
            text: "2000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25000762939453
          },
          {
            text: "2005",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25
          },
          {
            text: "2010",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25
          },
          {
            text: "2015",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25
          },
          {
            text: "2020",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 22.25
          },
          {
            text: "−50,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 36.4375
          },
          {
            text: "−40,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 36.4375
          },
          {
            text: "−30,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 36.4375
          },
          {
            text: "−20,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 36.4375
          },
          {
            text: "−10,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 36.4375
          },
          {
            text: "0",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 5.5625
          },
          {
            text: "10,000",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 30.59375
          }
        ]
      }
    })
    .createTitle({
      text: "Net Borrowing (including public sector banks)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#cbc7cf", fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({
      subtitle: "\u00a3m. Source: ONS.\n",
      alongOffset: -43.43,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#cbc7cf", fontFamily: "sans-serif" }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [725846400000, 1661990400000], nice: false })
    .editYScale({ domain: [-55000, 15000], zero: false, nice: false })
    .editLineMark({ curve: "step", stroke: "#ff9a00", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          format: "%Y",
          flush: true
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-50000, -40000, -30000, -20000, -10000, 0, 10000],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          fontWeight: 400,
          offset: 7,
          labelMap: [
            { value: -50000, label: "\u221250,000" },
            { value: -40000, label: "\u221240,000" },
            { value: -30000, label: "\u221230,000" },
            { value: -20000, label: "\u221220,000" },
            { value: -10000, label: "\u221210,000" },
            { value: 0, label: "0" },
            { value: 10000, label: "10,000" }
          ]
        }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#cbc7cf" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#cbc7cf" } }
    });
}
