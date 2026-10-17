// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

const xTicks = [1009843200000, 1072915200000, 1136073600000, 1199145600000, 1262304000000, 1325376000000, 1388505600000, 1451606400000];
const yTicks = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

export function buildChart() {
  return chart()
    .createCanvas({ width: 568, height: 364, margin: { left: 53, top: 27, right: 115, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "num", as: "v", expression: { op: "toNumber", operand: { field: "net_generation" } } })
    .createSortedData({ id: "sorted", source: "num", sortBy: [{ field: "source", order: "descending" }] })
    .createAreaPlot({ x: { field: "year", fieldType: "temporal", temporalUnit: "auto" }, y: { field: "v" }, guides: false })
    .encodeGroup({ field: "source" })
    .encodeColor({ field: "source", fieldType: "nominal" })
    .editColorScale({
      domain: ["Fossil Fuels", "Nuclear Energy", "Renewables"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .layoutSeries({ mode: "fill" })
    .editXScale({ domain: [978307200000, 1483228800000] })
    .editYScale({ domain: [0, 1] })

    .editAreaMark({ opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: xTicks, ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: { values: yTicks, ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, format: ".0%" } },
      title: { text: "Share of net generation", fontSize: 11, fontWeight: 700, offset: 40, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({
      horizontal: { scale: "y", values: yTicks, color: "#ddd" },
      vertical: { scale: "x", values: xTicks, color: "#ddd" }
    })
    .createLegend({ title: "Electricity source", titleStyle: { fontSize: 11, fontWeight: 700 }, labels: { fontSize: 10 } })
    .createTitle({ text: "Iowa's renewable energy boom", offset: -11, titleStyle: { fontSize: 13 } })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}
