import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
    .createCanvas({ width: 364, height: 377, margin: { left: 72, top: 40, right: 12, bottom: 37 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
          { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "1,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "2,500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.75 },
          { text: "Broad money lending outstanding", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 210.890625 },
          { text: "£ million. Source: Bank of England", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 153.740234375 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
.createTitle({
      text: "Broad money lending outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -66.4873046875
    })
    .editTitle({
      offset: -10.953125,
      gap: 3.34375
    })
    .editTitle({
      subtitle: "£ million. Source: Bank of England",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
.createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-213235200000, 1609372800000], nice: false })
    .editYScale({ domain: [0, 3000000] })
    .editLineMark({ stroke: "darkblue", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "transparent", stroke: "#4c78a8", strokeWidth: 2 })
    .editPointMark({ opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createRuleMark({ id: "rule", opacity: 0.1, stroke: "black" })
.encodeX({ field: "Date", target: "rule", fieldType: "temporal" })
    .removeEncoding({ target: "rule", channel: "y" })
    .createAxes({
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: { length: 5, color: "#888" },
            labels: {
              fontSize: 10,
              offset: 7,
              color: "black",
              labelMap: [
                { value: 0, label: "1970" },
                { value: 315532800000, label: "1980" },
                { value: 631152000000, label: "1990" },
                { value: 946684800000, label: "2000" },
                { value: 1262304000000, label: "2010" },
                { value: 1577836800000, label: "2020" }
              ]
            }
          },
          title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
          },
          title: { text: "Value", fontSize: 11, fontWeight: 700, color: "black", offset: 59.9091796875, rotation: { value: -90, unit: "degrees" } }
        }
    })
    ;;
}