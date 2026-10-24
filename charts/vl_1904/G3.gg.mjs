// DOCS: doc-cffb363a4b862ced
// DOCS: doc-7ddf91b1585f3d44
// DOCS: doc-1bbab86ff6ba2cb2
// Zero-item rule: the inline layer-2 raw row {Value:"0"} has no Date; the
// public computed Date field is null (original missing-Date parsing result)
// and the original valid-position filter (Date neq null) yields zero rows.
// No visible baseline is invented; the original raw input is retained.
import { chart } from "ggaction";
import data from "./data.json";
import zeroData from "./zero-data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 359, height: 377, margin: { left: 44, top: 40, right: 10, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1904-own-source-SVG-endpoint", measurements: [{ text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createComputedData({ id: "typedValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } }).createLinePlot({ x: { field: "Date", fieldType: "temporal", scale: { domain: [-662688000000, 1577836800000] } }, y: { field: "sourceValue", scale: { domain: [-10, 8] } }, guides: false }).createAxes({x:{line:{color:"#888"},ticksAndLabels:{values:[-631152000000,-315619200000,0,315532800000,631152000000,946684800000,1262304000000,1577836800000],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontFamily:"sans-serif",fontSize:10,color:"black",format:"%Y",offset:5.5,alongOffset:0.5,flush:true,flushThreshold:0}},title:{text:"Date",fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"black",offset:27.578125,alongOffset:0.5}},y:{line:{color:"#888"},ticksAndLabels:{values:[-10,-8,-6,-4,-2,0,2,4,6,8],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontFamily:"sans-serif",fontSize:10,color:"black",offset:6.5,alongOffset:0.890625,labelMap:[{value:-10,label:"−10"},{value:-8,label:"−8"},{value:-6,label:"−6"},{value:-4,label:"−4"},{value:-2,label:"−2"}]}},title:{text:"Value",fontFamily:"sans-serif",fontSize:11,fontWeight:700,color:"black",offset:32.384765625,alongOffset:0.5}}})
    .editLineMark({ stroke: "goldenrod", strokeWidth: 2, curve: "monotone-steffen" })
    .createScatterPlot({ x: { field: "Date", fieldType: "temporal", scale: { domain: [-662688000000, 1577836800000] } }, y: { field: "sourceValue", scale: { domain: [-10, 8] } }, guides: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ stroke: "#4c78a8" })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createRuleMark({ data: "typedValue", strokeWidth: 1, opacity: 0.1 })
    .encodeX({ field: "Date", fieldType: "temporal", scale: { domain: [-662688000000, 1577836800000] } })
    .editRuleMark({ stroke: "black" })
    .createData({ id: "zeroData", values: zeroData })
    .createComputedData({ id: "zeroDate", as: "Date", expression: { constant: null } })
    .createComputedData({ id: "zeroValue", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .filterData({ id: "validZero", field: "Date", predicate: { op: "neq", value: null } })
    .createRuleMark({ id: "zeroReference", data: "validZero", stroke: "darkgrey" })
    .editRuleMark({ strokeWidth: 0.75 })
    .encodeX({ field: "Date", fieldType: "temporal", scale: { domain: [-662688000000, 1577836800000] } })
    .encodeY({ field: "sourceValue", scale: { domain: [-10, 8] }, fieldType: "quantitative" })
    .encodeY2({ datum: 0, fieldType: "quantitative" })
    .createTitle({ text: "GDP growth", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Quarterly, year on year % change. Source: ONS", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -38.962890625 });
}