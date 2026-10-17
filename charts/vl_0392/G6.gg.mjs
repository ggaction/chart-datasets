// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 610, height: 347, margin: { left: 44, top: 10, right: 116, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["1", "3", "5", "7", "9"], as: { key: "size", value: "value" } })
    .createComputedData({ id: "valueNum", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({ id: "sizeNum", as: "sizeN", expression: { op: "toNumber", operand: { field: "size" } } })
    .filterData({ id: "validAgeStrings", field: "Age", oneOf: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] })
    .createComputedData({ id: "ageNum", as: "AgeN", expression: { op: "toNumber", operand: { field: "Age" } } })
    .filterData({ id: "ageNumValid", field: "AgeN", predicate: { op: "neq", value: null } })
    .filterData({ id: "positive", field: "valueN", predicate: { op: "gt", value: 0 } })
    .filterData({ id: "rlp", field: "Measure", oneOf: ["RLP"] })
    .createLinePlot({
      x: { field: "AgeN", fieldType: "quantitative" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "sizeN" })
    .encodeColor({
      field: "sizeN",
      fieldType: "ordinal",
      scale: { id: "lineColor", type: "ordinal", palette: "viridis" },
    })
    .encodeStrokeWidth({ value: 1 })
    .createScatterPlot({
      x: { field: "AgeN", fieldType: "quantitative" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "sizeN", fieldType: "quantitative", target: "scatterPlot" })
    .editColorScale({ target: "scatterPlot", palette: "viridis" })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .encodeOpacity({ target: "scatterPlot", value: 1 })
    .editPointMark({ target: "scatterPlot", stroke: false })
    .editXScale({ domain: [1, 10], zero: false, nice: false })
    .editYScale({ domain: [0, 200] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "auto" }
      },
      title: { text: "Age", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: "auto" }
      },
      title: { text: "Productivity", fontSize: 11, offset: 33 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createLegend({
      target: "scatterPlot",
      representation: "symbols",
      values: [2, 4, 6, 8]
    })
    .editLegend({
      title: "Size",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegendLayout({ position: "top-left", columns: 1 })
    .editLegendSymbols({
      symbol: { type: "point", radius: 5, strokeWidth: 1.5 }
    })
    .editCanvas({
      width: 502,
      height: 347,
      margin: { left: 44, top: 10, right: 8, bottom: 37 }
    });
}
