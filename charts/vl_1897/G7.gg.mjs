import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-a7d421980af3b87a (createRuleMark / rule marks);
// DOCS: doc-3919efc16f20de78 (editRuleMark options);
// DOCS: doc-1d41bebcd4d67c96 (editXAxisTicks / editYAxisTicks axis ownership).

export function buildChart() {
  return chart()
    .createCanvas({ width: 367, height: 377, margin: { left: 72, top: 40, right: 10, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1897-original-svg-text", measurements: [ { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }, { text: "Total expenditure", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 76.171875 } ] } })
    .createData({ values: data })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } }).createLineMark({ id: "linePlot" }).encodeX({ field: "Date", fieldType: "temporal", scale: { domain: [883612800000, 1577836800000] } }).encodeY({ field: "sourceValue", scale: { domain: [0, 1100000] } }).createXAxis({ticksAndLabels: {values: [883612800000, 946684800000, 1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000], ticks: {length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, labelMap: [{value: 946684800000, label: ""}, {value: 1072915200000, label: ""}, {value: 1199145600000, label: ""}, {value: 1325376000000, label: ""}, {value: 1451606400000, label: ""}, {value: 1577836800000, label: ""}]}}, title: {text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}).createYAxis({ticksAndLabels: {values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 1100000], ticks: {length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625}}, title: {text: "Value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 59.9091796875, alongOffset: 0.5}}).editXAxis({line: {color: "#888"}}).editYAxis({line: {color: "#888"}}).editXAxisTicks({color: "#888"}).editYAxisTicks({color: "#888"})
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({ field: "Measure", scale: { domain: ["Total expenditure", "Total revenue"], range: ["mediumvioletred", "pink"] } })
    .createScatterPlot({
      x: { field: "Date", fieldType: "temporal", scale: { domain: [883612800000, 1577836800000] } },
      y: { field: "sourceValue", scale: { domain: [0, 1100000] } },
      guides: false
    })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeStroke({ field: "Measure", scale: { domain: ["Total expenditure", "Total revenue"], range: ["mediumvioletred", "pink"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createRuleMark({ data: "typedValue", strokeWidth: 1, opacity: 0.1 })
    .encodeX({ field: "Date", fieldType: "temporal", scale: { domain: [883612800000, 1577836800000] } })
    .editRuleMark({ stroke: "black" })
    .createLegend({ target: "scatterPlot", channels: ["stroke"], position: "top-right" })
    .editLegend({ labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" }, symbol: { layers: [ { type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7, fill: "transparent" } ] } })
    .createTitle({ text: "Expenditure vs tax revenue", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "£ million. Source: ONS", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -66.4873046875 });
}