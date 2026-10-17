// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 350, height: 677, margin: { left: 44, top: 40, right: 6, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "rank", as: "upRankN", expression: { op: "toNumber", operand: { field: "upRank" } } })
    .createComputedData({ id: "upsh", as: "up_shN", expression: { op: "toNumber", operand: { field: "up_sh" } } })
    .createComputedData({ id: "downsh", as: "down_shN", expression: { op: "toNumber", operand: { field: "down_sh" } } })
    .createComputedData({ id: "down", as: "downN", expression: { op: "negate", operand: { field: "down_shN" } } })
    .createScatterPlot({ x: { field: "up_shN" }, y: { field: "upRankN" }, guides: false })
    .encodeOpacity({ value: 0.5 })
    .editPointMark({ fill: "orange", stroke: false })
    .encodePointRadius({ value: 2.7386 })
    .createPointMark({ id: "layer_1", fill: "blue" })
    .encodeOpacity({ value: 0.5, target: "layer_1" })
    .encodeX({ field: "downN", target: "layer_1" })
    .encodeY({ field: "upRankN", target: "layer_1" })
    .encodePointRadius({ value: 2.7386, target: "layer_1" })
    .editPointMark({ target: "layer_1", stroke: false })
    .editXScale({ domain: [-1, 1] })
    .editYScale({ domain: [0, 600] })
    .applyTextMetrics({profile:{schemaVersion:1,id:"source-0435-axis-widths",measurements:[{text:"\u22121.0",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:19.75},{text:"\u22120.8",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:19.75},{text:"\u22120.6",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:19.75},{text:"\u22120.4",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:19.75},{text:"\u22120.2",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:19.75},{text:"0.0",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"0.2",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"0.4",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"0.6",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"0.8",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"1.0",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:13.90625},{text:"0",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:5.5625}]}})
    .createXAxis({
      ticksAndLabels: {
        values: [-1, -0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8, 1],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Prices cut", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "upRank", fontSize: 11, offset: 33, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLabels({ color: "black" })
    .editXAxisLabels({
      color: "black",
      flush: true,
      labelMap: [
        { value: -1, label: "−1.0" },
        { value: -0.8, label: "−0.8" },
        { value: -0.6, label: "−0.6" },
        { value: -0.4, label: "−0.4" },
        { value: -0.2, label: "−0.2" },
        { value: 0, label: "0.0" },
        { value: 0.2, label: "0.2" },
        { value: 0.4, label: "0.4" },
        { value: 0.6, label: "0.6" },
        { value: 0.8, label: "0.8" },
        { value: 1, label: "1.0" }
      ]
    })
    .createTitle({
      text: "All items - price rises and cuts - [Hover for detail]",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      gap: 1
    })
    .editTitle({
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" },
      offset: -13,
      alongOffset: -38.6846
    })
    .editTitle({ subtitle: "Share of prices rising and falling for each consumer item" });
}