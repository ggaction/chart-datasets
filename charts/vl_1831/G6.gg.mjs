// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 530,
      height: 435,
      margin: { left: 50, top: 56, right: 80, bottom: 79 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "emp",
      as: "emp",
      expression: { op: "toNumber", operand: { field: "Number employed (thousands)" } }
    })
    .createLinePlot({
      x: { field: "Period", fieldType: "nominal" },
      y: { field: "emp" },
      guides: false
    })
    .encodeColor({ field: "Age Group" })
    .editColorScale({
      domain: ["16-24 ", "25-34", "35-49", "50-64", "65+ "],
      range: ["#233a58", "#e54753", "#FFD859", "#ff8f32", "#1771b2"]
    })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({
      domain: [
        "2019-10-01", "2019-11-01", "2019-12-01", "2020-01-01", "2020-01-02",
        "2020-01-03", "2020-01-04", "2020-01-05", "2020-01-06", "2020-01-07",
        "2020-01-08", "2020-01-09", "2020-01-10"
      ],
      paddingInner: 1,
      paddingOuter: 0.5
    })
    .editYScale({ domain: [-300, 100] })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "sourceGuideMetrics",
        measurements: [
          { text: "2019-10-01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2019-11-01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.421875 },
          { text: "2019-12-01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-03", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-04", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-05", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-06", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-07", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-08", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-09", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "2020-01-10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.15625 },
          { text: "UK employment by age, seasonally adjusted, cumulative growth (thousands)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 401.59375 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          "2019-10-01", "2019-11-01", "2019-12-01", "2020-01-01", "2020-01-02",
          "2020-01-03", "2020-01-04", "2020-01-05", "2020-01-06", "2020-01-07",
          "2020-01-08", "2020-01-09", "2020-01-10"
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Period", fontSize: 11, offset: 68.15234375 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-300, -250, -200, -150, -100, -50, 0, 50, 100],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "UK employment by age, seasonally adjusted, cumulative growth (thousands)",
        fontSize: 11,
        offset: 40
      }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .createGrid({ horizontal: {}, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      title: "Age Group"
    })
    .editLegendBlock({
      target: "linePlot",
      channel: "color",
      labelMap: [
        { value: "16-24 ", label: "16-24" },
        { value: "25-34", label: "25-34" },
        { value: "35-49", label: "35-49" },
        { value: "50-64", label: "50-64" },
        { value: "65+ ", label: "65+" }
      ]
    })
    .editLegendTitle({ fontWeight: 700 });
}